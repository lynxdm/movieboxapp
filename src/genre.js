const genreToggle = document.querySelector(".genre-toggle");
const genreList = document.querySelector(".genre-list");

genreToggle.addEventListener("click", () => {
  if (!genreList.classList.contains("show-genre-list")) {
    genreList.classList.add("show-genre-list");
    document.querySelector(".overlay").classList.add("show-overlay");
  } else {
    genreList.classList.remove("show-genre-list");
    document.querySelector(".overlay").classList.remove("show-overlay");
  }
});
// document.addEventListener("mousedown", (e) => {
//   if (!genreList.contains(e.target) && !genreToggle.contains(e.target)) {
//     genreList.classList.remove("show-genre-list");
//     // document.querySelector(".overlay").style.display = "none";
//   }
// });
