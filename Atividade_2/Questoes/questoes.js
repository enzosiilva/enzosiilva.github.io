// Questao1
function delay(ms){
    return new Promise(resolve => setTimeout(resolve,ms))
}

delay(5000).then(() => console.log("5 segundos se passaram"))

// Questao2

async function getData(string) {
    if(string == "Enzo") {
        throw new Error("Entrada errada")
    }

    return fetchDataFromAPI("https://jsonplaceholder.typicode.com/users")
                .then((data)=>console.log(data))
                .catch((erro)=>console.log(erro.message))
}

// Questao 5 

async function fetchDataFromAPI(url){
    let response = await fetch(url);
    if(response.status !== 200){
        throw new Error("Falha na comunicação com a API")
    }
    return await response.json();
}

// Questao 9
async function waitOneSecond() {
    console.log('Olá!')
    await new Promise(espera => setTimeout(espera, 2000));
    console.log('Olá! Depos de 2 swgundo')
}

async function runAllAsynFunction() {
    try {
      await Promise.all([waitOneSecond(), waitOneSecond(), waitOneSecond()])
    } catch (error) {
      console.log(error)
    }
}

// Questao 4 
async function Errors() {
    string = "Enzo"
    try {
        await getData(string)
        console.log(string)
    } catch (error) {
        console.log(`Ocorreu um erro`)
    }
}

// Questao 3

let promessa = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
let promessa2 = new Promise((resolve) => setTimeout(() => resolve(2), 2000));
let promessa3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

Promise.all([promessa, promessa2, promessa3])
  .then((resultados) => {
    console.log(resultados, "BANG");
  }) .catch((erro) => {
    console.error(erro);
  });