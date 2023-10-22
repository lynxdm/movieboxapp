const themeToggle = document.querySelector(".theme-toggle label");
const theme = document.querySelector(".theme");

document.addEventListener("DOMContentLoaded", retrieveTheme);
theme.addEventListener("click", () => {
  // add theme class to body
  if (!document.body.classList.contains("dark-theme")) {
    document.body.classList.add("dark-theme");
    document.querySelector(".theme-toggle input").checked = true;
    localStorage.setItem("theme", "dark-theme");
  } else {
    document.body.classList.remove("dark-theme");
    document.querySelector(".theme-toggle input").checked = false;
    localStorage.removeItem("theme");
  }
});
// // event listener for toggle button
themeToggle.addEventListener("click", () => {
  // add theme class to body
  document.body.classList.toggle("dark-theme");
  //  setting local storage
  localStorage.setItem("theme", "dark-theme");
  if (!document.body.classList.contains("dark-theme")) {
    localStorage.removeItem("theme");
  }
});

function retrieveTheme() {
  let theme = localStorage.getItem("theme");
  if (theme) {
    document.body.classList.add("dark-theme");
    document.querySelector(".theme-toggle input").checked = true;
  }
}
