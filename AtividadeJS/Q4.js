const prompt = require('prompt-sync')({sigint: true});

let a = Number(prompt("Digite o valor de a: "));
let b = Number(prompt("Digite o valor de b: "));
let c = Number(prompt("Digite o valor de c: "));

const delta = (b * b) - (4 * a * c);

if (delta < 0){
    console.log("Nao possui resultado")
}else {
    const x1 = (-b + Math.sqrt(delta)) / (2 * a)
    const x2 = (-b - Math.sqrt(delta)) / (2 * a)
    console.log("O valor de x1 e", x1, "o valor de x2 e", x2);
}