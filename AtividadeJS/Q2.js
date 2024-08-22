const prompt = require('prompt-sync')();
let raio = Number(prompt("Qual o valor do raio? "));

const volume = (4 * (Math.PI * (raio * raio * raio)))/3 ;

console.log('O valor do volume da esfera e de', volume);