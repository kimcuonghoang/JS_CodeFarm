// Input:
function swapNumber(a, b) {
  // Xử lý và in ra kết quả
  a = a + b;
  b = a - b;
  a = a - b;
  return { a, b };
}

// Output:
console.log(swapNumber(2, 11)); // 5 3
