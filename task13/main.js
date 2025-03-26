// Input:
let a = +prompt("Nhập số a: ");
let b = +prompt("Nhập số b: ");
let c = +prompt("Nhập số c: ");
function findMaxNumber(a, b, c) {
  // Xử lý và in ra kết quả
  let max = a;
  if (b > max) {
    max = b;
  }
  if (c > max) {
    max = c;
  }
  document.writeln("Bài 13: số lớn nhất trong 3 số là : ", max);
}

// Output:
findMaxNumber(a, b, c); // 5
