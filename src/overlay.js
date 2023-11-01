const overlay = document.querySelector(".overlay");
const sidebar = document.querySelector("aside");
const sidebarToggle = document.querySelector(".toggle-sidebar");
const genreToggle = document.querySelector(".genre-toggle");
const genreList = document.querySelector(".genre-list");

document.addEventListener("mousedown", (e) => {
  if (overlay.classList.contains("show-overlay")) {
    if (!genreList.contains(e.target) && !sidebar.contains(e.target)) {
      overlay.classList.remove("show-overlay");
      sidebar.classList.remove("show-sidebar");
      genreList.classList.remove("show-genre-list");
    //   document.body.classList.remove("body-sidebar-padding");
    //   document.body.style.position = "static";
    }
  }
});
