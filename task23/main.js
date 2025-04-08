const arrNumber = [1, 2, 3, 4, 5, 5, null, undefined, 6];

function reverseArr(arr) {
  // Xử lý và in ra kết quả
  let a = [];
  let newArr = arr.filter(Boolean);
  for (let i = newArr.length - 1; i >= 0; i--) {
    a.push(newArr[i]);
  }
  return a;
}
const result = reverseArr(arrNumber);
console.log(result); // [6,5,4,3,2,1]
