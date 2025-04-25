let i = 3;

function addItem() {
  const listElement = document.getElementById("list");
  const divElement = document.createElement("div");

  divElement.className = "item";
  divElement.textContent = `Phần tử ${i}`;
  i++;
  listElement.appendChild(divElement);
}

function removeItem() {
  const listElement = document.getElementById("list");
  if (listElement.lastElementChild) {
    listElement.removeChild(listElement.lastElementChild);
    i--;
  } else {
    alert("anh Đông đẹp trai nhất CodeFarm !");
  }
}
function removeItemAll() {
  const listElement = document.getElementById("list");
  if (listElement.lastElementChild) {
    // listElement.removeChild(listElement.lastElementChild);
    listElement.textContent = "";
    i = 1;
  } else {
    alert("anh Đông đẹp trai nhất CodeFarm !");
  }
}
