const sidebar = document.querySelector("aside");
const sidebarToggle = document.querySelector(".toggle-sidebar");
const overlay = document.querySelector(".overlay");

sidebarToggle.addEventListener("click", () => {
  sidebar.classList.add("show-sidebar");
  document.querySelector(".overlay").classList.add("show-overlay");
});

document.addEventListener("mousedown", (e) => {
  if (overlay.classList.contains("show-overlay")) {
    if (!sidebar.contains(e.target)) {
      overlay.classList.remove("show-overlay");
      sidebar.classList.remove("show-sidebar");
    }
  }
});
