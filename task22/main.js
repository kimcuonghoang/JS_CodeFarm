const arrayNumber = [1, 2, 3, 4, 3, 2, 1];
function checkSymmetricalArr(arr) {
  let a = true;
  for (let i = 0; i < arr.length / 2; i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) {
      a = false;
      break;
    }
  }
  return a;

  // Xử lý logic
}
const result = checkSymmetricalArr(arrayNumber);
console.log(result); //true
