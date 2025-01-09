export class Calculator {
  add(input: string): number {
    if (!input) return 0;

    let delimiters = /[\n,]/;
    let newString = input;
    if (input.startsWith("//")) {
      const parts = newString.split("\n");
      delimiters = new RegExp(`[${parts[0].slice(2)}]`);
      newString = parts[1];
    }

    const numArray = input.split(delimiters).map(Number);
    const negativeNum = numArray.filter((num) => num < 0);
    if (negativeNum.length > 0) {
      throw new Error(`negatives not allowed: ${negativeNum.join(", ")}`);
    }

    return numArray
      .filter((num) => num <= 1000)
      .reduce((acc, currVal) => acc + currVal, 0);
  }
}

export const calculator = new Calculator();
