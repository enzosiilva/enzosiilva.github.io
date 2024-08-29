const prompt = require('prompt-sync')({sigint: true});

function Primo(numero) {
    if (numero <= 1) return false;
    if (numero === 2) return true;
    
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}


let Num = Number(prompt("Digite um número N:"));

let numerosPrimos = [];
for (let i = 2; i < Num; i++) {
    if (Primo(i)) {
        numerosPrimos.push(i);
    }
}

console.log("Números primos menores que " + Num + ": " + numerosPrimos.join(", "));