const prompt = require('prompt-sync')({sigint: true});

let palavra = prompt("Digite uma palavra: ")
let palavra1 = prompt("Digite mais uma palavra: ")

let anagrama = palavra.split("").sort().join("")
let anagrama1 = palavra1.split("").sort().join("")

if(anagrama === anagrama1) {
    console.log("as palavras ", palavra, "e", palavra1, "são anagramas")
}else {
    console.log("as palavras ", palavra, "e", palavra1, "não são anagramas")
}