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

const fraction = {
    numerator: 1,
    denominator: 1,
    set(numerator, denominator) {
        this.numerator = numerator;
        this.denominator = denominator;
    },
    reduce() {
        const gcd = (a, b) => {
            while (b) {
                const temp = b;
                b = a % b;
                a = temp;
            }
            return Math.abs(a);
        };
        const divisor = gcd(this.numerator, this.denominator);
        this.numerator /= divisor;
        this.denominator /= divisor;
    },
    add(n2, d2) {
        const newNumerator = this.numerator * d2 + n2 * this.denominator;
        const newDenominator = this.denominator * d2;
        this.set(newNumerator, newDenominator);
        this.reduce();
    },
    subtract(n2, d2) {
        const newNumerator = this.numerator * d2 - n2 * this.denominator;
        const newDenominator = this.denominator * d2;
        this.set(newNumerator, newDenominator);
        this.reduce();
    },
    multiply(n2, d2) {
        const newNumerator = this.numerator * n2;
        const newDenominator = this.denominator * d2;
        this.set(newNumerator, newDenominator);
        this.reduce();
    },
    divide(n2, d2) {
        const newNumerator = this.numerator * d2;
        const newDenominator = this.denominator * n2;
        this.set(newNumerator, newDenominator);
        this.reduce();
    },
    toString() {
        return `${this.numerator}/${this.denominator}`;
    }
};

function performOperation(operation) {
    const numerator1 = parseInt(document.getElementById("numerator1").value);
    const denominator1 = parseInt(document.getElementById("denominator1").value);
    const numerator2 = parseInt(document.getElementById("numerator2").value);
    const denominator2 = parseInt(document.getElementById("denominator2").value);

    if (isNaN(numerator1) || isNaN(denominator1) || isNaN(numerator2) || isNaN(denominator2) || denominator1 === 0 || denominator2 === 0) {
        document.getElementById("result").innerText = "Введіть коректні числа (знаменники не повинні дорівнювати нулю).";
        return;
    }

    fraction.set(numerator1, denominator1);

    switch (operation) {
        case 'add':
            fraction.add(numerator2, denominator2);
            break;
        case 'subtract':
            fraction.subtract(numerator2, denominator2);
            break;
        case 'multiply':
            fraction.multiply(numerator2, denominator2);
            break;
        case 'divide':
            fraction.divide(numerator2, denominator2);
            break;
        default:
            document.getElementById("result").innerText = "Невідома операція.";
            return;
    }

    document.getElementById("result").innerText = `Результат: ${fraction.toString()}`;
}