const calculator = require("../calculator");

describe("A String calculator", () => {
  describe("a valid string input", () => {});

  describe("an invalid string input", () => {
    test("should return 0 for an empty string", () => {
      expect(calculator.add("")).toBe(0);
    });
  });
});
