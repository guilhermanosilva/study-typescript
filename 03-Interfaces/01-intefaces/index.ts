// Por conversão é utilizado o padrão PascalCase nos nomes.
// As diretrizes de codificação do typescript NÃO recomendam o uso do I no início.

// Exemplo 01
interface IceCream {
  flavor: string;
  scoops: number;
  instruction?: string;
}

let iceCream: IceCream = {
  flavor: 'vanilla',
  scoops: 5,
};

// console.log(iceCream.flavor);

function tooManyScoops(dessert: IceCream) {
  if (dessert.scoops >= 4) {
    return dessert.scoops + ' is too many scoops';
  } else {
    return 'your order will be ready soon';
  }
}

console.log(tooManyScoops(iceCream));
