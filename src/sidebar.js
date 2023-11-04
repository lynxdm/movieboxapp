const sidebar = document.querySelector("aside");
const sidebarToggle = document.querySelector(".toggle-sidebar");

sidebarToggle.addEventListener("click", () => {
  sidebar.classList.add("show-sidebar");
  document.querySelector(".overlay").classList.add("show-overlay");
});
