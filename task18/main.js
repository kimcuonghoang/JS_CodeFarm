function printMultiplicationTable() {
  for (i = 1; i <= 10; i++) {
    console.log("------------------------");
    for (y = 1; y <= 10; y++) {
      console.log(`${i} x ${y} bằng ${i * y}`);
    }
  }
}
printMultiplicationTable();
