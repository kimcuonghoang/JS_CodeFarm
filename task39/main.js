function getData(callback) {
  // Code của bạn ở đây
  setTimeout(() => {
    callback([1, 2, 3, 4]);
  }, 1000);
}

// Sử dụng
getData((data) => {
  console.log(data); // Sau 1 giây in ra: [1, 2, 3, 4]
});

function getData(callback) {
  // Code của bạn ở đây
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4, 5]);
    }, 1000);
  });
}
// Sử dụng
getData()
  .then((data) => console.log(data)) // Sau 1 giây in ra: [1, 2, 3, 4]
  .catch((error) => console.error(error));

async function getNumber() {
  try {
    const number = await getData();
    console.log(number);
  } catch (error) {
    console.log(error);
  }
}
getNumber();
