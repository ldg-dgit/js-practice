const todoForm = document.querySelector(".todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector(".todo-list");
let todos = [];

const KEY_TODOS = "todos";

function saveTodos() {
  localStorage.setItem(KEY_TODOS, JSON.stringify(todos));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  todos = todos.filter((todo) => todo.id !== parseInt(li.id));
  saveTodos();
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoOb = { text: newTodo, id: Date.now() };
  todos.push(newTodoOb);
  paintTodo(newTodoOb);
  saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const todosFromLocal = localStorage.getItem(KEY_TODOS);

if (todosFromLocal !== null) {
  const parsedTodos = JSON.parse(todosFromLocal);
  todos = parsedTodos;
  parsedTodos.forEach(paintTodo);
}
