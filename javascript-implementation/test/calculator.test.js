const calculator = require("../calculator");

describe("A String calculator", () => {
  describe("a valid string input", () => {
    test("should return 0 for an empty string", () => {
      expect(calculator.add("")).toBe(0);
    });

    test("should return the number itself if there is only one number", () => {
      expect(calculator.add("1")).toBe(1);
    });

    test("should return the sum of two numbers separated by a comma", () => {
      expect(calculator.add("1,5")).toBe(6);
    });

    test("should return the sum of all the numbers present inside string seprated by comma", () => {
      expect(calculator.add("1,3,4,5,2,6,8,9,1")).toBe(39);
    });

    test("should handle new lines between numbers", () => {
      expect(calculator.add("1\n2,3")).toBe(6);
      expect(calculator.add("1\n2\n3")).toBe(6);
    });

    test("should support different delimiters", () => {
      expect(calculator.add("//;\n1;2")).toBe(3);
      expect(calculator.add("//;\n1;2;3;4;6")).toBe(16);
      expect(calculator.add("//?\n1?2?3?4?6")).toBe(16);
    });

    test("should ignore numbers bigger than 1000", () => {
      expect(calculator.add("2,1001")).toBe(2);
      expect(calculator.add("//;\n1;2;1000;4;1006")).toBe(1007);
    });
  });

  describe("an invalid string input", () => {
    test("should throw an exception for negative numbers", () => {
      expect(() => calculator.add("1,-2,3")).toThrow(
        "negatives not allowed: -2"
      );
      expect(() => calculator.add("//;\n1;-2;3;-6;-5")).toThrow(
        "negatives not allowed: -2, -6, -5"
      );
    });
  });
});
