const myForm = document.getElementById("myForm");
const reset = document.getElementById("reset-btn");
const add = document.getElementById("add-btn");
const tbody = document.getElementById("tbody");
const errorMessage = document.getElementById("error-message");
let studentSaved = JSON.parse(localStorage.getItem("student") || "[]");
let isEditing = false;
let curEditingId = null;
myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = myForm.name.value.trim();
  const math = myForm.math.value.trim();
  const english = myForm.english.value.trim();
  const science = myForm.science.value.trim();
  const avg = ((+math + +english + +science) / 3).toFixed(2);
  let rank = "";
  if (avg >= 8) rank = "Giỏi";
  else if (avg >= 6.5) rank = "Khá";
  else if (avg >= 5) rank = "Trung bình";
  else rank = "Yếu";

  if (!name || !math || !english || !science || !avg || !rank) {
    errorMessage.innerText = "Thiếu dữ liệu đừng mong thêm mới !";
    return;
  }
  if (
    isNaN(math) ||
    isNaN(english) ||
    isNaN(science) ||
    math < 0 ||
    math > 10 ||
    english < 0 ||
    english > 10 ||
    science < 0 ||
    science > 10
  ) {
    errorMessage.innerText = "Điểm phải là số từ 0 đến 10 ";
    return;
  }
  errorMessage.innerText = "";
  if (isEditing) {
    studentSaved = studentSaved.map((item) => {
      return item.id === curEditingId
        ? { ...item, name, math, english, science, avg, rank }
        : item;
    });
    isEditing = false;
    curEditingId = null;
    myForm.name.disabled = false;
  } else {
    const newStudent = {
      id: generateRandomId(),
      name,
      math,
      english,
      science,
      avg,
      rank,
    };
    studentSaved.push(newStudent);
  }
  localStorage.setItem("student", JSON.stringify(studentSaved));
  renderForm();
  resetForm();
});
function resetForm() {
  myForm.reset();
  add.innerText = "Add";
  myForm.name.disabled = false;
}
function searchForm() {
  const keyword = document.getElementById("search").value.toLowerCase();
  const filterStudent = studentSaved.filter((item) =>
    item.name.toLowerCase().includes(keyword)
  );
  tbody.innerHTML = "";
  filterStudent.forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `
     <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.math}</td>
            <td>${item.english}</td>
            <td>${item.science}</td>
            <td>${item.avg}</td>
            <td>${item.rank}</td>
            <td>
              <button class="btn btn-warning" onclick="editForm('${item.id}')">Edit</button>
              <button class="btn btn-danger" onclick="deleteForm('${item.id}')">
                Delete
              </button>
            </td>
    `;
    tbody.appendChild(row);
  });
}
function generateRandomId(length = 3) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
}
window.editForm = function (id) {
  add.innerText = "Edit";
  const student = studentSaved.find((item) => item.id === id);
  if (student) {
    myForm.math.value = student.math;
    myForm.english.value = student.english;
    myForm.science.value = student.science;

    myForm.name.value = student.name;
    myForm.name.disabled = true;
    isEditing = true;
    curEditingId = id;
  }
};
window.deleteForm = function (id) {
  studentSaved = studentSaved.filter((item) => item.id !== id);
  alert("delete success");
  localStorage.setItem("student", JSON.stringify(studentSaved));
  renderForm();
};
window.sortStudents = function () {
  const sortOption = document.getElementById("sort").value;

  if (sortOption === "asc") {
    studentSaved.sort((a, b) => a.avg - b.avg);
  } else if (sortOption === "desc") {
    studentSaved.sort((a, b) => b.avg - a.avg);
  } else {
    studentSaved = JSON.parse(localStorage.getItem("student") || "[]");
  }

  renderForm();
};
window.filterByRank = function () {
  const selectedRank = document.getElementById("filter-rank").value;
  let filtered = [...studentSaved];

  if (selectedRank) {
    filtered = filtered.filter((item) => item.rank === selectedRank);
  }

  renderFiltered(filtered);
};
function renderFiltered(data) {
  tbody.innerHTML = "";
  data.forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.math}</td>
        <td>${item.english}</td>
        <td>${item.science}</td>
        <td>${item.avg}</td>
        <td>${item.rank}</td>
        <td>
          <button class="btn btn-warning" onclick="editScore('${item.id}')">Edit</button>
          <button class="btn btn-danger" onclick="deleteForm('${item.id}')">Delete</button>
        </td>
      `;
    tbody.appendChild(row);
  });
}

function renderForm() {
  const selectedRank = document.getElementById("filter-rank").value;
  if (selectedRank) {
    filterByRank();
    return;
  }
  tbody.innerHTML = "";
  studentSaved.forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `
     <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.math}</td>
            <td>${item.english}</td>
            <td>${item.science}</td>
            <td>${item.avg}</td>
            <td>${item.rank}</td>
            <td>
              <button class="btn btn-warning" onclick="editForm('${item.id}')">Edit</button>
              <button class="btn btn-danger" onclick="deleteForm('${item.id}')">
                Delete
              </button>
            </td>
    `;
    tbody.appendChild(row);
  });
}
renderForm();
sortStudents();
