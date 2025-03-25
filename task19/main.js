function printIsoscelesTriangle(n, character) {
  for (let i = 1; i <= n; i++) {
    let l = "";
    for (let k = 0; k < n - i; k++) {
      l += " ";
    }
    for (let j = 0; j < 2 * i - 1; j++) {
      l += character;
    }
    console.log(l);
  }
}

printIsoscelesTriangle(5, "*");
