// Input

const arrayWords = ["Hello world", "JS is fun", "Arrays and strings"]; // 8

function countTotalWords(arr) {
  // Logic bài tập và trả về kết quả
  const total = arr.reduce((acc, cur) => {
    const totalWord = cur.split(" ");
    acc += totalWord.length;
    return acc;
  }, 0);
  return total;
}
// Test
console.log(countTotalWords(arrayWords));
