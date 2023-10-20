const themeToggle = document.querySelector(".theme-toggle label");

document.addEventListener("DOMContentLoaded", retrieveTheme);
// event listener for toggle button
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
