function cleanFalsyValues(arr) {
    // Xử lý và in ra kết quả
    let newArr = arr.filter(Boolean);
    // document.writeln(
    //   "Viết hàm nhận vào một mảng và làm sạch các falsy values có trong mảng : " +
    //     newArr
    // );
  }
  
  // Test
  
  cleanFalsyValues([1, 0, "", null, "hello", undefined, NaN, 2, 3]); // Output: [1, "hello", 2, 3]
  
  function filterEvenNumbers(arr) {
    // Xử lý và in ra kết quả
    let newArr = arr.filter((number) => number % 2 === 0);
    // document.writeln(
    //   "Viết hàm nhận vào một mảng và trả về một mảng mới chỉ chứa các số chẵn : " +
    //     newArr
    // );
  }
  
  // Test
  
  filterEvenNumbers([1, 2, 3, 4, 5, 6]); // Output: [2, 4, 6]
  filterEvenNumbers([1, 3, 5, 7]); // Output: []
  filterEvenNumbers([]); // Output: []
  filterEvenNumbers([-2, -1, 0, 1, 2]); // Output: [-2, 0, 2]
  
  // -----------------------------------------------------------------------------
  
  function filterLongStrings(arr) {
    // Xử lý và in ra kết quả
    let newArr = arr.filter(arr.length > 5);
    console.log(newArr);
  }
  
  // Test
  filterLongStrings(["hello", "world", "javascript", "nodejs"]); // Output: ["javascript", "nodejs"]
  filterLongStrings(["hi", "hello world", "a b c", "goodbye!!"]); //Output: ["hello world", "goodbye!!"]
  filterLongStrings(["hi", "bye", "yes"]); //Output: []
  
  // ---------------------------------------
  
  function findMinMaxAverage(arr) {
    // Xử lý và in ra kết quả
  }
  
  // Test
  findMinMaxAverage([3, 1, 4, 1, 5, 9, 2, 6]); // Output: {max: 9, maxIndex: 5, min: 1, minIndex: 1, primeAverage: 3.25 }
  findMinMaxAverage([5, 5, 2, 2, 1]); // Output: {max: 5, maxIndex: 0, min: 1, minIndex: 4, primeAverage: 3.5 }
  findMinMaxAverage([-3, 7, -8, 11, 0]); // Output: {max: 11, maxIndex: 3,min: -8, minIndex: 2,primeAverage: 9 }
  