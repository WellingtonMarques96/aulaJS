// Crie uma função para verificar se um valor é Truthy
function isTruthy(valor) {
  return !!valor;
}
// Crie uma função matemática que retorne o perímetro de um quadrado
function perimetroQuadrado(lado) {
  return lado + lado + lado + lado;
  // ou return lado * 4;
}
// lembrando: perímetro é a soma dos quatro lados do quadrado

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}

// Crie uma função que verifica se um número é par
function isEven(numero) {
  var modulo = numero % 2;
  if (modulo === 0) {
    return true;
  } else {
    return false;
  }
}
// Crie uma função que retorne o tipo de
// dado do argumento passado nela
function tipoDeDado(dado) {
  return typeof dado;
}
// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'click' ocorrer.
function mostrarNome() {}
var nome = "Wellington";
var sobrenome = "Marques Cunha";
addEventListener("click", function () {
  console.log("Wellington Marques");
});

// Corrija o erro abaixo
// o erro era que a variável totalPaises estava dentro da função precisoVisitar, portanto o return do jaVisitei não conseguiu usar. Por isso foi colocada a variável fora das funções.

var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);
