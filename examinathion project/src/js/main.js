

document.addEventListener("DOMContentLoaded", function () {
    const sliderTrack = document.querySelector(".slider-track");
    const slides = document.querySelectorAll(".slide");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    let currentIndex = 0;
    const slideWidth = slides[0].clientWidth; 

  
    function moveSlide(index) {
        if (index < 0) {
            currentIndex = slides.length - 1; 
        } else if (index >= slides.length) {
            currentIndex = 0; 
        } else {
            currentIndex = index;
        }
        sliderTrack.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    nextButton.addEventListener("click", function () {
        moveSlide(currentIndex + 1);
    });

    prevButton.addEventListener("click", function () {
        moveSlide(currentIndex - 1);
    });

    let autoSlide = setInterval(() => moveSlide(currentIndex + 1), 3000);

    document.querySelector(".slider-container").addEventListener("mouseenter", () => {
        clearInterval(autoSlide); 
    });

    document.querySelector(".slider-container").addEventListener("mouseleave", () => {
        autoSlide = setInterval(() => moveSlide(currentIndex + 1), 3000); 
    });

    window.addEventListener("resize", () => {
        moveSlide(currentIndex);
    });
});

