// Input:
function printPrimeNumber(n) {
  // Xử lý và in ra kết quả
  let i;
  for (i = 2; i < n; i++) {
    if (i < 1 && isNaN(i)) {
      return false;
    }
    if (n % i === 0) {
      console.log(i);
    }
  }
}

// Output:
printPrimeNumber(10); // 2 3 5 7
