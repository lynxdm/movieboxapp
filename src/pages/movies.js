import "../theme.js";
import "../sidebar.js";
import "../search.js";
import "../genre.js";
import "../date.js";
import "../overlay.js";
import "../pagination.js";
import { DISCOVER_API_URL, SEARCH_API_URL, fetchMovies } from "../utilis.js";
import { paginate } from "../pagination.js";
import { renderGenreList } from "../genre.js";
import displayMovies from "../displayMovies.js";

const pageHeading = document.querySelector(".page-heading");
const pageinationContainer = document.querySelector(".pagination-container");
document.addEventListener("DOMContentLoaded", async () => {
  renderGenreList();
  let params = new URLSearchParams(document.location.search);
  let query = params.get("search");
  if (query) {
    pageHeading.innerHTML = `${decodeURIComponent(query)}`;
    pageinationContainer.style.display = "none";
    let searchData = await fetchMovies(
      `${SEARCH_API_URL + "&query="}${query}}&page=1`
    );
    displayMovies(searchData);
  } else {
    pageinationContainer.style.display = "flex";
    pageHeading.innerHTML = `Popular Movies`;
    paginate(DISCOVER_API_URL);
  }
});
