// Default to local backend in development if not provided
export const API_BASE =
  process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";

export async function fetchCommentsApi(movieId: string | number) {
  if (!API_BASE) return null;

  const id = String(movieId);
  const url = `${API_BASE.replace(
    /\/$/,
    ""
  )}/api/comments/?movie_id=${encodeURIComponent(id)}`;
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) {
    throw new Error(`Failed to fetch comments: ${res.status}`);
  }
  return res.json();
}

export async function postCommentApi(
  movieId: string | number,
  author: string,
  text: string,
  token?: string
) {
  if (!API_BASE) return null;

  const id = String(movieId);
  const url = `${API_BASE.replace(/\/$/, "")}/api/comments/`;
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };
  if (token) headers["Authorization"] = `Bearer ${token}`;

  const res = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify({ movie_id: id, author, text }),
  });

  if (!res.ok) {
    const txt = await res.text();
    throw new Error(`Failed to post comment: ${res.status} ${txt}`);
  }
  return res.json();
}

export async function registerApi(
  username: string,
  email: string,
  password: string
) {
  if (!API_BASE) throw new Error("API_BASE not configured");
  const url = `${API_BASE.replace(/\/$/, "")}/api/register/`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, email, password }),
  });
  if (!res.ok) {
    const txt = await res.text();
    throw new Error(`Register failed: ${res.status} ${txt}`);
  }
  return res.json();
}

export async function loginApi(email: string, password: string) {
  if (!API_BASE) throw new Error("API_BASE not configured");
  const url = `${API_BASE.replace(/\/$/, "")}/api/token/`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: email, password }),
  });
  if (!res.ok) {
    const txt = await res.text();
    throw new Error(`Login failed: ${res.status} ${txt}`);
  }
  return res.json();
}

export async function fetchMovieDetails(query: { t?: string; i?: string; tmdb_id?: string | number }) {
  if (!API_BASE) throw new Error("API_BASE not configured");
  const params = new URLSearchParams();
  if (query.t) params.set("t", query.t);
  if (query.i) params.set("i", query.i);
  if (query.tmdb_id) params.set("tmdb_id", String(query.tmdb_id));
  const url = `${API_BASE.replace(/\/$/, "")}/api/movies/combined/?${params.toString()}`;
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) {
    const txt = await res.text();
    throw new Error(`Failed to fetch movie details: ${res.status} ${txt}`);
  }
  return res.json();
}

export async function fetchTrendingMovies() {
  if (!API_BASE) throw new Error("API_BASE not configured");
  const url = `${API_BASE.replace(/\/$/, "")}/api/tmdb/trending/`;
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) {
    try {
      const txt = await res.text();
      console.warn("fetchTrendingMovies failed:", res.status, txt);
    } catch {}
    return [];
  }
  const data = await res.json();
  const list = Array.isArray(data) ? data : data?.results ?? [];
  return list
    .slice()
    .sort((a: any, b: any) => (b.vote_average || 0) - (a.vote_average || 0));
}

export async function fetchTopRatedMovies() {
  if (!API_BASE) throw new Error("API_BASE not configured");
  const url = `${API_BASE.replace(/\/$/, "")}/api/tmdb/top-rated/`;
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) {
    try {
      const txt = await res.text();
      console.warn("fetchTopRatedMovies failed:", res.status, txt);
    } catch {}
    return [];
  }
  const data = await res.json();
  const list = Array.isArray(data) ? data : data?.results ?? [];
  return list
    .slice()
    .sort((a: any, b: any) => (b.vote_average || 0) - (a.vote_average || 0));
}

export async function fetchTMDbSearch(q: string) {
  if (!API_BASE) throw new Error("API_BASE not configured");
  const url = `${API_BASE.replace(
    /\/$/,
    ""
  )}/api/tmdb/search/?q=${encodeURIComponent(q)}`;
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error(`Failed to search tmdb: ${res.status}`);
  return res.json();
}

export async function fetchTMDbMovie(tmdbId: number) {
  if (!API_BASE) throw new Error("API_BASE not configured");
  const url = `${API_BASE.replace(/\/$/, "")}/api/tmdb/movie/${tmdbId}/`;
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error(`Failed to fetch tmdb movie: ${res.status}`);
  return res.json();
}

export async function fetchDiscoverByGenre(genreId: number) {
  if (!API_BASE) throw new Error("API_BASE not configured");
  const url = `${API_BASE.replace(
    /\/$/,
    ""
  )}/api/tmdb/discover/genre/${genreId}/`;
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) {
    try {
      const txt = await res.text();
      console.warn("fetchDiscoverByGenre failed:", res.status, txt);
    } catch {}
    return [];
  }
  const data = await res.json();
  const list = Array.isArray(data) ? data : data?.results ?? [];
  return list
    .slice()
    .sort((a: any, b: any) => (b.vote_average || 0) - (a.vote_average || 0));
}
