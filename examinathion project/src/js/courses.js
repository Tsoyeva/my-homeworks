document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".horizontal-slider");
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    let index = 0;
    const slideWidth = slides[0].clientWidth;

    function updateSlider() {
        slider.style.transform = `translateX(-${index * slideWidth}px)`;
    }

    nextBtn.addEventListener("click", function () {
        if (index < slides.length - 1) {
            index++;
        } else {
            index = 0;
        }
        updateSlider();
    });

    prevBtn.addEventListener("click", function () {
        if (index > 0) {
            index--;
        } else {
            index = slides.length - 1;
        }
        updateSlider();
    });

    window.addEventListener("resize", function () {
        updateSlider();
    });
});
