import "../theme.js";
import "../sidebar.js";
import "../overlay.js";
import { MOVIE_DETAILS_PATH, IMG_PATH } from "../utilis.js";

document.addEventListener("DOMContentLoaded", async () => {
  let params = new URLSearchParams(document.location.search);
  let id = params.get("id");
  let response = await fetch(`${MOVIE_DETAILS_PATH.replace("id", id)}`);
  let movieData = await response.json();
  let {
    adult,
    backdrop_path: backdrop,
    budget,
    casts,
    genres,
    imdb_id,
    overview,
    production_companies,
    title,
    release_date,
    runtime,
    videos,
    vote_average,
    vote_count,
  } = movieData;
  
  let { cast, crew } = casts;
  function filterCrew(department, number) {
    let filter = [];
    crew.filter((crew) => {
      if (crew.department == department) {
        filter.push(crew.name);
      }
    });
    return filter.splice(0, number).join(", ");
  }

  function convertTime(min) {
    let hours = Math.floor(min / 60);
    let minutes = min % 60;
    return `${hours}h ${minutes}m`;
  }

  function convertBudget(budget) {
    let budgetString = budget.toString();
    // console.log(budgetString.length);
    if (budgetString.length >= 10) {
      return `${Math.ceil(budget / 1000000000) + " billion"}`;
    } else {
      return `${Math.ceil(budget / 1000000) + " million"}`;
    }
  }
  document.querySelector(".page-heading").innerHTML = title;
  const main = document.querySelector("main");
  main.innerHTML = `<section class="video-trailer-container">
       <div class="view-container">
           <button class="cancel-btn"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="32" viewBox="0 0 384 512"><path fill="currentColor" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7L86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256L41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3l105.4 105.3c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256l105.3-105.4z"/></svg></button>
          <div class="movie-static-container">
            <img
              class="movie-static-img"
              src=${IMG_PATH + backdrop}
              alt=""
            />
            <div class="watch-trailer-container">
              <button type="button" class="play-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M9.525 18.025q-.5.325-1.012.038T8 17.175V6.825q0-.6.513-.888t1.012.038l8.15 5.175q.45.3.45.85t-.45.85l-8.15 5.175Z"
                  />
                </svg>
              </button>
              <p>Watch Trailer</p>
            </div>
          </div>
           <iframe class="trailer-video" width="560" height="315" src="" title="YouTube video player" frameborder="0" allowfullscreen=""></iframe>
       </div>
      </section>
       <section class="movie-details">
        <div class="movie-details-heading">
          <ul>
            <li class="movie-date">${release_date.slice(0, 4)}</li>
            <li class="movie-age-rating">${adult ? "R-rated" : "PG-13"}</li>
            <li class="movie-run-time">${convertTime(runtime)}</li>
          </ul>
          <div class="movie-details-rating">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z"
              />
            </svg>
            <p class="vote-average">${vote_average.toPrecision(2)}</p>
            <p>|</p>
            <p>${(vote_count / 1000).toPrecision(2)}k</p>
          </div>
        </div>
        <div class="movie-details-content">
          <div class="genre-bookmark-flex">
            <ul class="movie-genre-list">${genres
              .map((genre) => {
                return `<li>${genre.name}</li>`;
              })
              .join("")}</ul>
            <button type="button" class="bookmark-movie-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M5 21V5q0-.825.588-1.413T7 3h10q.825 0 1.413.588T19 5v16l-7-3l-7 3Z"
                />
              </svg>
              <p>Bookmark</p>
            </button>
          </div>
          <p class="movie-about">${overview}</p>
          <ul class="movie-details-list">
            <li class="directors">director: <span>${filterCrew(
              "Directing",
              2
            )}</span></li>
            <li class="writers">
              writers:
              <span>${filterCrew("Writing", 3)}</span>
            </li>
            <li class="stars">
              stars: <span>${cast
                .map((cast) => {
                  return cast.name;
                })
                .slice(0, 3)
                .join(", ")}</span>
            </li>
            <li class="budget">Budget: <span>$${convertBudget(
              budget
            )}</span></li>
            <li class="production-companies">
              Production companies:
              <span>${production_companies
                .map((company) => {
                  return company.name;
                })
                .join(", ")}</span>
            </li>
          </ul>
          <a
            href="https://www.imdb.com/title/${imdb_id}"
            class="imdb-link"
            target="_blank"
            ><p>Find out more on imdb</p>
            <i class="fa-solid fa-chevron-right"></i
          ></a>
        </div>
      </section>`;

  const playBtn = main.querySelector(".play-btn");
  const viewContainer = main.querySelector(".view-container");
  const cancelBtn = main.querySelector(".cancel-btn");

  let vids = videos.results;
  let trailers = vids.reduce((acc, video) => {
    if (video.type == "Trailer") {
      acc.push(video.key);
    }
    return acc;
  }, []);

  let trailer = trailers.slice(0, 1).join("");
  viewContainer.addEventListener("click", (e) => {
    if (playBtn.contains(e.target)) {
      viewContainer.classList.add("show-trailer");
      main.querySelector(
        ".trailer-video"
      ).src = `https://www.youtube.com/embed/${trailer}`;
    } else if (cancelBtn.contains(e.target)) {
      viewContainer.classList.remove("show-trailer");
      main.querySelector(".trailer-video").src = "";
    }
  });
});
