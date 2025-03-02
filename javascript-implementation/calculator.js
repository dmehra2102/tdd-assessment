class StringCalculator {
  add(string) {
    if (!string) return 0;

    let newString = string;
    let delimiters = /[\n,]/;

    if (string.startsWith("//")) {
      const parts = newString.split("\n");
      delimiters = new RegExp(`[${parts[0].slice(2)}]`);
      newString = parts[1];
    }

    const numArr = newString.split(delimiters).map(Number);
    const negativeNum = numArr.filter((num) => num < 0);
    if (negativeNum.length > 0) {
      throw new Error(`negatives not allowed: ${negativeNum.join(", ")}`);
    }

    return numArr
      .filter((num) => num <= 1000)
      .reduce((acc, curValue) => acc + curValue, 0);
  }
}

module.exports = new StringCalculator();
