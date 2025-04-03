const slides = document.querySelectorAll(".carousel-item");
console.log("slides:", slides);
const indicators = document.querySelectorAll(
    "div.carousel-indicators>[data-bs-target='#myCarousel']"
);
const [prevButton, nextButton] = document.querySelectorAll(
    ".carousel-control-prev, .carousel-control-next"
);

let currentIndex = 0;

const changeSlide = (index) => {
    indicators[currentIndex].classList.remove("active");
    slides[currentIndex].classList.remove("active");
    indicators[index].classList.add("active");
    slides[index].classList.add("active");
    currentIndex = index;
};

const activateIndicator = (indicator, index) => {
    if (indicator.dataset.bsSlideTo === index.toString()) {
        changeSlide(index);
    }
};

prevButton.addEventListener("click", () => {
    changeSlide(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
});

nextButton.addEventListener("click", () => {
    changeSlide(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
});

indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
        activateIndicator(indicator, index);
    });
});