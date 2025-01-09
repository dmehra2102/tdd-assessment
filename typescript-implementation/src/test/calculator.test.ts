import { calculator } from "../calculator";

describe("A String calculator in typescript", () => {
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
  });
});
