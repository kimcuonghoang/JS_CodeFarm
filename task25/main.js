// Input:
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

function removeDuplicate(arr) {
  // Xử lý và in ra kết quả
  return arr.filter((a, b, c) => {
    return (
      c.findIndex(
        (j) => (typeof a === "number" && typeof j === "number") || a === j
      ) === b
    );
  });
}

// Output:
const result = removeDuplicate(fruits);

console.log(result); // ["apple", "banana", "kiwi", "orange"]
