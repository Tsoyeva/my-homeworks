const CART = [
    {
        title: 'Milk',
        price: 32.5,
        qty: 2,
        isBuy: false
    },
    {
        title: 'Bread',
        price: 21.2,
        qty: 1,
        isBuy: false
    }
]
function addToCart (newtTitle, newPrice, newQty) {
    const ind = CART.findIndex(el => el.title === newTitle)
    let action = 'added'

    if (ind === -1) {
    CART.push ({
        title: title,
        price: price,
        qty: qty,
        isBuy: false

     })
    }
    else {
        CART[ind].qty += newQty
        action = 'updated'
    }
    return action
}

function checkAndAddToCart () {
    const title = document.getElementById('prodTitle').value
    const price = document.getElementById('prodPrice').valueAsNumber
    const qty = document.getElementById('prodQty').valueAsNumber

    if (title==='') {
        alert ("Enter product title, please")
        return
    }
    if (isNaN(price)) {
        alert ("Enter product price, please")
        return
    }
    else {
        if (price <= 0) {
            alert ("Invalid price")
        return
        }
    }
    if (isNaN(qty)) {
        alert ("Enter product quantity, please")
        return
    }
    else {
        if (qty <= 0) {
            alert ("Invalid quantity")
        return
        }
    }

    addToCart(title, price, qty)
    alert ('Product added succesfully')

    document.getElementById('prodTitle').value =''
    document.getElementById('prodPrice').value =''
    document.getElementById('prodQty').valueAsNumber = 1
    

}

function showProductList() {
    let list = '';

    CART.forEach(product => {
        list += `<tr>
            <td>${product.title}</td>
            <td>${product.price}</td>
            <td>${product.qty}</td>
            <td>${product.isBuy}</td>
        </tr>`
    })
}