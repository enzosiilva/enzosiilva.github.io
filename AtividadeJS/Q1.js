const prompt = require('prompt-sync')({sigint: true});
let altura = Number(prompt("Você tem quanto de altura?"));
let peso = Number(prompt("Você pesa quanto?"));


const IMC = (peso / (altura * altura));


console.log(IMC)