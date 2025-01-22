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

  var msg = addToCart(title, price, qty) === 'added' ? 'Product added succesfully' : 'Product uptade successfuly';
  alert(msg);
  addToCart(title, price, qty);
  alert('Product added succesfully');
  document.getElementById('prodTitle').value = '';
  document.getElementById('prodPrice').value = '';
  document.getElementById('prodQty').valueAsNumber = 1;
  showProductList();
}

function showProductList() {
  var cartTotal = CART.reduce(function (acc, el) {
    return acc + el.price * el.qty;
  }, 0);
  var list = '';
  var total = 0;
  CART.forEach(function (prod, index) {
    total += prod.price * prod.qty;
    list += "<tr>\n            <td>".concat(index + 1, "</td>\n            <td>").concat(prod.isBuy ? '<span class="badge bg-success">Yes</span>' : '<span class="badge bg-danger">No</span>', "</td>\n            <td>").concat(product.price.toFixed(2), "</td>\n            <td>").concat(product.qty, "</td>\n            <td>").concat((prod.price * prod.qty).toFixed(2), "</td>\n            <td><button type=\"button\" class=\"btn-danger\" onclick=\"deleteProduct(").concat(index, ")\">Delete</button></td>\n        </tr>");
  });

  function deleteProduct(index) {
    if (confirm("Do you want to delete product?")) {
      CART.splice(index, 1);
      showProductList();
    }
  }

  document.getElementById(cartTotal).innerText = cartTotal.toFixed(2);
  document.getElementById('product_list').innerHTML = list;
}