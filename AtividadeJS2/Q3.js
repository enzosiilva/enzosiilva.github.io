const prompt = require('prompt-sync')({sigint: true});

let num1 = Number(prompt("Digite o valor de uma idade: "));
let num2 = Number(prompt("Digite o valor de uma idade: "));
let num3 = Number(prompt("Digite o valor de uma idade: "));

if ((num1 >= 18) && (num2 < 18) && (num3 <18)){
    console.log("Apenas o 1 e maior de idade")
} else if ((num1 < 18) && (num2 >= 18) && (num3 <18)){
    console.log("Apenas o 2 e maior de idade")
} else if ((num1 < 18) && (num2 < 18) && (num3 >= 18)){
    console.log("Apenas o 3 e maior de idade")
} else if ((num1 < 18) && (num2 < 18) && (num3 < 18)){
    console.log("Nenhum e maior de idade")
} else if ((num1 >= 18) && (num2 >= 18) && (num3 >= 18)){
    console.log("OS 3 sao maiores de idade")
}