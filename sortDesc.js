// bubble sort
function sortDesc(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        // Swap elements
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

const input = [1, 2, 4, 3, 5, 3, 2, 1];
const output = sortDesc(input);

console.log(output); // Output: [5, 4, 3, 3, 2, 2, 1, 1]

module.exports = sortDesc;
