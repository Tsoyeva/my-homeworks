let shoppingList = [
    { name: 'Молоко', quantity: 2, bought: false, pricePerUnit: 25, total: 50 },
    { name: 'Хліб', quantity: 1, bought: true, pricePerUnit: 20, total: 20 },
    { name: 'Яйця', quantity: 10, bought: false, pricePerUnit: 5, total: 50 },
    { name: 'Сир', quantity: 1, bought: true, pricePerUnit: 80, total: 80 },
];

function displayShoppingList(list) {

    let notBought = list.filter(item => !item.bought);
    let bought = list.filter(item => item.bought);

    let sortedList = [...notBought, ...bought];

    let table = '<table border="1">';
    table += '<tr><th>Назва</th><th>Кількість</th><th>Ціна за одиницю</th><th>Сума</th><th>Куплено</th></tr>';

    sortedList.forEach(item => {
        table += `<tr>
                    <td>${item.name}</td>
                    <td>${item.quantity}</td>
                    <td>${item.pricePerUnit} грн</td>
                    <td>${item.total} грн</td>
                    <td>${item.bought ? 'Так' : 'Ні'}</td>
                  </tr>`;
    });

    table += '</table>';

    document.body.innerHTML = table;
}


function buyProduct(list, productName) {
    
    let product = list.find(item => item.name.toLowerCase() === productName.toLowerCase());

    if (product) {
        if (!product.bought) {
            product.bought = true;
            console.log(`Продукт "${product.name}" відзначено як придбаний.`);
        } else {
            console.log(`Продукт "${product.name}" вже придбаний.`);
        }
    } else {
        console.log(`Продукт "${productName}" не знайдено у списку.`);
    }
}


displayShoppingList(shoppingList);

buyProduct(shoppingList, 'Яйця');

displayShoppingList(shoppingList);
