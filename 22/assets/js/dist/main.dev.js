"use strict";

var a = 0.1;
var b = 0.2;
var result = +(a + b).toFixed(2);
console.log(result);
var str = "1";
var num = 2;
var sum = Number(str) + num;
console.log("".concat(sum));

function calculateFiles() {
  var flashSizeGB = document.getElementById('flashSize').value;
  var fileSizeMB = 820;
  var flashSizeMB = flashSizeGB * 1024;
  var fileCount = Math.floor(flashSizeMB / fileSizeMB);
  document.getElementById('result-mb').innerText = "\u041D\u0430 \u0444\u043B\u0435\u0448\u043A\u0443 \u043E\u0431'\u0454\u043C\u043E\u043C ".concat(flashSizeGB, " \u0413\u0411 \u043F\u043E\u043C\u0456\u0441\u0442\u0438\u0442\u044C\u0441\u044F ").concat(fileCount, " \u0444\u0430\u0439\u043B\u0438/\u0456\u0432 \u0440\u043E\u0437\u043C\u0456\u0440\u043E\u043C 820 \u041C\u0411.");
}

function calculateChocolates() {
  var money = parseFloat(document.getElementById("money").value);
  var price = parseFloat(document.getElementById("price").value);

  if (isNaN(money) || isNaN(price) || money < 0 || price <= 0) {
    document.getElementById("result-choco").innerText = "Введіть коректне значення.";
    return;
  }

  var chocolates = Math.floor(money / price);
  var change = (money % price).toFixed(2);
  document.getElementById("result-choco").innerText = "\u0412\u0438 \u043C\u043E\u0436\u0435\u0442\u0435 \u043A\u0443\u043F\u0438\u0442\u0438 ".concat(chocolates, " \u0448\u0442. \u0412\u0430\u0448\u0430 \u0440\u0435\u0448\u0442\u0430: ").concat(change, " \u0433\u0440\u043D.");
}

function calculateInvest() {
  var deposit = parseFloat(document.getElementById("deposit").value);

  if (isNaN(deposit) || deposit <= 0) {
    document.getElementById("result-bank").innerText = "Введіть коректне значення.";
    return;
  }

  var annualRate = 5;
  var mounths = 2;
  var mounthlyRate = annualRate / 12 / 100;
  var invest = (deposit * mounthlyRate * mounths).toFixed(2);
  document.getElementById("result-bank").innerText = "\u0421\u0443\u043C\u0430 \u043D\u0430\u0440\u0430\u0445\u043E\u0432\u0430\u043D\u0438\u0445 \u0432\u0456\u0434\u0441\u043E\u0442\u043A\u0456\u0432 \u0437\u0430 2 \u043C\u0456\u0441\u044F\u0446\u0456: ".concat(invest, " \u0433\u0440\u043D.");
}

var CART = [{
  title: 'Milk',
  price: 32.5,
  qty: 2,
  isBuy: false
}, {
  title: 'Bread',
  price: 21.2,
  qty: 1,
  isBuy: false
}];

function addToCart(newtTitle, newPrice, newQty) {
  var ind = CART.findIndex(function (el) {
    return el.title === newTitle;
  });
  var action = 'added';

  if (ind === -1) {
    CART.push({
      title: title,
      price: price,
      qty: qty,
      isBuy: false
    });
  } else {
    CART[ind].qty += newQty;
    action = 'updated';
  }

  return action;
}

function checkAndAddToCart() {
  var title = document.getElementById('prodTitle').value;
  var price = document.getElementById('prodPrice').valueAsNumber;
  var qty = document.getElementById('prodQty').valueAsNumber;

  if (title === '') {
    alert("Enter product title, please");
    return;
  }

  if (isNaN(price)) {
    alert("Enter product price, please");
    return;
  } else {
    if (price <= 0) {
      alert("Invalid price");
      return;
    }
  }

  if (isNaN(qty)) {
    alert("Enter product quantity, please");
    return;
  } else {
    if (qty <= 0) {
      alert("Invalid quantity");
      return;
    }
  }

  addToCart(title, price, qty);
  alert('Product added succesfully');
  document.getElementById('prodTitle').value = '';
  document.getElementById('prodPrice').value = '';
  document.getElementById('prodQty').valueAsNumber = 1;
}

function showProductList() {
  var list = '';
  CART.forEach(function (product) {
    list += "<tr>\n            <td>".concat(product.title, "</td>\n            <td>").concat(product.price, "</td>\n            <td>").concat(product.qty, "</td>\n            <td>").concat(product.isBuy, "</td>\n        </tr>");
  });
}