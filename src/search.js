const form = document.querySelector(".movie-form");
const searchInput = document.querySelector(".movie-search");
const clearBtn = document.querySelector(".clear-btn");
const sidebarToggle = document.querySelector(".toggle-sidebar");
const clearBtnIcon = document.querySelector(".clear-btn i");
const overlay = document.querySelector(".overlay");
const logo = document.querySelector(".logo");
const pageHeading = document.querySelector(".page-heading");
const genreToggle = document.querySelector(".genre-toggle");
const navBtnFlex = document.querySelector(".nav-btn-flex");

function addSearchAnimation() {
  if (pageHeading) {
    logo.classList.add("logo-disappear");
    form.classList.add("expand-form");
    navBtnFlex.classList.add("expand-nav-btn-flex");
    sidebarToggle.classList.add("nav-btn-disappear");
    searchInput.classList.add("show-movie-search");
    overlay.classList.add("show-overlay");
    pageHeading.classList.add("logo-disappear");
    genreToggle.classList.add("nav-btn-disappear");
  } else {
    logo.classList.add("logo-disappear");
    form.classList.add("expand-form");
    navBtnFlex.classList.add("expand-nav-btn-flex");
    sidebarToggle.classList.add("nav-btn-disappear");
    searchInput.classList.add("show-movie-search");
    overlay.classList.add("show-overlay");
  }
}

function returnToSearchDefault() {
  if (pageHeading) {
    searchInput.blur();
    logo.classList.remove("logo-disappear");
    form.classList.remove("expand-form");
    navBtnFlex.classList.remove("expand-nav-btn-flex");
    sidebarToggle.classList.remove("nav-btn-disappear");
    searchInput.classList.remove("show-movie-search");
    overlay.classList.remove("show-overlay");
    pageHeading.classList.remove("logo-disappear");
    genreToggle.classList.remove("nav-btn-disappear");
  } else {
    searchInput.blur();
    logo.classList.remove("logo-disappear");
    form.classList.remove("expand-form");
    navBtnFlex.classList.remove("expand-nav-btn-flex");
    sidebarToggle.classList.remove("nav-btn-disappear");
    searchInput.classList.remove("show-movie-search");
    overlay.classList.remove("show-overlay");
  }
}

document.addEventListener("click", (e) => {
  if (form.contains(e.target)) {
    searchInput.focus();
    addSearchAnimation();
  }
});

form.addEventListener("focusout", () => {
  searchInput.blur();
  addSearchAnimation();
});

clearBtn.addEventListener("mousedown", () => {
  if (searchInput.value) {
    searchInput.value = "";
  } else {
    returnToSearchDefault();
  }
});
