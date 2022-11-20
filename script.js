const low = document.getElementById("low");
const medium = document.getElementById("medium");
const high = document.getElementById("high");

const todoName = document.getElementById("todo-name");
const todoContent = document.getElementById("todo-content");
const todoPriority = document.getElementById("todo-priority");

let todos = [];

const displayTodos = () => {
  low.innerHTML = "";
  medium.innerHTML = "";
  high.innerHTML = "";

  todos.forEach((todo) => {
    const div = document.createElement("div");
    div.innerHTML = `<div class="todo" onclick="deleteTodo(${todo.id})">
    <h4>${todo.name}</h4>
    <p class="details">${todo.content}</p>
    <span class="priority" style="background-color: ${todo.color}">${todo.priority}</span>
    </div>`;

    if (todo.priority === "Low") {
      low.appendChild(div);
    } else if (todo.priority === "Medium") {
      medium.appendChild(div);
    } else if (todo.priority === "High") {
      high.appendChild(div);
    }
  });
};

const createTodo = () => {
  const colors = {
    Low: "#27ae60",
    Medium: "#f39c12",
    High: "#e74c3c",
  };
  let data = {
    id: todos.length + 1,
    name: todoName.value,
    content: todoContent.value,
    priority: todoPriority.value,
    color: colors[todoPriority.value],
  };
  todos.push(data);
  displayTodos();

  todoName.value = "";
  todoContent.value = "";
  todoPriority.value = "#";
};

const deleteTodo = (id) => {
  const filtered = todos.filter((todo) => todo.id !== id);
  todos = filtered;
  displayTodos();
};
