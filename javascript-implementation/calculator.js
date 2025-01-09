class StringCalculator {
  add(string) {
    if (!string) return 0;

    const numArr = string.split(",").map(Number);
    return numArr.reduce((acc, curValue) => acc + curValue, 0);
  }
}

module.exports = new StringCalculator();
