const sideBar = document.querySelector("aside");
const sidebarToggle = document.querySelector(".toggle-sidebar");

sidebarToggle.addEventListener("click", () => {
  sideBar.classList.toggle("show-sidebar");
  if (sideBar.classList.contains("show-sidebar")) {
    document.querySelector("main").style.filter = "brightness(55%)";
  } else {
    document.querySelector("main").style.filter = "brightness(100%)";
  }
});

document.addEventListener("mousedown", (e) => {
  if (!sideBar.contains(e.target) && !sidebarToggle.contains(e.target)) {
    sideBar.classList.remove("show-sidebar");
    document.querySelector("main").style.filter = "brightness(100%)";
  }
});
