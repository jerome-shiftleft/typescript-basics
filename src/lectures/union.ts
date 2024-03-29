export default function union() {
  function combine(input1: number | string, input2: number | string) { 
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' ) {
      result = input1 + input2;
    } else {
      result = `${input1.toString()}${input2.toString()}`;
    }
    
    return result;
  } // end of function add()

  const result = combine('1', 2);
  console.log(`result: ${result}`);
} // end of export default function union()
