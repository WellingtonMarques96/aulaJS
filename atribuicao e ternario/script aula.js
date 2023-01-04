var numero = 20;
var numero2 = 12;

numero += numero2; //384
numero *= numero2; // 12

var numero3 = numero / numero2; // 32

console.log(numero);
console.log(numero2);
console.log(numero3);

var idade = 20;
var naoPossuiDiabetes = true;

var podeBeber;

podeBeber = idade >= 18 && naoPossuiDiabetes ? "Pode beber" : "Não pode beber";
console.log(podeBeber);
