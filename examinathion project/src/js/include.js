document.addEventListener("DOMContentLoaded", function () {
    Promise.allSettled([
        loadComponent("#header", "src/components/header.html", function() {
            initializeHeader();
            initializeLanguageDropdown();
        }),
        loadComponent("#footer", "src/components/footer.html")
    ]).then(() => {
        document.dispatchEvent(new CustomEvent("componentsLoaded"));
    });
});

function loadComponent(selector, file, callback) {
    return fetch(file)
        .then(response => response.text())
        .then(data => {
            document.querySelector(selector).innerHTML = data;
            if (callback) callback();
        })
        .catch(error => console.error(`Ошибка загрузки ${file}:`, error));
}

function initializeHeader() {
    const menu = document.querySelector(".menu");
    const hamburger = document.querySelector(".hamburger");
    const header = document.querySelector("header");
    const welcomeSection = document.querySelector("#welcome");

    if (!menu || !hamburger || !header) return;


    hamburger.addEventListener("click", () => {
        menu.classList.toggle("show");
        header.classList.toggle("menu-open");
        hamburger.classList.toggle("active"); 
    });

    function handleScroll() {
        const scrollPosition = window.scrollY;

        if (scrollPosition > 50) { 
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    }

    window.addEventListener("scroll", handleScroll);
}



function initializeLanguageDropdown() {
    const dropdown = document.querySelector(".language-dropdown");
    if (!dropdown) {
        console.error("Не найден элемент .language-dropdown");
        return;
    }
    const toggle = dropdown.querySelector(".language-toggle");
    const menu = dropdown.querySelector(".language-menu");
    const select = document.getElementById("lang");

    toggle.addEventListener("click", function (event) {
        event.stopPropagation();
        dropdown.classList.toggle("active");
    });

    document.querySelectorAll(".language-menu li").forEach(item => {
        item.addEventListener("click", function () {
            const selectedLang = this.getAttribute("data-lang");
            toggle.textContent = this.textContent + " ▾";
            select.value = selectedLang;
            dropdown.classList.remove("active");
            select.dispatchEvent(new Event("change"));
        });
    });

    document.addEventListener("click", function (event) {
        if (!dropdown.contains(event.target)) {
            dropdown.classList.remove("active");
        }
    });
};
