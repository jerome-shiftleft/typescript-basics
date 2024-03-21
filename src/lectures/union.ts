export default function union() {
  function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    console.log(`typeof number1: ${typeof n1}`);
    console.log(`typeof number2: ${typeof n2}`);

    if (typeof n1 !== "number" || typeof n2 !== "number") {
      throw new Error("Incorrect input!");
    }

    if (showResult) {
      console.log(`${phrase}: ${n1 + n2}`);
    } else {
      return n1 + n2;
    }
  } // end of function add()

  add(1, 2, true, "result");
} // end of export default function union()
