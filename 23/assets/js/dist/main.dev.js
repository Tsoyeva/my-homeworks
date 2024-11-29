"use strict";

function checkAge() {
  var age = parseFloat(document.getElementById("age").value);

  if (isNaN(age) || age < 0) {
    document.getElementById("result-test").innerText = "Будь-ласка, введіть коректний вік.";
    return;
  }

  var category;

  if (age >= 0 && age <= 11) {
    category = "Дитина";
  } else if (age >= 12 && age <= 17) {
    category = "Підліток";
  } else if (age >= 18 && age <= 59) {
    category = "Дорослий";
  } else if (age >= 60) {
    category = "Пенсіонер";
  } else {
    category = "Невідома вікова категория.";
  }

  document.getElementById("result-test").innerText = "\u0412\u0438 \u043D\u0430\u043B\u0435\u0436\u0438\u0442\u0435 \u0434\u043E \u0433\u0440\u0443\u043F\u0438: ".concat(category);
}

function getSpecialCharacter() {
  var digit = parseInt(document.getElementById("digit").value);
  var specialCharacters = {
    1: "!",
    2: "@",
    3: "#",
    4: "$",
    5: "%",
    6: "^",
    7: "&",
    8: "*",
    9: "(",
    0: ")"
  };

  if (isNaN(digit) || digit < 0 || digit > 9) {
    document.getElementById("result-spec").innerText = "Введить число от 0 до 9.";
    return;
  }

  var specialChar = specialCharacters[digit];
  document.getElementById("result-spec").innerText = "\u041D\u0430 \u043A\u043B\u0430\u0432\u0456\u0448\u0456 ".concat(digit, " \u0437\u043D\u0430\u0445\u043E\u0434\u0438\u0442\u044C\u0441\u044F \u0441\u043F\u0435\u0446\u0441\u0438\u043C\u0432\u043E\u043B \"").concat(specialChar, "\"");
}

function calculateSum() {
  var start = parseInt(document.getElementById("start").value, 10);
  var end = parseInt(document.getElementById("end").value, 10);

  if (isNaN(start) || isNaN(end)) {
    document.getElementById("result-range").innerText = "Введіть коректне значення.";
    return;
  }

  if (start > end) {
    document.getElementById("result-range").innerText = "Початкове число має бути менше або дорівнювати кінцевому числу.";
    return;
  }

  var sum = 0;

  for (var i = start; i <= end; i++) {
    sum += i;
  }

  document.getElementById("result-range").innerText = "\u0421\u0443\u043C\u0430 \u0432\u0456\u0434 ".concat(start, " \u0434\u043E ").concat(end, " \u0434\u043E\u0440\u0456\u0432\u043D\u044E\u0454: ").concat(sum);
}

function findGCD() {
  var num1 = parseInt(document.getElementById("num1").value, 10);
  var num2 = parseInt(document.getElementById("num2").value, 10);

  if (isNaN(num1) || isNaN(num2) || num1 <= 0 || num2 <= 0) {
    document.getElementById("result-gcd").innerText = "Введіть коректне значення.";
    return;
  }

  function gcd(a, b) {
    while (b !== 0) {
      var temp = b;
      b = a % b;
      a = temp;
    }

    return a;
  }

  var result = gcd(num1, num2);
  document.getElementById("result-gcd").innerText = "\u041D\u0430\u0438\u0431\u0456\u043B\u044C\u0448\u0438\u0439 \u0441\u043F\u0456\u043B\u044C\u043D\u0438\u0439\u0439 \u0434\u0456\u043B\u044C\u043D\u0438\u043A \u0447\u0438\u0441\u0435\u043B ".concat(num1, " \u0438 ").concat(num2, ": ").concat(result);
}