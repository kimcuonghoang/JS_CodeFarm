const fruits = [
  "apple",
  "banana",
  "kiwi",
  "kiwi",
  "banana",
  "orange",
  "apple",
  "kiwi",
];

function countElement(arr) {
  // Xử lý và in ra kết quả
  let a = [];
  arr.forEach((item) => {
    if (a[item]) {
      a[item]++;
    } else {
      a[item] = 1;
    }
  });
  return a;
}

const result = countElement(fruits);

console.log(result); // { apple: 2, banana: 2, kiwi: 3, orange: 1 }
