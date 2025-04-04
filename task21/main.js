function cleanFalsyValues(arr) {
  // Xử lý và in ra kết quả
  let newArr = arr.filter(Boolean);
  console.log("làm sạch các falsy values có trong mảng : " + newArr);
}

// Test

cleanFalsyValues([1, 0, "", null, "hello", undefined, NaN, 2, 3]); // Output: [1, "hello", 2, 3]
console.log("--------------------------------------------------------------");
function filterEvenNumbers(arr) {
  // Xử lý và in ra kết quả
  let newArr = arr.filter((number) => number % 2 === 0);
  console.log("trả về một mảng mới chỉ chứa các số chẵn : " + newArr);
}

// Test

filterEvenNumbers([1, 2, 3, 4, 5, 6]); // Output: [2, 4, 6]
filterEvenNumbers([1, 3, 5, 7]); // Output: []
filterEvenNumbers([]); // Output: []
filterEvenNumbers([-2, -1, 0, 1, 2]); // Output: [-2, 0, 2]

console.log("-------------------------------------------------------------");

function filterLongStrings(arr) {
  // Xử lý và in ra kết quả
  let newArr = arr.filter((string) => string.length > 5);
  console.log(" các chuỗi có độ dài lớn hơn 5 của mảng các chuỗi " + newArr);
}

// Test
filterLongStrings(["hello", "world", "javascript", "nodejs"]); // Output: ["javascript", "nodejs"]
filterLongStrings(["hi", "hello world", "a b c", "goodbye!!"]); //Output: ["hello world", "goodbye!!"]
filterLongStrings(["hi", "bye", "yes"]); //Output: []

// ---------------------------------------
console.log(
  "------------------------------------------------------------------"
);
function findMinMaxAverage(arr) {
  // Xử lý và in ra kết quả
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = -arr[i];
    }
  }
  let max = Math.max(...arr);
  let min = Math.min(...arr);

  let maxIndex = arr.indexOf(max);
  let minIndex = arr.indexOf(min);

  console.log(
    "max" + max,
    "maxIndex" + maxIndex,
    "min" + min,
    "minIndex" + minIndex
  );
}

// Test
findMinMaxAverage([3, 1, 4, 1, 5, 9, 2, 6]); // Output: {max: 9, maxIndex: 5, min: 1, minIndex: 1, primeAverage: 3.25 }
findMinMaxAverage([5, 5, 2, 2, 1]); // Output: {max: 5, maxIndex: 0, min: 1, minIndex: 4, primeAverage: 3.5 }
findMinMaxAverage([-3, 7, -8, 11, 0]); // Output: {max: 11, maxIndex: 3,min: -8, minIndex: 2,primeAverage: 9 }
console.log("-------------------------------------------");

function insertNumber(arr, num) {
  // Xử lý và in ra kết quả

  if (isNaN(num) && Number.isNaN(num)) {
    arr = arr.filter((item) => typeof item === "number" && !Number.isNaN(item));
  } else {
    arr.push(num);
  }
  arr = arr.filter((item) => typeof item === "number" && !Number.isNaN(item));
  arr.sort((a, b) => a - b);
  console.log(arr);
}

// Test

insertNumber([1, 3, 5, 7, 9], 6); // Output: [1, 3, 5, 6, 7, 9]
insertNumber([3, "hello", 1, NaN, 4, null], 2); // Output: [1, 2, 3, 4]
insertNumber([], 5); // Output: [5]
insertNumber([-1, 10, -5, "abc"], -3); // Output: [-5, -3, -1, 10]
insertNumber([5, 2, 8], NaN); // Output: [2, 5, 8]
