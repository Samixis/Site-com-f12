/*let numeroSecreto = gerarNumeroAleatorio();
console.log(numeroSecreto);

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector (tag);
  campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute() {
  let chute = document.querySelector('input').value;
  console.log (chute == numeroSecreto);
}

function gerarNumeroAleatorio() {
  return parseInt(Math.random() * 10 + 1);
}
*/


function exibirOla () {
  console.log ("opa bodia")
}

exibirOla ();

function exibirOlaNome(nome){
  console.log (`Olá,${nome}!`);
}

exibirOlaNome("Sami");

function calcularCubo(numero) {
  return numero * 3 * 3;

}

let resultadoCubo = calcularCubo(5);
console.log (resultadoCubo);

function calcularMedia (a,b,c) {
  return (a+b+c) / 3;
}

let media = calcularMedia(4,7,10);
console.log(media)

function encontrarMenor(a,b) {
  return a < b ? a : b;
}

let menorNumero = encontrarMenor(15,9);
console.log(menorNumero);

function quadrado(numero){
  return numero*numero;
}

let resultado = quadrado(2);
console.log(resultado)