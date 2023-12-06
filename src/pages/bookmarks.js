import "../theme.js";
import "../sidebar.js";
import "../overlay.js";
import { getLocalStorageItem } from "../utilis.js";
import { displayBookmarks, displayNoContent } from "../displayMovies.js";

document.addEventListener("DOMContentLoaded", () => {
  let bookmarks = getLocalStorageItem("bookmarks");
  if (bookmarks.length > 0) {
    displayBookmarks(bookmarks);
  } else {
    displayNoContent(
      `no bookmarks here! Start your movie journey <a href=./movies.html>here</a>`
    );
  }
});
