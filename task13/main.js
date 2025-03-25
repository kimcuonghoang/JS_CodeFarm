// Input:
function findMaxNumber(a, b, c) {
  // Xử lý và in ra kết quả
  let max = a;
  if (b > max) {
    max = b;
  }
  if (c > max) {
    max = c;
  }
  console.log(max);
}

// Output:
console.log(findMaxNumber(1, 4, 8)); // 5
