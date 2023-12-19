import { SEARCH_API_URL, IMG_PATH, fetchSuggestions } from "./utilis.js";

const nav = document.querySelector("nav");
const form = document.querySelector(".movie-form");
const searchInput = document.querySelector(".movie-search");
const clearBtn = document.querySelector(".clear-btn");
const sidebarToggle = document.querySelector(".toggle-sidebar");
const overlay = document.querySelector(".overlay");
const logo = document.querySelector(".logo");
const pageHeading = document.querySelector(".page-heading");
const genreToggle = document.querySelector(".genre-toggle");
const navBtnFlex = document.querySelector(".nav-btn-flex");
const suggestions = document.querySelector(".suggestions");

function addSearchAnimation() {
  logo.classList.add("logo-disappear");
  form.classList.add("expand-form");
  navBtnFlex.classList.add("expand-nav-btn-flex");
  sidebarToggle.classList.add("nav-btn-disappear");
  searchInput.classList.add("show-movie-search");
  overlay.classList.add("show-overlay");
  if (pageHeading) {
    pageHeading.classList.add("logo-disappear");
    genreToggle.classList.add("nav-btn-disappear");
  }
}

function returnToSearchDefault() {
  searchInput.blur();
  logo.classList.remove("logo-disappear");
  form.classList.remove("expand-form");
  navBtnFlex.classList.remove("expand-nav-btn-flex");
  sidebarToggle.classList.remove("nav-btn-disappear");
  searchInput.classList.remove("show-movie-search");
  overlay.classList.remove("show-overlay");
  form.classList.remove("active-suggestion");
  nav.classList.remove("active-suggestion");
  suggestions.innerHTML = "";
  if (pageHeading) {
    pageHeading.classList.remove("logo-disappear");
    genreToggle.classList.remove("nav-btn-disappear");
  }
}

document.addEventListener("click", (e) => {
  if (form.contains(e.target)) {
    searchInput.focus();
    addSearchAnimation();
  }
});

form.addEventListener("focusout", (e) => {
  if (!suggestions.contains(e.target)) {
    searchInput.blur();
    addSearchAnimation();
  }
});

clearBtn.addEventListener("mousedown", () => {
  if (searchInput.value) {
    searchInput.value = "";
  } else {
    returnToSearchDefault();
    form.classList.remove("active-suggestion");
    suggestions.innerHTML = "";
  }
});

const fetchSearchPreview = async (searchval) => {
  let data = await fetchSuggestions(`${SEARCH_API_URL}&query=` + searchval);
  displaySearchPreview(data.slice(0, 8));
};

function displaySearchPreview(previews) {
  suggestions.innerHTML = previews
    .map((preview) => {
      let { id, title, backdrop_path: backdrop } = preview;
      let imageHtml = `<img src=${
        IMG_PATH + backdrop
      } alt="" class="preview-img">`;
      return `<a href="../movie.html?id=${id}"><li><div class="preview-title"><i class="fa-solid fa-magnifying-glass"></i><p>${title}</p></div>${
        backdrop ? imageHtml : ""
      }</li></a>`;
    })
    .join("");
}

searchInput.addEventListener("keyup", () => {
  if (searchInput.value) {
    nav.classList.add("active-suggestion");
    form.classList.add("active-suggestion");
    fetchSearchPreview(searchInput.value);
  } else {
    form.classList.remove("active-suggestion");
    nav.classList.remove("active-suggestion");
    suggestions.innerHTML = "";
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let searchValue = encodeURIComponent(searchInput.value);
  window.location.href = `../movies.html?search=${searchValue}`;
});
