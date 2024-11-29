function checkAge() {
    const age = parseFloat(document.getElementById("age").value);

    if (isNaN(age) || age < 0) {
   
        document.getElementById("result-test").innerText = "Будь-ласка, введіть коректний вік.";
        return;
    }
    let category;
    if (age >= 0 && age <= 11) {
        category = "Дитина";
    } 
    else if (age >= 12 && age <= 17) {
        category = "Підліток";
    }
     else if (age >= 18 && age <= 59) {
        category = "Дорослий";
    } 
    else if (age >= 60) {
        category = "Пенсіонер";
    } 
    else {
        category = "Невідома вікова категория.";
    }

  
    document.getElementById("result-test").innerText = `Ви належите до групи: ${category}`;
}

function getSpecialCharacter() {

    const digit = parseInt(document.getElementById("digit").value);

    const specialCharacters = {
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

    const specialChar = specialCharacters[digit];
    document.getElementById("result-spec").innerText = `На клавіші ${digit} знаходиться спецсимвол "${specialChar}"`;
}


function calculateSum() {

    const start = parseInt(document.getElementById("start").value, 10);
    const end = parseInt(document.getElementById("end").value, 10);

    if (isNaN(start) || isNaN(end)) {
        document.getElementById("result-range").innerText = "Введіть коректне значення.";
        return;
    }

    if (start > end) {
        document.getElementById("result-range").innerText = "Початкове число має бути менше або дорівнювати кінцевому числу.";
        return;
    }

    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }

    document.getElementById("result-range").innerText = `Сума від ${start} до ${end} дорівнює: ${sum}`;
}

function findGCD() {
 
    const num1 = parseInt(document.getElementById("num1").value, 10);
    const num2 = parseInt(document.getElementById("num2").value, 10);

    if (isNaN(num1) || isNaN(num2) || num1 <= 0 || num2 <= 0) {
        document.getElementById("result-gcd").innerText = "Введіть коректне значення.";
        return;
    }

    function gcd(a, b) {
        while (b !== 0) {
            const temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    const result = gcd(num1, num2);

    document.getElementById("result-gcd").innerText = `Наибільший спільнийй дільник чисел ${num1} и ${num2}: ${result}`;
}