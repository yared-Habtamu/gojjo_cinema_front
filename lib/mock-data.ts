import type { Movie, Genre } from "./types"

export const genres: Genre[] = [
  { id: 28, name: "Action" },
  { id: 12, name: "Adventure" },
  { id: 16, name: "Animation" },
  { id: 35, name: "Comedy" },
  { id: 80, name: "Crime" },
  { id: 99, name: "Documentary" },
  { id: 18, name: "Drama" },
  { id: 10751, name: "Family" },
  { id: 14, name: "Fantasy" },
  { id: 36, name: "History" },
  { id: 27, name: "Horror" },
  { id: 10402, name: "Music" },
  { id: 9648, name: "Mystery" },
  { id: 10749, name: "Romance" },
  { id: 878, name: "Science Fiction" },
  { id: 10770, name: "TV Movie" },
  { id: 53, name: "Thriller" },
  { id: 10752, name: "War" },
  { id: 37, name: "Western" },
]

export const mockMovies: Movie[] = [
  {
    id: 1,
    title: "The Dark Knight",
    overview:
      "Batman raises the stakes in his war on crime with the help of Lt. Jim Gordon and District Attorney Harvey Dent, but soon finds himself prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
    poster_path: "/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    backdrop_path: "/hqkIcbrOHL86UncnHIsHVcVmzue.jpg",
    release_date: "2008-07-18",
    vote_average: 8.5,
    vote_count: 32000,
    genre_ids: [28, 80, 18, 53],
    popularity: 98.5,
    runtime: 152,
    tagline: "Welcome to a world without rules.",
    cast: [
      {
        id: 1,
        name: "Christian Bale",
        character: "Bruce Wayne / Batman",
        profile_path: "/3qx2QFUbG6t6IlzR0F9k3Z6Yhf7.jpg",
        order: 0,
      },
      { id: 2, name: "Heath Ledger", character: "Joker", profile_path: "/5Y9HnYYa9jF4NunY9lSgJGjSe8E.jpg", order: 1 },
      {
        id: 3,
        name: "Aaron Eckhart",
        character: "Harvey Dent / Two-Face",
        profile_path: "/n4mJRip6pOqPIGd6ABFJgTzWkI1.jpg",
        order: 2,
      },
    ],
    videos: [
      { id: "1", key: "EXeTwQWrcwY", name: "Official Trailer", site: "YouTube", type: "Trailer", official: true },
    ],
  },
  {
    id: 2,
    title: "Inception",
    overview:
      "Dom Cobb is a skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state.",
    poster_path: "/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    backdrop_path: "/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
    release_date: "2010-07-16",
    vote_average: 8.3,
    vote_count: 35000,
    genre_ids: [28, 878, 53],
    popularity: 95.2,
    runtime: 148,
    tagline: "Your mind is the scene of the crime.",
    cast: [
      {
        id: 4,
        name: "Leonardo DiCaprio",
        character: "Dom Cobb",
        profile_path: "/wo2hJpn04vbtmh0B9utCFdsQhxM.jpg",
        order: 0,
      },
      { id: 5, name: "Marion Cotillard", character: "Mal", profile_path: "/iVbUyahp6NAjGtyRvmFD7KHoQwK.jpg", order: 1 },
    ],
    videos: [
      { id: "2", key: "YoHD9XEInc0", name: "Official Trailer", site: "YouTube", type: "Trailer", official: true },
    ],
  },
  {
    id: 3,
    title: "Interstellar",
    overview:
      "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
    poster_path: "/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    backdrop_path: "/pbrkL804c8yAv3zBZR4QPWZAAn8.jpg",
    release_date: "2014-11-07",
    vote_average: 8.1,
    vote_count: 28000,
    genre_ids: [12, 18, 878],
    popularity: 89.7,
    runtime: 169,
    tagline: "Mankind was born on Earth. It was never meant to die here.",
    cast: [
      {
        id: 6,
        name: "Matthew McConaughey",
        character: "Cooper",
        profile_path: "/sY2mwpafcwqyYS1sOySu1MENDse.jpg",
        order: 0,
      },
      { id: 7, name: "Anne Hathaway", character: "Brand", profile_path: "/di6Cp0LVjOGVMUaJcx4OJpQUu9w.jpg", order: 1 },
    ],
    videos: [
      { id: "3", key: "zSWdZVtXT7E", name: "Official Trailer", site: "YouTube", type: "Trailer", official: true },
    ],
  },
  {
    id: 4,
    title: "The Matrix",
    overview:
      "Set in the 22nd century, The Matrix tells the story of a computer programmer who is led to fight an underground war against powerful computers who have constructed his entire reality with a system called the Matrix.",
    poster_path: "/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    backdrop_path: "/fNG7i7RqMErkcqhohV2a6cV1Ehy.jpg",
    release_date: "1999-03-31",
    vote_average: 8.2,
    vote_count: 25000,
    genre_ids: [28, 878],
    popularity: 87.3,
    runtime: 136,
    tagline: "The fight for the future begins.",
    cast: [
      { id: 8, name: "Keanu Reeves", character: "Neo", profile_path: "/4D0PpNI0kmP58hgrwGC3wCjxhnm.jpg", order: 0 },
      {
        id: 9,
        name: "Laurence Fishburne",
        character: "Morpheus",
        profile_path: "/8suOhUtJYlDWlmNVmuXrpKRq2JJ.jpg",
        order: 1,
      },
    ],
    videos: [
      { id: "4", key: "vKQi3bBA1y8", name: "Official Trailer", site: "YouTube", type: "Trailer", official: true },
    ],
  },
  {
    id: 5,
    title: "Pulp Fiction",
    overview:
      "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper.",
    poster_path: "/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    backdrop_path: "/4cDFJr4HnXN5AdPw4AKrmLlMWdO.jpg",
    release_date: "1994-10-14",
    vote_average: 8.9,
    vote_count: 27000,
    genre_ids: [80, 18],
    popularity: 92.1,
    runtime: 154,
    tagline: "Just because you are a character doesn't mean you have character.",
    cast: [
      {
        id: 10,
        name: "John Travolta",
        character: "Vincent Vega",
        profile_path: "/9GVufE87MMIrSn0CbJFLudkALdL.jpg",
        order: 0,
      },
      {
        id: 11,
        name: "Samuel L. Jackson",
        character: "Jules Winnfield",
        profile_path: "/AiAYAqwpM5xmiFrAIeQvUXDCVvo.jpg",
        order: 1,
      },
    ],
    videos: [
      { id: "5", key: "s7EdQ4FqbhY", name: "Official Trailer", site: "YouTube", type: "Trailer", official: true },
    ],
  },
  {
    id: 6,
    title: "Avatar",
    overview:
      "In the 22nd century, a paraplegic Marine is dispatched to the moon Pandora on a unique mission, but becomes torn between following orders and protecting an alien civilization.",
    poster_path: "/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg",
    backdrop_path: "/Yc9q6QuWrMp9nuDm5R8ExNqbEWU.jpg",
    release_date: "2009-12-18",
    vote_average: 7.6,
    vote_count: 30000,
    genre_ids: [28, 12, 14, 878],
    popularity: 94.8,
    runtime: 162,
    tagline: "Enter the World of Pandora.",
    cast: [
      {
        id: 12,
        name: "Sam Worthington",
        character: "Jake Sully",
        profile_path: "/yX1XgUIbGBenAocHqHQ4qWlk8Kg.jpg",
        order: 0,
      },
      { id: 13, name: "Zoe Saldana", character: "Neytiri", profile_path: "/vQBwmsSOAd0JDaEcZ5p43J9xzsY.jpg", order: 1 },
    ],
    videos: [
      { id: "6", key: "5PSNL1qE6VY", name: "Official Trailer", site: "YouTube", type: "Trailer", official: true },
    ],
  },
]

export const movies = mockMovies

export const getTrendingMovies = (): Movie[] => {
  return mockMovies.sort((a, b) => b.popularity - a.popularity).slice(0, 10)
}

export const getTopRatedMovies = (): Movie[] => {
  return mockMovies.sort((a, b) => b.vote_average - a.vote_average).slice(0, 10)
}

export const getMoviesByGenre = (genreId: number): Movie[] => {
  return mockMovies.filter((movie) => movie.genre_ids.includes(genreId))
}

export const searchMovies = (query: string): Movie[] => {
  const lowercaseQuery = query.toLowerCase()
  return mockMovies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(lowercaseQuery) || movie.overview.toLowerCase().includes(lowercaseQuery),
  )
}

export const getMovieById = (id: number): Movie | undefined => {
  return mockMovies.find((movie) => movie.id === id)
}

export const getSimilarMovies = (movieId: number): Movie[] => {
  const movie = getMovieById(movieId)
  if (!movie) return []

  return mockMovies.filter((m) => m.id !== movieId && m.genre_ids.some((g) => movie.genre_ids.includes(g))).slice(0, 6)
}
