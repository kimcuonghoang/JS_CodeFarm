// Input:

const salary = +prompt("Nhap tien luong");
function taxSalary(salary) {
  if (isNaN(salary) || salary < 0) {
    document.writeln("Thu nhập không hợp lệ");
  } else {
    let a = 0;
    // Xử lý và in ra kết quả
    if (salary <= 11000000) {
      a = "Đáy xã hội không thu thuế";
    }
    if (salary > 11000000 && salary <= 25000000) {
      a = ((salary - 11000000) * 5) / 100;
    }
    if (salary > 25000000 && salary <= 50000000) {
      a = ((salary - 14000000) * 10) / 100;
    }
    if (salary > 50000000 && salary <= 80000000) {
      a = ((25000000 - salary) * 20) / 100;
    }
    if (salary > 80000000) {
      a = ((salary - 50000000) * 30) / 100;
    }
    document.writeln("Thuế thu nhập cá nhan  : " + a);
  }
}

// Output:
// console.log(taxSalary(10000000)); // 0
// console.log(taxSalary(15000000)); // 750000
// console.log(taxSalary(30000000)); // 3000000
// console.log(taxSalary(70000000));
// console.log(taxSalary(-10000000)); // Thu nhập không hợp lệ
// taxSalary("abc"); // Thu nhập không hợp lệ

taxSalary(salary);
