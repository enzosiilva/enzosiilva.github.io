const prompt = require('prompt-sync')({sigint: true});
let numero = Number(prompt("Digite um número:"));


let fibonacci = [0, 1];

for (let i = 2; ; i++) {
    let proximoNumero = fibonacci[i - 1] + fibonacci[i - 2];
    if (proximoNumero > numero) {
        break;
    }
    fibonacci.push(proximoNumero);
}


console.log("Sequência de Fibonacci até " + numero + ": " + fibonacci.join(", "));