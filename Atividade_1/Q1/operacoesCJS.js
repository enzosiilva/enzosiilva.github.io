function caculateAge(a,b,c){
    let dataNascimento = new Date(a, b, c);
    let dataAtual = new Date();
    let calculo = dataAtual.getTime() - dataNascimento.getTime();
    let idade = Math.floor(calculo / (1000 * 60 * 60 * 24 * 365.25));

return idade
}
module.exports = {caculateAge}