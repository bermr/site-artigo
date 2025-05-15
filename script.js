const track = document.querySelector(".carousel-track");
const slides = Array.from(document.querySelectorAll(".carousel-slide"));
const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");

let currentIndex = 0;

function updateCarousel() {
  const slideWidth = slides[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
}

btnNext.addEventListener("click", () => {
  resetAutoplay();
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
});

btnPrev.addEventListener("click", () => {
  resetAutoplay();
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel();
});

let autoplayInterval = setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
}, 8000);

function resetAutoplay() {
  clearInterval(autoplayInterval);
}

window.addEventListener("resize", updateCarousel);

updateCarousel();
