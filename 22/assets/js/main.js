const a = 0.1;
const b = 0.2;

const result = +(a + b).toFixed(2);
console.log(result);


const str = "1"; 
const num = 2;   

const sum = Number(str) + num;

console.log(`${sum}`);

function calculateFiles () {
    const flashSizeGB = document.getElementById('flashSize').value;
    const fileSizeMB = 820;
    const flashSizeMB = flashSizeGB * 1024;
    const fileCount = Math.floor(flashSizeMB / fileSizeMB);
    document.getElementById('result-mb').innerText =
    `На флешку об'ємом ${flashSizeGB} ГБ поміститься ${fileCount} файли/ів розміром 820 МБ.`;
}

function calculateChocolates() {
    const money = parseFloat(document.getElementById("money").value);
    const price = parseFloat(document.getElementById("price").value);

    if (isNaN(money) || isNaN(price) || money < 0 || price <= 0) {
        document.getElementById("result-choco").innerText = "Введіть коректне значення.";
        return;
    }
    const chocolates = Math.floor(money / price); 
    const change = (money % price).toFixed(2);   

    document.getElementById("result-choco").innerText =
        `Ви можете купити ${chocolates} шт. Ваша решта: ${change} грн.`;
}