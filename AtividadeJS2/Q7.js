const prompt = require('prompt-sync')({sigint: true});
let numeros = [];
let numero;

do {
    numero = Number(prompt("Digite um número (ou 0 para terminar):"));
    if (numero !== 0) {
        numeros.push(numero);
    }
} while (numero !== 0);


if (numeros.length > 0) {
    let maiorNumero = Math.max(...numeros);
    let menorNumero = Math.min(...numeros);
    console.log("Maior número: " + maiorNumero + "Menor número: " + menorNumero);
} else {
    console.log("Nenhum número foi inserido");
}