const slidingWindow = require("./slidingWindow");

describe("slidingWindow", () => {
  test("should return the maximum sum of a subarray with given length", () => {
    expect(slidingWindow([100, 200, 300, 400], 2)).toBe(700);
    expect(slidingWindow([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)).toBe(39);
    expect(slidingWindow([-3, 4, 0, -2, 6, -1], 2)).toBe(5);
    expect(slidingWindow([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)).toBe(5);
    expect(slidingWindow([2, 3], 3)).toBe(null); // Subarray length is greater than array length
  });

  test("should return null if subarray length is greater than array length", () => {
    expect(slidingWindow([1, 2], 3)).toBeNull();
  });

  test("should handle edge cases with small arrays", () => {
    expect(slidingWindow([5], 1)).toBe(5);
    expect(slidingWindow([], 1)).toBe(null);
  });
});
