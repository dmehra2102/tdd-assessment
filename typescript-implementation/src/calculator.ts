export class Calculator {
  add(input: string): number {
    if (!input) return 0;

    const numArray = input.split(",").map(Number);
    return numArray.reduce((acc, currVal) => acc + currVal, 0);
  }
}

export const calculator = new Calculator();
