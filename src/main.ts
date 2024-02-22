console.log('main.ts loaded!');

function add(n1: number, n2: number) {
  console.log(`typeof number1: ${typeof n1}`);
  console.log(`typeof number2: ${typeof n2}`);

  if(typeof n1 !== 'number' || typeof n2 !== 'number') {
    throw new Error('Input must be a number!');    
  }
  
  return n1 + n2;
}

let number1 = '5';
let number2 = 2.8;

number1 = parseFloat(number1);
number2 = parseFloat(number2);

const result = add(number1, number2);
console.log(`number1 + number2 = ${result}`);