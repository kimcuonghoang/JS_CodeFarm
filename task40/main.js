function getUser(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: userId, name: "John", age: 30 });
    }, 1000);
  });
}

function getPurchases(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, userId: userId, product: "Laptop", price: 1000 },
        { id: 2, userId: userId, product: "Phone", price: 2000 },
      ]);
    }, 1000);
  });
}

function getProductDetails(productId, productName, productPrice) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: productId, name: productName, price: productPrice });
    }, 1000);
  });
}

getUser(123)
  .then((user) => {
    console.log(user);
    return getPurchases(user.id);
  })
  .then((purchases) => {
    console.log(purchases);

    const detailPromises = purchases.map((p) =>
      getProductDetails(p.id, p.product, p.price)
    );

    return Promise.all(detailPromises);
  })
  .then((details) => {
    console.log(details);
    const total = details.reduce((sum, item) => sum + item.price, 0);
    console.log(total);
  })
  .catch((err) => {
    console.error(err);
  });

async function main() {
  try {
    const user = await getUser(123);
    console.log(user);

    const purcxhases = await getPurchases(user.id);
    console.log(purchases);

    const detailPromises = purchases.map((p) =>
      getProductDetails(p.id, p.product, p.price)
    );

    const details = await Promise.all(detailPromises);
    console.log(details);

    const total = details.reduce((sum, item) => sum + item.price, 0);
    console.log(total);
  } catch (err) {
    console.error(err);
  }
}

main();
