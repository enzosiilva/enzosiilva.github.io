const prompt = require('prompt-sync')({sigint: true});

let num1 = Number(prompt("Digite o valor de um numero: "));
let num2 = Number(prompt("Digite o valor de um numero2: "));
let num3 = Number(prompt("Digite o valor de um numero3: "));

if ((num1 > num2) && (num1>num3) && (num2>num3)){
    console.log("Maior:", num1, "Menor:", num3)

} else if ((num2 > num1) && (num2>num3) && (num1>num3)){
    console.log("Maior:", num2, "Menor:", num3)

} else if ((num3 > num1) && (num3>num2) && (num1>num2)){
    console.log("Maior:", num3, "Menor:", num2)

} else if ((num1 > num2) && (num1>num2) && (num3>num2)){
    console.log("Maior:", num1, "Menor:", num2)

} else if ((num3 > num1) && (num3>num2) && (num2>num1)){
        console.log("Maior:", num3, "Menor:", num1)

} else if ((num2 > num1) && (num2>num3) && (num3>num1)){
            console.log("Maior:", num2, "Menor:", num1)}
