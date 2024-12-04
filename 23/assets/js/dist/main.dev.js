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

function checkPalindrome() {
  var num = document.getElementById("number").value;

  if (num.length !== 5 || isNaN(num)) {
    document.getElementById("result-palindrome").innerText = "Будь ласка, введіть п’ятизначне число.";
    return;
  }

  var firstDigit = num[0];
  var secondDigit = num[1];
  var fourthDigit = num[3];
  var fifthDigit = num[4];

  if (firstDigit === fifthDigit && secondDigit === fourthDigit) {
    document.getElementById("result-palindrome").innerText = "\u0427\u0438\u0441\u043B\u043E ".concat(num, " \u0454 \u043F\u0430\u043B\u0456\u043D\u0434\u0440\u043E\u043C\u043E\u043C.");
  } else {
    document.getElementById("result-palindrome").innerText = "\u0427\u0438\u0441\u043B\u043E ".concat(num, " \u043D\u0435 \u0454 \u043F\u0430\u043B\u0456\u043D\u0434\u0440\u043E\u043C\u043E\u043C.");
  }
}

function calculateDiscount() {
  var purchaseAmount = parseFloat(document.getElementById("amount").value);

  if (isNaN(purchaseAmount) || purchaseAmount <= 0) {
    document.getElementById("result-discount").innerText = "Будь ласка, введіть коректну суму покупки.";
    return;
  }

  var discount = 0;

  if (purchaseAmount >= 200 && purchaseAmount < 300) {
    discount = 3;
  } else if (purchaseAmount >= 300 && purchaseAmount < 500) {
    discount = 5;
  } else if (purchaseAmount >= 500) {
    discount = 7;
  }

  var discountAmount = purchaseAmount * discount / 100;
  var totalAmount = purchaseAmount - discountAmount;
  document.getElementById("result-discount").innerText = "\u0421\u0443\u043C\u0430 \u043F\u043E\u043A\u0443\u043F\u043A\u0438: ".concat(purchaseAmount.toFixed(2), " \u0433\u0440\u043D.\n        \u0417\u043D\u0438\u0436\u043A\u0430: ").concat(discount, "% (").concat(discountAmount.toFixed(2), " \u0433\u0440\u043D).\n        \u0421\u0443\u043C\u0430 \u0434\u043E \u043E\u043F\u043B\u0430\u0442\u0438: ").concat(totalAmount.toFixed(2), " \u0433\u0440\u043D.");
}

function analyzeNumbers() {
  var positiveCount = 0;
  var negativeCount = 0;
  var zeroCount = 0;
  var evenCount = 0;
  var oddCount = 0;

  for (var i = 1; i <= 10; i++) {
    var userInput = parseFloat(prompt("\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0447\u0438\u0441\u043B\u043E ".concat(i, " \u0437 10:")));

    if (isNaN(userInput)) {
      alert("Введіть коректне число!");
      i--;
      continue;
    }

    if (userInput > 0) {
      positiveCount++;
    } else if (userInput < 0) {
      negativeCount++;
    } else {
      zeroCount++;
    }

    if (userInput % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }

  document.getElementById("result-stat").innerText = "\n                \u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430:\n                \u0414\u043E\u0434\u0430\u0442\u043D\u0456\u0445 \u0447\u0438\u0441\u0435\u043B: ".concat(positiveCount, "\n                \u0412\u0456\u0434'\u0454\u043C\u043D\u0438\u0445 \u0447\u0438\u0441\u0435\u043B: ").concat(negativeCount, "\n                \u041D\u0443\u043B\u0456\u0432: ").concat(zeroCount, "\n                \u041F\u0430\u0440\u043D\u0438\u0445 \u0447\u0438\u0441\u0435\u043B: ").concat(evenCount, "\n                \u041D\u0435\u043F\u0430\u0440\u043D\u0438\u0445 \u0447\u0438\u0441\u0435\u043B: ").concat(oddCount, "\n            ");
}

function showDays() {
  var day = 1;

  while (true) {
    var dayName = void 0;

    switch (day) {
      case 1:
        dayName = "Понеділок";
        break;

      case 2:
        dayName = "Вівторок";
        break;

      case 3:
        dayName = "Середа";
        break;

      case 4:
        dayName = "Четвер";
        break;

      case 5:
        dayName = "П'ятниця";
        break;

      case 6:
        dayName = "Субота";
        break;

      case 7:
        dayName = "Неділя";
        break;
    }

    if (!confirm("".concat(dayName, ". \u0425\u043E\u0447\u0435\u0448 \u043F\u043E\u0431\u0430\u0447\u0438\u0442\u0438 \u043D\u0430\u0441\u0442\u0443\u043F\u043D\u0438\u0439 \u0434\u0435\u043D\u044C?"))) {
      alert("Дякую! Гарного дня!");
      break;
    }

    day = day === 7 ? 1 : day + 1;
  }
}

function guessNumber() {
  var min = 0;
  var max = 100;
  var guess;
  alert("Загадайте число від 0 до 100. Ми його вгадаємо!");

  while (true) {
    guess = Math.floor((min + max) / 2);
    var response = prompt("\u0412\u0430\u0448\u0435 \u0447\u0438\u0441\u043B\u043E > ".concat(guess, ", < ").concat(guess, " \u0430\u0431\u043E == ").concat(guess, "? (\u0432\u0432\u0435\u0434\u0456\u0442\u044C >, < \u0430\u0431\u043E ==)"));

    if (response === ">") {
      min = guess + 1;
    } else if (response === "<") {
      max = guess - 1;
    } else if (response === "==") {
      alert("\u0412\u0430\u0448\u0435 \u0447\u0438\u0441\u043B\u043E ".concat(guess, "!"));
      break;
    } else {
      alert("Будь ласка, введіть коректну відповідь: >, < або ==");
    }
  }
}