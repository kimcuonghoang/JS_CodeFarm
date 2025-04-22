setInterval(() => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const second = now.getSeconds();
  document.close();
  document.getElementById(
    "clock"
  ).textContent = `${hours} : ${minutes} : ${second}`;
}, 1000);
