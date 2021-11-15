// Aciona um erro informando que message é to tipo Any
/*
function displayAlert(message) {
  console.log('The message is ' + message);
}

displayAlert("Esta é uma mensagem")
*/

function displayAlert(message: string) {
  console.log('The message is: ' + message);
}

// displayAlert(45); // Aciona o erro de que é esperando uma string
displayAlert('Esta é uma mensagem');

function sum(input: number[]): number {
  let total: number = 0;
  for (let count = 0; count < input.length; count++) {
    if (isNaN(input[count])) {
      continue;
    }
    total += Number(input[count]);
  }
  return total;
}

console.log(sum([1, 3]));
