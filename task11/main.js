function isTriangle(a, b, c) {
  // Viết logic trả về true hoặc false ở đâyđây
  return a + b > c && a + c > b && b + c > a;
}

// Test cases:
console.log(isTriangle(3, 4, 5)); // true
console.log(isTriangle(4, 5, 8)); // false
