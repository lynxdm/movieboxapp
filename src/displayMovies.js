import {
  moviesContainer,
  IMG_PATH,
  getLocalStorageItem,
  setLocalStorageItem,
} from "./utilis.js";

export default function displayMovies(movies) {
  if (movies.length < 1) {
    displayNoContent("nothing matches your search. Please try something else.");
    return;
  }
  moviesContainer.innerHTML = movies
    .map((movie) => {
      let { id, poster_path: poster, title } = movie;
      return `<div class="movie-card shrink-card">
        <a href="../movie.html?id=${id} ">
          <div class="poster">
            <img src=${IMG_PATH + poster} alt=${
        title + " poster image"
      } class="poster-img" />
            <div class="expand">
            <i class="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
          </a>
        </div>`;
    })
    .join("");
}

export function displayBookmarks(bookmarks) {
  moviesContainer.innerHTML = bookmarks
    .map((bookmark) => {
      let { id, poster, title } = bookmark;
      return `<a href="../movie.html?id=${id}" id=${id}>
       <div class="movie-card bookmark-card">
          <button class="remove-bookmark">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="32"
              viewBox="0 0 384 512"
            >
              <path
                fill="currentColor"
                d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7L86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256L41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3l105.4 105.3c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256l105.3-105.4z"
              />
            </svg>
          </button>
          <div class="poster">
            <img src=${IMG_PATH + poster} alt=${
        title + " poster image"
      } class="poster-img" />
            <div class="expand">
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
          <h3 class="movie-title">${title}</h3>
        </div></a>`;
    })
    .join("");

  const removeBookmarkBtns =
    moviesContainer.querySelectorAll(".remove-bookmark");
  removeBookmarkBtns.forEach((removeBookmarkBtn) => {
    removeBookmarkBtn.addEventListener("click", (e) => {
      e.preventDefault();
      let parentCard = e.currentTarget.parentElement.parentElement;
      let parentId = parentCard.id;

      parentCard.remove();

      let bookmarks = getLocalStorageItem("bookmarks");
      let filteredBookmarks = bookmarks.filter(
        (bookmark) => bookmark.id !== parentId
      );
      if (filteredBookmarks.length < 1) {
        displayNoContent(
          `no more bookmarks. Continue your search <a href=./movies.html>here</a>`
        );
      }
      setLocalStorageItem("bookmarks", filteredBookmarks);
    });
  });
}

export function displayNoContent(text) {
  moviesContainer.innerHTML = `<h2 class="no-content-text">${text}</h2>`;
  moviesContainer.classList.add("no-content");
}
