function recursion(obj) {
  let sum = 0;

  function traverse(value) {
    if (typeof value === "number") {
      if (value % 2 === 0) {
        sum += value;
      }
    } else if (typeof value === "object" && value !== null) {
      for (let key in value) {
        if (value.hasOwnProperty(key)) {
          traverse(value[key]);
        }
      }
    }
  }

  traverse(obj);
  return sum;
}

// Contoh penggunaan:
const nestedObject = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

console.log(recursion(nestedObject)); // Output: 30

module.exports = recursion;
