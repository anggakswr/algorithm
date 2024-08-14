function slidingWindow(arr, num) {
  if (arr.length < num) return null; // Jika panjang array lebih pendek dari panjang subarray, kembalikan null

  let maxSum = 0;
  let tempSum = 0;

  // Hitung jumlah untuk subarray pertama
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  // Geser window dan hitung jumlah subarray berikutnya
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

// Contoh penggunaan
console.log(slidingWindow([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // Output: 700

module.exports = slidingWindow;
