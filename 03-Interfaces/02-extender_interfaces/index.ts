interface IceCream {
  flavor: string;
  scoops: number;
  instructions?: string;
}

interface Sundae extends IceCream {
  sauce: 'chocolate' | 'caramel' | 'strawberry';
  nuts?: boolean;
  whippedCream?: boolean;
  instructions?: string;
}

let myIceCream: Sundae = {
  flavor: 'vanilla',
  scoops: 2,
  sauce: 'caramel',
  nuts: true,
};

function tooManyScoops(dessert: Sundae) {
  if (dessert.scoops >= 4) {
    return dessert.scoops + ' its too many scoops';
  } else {
    return 'Your order will be ready soon!';
  }
}

console.log(tooManyScoops(myIceCream));
// console.log(tooManyScoops({ flavor: 'vanilla', scoops: 5, sauce: 'caramel' }));
// console.log(tooManyScoops({ flavor: 'vanilla', scoops: 5})); // gera erro
