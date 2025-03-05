let langSelect;
let lang = rememberLang();

document.addEventListener("componentsLoaded", () => {
    langSelect = document.getElementById("lang");
    
    applyLang(lang);

    langSelect.addEventListener("change", () => {
        lang = langSelect.value;
        applyLang(lang);
        memoriseLang(lang);
    });
});

function applyLang(lang) {
    const elements = document.querySelectorAll("[data-text]");

    elements.forEach((element) => {
        const textKey = element.dataset.text;
        const text = texts[textKey][lang];

        if (text) {
            element.textContent = text;
        }
    });

    langSelect.value = lang;
}

function memoriseLang(lang) {
    localStorage.setItem("lang", lang);
}

function rememberLang() {
    return localStorage.getItem("lang") || "en";
}