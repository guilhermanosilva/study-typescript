// Preferível à Any
/**
 * Diferentemente do Any, o unknown verifica o tipo antes de realizar qualquer
 * operação antes de executar o código.
 * Todos os tipos podem ser atribuídos a ele.
 */

// Exemplo 01: Tipo Unknown ----------------------------------------------------
let valorVariavel: unknown;
valorVariavel = true;
valorVariavel = 123;
valorVariavel = [];
valorVariavel = 'Oi! Tudo bem?';

// Exemplo 02: Tipo Unknown gera erro ao atribuir um tipo para ele--------------
let valor: unknown;
// let valor1: boolean = valor; // gera erro
// let valor2: any = valor; // *não gera erro
// let valor3: any[] = valor; // gera erro
// let valor4: string = valor; // gera erro

// Exemplo 03: Diferença entre Unknown e Any -----------------------------------
let algumaCoisaAny: any;
let algumaCoisaUnknown: unknown;
algumaCoisaAny.toFixed(2);
//algumaCoisaUnknown.toFixed(2); // gera erro pois o toFixed retorna um number, e
// o tipo number não pode ser atribuído a um unknown.

// Dessa forma não vai da erro pos só vai aceitar se for number
// Força a verificação para não gerar erro
if (typeof algumaCoisaUnknown === 'number') {
  console.log(algumaCoisaUnknown.toFixed());
}
