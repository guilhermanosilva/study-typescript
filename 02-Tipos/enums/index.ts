/**
 * VANTAGENS
 *
 * Facilidade em mudar valores
 * Reduz erros
 * Funciona somente em tempo de execução
 * O tempo de execução será mais preciso e rápido
 * Permite criar contantes
 * Permite criar constantes personalizadas
 */

//==> Exemplo 01: Numeric Enums
enum Idioma {
  Portugues,
  Espanhol,
  Ingles,
  Frances,
}
// console.log(Idioma);

//==> Exemplo 02: String Enums *não recomendado pela documentação
enum Dia {
  Segunda = 'SEG',
  Terca = 'TER',
  Quarta = 'QUA',
  Quinta = 'QUI',
  Sexta = 'SEX',
  Sabado = 'SAB',
  Domingo = 'DOM',
}
// console.log(Dia.Segunda);
// console.log(Dia);

//==> Exemplo 03: Achar o valor de um Enum com ua chave: (usando o const)
const enum Comida {
  Hamburger,
  Massa,
  Pizza,
  Torta,
  Churrasco,
}

function comida(c: Comida) {
  return 'Comidas muito apetitosas';
}

// console.log(comida(Comida.Pizza));
// console.log(comida(2)); // Não deveria aceitar number

// Corrigindo o problema do number

const enum Comida2 {
  Hamburger = 'Hamburger',
  Massa = 'Massa',
  Pizza = 'Pizza',
  Torta = 'Torta',
  Churrasco = 'Churrasco',
}

function comida2(c: Comida2) {
  return 'Comidas muito apetitosas';
}

// console.log(comida2(Comida2.Pizza));
// console.log(comida2(Comida2.Churrasco));
//console.log(comida2(2)); // Agora não aceita number

//==> Exemplo 04: Quando usar Enums
enum Tarefa {
  Todo,
  Progress,
  Done,
}

const concluidaTarefa = {
  id: 1,
  status: Tarefa.Done,
  descricao: 'Parabéns! Tarefa concluída.',
};

if (concluidaTarefa.status === Tarefa.Done) {
  console.log('Enviar e-mail: Tarefa Concluída.');
}
