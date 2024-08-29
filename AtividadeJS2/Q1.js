
const prompt = require('prompt-sync')({sigint: true});

let num = Number(prompt("Digite o valor de um numero: "));

if ((num % 5 == 0) && (num % 3 == 0)){
    console.log("O numero e divisivel por 3 e 5")
} else{
    console.log("o numero n e divisivel por 3 e 5")
}
