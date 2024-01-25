const track = document.querySelector(".carousel__track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".button--right");
const prevButton = document.querySelector(".button--left");
const dotsNav = document.querySelector(".carousel__nav");
const dots = Array.from(dotsNav.children);
const slideWidth = slides[0].getBoundingClientRect().width;
const navButton = document.querySelector(".carousel__nav--button");

// arrange the slides next to one another
const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};
slides.forEach(setSlidePosition);

// helper function
const moveToSlide = (track, currentSlide, targetSlide) => {
  // move to the next slide
  track.style.transform = "translateX(-" + targetSlide.style.left + ")";
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};

const updateDot = (currentDot, targetDot) => {
  currentDot.classList.remove("current-button");
  targetDot.classList.add("current-button");
};
// when i click right, move slides to the left
nextButton.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;
  const currentDot = dotsNav.querySelector(".current-button");
  const nextDot = currentDot.nextElementSibling;
  // console.log(amountToMove)

  moveToSlide(track, currentSlide, nextSlide);
  updateDot(currentDot, nextDot);
});
// when i click left, move slides to the right
prevButton.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current-slide");
  const prevSlide = currentSlide.previousElementSibling;
  const currentDot = dotsNav.querySelector(".current-button");
  const prevDot = currentDot.previousElementSibling;

  moveToSlide(track, currentSlide, prevSlide);
  updateDot(currentDot, prevDot);
});

// when i click the nav indicator, move to that slide
dotsNav.addEventListener("click", (e) => {
  const targetDot = e.target.closest("button");
  if (!targetDot) return;

  const currentSlide = track.querySelector(".current-slide");
  const currentDot = dotsNav.querySelector(".current-button");
  const targetIndex = dots.findIndex((dot) => dot === targetDot);
  // console.log(targetIndex)
  const targetSlide = slides[targetIndex];
  moveToSlide(track, currentSlide, targetSlide);

  updateDot(currentDot, targetDot);
});
// navButton.addEventListener('click', e => {
//   const targetIndex = dots.findIndex(dot => dot === targetDot);
//   if (targetIndex === 0) {
//     prevButton.classList.add('is-hidden');
//     nextButton.classList.remove('is-hidden');
//   }

// })
