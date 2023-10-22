const sideBar = document.querySelector("aside");
const sidebarToggle = document.querySelector(".toggle-sidebar");

sidebarToggle.addEventListener("click", () => {
  sideBar.classList.add("show-sidebar");
  document.querySelector(".overlay").style.display = "block";
  document.body.style.position = "fixed";
  document.body.classList.add("body-sidebar-padding");
  // document.querySelector("main").style.filter = "brightness(50%)";
  // document.body.style.position = "fixed";
  // if (sideBar.classList.contains("show-sidebar")) {
  //   document.querySelector("main").style.filter = "brightness(50%)";
  //   document.body.style.position = "fixed";
  // } else {
  //   document.querySelector("main").style.filter = "brightness(100%)";
  //   document.body.style.position = "static";
  // }
});

document.addEventListener("mousedown", (e) => {
  if (!sideBar.contains(e.target) && !sidebarToggle.contains(e.target)) {
    sideBar.classList.remove("show-sidebar");
    document.body.classList.remove("body-sidebar-padding");
    document.querySelector(".overlay").style.display = "none";
    // document.querySelector("main").style.filter = "brightness(100%)";
    document.body.style.position = "static";
  }
});
