const form = document.querySelector(".movie-form");
const searchInput = document.querySelector(".movie-search");
const clearBtn = document.querySelector(".clear-btn");
const toggleSidebar = document.querySelector(".toggle-sidebar")
const clearBtnIcon = document.querySelector(".clear-btn i");
const overlay = document.querySelector(".overlay");
const logoH2 = document.querySelector(".logo");

document.addEventListener("click", (e) => {
  if (form.contains(e.target)) {
    searchInput.focus();
    logoH2.classList.add("logo-disappear");
    // form.style.zIndex = "300";
    form.classList.add("expand-form")
    toggleSidebar.classList.add("toggle-sidebar-disappear");
    searchInput.classList.add("show-movie-search");
    overlay.style.display = "block";
  } else {
    searchInput.blur();
    logoH2.classList.remove("logo-disappear");
    form.classList.remove("expand-form");
    toggleSidebar.classList.remove("toggle-sidebar-disappear");
    searchInput.classList.remove("show-movie-search");
    overlay.style.display = "none";
  }
});

clearBtn.addEventListener("mousedown", () => {
  if (searchInput.value) {
    searchInput.value = "";
  } else {
    searchInput.blur();
    logoH2.classList.remove("logo-disappear");
    form.classList.remove("expand-form");
    toggleSidebar.classList.remove("toggle-sidebar-disappear");
    searchInput.classList.remove("show-movie-search");
    overlay.style.display = "none";
  }
});

form.addEventListener("focusout", ()=>{
  searchInput.blur();
  logoH2.classList.add("logo-disappear");
  form.classList.add("expand-form");
  searchInput.classList.add("show-movie-search");
  overlay.style.display = "block";
  toggleSidebar.classList.add("toggle-sidebar-disappear");
})
