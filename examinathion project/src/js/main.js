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
    const slides = document.querySelectorAll(".slide");
    const slider = document.querySelector(".slider");
    let currentIndex = 0;

    function showSlide(index) {
        const totalSlides = slides.length;
        if (index >= totalSlides) currentIndex = 0;
        if (index < 0) currentIndex = totalSlides - 1;

        slider.style.transform = `translateX(${-currentIndex * 100}%)`;
    }

    document.querySelector(".prev").addEventListener("click", function () {
        currentIndex--;
        showSlide(currentIndex);
    });

    document.querySelector(".next").addEventListener("click", function () {
        currentIndex++;
        showSlide(currentIndex);
    });

    setInterval(() => {
        currentIndex++;
        showSlide(currentIndex);
    }, 4000);
});
