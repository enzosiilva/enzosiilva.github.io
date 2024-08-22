const prompt = require('prompt-sync')({sigint: true});

let palavra = prompt("Digite uma palavra: ");

let palavraInvertida = palavra.split('').reverse().join('');

if(palavraInvertida === palavra){
    console.log("A palavra",palavra, "e palíndromo");

}else{
    console.log("A palavra não é palindromo: ");
}