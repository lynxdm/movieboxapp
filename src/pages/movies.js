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
} from "../utilis.js";
import { paginate } from "../pagination.js";

const pageHeading = document.querySelector(".page-heading");
document.addEventListener("DOMContentLoaded", async () => {
  let params = new URLSearchParams(document.location.search);
  let query = params.get("search");
  if (query) {
    pageHeading.innerHTML = decodeURIComponent(query);
    paginate(`${SEARCH_API_URL + "&query="}${query}}`);
  } else {
    paginate(DISCOVER_API_URL);
  }
});
