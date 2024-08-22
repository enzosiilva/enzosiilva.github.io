const prompt = require('prompt-sync')({sigint: true});

let a = Number(prompt("Digite o lado 1 do triangulo: "));
let b = Number(prompt("Digite o lado 2 do triangulo: "));
let c = Number(prompt("Digite o lado 3 do triangulo: "));
let h = Number(prompt("Digite a altura do triangulo: "));

const perimetro = a + b + c;

const area = ((b * h) / 2);

if (((((a + b) > c) && ((b+c) > a) && ((c + a) > b) )) || ( a == b == c)) {
    console.log("O perimetro do triangulo e ",perimetro, " , a area do triangulo e", area);
} else {
    console.log("Esse triangulo nao existe")
}