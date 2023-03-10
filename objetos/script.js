// Crie um objeto com os seus dados pessoais
// Deve possuir pelo menos duas propriedades nome e sobrenome
var dados = {
  nome: "Wellington",
  sobrenome: "Marques",
  profissao: "Inside Sales",
  idade: 26,
  dataEMes: "15 de junho",
};

// Crie um método no objeto anterior, que mostre o seu nome completo
dados.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}`;
};
// escrever no console dados.nomeCompleto(); ou
console.log(dados.nomeCompleto());

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};

carro.preco = 3000;
console.log(carro.preco);

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
var cachorro = {
  raca: "labrador",
  cor: "preto",
  idade: "10 anos",
  latir(pessoa) {
    if (pessoa === "homem") {
      return "Latir";
    } else {
      return "Nada";
    }
  },
};
