// type calculator = (x: number, y: number) => number;
interface Calculator {
  (x: number, y: number): number;
}

let sumNumbers: Calculator = (x: number, y: number): number => x + y;
let subtractNumbers: Calculator = (x: number, y: number): number => x - y;

console.log(sumNumbers(1, 2));
console.log(subtractNumbers(1, 2));

let doCalculation = (operation: 'add' | 'subtract'): Calculator => {
  if (operation === 'add') {
    return sumNumbers;
  } else {
    return subtractNumbers;
  }
};

console.log(doCalculation('add')(2, 2));

// Infere que será retornado um número
let addNumbers99: Calculator = (num1, num2) => num1 + num2;
