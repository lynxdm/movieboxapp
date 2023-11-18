import { fetchMovies, getLocalStorageItem } from "./utilis.js";
import displayMovies from "./displayMovies.js";

// let currentPageNumber = 1;
export async function paginate(url, currentPageNumber = 1) {
  console.log(url);
  const paginationContainer = document.querySelector(".pagination-container");
  const paginationNumbersContainer = document.querySelector(
    ".pagination-numbers"
  );
  let pageinationButtons;
  setCurrentPage(currentPageNumber);
  // window.addEventListener("load", () => {
  //   setCurrentPage(currentPageNumber);
  // });

  paginationContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("page-num")) {
      currentPageNumber = parseInt(e.target.dataset.pagenum);
    } else if (e.target.classList.contains("page-btn")) {
      if (e.target.classList.contains("next-btn")) {
        if (currentPageNumber < 100) {
          currentPageNumber++;
        }
      } else if (e.target.classList.contains("prev-btn")) {
        if (currentPageNumber > 1) {
          currentPageNumber--;
        }
      } else if (e.target.classList.contains("first-btn")) {
        currentPageNumber = 1;
      } else if (e.target.classList.contains("last-btn")) {
        currentPageNumber = 100;
      }
    }
    setCurrentPage(currentPageNumber);
  });

  async function setCurrentPage(index = 1) {
    if (index >= 1) {
      let btnArray = [];
      for (let i = index - 2; i <= index + 2; i++) {
        if (i >= 1 && i <= 100) {
          btnArray.push(
            `<button class="page-num" type="button" data-pagenum=${i}>${i}</button>`
          );
        }
      }
      paginationNumbersContainer.innerHTML = btnArray.join("");
      let moviesData = await fetchMovies(`${url}&page=${index}`);
      console.log(moviesData);
      displayMovies(moviesData);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    pageinationButtons =
      paginationNumbersContainer.querySelectorAll(".page-num");

    pageinationButtons.forEach((btn) => {
      btn.classList.remove("active");
      if (btn.dataset.pagenum == index) {
        btn.classList.add("active");
      }
    });
  }
}
