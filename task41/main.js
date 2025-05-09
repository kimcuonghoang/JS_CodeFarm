let todos = JSON.parse(localStorage.getItem("todos")) || [];
let currentFilter = "all";
let editIndex = null;

const todoList = document.getElementById("todoList");
const todoInput = document.getElementById("todoInput");
const errorMessage = document.getElementById("errorMessage");
const actionButton = document.getElementById("actionButton");

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function renderTodos() {
  todoList.innerHTML = "";
  let filteredTodos = todos.filter((todo) => {
    if (currentFilter === "active") return !todo.completed;
    if (currentFilter === "completed") return todo.completed;
    return true;
  });

  filteredTodos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.className = `todo-item ${todo.completed ? "completed" : ""}`;

    const taskText = document.createElement("span");
    taskText.className = "task-text";
    taskText.textContent = todo.text;
    taskText.onclick = () => toggleTodo(index);

    const status = document.createElement("div");
    status.className = `status ${todo.completed ? "completed" : "active"}`;
    status.textContent = todo.completed ? "Hoàn thành" : "Chưa làm";
    status.onclick = () => toggleTodo(index);

    const editBtn = document.createElement("button");
    editBtn.className = "edit";
    editBtn.textContent = "Sửa";
    editBtn.onclick = () => startEditTodo(index);

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete";
    deleteBtn.textContent = "Xóa";
    deleteBtn.onclick = () => deleteTodo(index);

    li.appendChild(status);
    li.appendChild(taskText);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    todoList.appendChild(li);
  });

  updateFilterButtons();
}

function addTodo() {
  const value = todoInput.value.trim();
  if (!value) {
    errorMessage.style.display = "block";
    return;
  }
  errorMessage.style.display = "none";

  if (editIndex !== null) {
    todos[editIndex].text = value;
    editIndex = null;
    actionButton.textContent = "Thêm";
  } else {
    todos.push({ text: value, completed: false });
  }

  todoInput.value = "";
  saveTodos();
  renderTodos();
}

function startEditTodo(index) {
  todoInput.value = todos[index].text;
  editIndex = index;
  actionButton.textContent = "Cập nhật";
  todoInput.focus();
}

function deleteTodo(index) {
  todos.splice(index, 1);
  saveTodos();
  renderTodos();
}

function toggleTodo(index) {
  todos[index].completed = !todos[index].completed;
  saveTodos();
  renderTodos();
}

function filterTodos(status) {
  currentFilter = status;
  renderTodos();
}

function updateFilterButtons() {
  const buttons = document.querySelectorAll(".filter-section button");
  buttons.forEach((btn) => btn.classList.remove("active"));
  const activeBtn = [...buttons].find((btn) =>
    btn.textContent.includes(
      currentFilter === "all"
        ? "Tất cả"
        : currentFilter === "active"
        ? "Chưa hoàn thành"
        : "Hoàn thành"
    )
  );
  if (activeBtn) activeBtn.classList.add("active");
}

// Khởi tạo
renderTodos();
