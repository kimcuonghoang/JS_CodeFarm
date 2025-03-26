// Input:
let km = +prompt("Nhap so km ");
function taxiBill(km) {
  if (isNaN(km) || km < 0) {
    console.log("Số km không hợp lệ");
  } else {
    let a = 0;
    // Xử lý và in ra kết quả
    if (km <= 1) {
      a = 10000;
    }
    if (km > 1 && km <= 30) {
      a = 10000 + 8000 * (km - 1);
    }
    if (km > 30) {
      a = 10000 + 8000 * 29 + 7000 * (km - 30);
    }
    document.writeln("Số tiền cần trả: ", a);
  }
}

// Test:
// taxiBill(0.1); // Output: Số tiền cần trả: 10000đ
// taxiBill(1); // Output: Số tiền cần trả: 10000đ
// taxiBill(60); // Output: Số tiền cần trả: 82000đ
// taxiBill(-5); // Output: Số km không hợp lệ
// taxiBill("abc"); // Output: Số km không hợp lệ

taxiBill(km);
