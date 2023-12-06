const slideContainer = document.querySelector(".slider-container");
const slidesFlex = document.querySelector(".slides-flex");
const navigation = document.querySelector(".navigation");

export const slider = (container, slidesFlex, navigation) => {
  let initialX,
    finalX,
    leftPos = -100,
    clicked = false,
    counter = 0,
    slideDistance,
    interval = null,
    numberOfSlides = slidesFlex.childElementCount,
    slidesWidth = slidesFlex.offsetWidth,
    threshold = 40;

  // *******EVENT LISTENERS******
  // initiate interval
  createInterval();

  // mouse events
  container.addEventListener("mousedown", dragStart);

  // touch events
  // container.addEventListener("touchstart", dragStart);
  // container.addEventListener("touchmove", dragging);
  // container.addEventListener("touchend", dragStop);

  // ******FUNCTIONS******
  function moveSlide() {
    slidesFlex.style.left = `${leftPos * counter}%`;
    document.getElementById("radio" + (counter + 1)).checked = true;
  }

  function animate() {
    counter++;
    if (counter > numberOfSlides - 1) {
      counter = 0;
      slidesFlex.style.transition = "none";
    } else {
      slidesFlex.style.transition = "2s";
    }
    moveSlide();
  }

  function createInterval() {
    if (!interval) {
      interval = setInterval(animate, 10000);
    }
  }

  function dragStart(e) {
    clearInterval(interval);
    interval = null;

    // handling manual navigation
    if (navigation.contains(e.target)) {
      counter = e.target.id ? parseInt(e.target.id) - 1 : counter;
      slidesFlex.style.transition = "2s";
      moveSlide();
      createInterval();
      return;
    }
    // e.preventDefault(); // for touchscreen defaults

    // sliding animation
    slidesFlex.style.transition = "0.8s";
    // container.style.cursor = "grabbing";
    // document.body.style.cursor = "grabbing";

    clicked = true;

    if (e.type == "touchstart") {
      initialX = e.touches[0].clientX;
    } else {
      createInterval();
      //   initialX = e.clientX;
      //   document.onmousemove = dragging;
      //   document.onmouseup = dragStop;
    }
  }

  // function dragging(e) {
  //   if (!clicked) return;

  //   if (e.type == "touchmove") {
  //     finalX = e.touches[0].clientX;
  //   } else {
  //     finalX = e.clientX;
  //   }

  //   let currentPosition = counter * leftPos;

  //   slideDistance =
  //     ((initialX - finalX) / (slidesWidth / numberOfSlides)) * 100;

  //   if (
  //     Math.abs(slideDistance) < threshold &&
  //     counter > 0 &&
  //     counter < numberOfSlides - 1
  //   ) {
  //     slidesFlex.style.left = `${currentPosition - slideDistance}%`;
  //   }
  // }

  // function dragStop(e) {
  //   if (navigation.contains(e.target)) return;

  //   // check threshold and counter before changing slides
  //   if (
  //     finalX < initialX &&
  //     counter < numberOfSlides - 1 &&
  //     slideDistance >= threshold
  //   ) {
  //     counter++;
  //   } else if (
  //     finalX > initialX &&
  //     counter > 0 &&
  //     -slideDistance >= threshold
  //   ) {
  //     counter--;
  //   }
  //   moveSlide();

  //   // return to default
  //   createInterval();
  //   // document.body.style.cursor = "default";
  //   // container.style.cursor = "grab";
  //   initialX = undefined;
  //   finalX = undefined;
  //   clicked = false;
  //   // document.onmousemove = null;
  //   // document.onmouseup = null;
  // }
};

// document.addEventListener("DOMContentLoaded", () => {
//   slider(slideContainer, slidesFlex, navigation);
// });
