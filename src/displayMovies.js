import { moviesContainer, IMG_PATH } from "./utilis.js";

export default function displayMovies(movies) {
  moviesContainer.innerHTML = movies
    .map((movie) => {
      let { id, poster_path: poster } = movie;
      return `<div class="movie-card shrink-card">
        <a href="../movie.html?id=${id} ">
          <div class="poster">
            <img src=${IMG_PATH + poster} alt="" class="poster-img" />
            <div class="expand">
            <i class="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
          </a>
        </div>`;
    })
    .join("");
}
