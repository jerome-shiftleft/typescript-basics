console.log('main.ts loaded!');

function add(n1: any, n2: any) {
  console.log(`typeof number1: ${typeof n1}`);
  console.log(`typeof number2: ${typeof n2}`);

  if(typeof n1 !== 'number' || typeof n2 !== 'number') {
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);
  }
  
  return n1 + n2;
}

let number1 = '5';
let number2 = 2.8;


const result = add(number1, number2);
console.log(`number1 + number2 = ${result}`);