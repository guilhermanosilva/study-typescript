// ==> Exemplo 01 : Tipo Any ---------------------------------------------------
const a: any = 31;
const b: any = 'Guilhermano';
const result = a + b; // Não indica erro por ser to tipo Any, mesmo somando number com string
console.log(result);

// ==> Exemplo 02 : Quando o tipo Any é inferido implicitamente ----------------
let frase; // Interpresa a variável frase como tipo Any
frase = 'Olá, tudo bem';
console.log(frase);

// ==> Exemplo 03 : Quando devemos usar o tipo Any------------------------------
// Quando não se sabe o retorno de uma requisição.
