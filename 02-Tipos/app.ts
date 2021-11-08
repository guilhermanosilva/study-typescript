/**
 * data: 16/02/2021
 */

// ==> Variáveis [Type Annotations]
let nome: string = "Guilhermano";
console.log(nome);

// ==> Arrays [Type Annotations]
let animais: string[] = ["Elefante", "Cachorro", "Panda"];
console.log(animais);

// ==> Objects [Type Annotations]
let carro: {
  nome: string;
  ano: number;
  preco: number;
};

carro = {
  nome: "Toyota Yaris Sedan XS",
  ano: 2019,
  preco: 80000,
};

console.log(carro);

// ==> Functions [Type Annotations]
function multiplicar(num1: number, num2: number) {
  return num1 * num2;
}

console.log(multiplicar(2, 5));
