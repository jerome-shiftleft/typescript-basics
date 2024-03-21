export default function union() {
  function combine(n1: number, n2: number) { 
    const result = n1 + n2;
    return result;
  } // end of function add()

  const result = combine(1, 2);
  console.log(`result: ${result}`);
} // end of export default function union()
