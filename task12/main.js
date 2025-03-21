// Input:
function printSquareNumber(n) {
  // Xử lý và in ra kết quả

  for (i = 2; i <= n; i++) {
    let hi = Math.sqrt(i);
    if (Number.isInteger(hi)) {
      console.log(i);
    }
  }
}

// // Output:
printSquareNumber(10);
printSquareNumber(100);
// console.log(printSquareNumber(10)); // 4 9
// console.log(printSquareNumber(20)); // 4 9 16
