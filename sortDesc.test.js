const sortDesc = require("./sortDesc");

test("should sort array from largest to smallest", () => {
  const input = [1, 2, 4, 3, 5, 3, 2, 1];
  const expectedOutput = [5, 4, 3, 3, 2, 2, 1, 1];
  expect(sortDesc(input)).toEqual(expectedOutput);
});
