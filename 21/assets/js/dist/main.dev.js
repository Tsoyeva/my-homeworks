"use strict";

function calculateArea() {
  var radius = parseFloat(prompt("Enter the radius of the circle:"));
  var output = document.getElementById("output-circle");

  if (isNaN(radius) || radius <= 0) {
    output.textContent = "Please enter a valid positive number.";
    return;
  }

  var area = Math.PI * Math.pow(radius, 2);
  output.textContent = "The area of the circle with radius ".concat(radius, " is ").concat(area.toFixed(2), " square units.");
}

function calculateSpeed() {
  var distance = parseFloat(prompt("Enter the distance between the two cities in kilometers:"));
  var time = parseFloat(prompt("Enter the time in hours you want to reach your destination:"));
  var output = document.getElementById("output-speed");

  if (isNaN(distance) || distance <= 0 || isNaN(time) || time <= 0) {
    output.textContent = "Please enter valid positive numbers for both distance and time.";
    return;
  }

  var speed = distance / time;
  output.textContent = "To cover ".concat(distance, " km in ").concat(time, " hours, you need to travel at a speed of ").concat(speed.toFixed(2), " km/h.");
}

function convertCurrency() {
  var exchangeRate = 0.92;
  var dollars = parseFloat(prompt("Enter the amount in USD:"));
  var output = document.getElementById("output-currency");

  if (isNaN(dollars) || dollars <= 0) {
    output.textContent = "Please enter a valid positive number for the amount in USD.";
    return;
  }

  var euros = dollars * exchangeRate;
  output.textContent = "".concat(dollars, " USD is equal to ").concat(euros.toFixed(2), " EUR.");
}