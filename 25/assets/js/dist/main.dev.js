"use strict";

var car = {
  manufacturer: "Chevrolet",
  model: "Impala",
  year: 1967,
  averageSpeed: 80,
  fuelTankCapacity: 50,
  fuelConsumption: 6,
  driver: "Jim",
  displayInfo: function displayInfo() {
    return "\n            <p><strong>\u0412\u0438\u0440\u043E\u0431\u043D\u0438\u043A:</strong> ".concat(this.manufacturer, "</p>\n            <p><strong>\u041C\u043E\u0434\u0435\u043B\u044C:</strong> ").concat(this.model, "</p>\n            <p><strong>\u0420\u0456\u043A \u0432\u0438\u043F\u0443\u0441\u043A\u0443:</strong> ").concat(this.year, "</p>\n            <p><strong>\u0421\u0435\u0440\u0435\u0434\u043D\u044F \u0448\u0432\u0438\u0434\u043A\u0456\u0441\u0442\u044C:</strong> ").concat(this.averageSpeed, " \u043A\u043C/\u0433\u043E\u0434</p>\n            <p><strong>\u041E\u0431\u0441\u044F\u0433 \u043F\u0430\u043B\u0438\u0432\u043D\u043E\u0433\u043E \u0431\u0430\u043A\u0443:</strong> ").concat(this.fuelTankCapacity, " \u043B</p>\n            <p><strong>\u0421\u0435\u0440\u0435\u0434\u043D\u044F \u0432\u0438\u0442\u0440\u0430\u0442\u0430 \u043F\u0430\u043B\u0438\u0432\u0430:</strong> ").concat(this.fuelConsumption, " \u043B/100 \u043A\u043C</p>\n            <p><strong>\u0412\u043E\u0434\u0456\u0439:</strong> ").concat(this.driver, "</p>\n        ");
  }
};
document.getElementById("show-info").addEventListener("click", function () {
  var carInfoDiv = document.getElementById("car-info");
  carInfoDiv.innerHTML = car.displayInfo();
});
var time = {
  hours: 20,
  minutes: 59,
  seconds: 45,
  displayTime: function displayTime() {
    var h = this.hours < 10 ? "0" + this.hours : this.hours;
    var m = this.minutes < 10 ? "0" + this.minutes : this.minutes;
    var s = this.seconds < 10 ? "0" + this.seconds : this.seconds;
    return "".concat(h, ":").concat(m, ":").concat(s);
  },
  addSeconds: function addSeconds(sec) {
    this.seconds += sec;

    if (this.seconds >= 60) {
      this.minutes += Math.floor(this.seconds / 60);
      this.seconds = this.seconds % 60;
    }

    if (this.minutes >= 60) {
      this.hours += Math.floor(this.minutes / 60);
      this.minutes = this.minutes % 60;
    }

    this.hours = this.hours % 24;
  },
  addMinutes: function addMinutes(min) {
    this.minutes += min;

    if (this.minutes >= 60) {
      this.hours += Math.floor(this.minutes / 60);
      this.minutes = this.minutes % 60;
    }

    this.hours = this.hours % 24;
  },
  addHours: function addHours(hr) {
    this.hours = (this.hours + hr) % 24;
  }
};

function showTime() {
  document.getElementById("time-display").innerText = "\u041F\u043E\u0442\u043E\u0447\u043D\u0438\u0439 \u0447\u0430\u0441: ".concat(time.displayTime());
}

function addSeconds() {
  var sec = parseInt(prompt("Введіть кількість секунд для додавання:"), 10);

  if (!isNaN(sec) && sec > 0) {
    time.addSeconds(sec);
    showTime();
  } else {
    alert("Некоректне значення секунд.");
  }
}

function addMinutes() {
  var min = parseInt(prompt("Введіть кількість хвилин для додавання:"), 10);

  if (!isNaN(min) && min > 0) {
    time.addMinutes(min);
    showTime();
  } else {
    alert("Некоректне значення хвилин.");
  }
}

function addHours() {
  var hr = parseInt(prompt("Введіть кількість годин для додавання:"), 10);

  if (!isNaN(hr) && hr > 0) {
    time.addHours(hr);
    showTime();
  } else {
    alert("Некоректне значення годин.");
  }
}

function calcFraction(operator, fisrtNumerator, firstDenumenator, secondNumerator, secondDenumerator) {
  var firstFraction = {
    numerator: fisrtNumerator,
    denumerator: firstDenumenator
  };
  var secondFraction = {
    numerator: secondNumerator,
    denumerator: secondDenumerator
  };

  if (operator === '+') {
    if (firstDenumenator !== secondDenumerator) {
      var commonDenumerator = getCommonDenumerator(firstDenumenator, secondDenumerator);
      return {
        numerator: firstFraction.numerator + secondFraction.numerator,
        denumenator: commonDenumerator
      };
    }

    return {
      numerator: firstFraction.numerator + secondFraction.numerator,
      denumenator: firstFraction.denumerator
    };
  } else if (operator === '-') {
    if (firstDenumenator !== secondDenumerator) {
      var _commonDenumerator = getCommonDenumerator(firstDenumenator, secondDenumerator);

      return {
        numerator: firstFraction.numerator - secondFraction.numerator,
        denumenator: _commonDenumerator
      };
    }

    return {
      numerator: firstFraction.numerator - secondFraction.numerator,
      denumenator: firstFraction.denumerator
    };
  } else if (operator === '/') {
    return {
      numerator: firstFraction.numerator * secondFraction.denumerator,
      denumenator: firstFraction.denumerator * secondFraction.numerator
    };
  } else if (operator === '*') {
    return {
      numerator: firstFraction.numerator * secondFraction.numerator,
      denumenator: firstFraction.denumerator * secondFraction.denumerator
    };
  }
}

function getCommonDenumerator(firstDenumenator, secondDenumerator) {
  if (firstDenumenator > secondDenumerator) {
    var rest = firstDenumenator % secondDenumerator;
    var second = secondDenumerator;

    while (rest > 0) {
      var temporary = rest;
      rest = second % rest;
      second = temporary;
    }

    return firstDenumenator * secondDenumerator / second;
  } else {
    var _rest = secondDenumerator % firstDenumenator;

    var _second = firstDenumenator;

    while (_rest > 0) {
      var _temporary = _rest;
      _rest = _second % _rest;
      _second = _temporary;
    }

    return firstDenumenator * secondDenumerator / _second;
  }
}

function performOperation(operation) {
  var numerator1 = parseInt(document.getElementById("fisrtNumerator").value);
  var denominator1 = parseInt(document.getElementById("firstDenumenator").value);
  var numerator2 = parseInt(document.getElementById("secondNumerator").value);
  var denominator2 = parseInt(document.getElementById("secondDenumerator").value);

  if (isNaN(numerator1) || isNaN(denominator1) || isNaN(numerator2) || isNaN(denominator2) || denominator1 === 0 || denominator2 === 0) {
    document.getElementById("result").innerText = "Введіть коректні числа (знаменники не повинні дорівнювати нулю).";
    return;
  }

  var result = calcFraction(operation, numerator1, denominator1, numerator2, denominator2);
  document.getElementById("result").innerText = "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442: ".concat(result.numerator, "/").concat(result.denumenator);
}