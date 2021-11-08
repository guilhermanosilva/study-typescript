// Exemplo 01 : uso de colchetes
let frutas: string[] = ["abacaxi", "laranja", "maca", "melancia", "manga"];
console.log(frutas[2]);

// Exemplo 02 : uso de array object
let frutas1: Array<string> = ["🍍", "🍊", "🍎", "🍉", "🥭"];

// Exemplo 03 : adicionando mais strings
let idiomas: Array<string> = ["portugues", "ingles", "espanhol"];
console.log(idiomas);
idiomas.push("frances");
console.log(idiomas);

// Exemplo 04 : identificando o tamanho do array
let idiomas1: Array<string> = ["portugues", "ingles", "espanhol"];
console.log(idiomas.length);

// Exemplo 05 : spread operator
let listDeNumeros: Array<number> = [1, 2, 3, 4, 5];
console.log({ listDeNumeros });

let listDeNumeros2: Array<number> = [...listDeNumeros, 6, 7, 8, 9, 10];
console.log({ listDeNumeros2 });

// Exemplo 06 : array com laço de repetição
let linguagensArray: string[] = new Array("javascript", "python", "php", "c#");

function fnLinguagens(linguagens: string[]) {
  for (let i = 0; i < linguagens.length; i++) {
    const lang = linguagens[i];
    console.log(lang);
  }
}

fnLinguagens(linguagensArray);
