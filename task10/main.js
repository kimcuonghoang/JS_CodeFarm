// Input:
function sortNumber(a, b, c) {
  // Xử lý và in ra kết quả
  if (a > b) {
    a = a + b;
    b = a - b;
    a = a - b;
  }
  if (b > c) {
    b = b + c;
    c = b - c;
    b = b - c;
  }
  if (a > b) {
    a = a + b;
    b = a - b;
    a = a - b;
  }
  return { a, b, c };
}

// Output:
console.log(sortNumber(8, 9, 7));
