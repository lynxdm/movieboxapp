import {
  GENRES,
  fetchMovies,
  GENRE_RESULT_API_URL,
  DISCOVER_API_URL,
} from "./utilis.js";

import { paginate } from "./pagination.js";
import displayMovies from "./displayMovies.js";

const genreToggle = document.querySelector(".genre-toggle");
const genreList = document.querySelector(".genre-list");

genreToggle.addEventListener("click", () => {
  if (!genreList.classList.contains("show-genre-list")) {
    genreList.classList.add("show-genre-list");
    document.querySelector(".overlay").classList.add("show-overlay");
    // renderGenreList();
  } else {
    genreList.classList.remove("show-genre-list");
    document.querySelector(".overlay").classList.remove("show-overlay");
  }
});

export function renderGenreList() {
  genreList.innerHTML = GENRES.reduce((acc, genre) => {
    acc.push(`<li data-genre-id=${genre.id}>${genre.name}</li>`);
    return acc;
  }, []).join("");

  const genreBtns = genreList.querySelectorAll("li");
  let currentFilter = [];
  genreBtns.forEach((genreBtn) => {
    genreBtn.addEventListener("click", async (e) => {
      let btn = e.currentTarget;
      if (!btn.classList.contains("active-filter")) {
        btn.classList.add("active-filter");
        currentFilter.push(btn.dataset.genreId);
        console.log(currentFilter);
      } else {
        btn.classList.remove("active-filter");
        currentFilter = currentFilter.filter((item) => {
          if (item !== btn.dataset.genreId) {
            return item;
          }
        });
        console.log(currentFilter);
      }
      let currentFilterURL = encodeURIComponent(currentFilter.join(", "));

      if (currentFilterURL.length > 1) {
        console.log(currentFilterURL);
        // let data = await fetchMovies(
        //   `${GENRE_RESULT_API_URL}${currentFilterURL}&page=${2}`
        // );
        // displayMovies(data);
        paginate(`${GENRE_RESULT_API_URL}${currentFilterURL}`);
      } else {
        console.log("hey");
        // paginate(DISCOVER_API_URL);
        fetchMovies(DISCOVER_API_URL);
      }
      // if (currentFilter) {
      //   let currentFilterURL = encodeURIComponent(currentFilter.join(", "));
      //   console.log(currentFilterURL);
      //   ;
      // }
    });
  });
}
