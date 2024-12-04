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

function checkPalindrome() {
    const num = document.getElementById("number").value;

    if (num.length !== 5 || isNaN(num)) {
        document.getElementById("result-palindrome").innerText = 
            "Будь ласка, введіть п’ятизначне число.";
        return;
    }

    const firstDigit = num[0];
    const secondDigit = num[1];
    const fourthDigit = num[3];
    const fifthDigit = num[4];

    if (firstDigit === fifthDigit && secondDigit === fourthDigit) {
        document.getElementById("result-palindrome").innerText = 
            `Число ${num} є паліндромом.`;
    } else {
        document.getElementById("result-palindrome").innerText = 
            `Число ${num} не є паліндромом.`;
    }
}

function calculateDiscount() {
    const purchaseAmount = parseFloat(document.getElementById("amount").value);

    if (isNaN(purchaseAmount) || purchaseAmount <= 0) {
        document.getElementById("result-discount").innerText = 
            "Будь ласка, введіть коректну суму покупки.";
        return;
    }

    let discount = 0;
    if (purchaseAmount >= 200 && purchaseAmount < 300) {
        discount = 3;
    } else if (purchaseAmount >= 300 && purchaseAmount < 500) {
        discount = 5;
    } else if (purchaseAmount >= 500) {
        discount = 7;
    }

    const discountAmount = (purchaseAmount * discount) / 100;
    const totalAmount = purchaseAmount - discountAmount;

    document.getElementById("result-discount").innerText = 
        `Сума покупки: ${purchaseAmount.toFixed(2)} грн.
        Знижка: ${discount}% (${discountAmount.toFixed(2)} грн).
        Сума до оплати: ${totalAmount.toFixed(2)} грн.`;
}

function analyzeNumbers() {
    let positiveCount = 0;
            let negativeCount = 0;
            let zeroCount = 0;
            let evenCount = 0;
            let oddCount = 0;

            for (let i = 1; i <= 10; i++) {
                const userInput = parseFloat(prompt(`Введіть число ${i} з 10:`));

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

            document.getElementById("result-stat").innerText = `
                Статистика:
                Додатніх чисел: ${positiveCount}
                Від'ємних чисел: ${negativeCount}
                Нулів: ${zeroCount}
                Парних чисел: ${evenCount}
                Непарних чисел: ${oddCount}
            `;
}

function showDays() {
    let day = 1; 

    while (true) {
        let dayName;

        switch (day) {
            case 1: dayName = "Понеділок"; break;
            case 2: dayName = "Вівторок"; break;
            case 3: dayName = "Середа"; break;
            case 4: dayName = "Четвер"; break;
            case 5: dayName = "П'ятниця"; break;
            case 6: dayName = "Субота"; break;
            case 7: dayName = "Неділя"; break;
        }

        if (!confirm(`${dayName}. Хочеш побачити наступний день?`)) {
            alert("Дякую! Гарного дня!");
            break;
        }

        day = day === 7 ? 1 : day + 1; 
    }
}

function guessNumber() {
    let min = 0; 
    let max = 100; 
    let guess; 

    alert("Загадайте число від 0 до 100. Ми його вгадаємо!");

    while (true) {
        guess = Math.floor((min + max) / 2);

        const response = prompt(
            `Ваше число > ${guess}, < ${guess} або == ${guess}? (введіть >, < або ==)`
        );

        if (response === ">") {
            min = guess + 1;
        } else if (response === "<") {
            max = guess - 1;
        } else if (response === "==") {
            alert(`Ваше число ${guess}!`);
            break;
        } else {
            alert("Будь ласка, введіть коректну відповідь: >, < або ==");
        }
    }
}