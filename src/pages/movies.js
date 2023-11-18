import "../theme.js";
import "../sidebar.js";
import "../search.js";
import "../genre.js";
import "../overlay.js";
import "../pagination.js";
import {
  DISCOVER_API_URL,
  SEARCH_API_URL,
  IMG_PATH,
  currentPageNumber,
  GENRES,
  GENRE_RESULT_API_URL,
} from "../utilis.js";
import { paginate } from "../pagination.js";
import { renderGenreList } from "../genre.js";

const pageHeading = document.querySelector(".page-heading");
document.addEventListener("DOMContentLoaded", async () => {
  renderGenreList();
  let params = new URLSearchParams(document.location.search);
  let query = params.get("search");
  if (query) {
    pageHeading.innerHTML = `" ${decodeURIComponent(query)} "`;
    paginate(`${SEARCH_API_URL + "&query="}${query}}`);
  } else {
    paginate(DISCOVER_API_URL);
  }
});

// function renderGenreList() {
//   const genreList = document.querySelector(".genre-list");
//   genreList.innerHTML = GENRES.reduce((acc, genre) => {
//     acc.push(`<li data-genre-id=${genre.id}>${genre.name}</li>`);
//     return acc;
//   }, []).join("");

//   const genreBtns = genreList.querySelectorAll("li");
//   let currentFilter = [];
//   genreBtns.forEach((genreBtn) => {
//     genreBtn.addEventListener("click", async (e) => {
//       let btn = e.currentTarget;
//       if (!btn.classList.contains("active-filter")) {
//         btn.classList.add("active-filter");
//         currentFilter.push(btn.dataset.genreId);
//         console.log(currentFilter);
//       } else {
//         btn.classList.remove("active-filter");
//         currentFilter = currentFilter.filter((item) => {
//           if (item !== btn.dataset.genreId) {
//             return item;
//           }
//         });
//         console.log(currentFilter);
//       }
//       let currentFilterURL = encodeURIComponent(currentFilter.join(", "));

//       if (currentFilterURL.length > 1) {
//         console.log(currentFilterURL);
//         // paginate(`${GENRE_RESULT_API_URL}${currentFilterURL}`);
//         // let data = await fetchMovies(
//         //   `${GENRE_RESULT_API_URL}${currentFilterURL}&page=${2}`
//         // );
//         // displayMovies(data);
//         paginate(`${GENRE_RESULT_API_URL}${currentFilterURL}`, 1);
//       } else {
//         console.log("hey");
//         // paginate(DISCOVER_API_URL);
//         fetchMovies(DISCOVER_API_URL);
//       }
//       // if (currentFilter) {
//       //   let currentFilterURL = encodeURIComponent(currentFilter.join(", "));
//       //   console.log(currentFilterURL);
//       //   ;
//       // }
//     });
//   });
// }

// renderGenreList();
