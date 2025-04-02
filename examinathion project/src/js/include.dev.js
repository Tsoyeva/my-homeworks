"use strict";

document.addEventListener("DOMContentLoaded", function () {
  Promise.allSettled([loadComponent("#header", "src/components/header.html", function () {
    initializeHeader();
    initializeLanguageDropdown();
  }), loadComponent("#footer", "src/components/footer.html")]).then(function () {
    document.dispatchEvent(new CustomEvent("componentsLoaded"));
  });
});

function loadComponent(selector, file, callback) {
  return fetch(file).then(function (response) {
    return response.text();
  }).then(function (data) {
    document.querySelector(selector).innerHTML = data;
    if (callback) callback();
  })["catch"](function (error) {
    return console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 ".concat(file, ":"), error);
  });
}

function initializeHeader() {
  let menu = document.querySelector(".menu");
  let hamburger = document.querySelector(".hamburger");
  let header = document.querySelector("header");
  let welcomeSection = document.querySelector("#welcome");
  if (!menu || !hamburger || !header) return;
  hamburger.addEventListener("click", function () {
    menu.classList.toggle("show");
    header.classList.toggle("menu-open");
    hamburger.classList.toggle("active");
  });

  function handleScroll() {
    let scrollPosition = window.scrollY;

    if (scrollPosition > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", handleScroll);
}

function initializeLanguageDropdown() {
  let dropdown = document.querySelector(".language-dropdown");

  if (!dropdown) {
    console.error("Не найден элемент .language-dropdown");
    return;
  }

  var toggle = dropdown.querySelector(".language-toggle");
  var menu = dropdown.querySelector(".language-menu");
  var select = document.getElementById("lang");
  toggle.addEventListener("click", function (event) {
    event.stopPropagation();
    dropdown.classList.toggle("active");
  });
  document.querySelectorAll(".language-menu li").forEach(function (item) {
    item.addEventListener("click", function () {
      var selectedLang = this.getAttribute("data-lang");
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
}

;