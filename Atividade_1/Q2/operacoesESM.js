const notas = []

function media(notas){
    let soma = 0
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];

    }
    return soma / notas.length;
}

function maior(notas){
    var max = notas.reduce(function (a, b) {
        return Math.max(a, b);
})
    return max; 
}

function menor(notas){
    var min = notas.reduce(function (a, b) {
        return Math.min(a, b);
})
    return min; 
}

export {media, maior, menor}