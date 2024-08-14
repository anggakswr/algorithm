const recursion = require("./recursion");

describe("recursion", () => {
  test("menghitung jumlah bilangan genap dalam objek nested sederhana", () => {
    const obj = {
      a: 2,
      b: {
        c: 4,
        d: 6,
      },
      e: 1,
    };
    expect(recursion(obj)).toBe(12);
  });

  test("menghitung jumlah bilangan genap dalam objek nested kompleks", () => {
    const obj = {
      a: 3,
      b: {
        c: 7,
        d: {
          e: 6,
          f: {
            g: 2,
            h: 4,
          },
        },
      },
      i: 10,
    };
    expect(recursion(obj)).toBe(22);
  });

  test("mengembalikan 0 jika tidak ada bilangan genap", () => {
    const obj = {
      a: 1,
      b: {
        c: 3,
        d: {
          e: 5,
          f: 7,
        },
      },
    };
    expect(recursion(obj)).toBe(0);
  });

  test("mengembalikan 0 jika objek kosong", () => {
    const obj = {};
    expect(recursion(obj)).toBe(0);
  });

  test("menghitung jumlah bilangan genap dalam objek yang memiliki array", () => {
    const obj = {
      a: 2,
      b: [1, 2, 3, 4, 5],
      c: {
        d: 6,
        e: [7, 8, 9, 10],
      },
    };
    expect(recursion(obj)).toBe(32);
  });
});
