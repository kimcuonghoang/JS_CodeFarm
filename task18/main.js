function printMultiplicationTable() {
  for (i = 1; i <= 10; i++) {
    for (y = 1; y <= 10; y++) {
      console.log("------------------------");
      document.writeln(`${i} x ${y} bằng ${i * y}` + "<br>");
    }
  }
}
printMultiplicationTable();
