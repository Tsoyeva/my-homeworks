function calculateArea() {
    const radius = parseFloat(prompt("Enter the radius of the circle:"));
    const output = document.getElementById("output-circle");

    if (isNaN(radius) || radius <= 0) {
        output.textContent = "Please enter a valid positive number.";
        return;
    }

    const area = Math.PI * Math.pow(radius, 2);

    output.textContent = 
        `The area of the circle with radius ${radius} is ${area.toFixed(2)} square units.`;
}

function calculateSpeed() {
    const distance = parseFloat(prompt("Enter the distance between the two cities in kilometers:"));

    const time = parseFloat(prompt("Enter the time in hours you want to reach your destination:"));

    const output = document.getElementById("output-speed");

    if (isNaN(distance) || distance <= 0 || isNaN(time) || time <= 0) {
        output.textContent = "Please enter valid positive numbers for both distance and time.";
        return;
    }

    const speed = distance / time;

    output.textContent = 
        `To cover ${distance} km in ${time} hours, you need to travel at a speed of ${speed.toFixed(2)} km/h.`;
}
function convertCurrency() {
     const exchangeRate = 0.92; 
    
    const dollars = parseFloat(prompt("Enter the amount in USD:"));
    
    const output = document.getElementById("output-currency")

    if (isNaN(dollars) || dollars <= 0) {
        output.textContent = 
            "Please enter a valid positive number for the amount in USD.";
        return;
    }

    const euros = dollars * exchangeRate;

    output.textContent = 
        `${dollars} USD is equal to ${euros.toFixed(2)} EUR.`;
}