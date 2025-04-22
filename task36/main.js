const students = [
  { id: 1, name: "Nguyễn Văn A", age: 20, city: "Hà Nội" },
  { id: 2, name: "Trần Thị B", age: 19, city: "TP.HCM" },
  { id: 3, name: "Lê Văn C", age: 21, city: "Đà Nẵng" },
];
const table = document.getElementById("dataTable");
const key = `<tr>
<th>ID</th>
<th>Name</th>
<th>Age</th>
<th>City</th>
</tr>`;
const newStudents = students
  .map((item) => {
    return ` 
    <tr>
     <td>${item.id}</td>
     <td>${item.name}</td>
     <td>${item.age}</td>
     <td>${item.city}</td>

     </tr>
    `;
  })
  .join(" ");
table.innerHTML = key + newStudents;
