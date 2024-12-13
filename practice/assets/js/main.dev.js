"use strict";

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