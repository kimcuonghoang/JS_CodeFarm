let n = +prompt("Nhập vào số a: ");
let i = +prompt("Nhập vào số b: ");

function isSameSign(a, b) {
  // Viết logic kiểm tra 2 số cùng dấu ở đây
  if (a * b > 0) {
    return true;
  }
  return false;
}
// console.log(typeof n);
// console.log(typeof i);
// Test cases
console.log(isSameSign(n, i));
document.writeln(" kiểm tra 2 số cùng dấu : ", isSameSign(n, i));
