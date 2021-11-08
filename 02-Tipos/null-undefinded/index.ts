/**
 * Null:
 * * Ausência intencional de valor
 * * Variável valor é indefinido
 * * Só aceita apenas um valor
 * - Atribuído a uma variável. Nâo aponta nenhum objeto.
 * - É um objeto.
 * - Valor primitivo. Representa vazio, nulo ou inexistente.
 * - Convertido em 0 durante a execução de operações primitivas.
 *
 * Undefined:
 * * Variáveis não inicializadas
 * * Tem apenas um valor
 * * Função que não retorna valor
 * - Declara uma variável. Não atribui um valor.
 * - É um tipo.
 * - Valor primitivo. Será usado quando for atribuído a uma variável.
 * - Convertido em NaN durante a execução de operações primitivas.
 */

// Exemplo 01: Null
let variavelTesteNull = null;
console.log(variavelTesteNull);
console.log(typeof variavelTesteNull);

// ==> Exemplo 02: Undefined
let variavelTesteUndefined;
console.log(variavelTesteUndefined);
console.log(typeof variavelTesteUndefined);

// ==> Exemplo 03: Diferenças e similaridades
console.log('Exemplo 01:', null == undefined); // compara tipos
console.log('Exemplo 01:', null === undefined); //  compara resultados
