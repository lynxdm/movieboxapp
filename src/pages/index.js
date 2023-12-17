import "../theme.js";
import "../sidebar.js";
import { slider } from "../slider.js";
import "../search.js";
import "../overlay.js";
import {
  IMG_PATH,
  GENRES,
  POPULAR_MOVIES_API_URL,
  fetchMovies,
} from "../utilis.js";

const slidesFlex = document.querySelector(".slides-flex");
const slideContainer = document.querySelector(".slider-container");
const navigation = document.querySelector(".navigation");
function displayCarouselMovies(movies) {
  let randomMovies = [];
  for (let i = 0; i < 10; i++) {
    let randomIndex = Math.floor(Math.random() * movies.length);
    let randomELement = movies[randomIndex];
    randomMovies.push(randomELement);
  }
  randomMovies = randomMovies.reduce((acc, movies) => {
    if (acc.length < 5) {
      if (!acc.includes(movies)) {
        acc.push(movies);
      }
    }
    return acc;
  }, []);
  slidesFlex.innerHTML = randomMovies
    .map((movie) => {
      let {
        title,
        overview,
        backdrop_path: backdrop,
        vote_average,
        id,
      } = movie;
      return `<li class="movie-preview slide">
         <img
              src=${IMG_PATH + backdrop}
              alt="${title + " backdrop"}"
              class="backdrop-img"
            />
              <div class="preview-text">
                <h1>${title}</h1>
                <div class="ratings">
                   <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m12 15.925l3.15 1.925l-.825-3.6l2.775-2.4l-3.65-.325l-1.45-3.4v7.8ZM5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z"/></svg>
                    <p>${vote_average} / 10</p>
                </div>
                <p class="description">${overview}</p>
                <a href="../movie.html?id=${id}" class="watch-btn" type="button">
                  <i class="fa-solid fa-circle-play"></i>
                  <p>WATCH TRAILER</p>
                </a>
              </div>
            </li>`;
    })
    .join("");
  slider(slideContainer, slidesFlex, navigation);
}

const moviesContainer = document.querySelector(".movie-container");

function displayMovies(movies) {
  moviesContainer.innerHTML = movies
    .map((movie) => {
      let {
        title,
        poster_path: poster,
        genre_ids,
        release_date,
        vote_average,
        id,
      } = movie;
      let displayGenres = [];
      genre_ids.forEach((genre_id) => {
        GENRES.filter((genre) => {
          if (genre.id === genre_id) {
            displayGenres.push(genre.name);
          }
        });
      });
      return ` <a href="../movie.html?id=${id}">
      <div class="movie-card">
            <div class="poster">
              <img src=${IMG_PATH + poster} alt=${
        title + "poster image"
      } class="poster-img" />
              <div class="expand">
                <i class="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>
            <div class="undertext">
              <p class="date">${release_date.slice(0, 4)}</p>
            </div>
            <h3 class="title">${title}</h3>
            <div class="ratings">
                   <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z"/></svg>
                    <p>${vote_average} / 10</p>
            </div>
            <p class="genre">${displayGenres.join(", ")}
            </p>
          </div></a>`;
    })
    .join("");
}

const start = async () => {
  let moviesData = await fetchMovies(
    POPULAR_MOVIES_API_URL,
    "There was an error, please try again :("
  );
  displayCarouselMovies(moviesData);
  displayMovies(moviesData);
};

start();
