// Funções nomeadas aceitam hoisting
console.log(somar(5, 5));
function somar(x: number, y: number): number {
  return x + y;
}

// Funções de seta não aceitam hoisting
const somar2 = (x: number, y: number) => x + y;
console.log(somar2(5, 6));
