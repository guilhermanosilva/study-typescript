// Parâmetros obrigatórios -----------------------------------------------------
function addNumbers(x: number, y: number): number {
  return x + y;
}

//addNumbers(1);    // Returns an error
addNumbers(1, 2); // Returns 3

// Parâmetros opcionais --------------------------------------------------------
function addNumbersOpcionais(x: number, y?: number): number {
  return x + y;
}

addNumbersOpcionais(1, 2); // Returns 3
addNumbersOpcionais(1); // Returns 1

// Parâmetros padrão -----------------------------------------------------------
function addNumbersPadrão(x: number, y = 25): number {
  return x + y;
}

addNumbersPadrão(1, 2); // Returns 3
addNumbersPadrão(1); // Returns 26

// Parâmetros rest -------------------------------------------------------------
let addAllNumbers = (
  firstNumber: number,
  ...restOfNumbers: number[]
): number => {
  let total: number = firstNumber;

  for (let counter = 0; counter < restOfNumbers.length; counter++) {
    if (isNaN(restOfNumbers[counter])) {
      continue;
    }
    total += Number(restOfNumbers[counter]);
  }
  return total;
};

// addAllNumbers(2, 3, "three"); // error due to data type at design time
addAllNumbers(1, 2, 3, 4, 5, 6, 7); // returns 28
addAllNumbers(2); // returns 2

// Parâmetros destructuring ----------------------------------------------------
interface Message {
  text: string;
  sender: string;
}

function displayMessage({ text, sender }: Message) {
  console.log(`Message from ${sender}: ${text}`);
}

displayMessage({ sender: 'Christopher', text: 'hello, world' });

// EXERCÍCIOS
let addThreeNumbers = (x: number, y?: number, z = 5): number => {
  if (y === undefined) {
    return x + z;
  } else {
    return x + y + z;
  }
};

console.log(addThreeNumbers(10));
