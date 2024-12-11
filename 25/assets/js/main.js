const car = {
    manufacturer: "Chevrolet", 
    model: "Impala",       
    year: 1967,          
    averageSpeed: 80,       
    fuelTankCapacity: 50,  
    fuelConsumption: 6,     
    driver: "Jim",    

    displayInfo() {
        return `
            <p><strong>Виробник:</strong> ${this.manufacturer}</p>
            <p><strong>Модель:</strong> ${this.model}</p>
            <p><strong>Рік випуску:</strong> ${this.year}</p>
            <p><strong>Середня швидкість:</strong> ${this.averageSpeed} км/год</p>
            <p><strong>Обсяг паливного баку:</strong> ${this.fuelTankCapacity} л</p>
            <p><strong>Середня витрата палива:</strong> ${this.fuelConsumption} л/100 км</p>
            <p><strong>Водій:</strong> ${this.driver}</p>
        `;
    }
};

document.getElementById("show-info").addEventListener("click", () => {
    const carInfoDiv = document.getElementById("car-info");
    carInfoDiv.innerHTML = car.displayInfo();
});

const time = {
    hours: 20,
    minutes: 59,
    seconds: 45,

    displayTime() {
        const h = this.hours < 10 ? "0" + this.hours : this.hours;
        const m = this.minutes < 10 ? "0" + this.minutes : this.minutes;
        const s = this.seconds < 10 ? "0" + this.seconds : this.seconds;
        return `${h}:${m}:${s}`;
    },

    addSeconds(sec) {
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

    addMinutes(min) {
        this.minutes += min;
        if (this.minutes >= 60) {
            this.hours += Math.floor(this.minutes / 60);
            this.minutes = this.minutes % 60;
        }
        this.hours = this.hours % 24; 
    },

    addHours(hr) {
        this.hours = (this.hours + hr) % 24; 
    }
};

function showTime() {
    document.getElementById("time-display").innerText = `Поточний час: ${time.displayTime()}`;
}

function addSeconds() {
    const sec = parseInt(prompt("Введіть кількість секунд для додавання:"), 10);
    if (!isNaN(sec) && sec > 0) {
        time.addSeconds(sec);
        showTime();
    } else {
        alert("Некоректне значення секунд.");
    }
}

function addMinutes() {
    const min = parseInt(prompt("Введіть кількість хвилин для додавання:"), 10);
    if (!isNaN(min) && min > 0) {
        time.addMinutes(min);
        showTime();
    } else {
        alert("Некоректне значення хвилин.");
    }
}

function addHours() {
    const hr = parseInt(prompt("Введіть кількість годин для додавання:"), 10);
    if (!isNaN(hr) && hr > 0) {
        time.addHours(hr);
        showTime();
    } else {
        alert("Некоректне значення годин.");
    }
}

function calcFraction(operator, fisrtNumerator, firstDenumenator, secondNumerator, secondDenumerator) {
    const firstFraction = {
        numerator: fisrtNumerator,
        denumerator: firstDenumenator
    };
    const secondFraction = {
        numerator: secondNumerator,
        denumerator: secondDenumerator
    }

    if (operator === '+') {
        if (firstDenumenator !== secondDenumerator) {
            const commonDenumerator = getCommonDenumerator(firstDenumenator, secondDenumerator);
             return {
                numerator: firstFraction.numerator + secondFraction.numerator,
                denumenator: commonDenumerator
            }
        }
        return {
            numerator: firstFraction.numerator + secondFraction.numerator,
            denumenator: firstFraction.denumerator
        }
    } else if (operator === '-') {
        if (firstDenumenator !== secondDenumerator) {
            const commonDenumerator = getCommonDenumerator(firstDenumenator, secondDenumerator);
             return {
                numerator: firstFraction.numerator - secondFraction.numerator,
                denumenator: commonDenumerator
            }
        }
        return {
            numerator: firstFraction.numerator - secondFraction.numerator,
            denumenator: firstFraction.denumerator
        }
    } else if (operator === '/') {
        return {
            numerator: firstFraction.numerator * secondFraction.denumerator,
            denumenator: firstFraction.denumerator * secondFraction.numerator
        }

    } else if (operator === '*') {
        return {
            numerator: firstFraction.numerator * secondFraction.numerator,
            denumenator: firstFraction.denumerator * secondFraction.denumerator
        }
    }
}

function getCommonDenumerator(firstDenumenator, secondDenumerator) {
    if (firstDenumenator > secondDenumerator) {
        let rest = firstDenumenator % secondDenumerator;
        let second = secondDenumerator;

        while(rest > 0) {
            const temporary = rest;
            rest = second % rest;
            second = temporary;
        }

        return firstDenumenator * secondDenumerator / second;
    } else {
        let rest = secondDenumerator % firstDenumenator;
        let second = firstDenumenator;
        while (rest > 0) {
            const temporary = rest;
            rest= second % rest;
            second = temporary;
        }
        return firstDenumenator * secondDenumerator / second;
    } 
}

function performOperation(operation) {
    const numerator1 = parseInt(document.getElementById("fisrtNumerator").value);
    const denominator1 = parseInt(document.getElementById("firstDenumenator").value);
    const numerator2 = parseInt(document.getElementById("secondNumerator").value);
    const denominator2 = parseInt(document.getElementById("secondDenumerator").value);

    if (isNaN(numerator1) || isNaN(denominator1) || isNaN(numerator2) || isNaN(denominator2) || denominator1 === 0 || denominator2 === 0) {
        document.getElementById("result").innerText = "Введіть коректні числа (знаменники не повинні дорівнювати нулю).";
        return;
    }
    const result = calcFraction(operation, numerator1, denominator1, numerator2, denominator2);
    document.getElementById("result").innerText = `Результат: ${result.numerator}/${result.denumenator}`;
}
