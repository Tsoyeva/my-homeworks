document.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector(".menu");
    const hamburger = document.querySelector(".hamburger");
    const header = document.querySelector("header");
    const welcomeSection = document.querySelector("#welcome");

    hamburger.addEventListener("click", () => {
        if (!menu.classList.contains("show")) {
            header.classList.add("menu-open");
            setTimeout(() => {
                menu.classList.add("show");
            }, 250);
        } else {
            menu.classList.remove("show");
            setTimeout(() => {
                header.classList.remove("menu-open");
            }, 250);
        }
    });

    document.querySelectorAll(".menu a").forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.remove("show");
            setTimeout(() => {
                header.classList.remove("menu-open");
            }, 300);

            if (window.scrollY < welcomeSection.offsetTop - header.offsetHeight) {
                header.classList.remove("scrolled");
            }
        });
    });

    window.addEventListener("scroll", () => {
        if (window.scrollY >= welcomeSection.offsetTop - header.offsetHeight) {
            header.classList.add("scrolled");
        } else if (!menu.classList.contains("show")) {
            header.classList.remove("scrolled");
        }
    });
});

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

