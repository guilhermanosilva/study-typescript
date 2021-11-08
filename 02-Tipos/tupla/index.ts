// Criando tupla simples com typescript
let pessoa: [string, string, number];
pessoa = ["Guilhermano Silva", "Dev Fullstack", 31];
// console.log(pessoa);

// Acessando valor da tupla
let pessoa1: [string, string, number];
pessoa1 = ["Guilhermano Silva", "Dev Fullstack", 31];
// console.log("Acessando pos. 1: ", pessoa1[1]);

// Usando tuplas com labels
let pessoa2: [nome: string, cargo: string, idade: number];
pessoa2 = ["Guilhermano Silva", "Dev Fullstack", 31];
// console.log(pessoa2);

// Definindo com spread operator
let listaDeFrutas: [...string[]] = ["🍍", "🍊", "🍎", "🍉", "🥭"];
// console.log(...listaDeFrutas);

// ==> 05 - LISTA HETEROGÊNEA DE TUPLAS
let listaDeFrutas2: [number, boolean, ...string[]] = [
  5,
  true,
  ...listaDeFrutas,
];
// console.log(...listaDeFrutas2);

// ==> 06 - USO DE FUNÇÃO COM TUPLAS
function listarPessoas(nomes: string[], idades: number[]) {
  return [...nomes, ...idades];
}
let resultado = listarPessoas(["Guilhermano", "Elislania"], [31, 25]);
// console.log(resultado);

// ==> 07 - LABELED TUPLES COM SPREAD OPERATOR NUMA FUNÇÃO
type Nome =
  | [primeiroNome: string, sobreNome: string]
  | [primeiroNome: string, nomeDoMeio: string, sobreNome: string];

function criarPessoa(...nome: Nome) {
  return [...nome];
}

console.log(criarPessoa("Guilhermano", "da Silva"));
console.log(criarPessoa("Guilhermano", "Ferreira", "da Silva"));
