function cleanFalsyValues(arr) {
  // Xử lý và in ra kết quả
  let newArr = arr.filter(Boolean);
  document.writeln(
    "Viết hàm nhận vào một mảng và làm sạch các falsy values có trong mảng : " +
      newArr
  );
}

// Test

cleanFalsyValues([1, 0, "", null, "hello", undefined, NaN, 2, 3]); // Output: [1, "hello", 2, 3]

function filterEvenNumbers(arr) {
  // Xử lý và in ra kết quả
  let newArr = arr.filter((number) => number % 2 === 0);
  document.writeln(
    "Viết hàm nhận vào một mảng và trả về một mảng mới chỉ chứa các số chẵn : " +
      newArr
  );
}

// Test

filterEvenNumbers([1, 2, 3, 4, 5, 6]); // Output: [2, 4, 6]
filterEvenNumbers([1, 3, 5, 7]); // Output: []
filterEvenNumbers([]); // Output: []
filterEvenNumbers([-2, -1, 0, 1, 2]); // Output: [-2, 0, 2]
