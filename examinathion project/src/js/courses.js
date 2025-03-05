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


document.addEventListener("DOMContentLoaded", function () {
    const sliders = document.querySelectorAll(".horizontal-slider");

    sliders.forEach((slider, i) => {
        let index = 0;
        const slides = slider.querySelectorAll(".slide");
        const totalSlides = slides.length;

        const prevBtn = slider.parentElement.querySelector(".prev-btn");
        const nextBtn = slider.parentElement.querySelector(".next-btn");

        function showSlide(newIndex) {
            if (newIndex >= totalSlides) index = 0;
            else if (newIndex < 0) index = totalSlides - 1;
            else index = newIndex;

            slider.style.transform = `translateX(-${index * 100}%)`;
        }

        prevBtn.addEventListener("click", () => showSlide(index - 1));
        nextBtn.addEventListener("click", () => showSlide(index + 1));
    });
});
