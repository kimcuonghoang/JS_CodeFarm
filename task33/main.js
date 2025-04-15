// input
// Gợi ý dùng forEach hoặc reduce
const arrayString = ["name:John", "age:30", "city:NY"];

function convertArrayToObject(array) {
  // Logic bài toán và trả về ết quả
  const newObj = array.reduce((acc, cur) => {
    const [key, value] = cur.split(":");
    acc[key] = value;
    return acc;
  }, {});
  return newObj;
}
//Test

console.log(convertArrayToObject(arrayString)); // { name: 'John', age: '30', city: 'NY' }
