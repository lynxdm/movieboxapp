export const API_KEY = "b8153e3c30f5a9478f55d8ab9c8ddff9";
export const API_URL = "https://api.themoviedb.org/3/";
export const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiODE1M2UzYzMwZjVhOTQ3OGY1NWQ4YWI5YzhkZGZmOSIsInN1YiI6IjY0ZmY2YzljZWZlYTdhMDBjMzk2MzZmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CGjCPWVoGOpY0bqOjno6UBwQkWyPiO-rDdPQ8EG7ywI";
export const IMG_PATH = `https://image.tmdb.org/t/p/original`;
export const GENRELIST_API_URL = `${API_URL}genre/movie/list?api_key=${API_KEY}&language=en-US`;
export const TOP_RATED_API_URL = `${API_URL}movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
export const MOVIE_DETAILS_PATH = `${API_URL}movie/`;
export const DISCOVER_API_URL = `${API_URL}discover/movie?api_key=${API_KEY}&language=en-US`;
export const POPULAR_MOVIES_API_URL = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US`;
export const SEARCH_API_URL = `${API_URL}search/multi?api_key=${API_KEY}&language=en-US&page=1`;

export const GENRES = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV Movie",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
];

export const fetchMovies = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
};

// export const API_KEY = KEY_API;
// export const API_URL = `https://api.themoviedb.org/3/`;

// ;

// ;

// export const POPULAR_TVS_API_URL = `${API_URL}tv/popular?api_key=${API_KEY}&language=en-US`;
// export const TRENDING_API_URL = `${API_URL}trending/all/day?api_key=${API_KEY}&language=en-US`;

// const options = {
//   method: "GET",
//   headers: {
//     accept: "application/json",
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiODE1M2UzYzMwZjVhOTQ3OGY1NWQ4YWI5YzhkZGZmOSIsInN1YiI6IjY0ZmY2YzljZWZlYTdhMDBjMzk2MzZmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CGjCPWVoGOpY0bqOjno6UBwQkWyPiO-rDdPQ8EG7ywI",
//   },
// };