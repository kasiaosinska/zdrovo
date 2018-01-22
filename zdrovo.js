const nextSlide = () => {
  slides[currentSlide].classList.remove('showing');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('showing');
};
const slides = document.querySelectorAll('.slides .slide');
let currentSlide = 0;

(function() {
  setInterval(nextSlide, 3000);
})();
