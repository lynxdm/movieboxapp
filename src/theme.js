const themeToggle = document.querySelector(".theme-toggle label");
const themeInput = document.querySelector(".theme-toggle input");
const themeText = document.querySelector(".theme p");

document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("dark-theme");
  // localStorage.setItem("theme", "dark-theme");
  retrieveTheme();
});

themeText.addEventListener("click", () => {
  themeToggle.click();
});

themeInput.addEventListener("change", (e) => {
  if (e.target.checked) {
    document.body.classList.add("dark-theme");
    // localStorage.setItem("theme", "dark-theme");
    localStorage.removeItem("theme");
  } else {
    document.body.classList.remove("dark-theme");
    // localStorage.removeItem("theme");
    localStorage.setItem("theme", "light-theme");
  }
});

function retrieveTheme() {
  let theme = localStorage.getItem("theme");
  if (theme) {
    document.body.classList.remove("dark-theme");
    document.querySelector(".theme-toggle input").checked = false;
  }
}
