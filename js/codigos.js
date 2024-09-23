// let nome = prompt("Informe seu nome: ");
// console.log("Foi digitado: "+ nome);

let a = 10;
let b = 5;
console.log(a+b);

// const PI=3.1416;

function copia_cola(){
    let n = document.getElementById('nome').value;
    let resultado = "<li>" + n + "</li>"
    document.getElementById('contato_img').innerHTML += resultado; 
    console.log(n);
}