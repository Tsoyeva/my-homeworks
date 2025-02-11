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
