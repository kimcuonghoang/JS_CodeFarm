// Input:

const salary = +prompt("Nhap tien luong");
function taxSalary(salary) {
  if (isNaN(salary) || salary < 0) {
    console.log("Thu nhập không hợp lệ");
  } else {
    let a = 0;
    // Xử lý và in ra kết quả
    if (salary <= 11000000) {
      a = 0;
    }
    if (salary > 11000000 && salary <= 25000000) {
      a = (salary * 5) / 100;
    }
    if (salary > 25000000 && salary <= 50000000) {
      a = (salary * 10) / 100;
    }
    if (salary > 50000000 && salary <= 80000000) {
      a = (salary * 20) / 100;
    }
    if (salary > 80000000) {
      a = (salary * 30) / 100;
    }
    console.log(a);
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
