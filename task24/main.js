const number = [4, 2, 7, 6, 5, 8, 2, 1];

function sortArrNumber(arr) {
  // Xử lý và in ra kết quả

  let a = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let b = arr[i];
        arr[i] = arr[j];
        arr[j] = b;
      }
    }
  }
  for (let i = 0; i < arr.length; i++) {
    a.push(arr[i]);
  }
  return a;
}

const result = sortArrNumber(number);
console.log(result); // [1,2,2,4,5,6,7,8]
