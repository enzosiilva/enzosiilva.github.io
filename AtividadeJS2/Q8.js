const prompt = require('prompt-sync')({sigint: true});

let frase = prompt("Digite uma frase:");
frase = frase.toLowerCase();
let quantidadeVogais = 0;

for (let i = 0; i < frase.length; i++) {
    let caractere = frase[i];
    if (caractere === 'a' || caractere === 'e' || caractere === 'i' || 
        caractere === 'o' || caractere === 'u') {
        quantidadeVogais++;
    }
}

console.log("A frase contém " + quantidadeVogais + " vogais");