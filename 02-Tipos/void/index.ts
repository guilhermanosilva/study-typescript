// Oposto do Any
// Deve ser utilizado quando um método não tem retorno.

/**
 * Melhora a clareza do código
 * Garante a segurança de tipo
 * Não retornará nenhum valor ou dado
 */

// ==> Exemplo 01: Void em funções
/**
 * Caso não seja informado, o tipo da função será void.
 * Caso a função retorne o parâmetro, o tipo da função será o tipo do retorno.
 */
function logError(errorMessage: string) {
  console.log(errorMessage);
  // return errorMessage;
}

logError('Required field - Name!');

// Exemplo 02: com arrow function
const logErrors2 = (errorMessage: string): void => {
  console.log(errorMessage);
};
logErrors2('Required field - Surname');

// Exemplo 03: Void em variáveis
let variavelExemploVoid: void;
// variavelExemploVoid = 1; // gera erro
variavelExemploVoid = null; /* para não gerar erro é necessário inserir:
"strictNullChecks": false, no arquivo tsconfig*/
variavelExemploVoid = undefined;
// variavelExemploVoid = 'Guilhermano'; // gera erro

console.log(variavelExemploVoid);
