// Carousel

const buttons = document.querySelectorAll("[data-carousel-button]");

const hamburger = document.querySelector("[data-checked]");

function hamburger() {
  document.getElementById("menuSlide").classList.toggle('data-checked="false"');
}

function carousel(button) {
  const offset = button.dataset.carouselButton === "next" ? 1 : -1;
  const slides = button
    .closest("[data-carousel]")
    .querySelector("[data-slides]");

  const activeSlide = slides.querySelector("[data-active]");
  let newIndex = [...slides.children].indexOf(activeSlide) + offset;
  if (newIndex < 0) newIndex = slides.children.length - 1;
  if (newIndex >= slides.children.length) newIndex = 0;

  slides.children[newIndex].dataset.active = true;
  delete activeSlide.dataset.active;
}

function autoRotate() {
  const nextBtn = document.querySelector("[data-carousel-button='next']");
  carousel(nextBtn);
}

let intervalId = setInterval(autoRotate, 5000);

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    clearInterval(intervalId);
    intervalId = setInterval(autoRotate, 5000);
    carousel(button);
  });
});

// Scroll buttons

function scrollArrow() {
  window.scrollTo({ top: 500, behavior: "smooth" });
}

function scrollDown() {
  window.scrollTo({ top: 1950, behavior: "smooth" });
}
