"use client";

import { useState, useEffect } from "react";
import type { UserData } from "@/lib/types";
import { getUserData, saveUserData } from "@/lib/storage";
import { getAuthToken } from "@/lib/storage";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "";

export const useUserData = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const init = async () => {
      const local = getUserData();
      if (!mounted) return;
      setUserData(local);

      const token = getAuthToken();
      if (!token || !API_BASE) {
        setIsLoading(false);
        return;
      }

      try {
        // Fetch favorites and ratings from backend
        const headers = { Authorization: `Bearer ${token}` };
        const [favRes, rateRes] = await Promise.all([
          fetch(`${API_BASE.replace(/\/$/, "")}/api/favorites/`, { headers }),
          fetch(`${API_BASE.replace(/\/$/, "")}/api/ratings/`, { headers }),
        ]);

        let favorites: string[] = local.favorites || [];
        let ratings: Record<string, number> = local.ratings || {};

        if (favRes.status === 401) {
          // token invalid/expired - clear token and stop syncing
          try {
            // import to clear token
            const { clearAuthToken } = await import("@/lib/storage");
            clearAuthToken();
          } catch {}
        }

        if (favRes.ok) {
          const favData = await favRes.json();
          favorites = (Array.isArray(favData) ? favData : []).map((f: any) => String(f.movie_id));
        }
        if (rateRes.status === 401) {
          // clear token to avoid repeated 401s
          try {
            const { clearAuthToken } = await import("@/lib/storage");
            clearAuthToken();
          } catch {}
        }

        if (rateRes.ok) {
          const rateData = await rateRes.json();
          // rateData contains objects with movie_id and rating
          ratings = {};
          for (const r of Array.isArray(rateData) ? rateData : []) {
            ratings[String(r.movie_id)] = Number(r.rating);
          }
        }

        const merged = { ...local, favorites, ratings };
        if (mounted) {
          setUserData(merged);
          saveUserData(merged);
        }
      } catch (e) {
        // ignore and keep local
        console.warn("Failed to sync user data with backend", e);
      } finally {
        if (mounted) setIsLoading(false);
      }
    };

    void init();
    return () => {
      mounted = false;
    };
  }, []);

  const updateUserData = (newData: Partial<UserData>) => {
    if (!userData) return;

    const updated = { ...userData, ...newData };
    setUserData(updated);
    saveUserData(updated);
  };

  const toggleFavorite = async (movieId: string | number) => {
    if (!userData) return;
    const token = getAuthToken();
    const key = String(movieId);
    // optimistic local update
    const isFav = userData.favorites.includes(key);
    const favorites = isFav
      ? userData.favorites.filter((id) => id !== key)
      : [...userData.favorites, key];
    updateUserData({ favorites });

  if (!token || !API_BASE) return;

    try {
      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };
      if (!isFav) {
        // create favorite (send string movie_id)
        const res = await fetch(`${API_BASE.replace(/\/$/, "")}/api/favorites/`, {
          method: "POST",
          headers,
          body: JSON.stringify({ movie_id: key }),
        });
        if (!res.ok && res.status === 401) {
          const { clearAuthToken } = await import("@/lib/storage");
          clearAuthToken();
        }
      } else {
        // find favourite id then delete
        const res = await fetch(`${API_BASE.replace(/\/$/, "")}/api/favorites/`, { headers });
        if (res.ok) {
          const list = await res.json();
          const found = (Array.isArray(list) ? list : []).find((f: any) => String(f.movie_id) === key);
          if (found && found.id) {
            const del = await fetch(`${API_BASE.replace(/\/$/, "")}/api/favorites/${found.id}/`, {
              method: "DELETE",
              headers,
            });
            if (!del.ok && del.status === 401) {
              const { clearAuthToken } = await import("@/lib/storage");
              clearAuthToken();
            }
          }
        } else if (res.status === 401) {
          const { clearAuthToken } = await import("@/lib/storage");
          clearAuthToken();
        }
      }
    } catch (e) {
      console.warn("Failed to sync favorite with backend", e);
    }
  };

  const toggleWatchlist = async (movieId: string | number) => {
    if (!userData) return;
    const key = String(movieId);
    // watchlist stored locally only for now (backend model exists but no dedicated endpoint)
    const watchlist = userData.watchlist.includes(key)
      ? userData.watchlist.filter((id) => id !== key)
      : [...userData.watchlist, key];
    updateUserData({ watchlist });
    // TODO: optionally persist to backend when model routes exist
  };

  const rateMovie = async (movieId: string | number, rating: number) => {
    if (!userData) return;
    const token = getAuthToken();
    const key = String(movieId);
    const ratings = { ...userData.ratings, [key]: rating };
    updateUserData({ ratings });

    if (!token || !API_BASE) return;
    try {
      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };
      // create rating entry
      await fetch(`${API_BASE.replace(/\/$/, "")}/api/ratings/`, {
        method: "POST",
        headers,
        body: JSON.stringify({ movie_id: key, rating }),
      });
    } catch (e) {
      console.warn("Failed to persist rating to backend", e);
    }
  };

  return {
    userData,
    isLoading,
    updateUserData,
    toggleFavorite,
    toggleWatchlist,
    rateMovie,
  };
};
