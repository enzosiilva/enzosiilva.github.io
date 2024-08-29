const prompt = require('prompt-sync')({sigint: true});

let dia = (prompt("Digite o valor de um dia: "));

if (dia === (("Segunda") || ("Terca") || ("Quarta") || ("Quinta") || ("Sexta"))){
    console.log("dia de semana")
} else if (dia === (("Sabado") || ("Domingo"))){
    console.log("Fim de semana")
} else{
    console.log("Dia errado")
}
