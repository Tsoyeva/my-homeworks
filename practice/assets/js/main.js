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

    const msg = addToCart(title, price, qty) === 'added' 
     ? 'Product added succesfully'
     : 'Product uptade successfuly'
    alert (msg)
    

    addToCart(title, price, qty)
    alert ('Product added succesfully')

    document.getElementById('prodTitle').value =''
    document.getElementById('prodPrice').value =''
    document.getElementById('prodQty').valueAsNumber = 1
    showProductList()

}

function showProductList() {
    const cartTotal = CART.reduce((acc, el) => acc + el.price * el.qty, 0)

    let list = '';
    let total = 0;

    CART.forEach((prod, index) => {
        total += prod.price * prod.qty
        list += `<tr>
            <td>${index + 1}</td>
            <td>${prod.isBuy ? '<span class="badge bg-success">Yes</span>' :'<span class="badge bg-danger">No</span>'}</td>
            <td>${product.price.toFixed(2)}</td>
            <td>${product.qty}</td>
            <td>${(prod.price * prod.qty).toFixed(2)}</td>
            <td>
            prod.isBuy <button type="button" class="btn btn-success" onclick="buyProduct(${index})">Buy</button>
            <button type="button" class="btn-danger" onclick="deleteProduct(${index})">Delete</button></td>
        </tr>`
    })

    function buyProduct(index) {
         (CART[index].isBuy) = true
         showProductList() 
    }


    function deleteProduct(index) {
       if (confirm(`Do you want to delete product ${}?`)) {
        CART.splice(index, 1)
        showProductList()
       }
    }

    showProductList()
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const sum = arr.reduceRight((acc, el) => {
        console.log(acc, el);
        return acc + el
        }, 0)
        console.log('sum = ' + sum)

    document.getElementById(cartTotal).innerText = cartTotal.toFixed(2) 
    document.getElementById('product_list').innerHTML = list
    
}