// Indica que o índice é do tipo number e retorna o tipo array
interface IceCreamArray {
  [index: number]: string;
}

let myIceCream1: IceCreamArray;
myIceCream1 = ['chocolate', 'vanilla', 'strawberry'];

let myStr: string = myIceCream1[0];
console.log(myStr);
