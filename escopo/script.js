// Por qual motivo o código abaixo retorna com erros?

{
  const marca = "Fiat";
  let portas = 4;
  var cor = "preto";
  console.log(cor, marca, portas);
}
//porque não está informando a variável declarada em var e se consertar isso a const marca e a let portas vão dar erro, pois estão dentro do bloco e não podem ser referidas pelo lado de fora do bloco. Para corrigir, basta fazer o console.log dentro do bloco

// Como corrigir o erro abaixo?
const dois = 2;
function somarDois(x) {
  return x + dois;
}
function dividirDois(x) {
  return x / dois;
}
console.log(somarDois(4));
console.log(dividirDois(6));

// O que fazer para total retornar 500?
const numero = 50;

for (let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);
