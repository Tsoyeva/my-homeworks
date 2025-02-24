document.addEventListener("DOMContentLoaded", function () {
    function loadComponent(selector, file, callback) {
        fetch(file)
            .then(response => response.text())
            .then(data => {
                document.querySelector(selector).innerHTML = data;
                if (callback) callback();
            })
            .catch(error => console.error(`Ошибка загрузки ${file}:`, error));
    }

    loadComponent("#header", "src/components/header.html", initializeHeader);
    loadComponent("#footer", "src/components/footer.html");
});

function initializeHeader() {
    const menu = document.querySelector(".menu");
    const hamburger = document.querySelector(".hamburger");
    const header = document.querySelector("header");
    const welcomeSection = document.querySelector("#welcome");

    if (!menu || !hamburger || !header || !welcomeSection) return;

    hamburger.addEventListener("click", () => {
        menu.classList.toggle("show");
        header.classList.toggle("menu-open");
    });

    window.addEventListener("scroll", () => {
        const welcomeTop = welcomeSection.offsetTop;
        const scrollPosition = window.scrollY + header.offsetHeight;

        if (scrollPosition >= welcomeTop) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
}
