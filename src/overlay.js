const overlay = document.querySelector(".overlay");
const sidebar = document.querySelector("aside");
const sidebarToggle = document.querySelector(".toggle-sidebar");
const genreToggle = document.querySelector(".genre-toggle");
const genreList = document.querySelector(".genre-list");
const form = document.querySelector(".movie-form");
const searchInput = document.querySelector(".movie-search");
const logo = document.querySelector(".logo");
const pageHeading = document.querySelector(".page-heading");
const navBtnFlex = document.querySelector(".nav-btn-flex");

function returnToDefault(e) {
  if (pageHeading) {
    if (
      !genreList.contains(e.target) &&
      !sidebar.contains(e.target) &&
      !form.contains(e.target)
    ) {
      searchInput.blur();
      logo.classList.remove("logo-disappear");
      form.classList.remove("expand-form");
      navBtnFlex.classList.remove("expand-nav-btn-flex");
      sidebarToggle.classList.remove("nav-btn-disappear");
      searchInput.classList.remove("show-movie-search");
      overlay.classList.remove("show-overlay");
      pageHeading.classList.remove("logo-disappear");
      genreToggle.classList.remove("nav-btn-disappear");
      sidebar.classList.remove("show-sidebar");
      genreList.classList.remove("show-genre-list");
    }
  } else {
    if (!sidebar.contains(e.target) && !form.contains(e.target)) {
      searchInput.blur();
      logo.classList.remove("logo-disappear");
      form.classList.remove("expand-form");
      navBtnFlex.classList.remove("expand-nav-btn-flex");
      sidebarToggle.classList.remove("nav-btn-disappear");
      searchInput.classList.remove("show-movie-search");
      overlay.classList.remove("show-overlay");
      sidebar.classList.remove("show-sidebar");
    }
  }
}

document.addEventListener("mousedown", (e) => {
  if (overlay.classList.contains("show-overlay")) {
    returnToDefault(e);
    // if (genreList) {
    //   if (!genreList.contains(e.target) && !sidebar.contains(e.target)) {
    //     overlay.classList.remove("show-overlay");
    //     sidebar.classList.remove("show-sidebar");
    //     genreList.classList.remove("show-genre-list");
    //   }
    // } else {
    //   if (!sidebar.contains(e.target)) {
    //     overlay.classList.remove("show-overlay");
    //     sidebar.classList.remove("show-sidebar");
    //   }
    // }
  }
});
