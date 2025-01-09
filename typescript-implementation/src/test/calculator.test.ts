describe("A String calculator in typescript", () => {
  describe("a valid string input", () => {
    test("should return 0 for an empty string", () => {
      expect(calculator.add("")).toBe(0);
    });
  });
});
