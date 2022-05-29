import ToDos from  "./Todos.js";

const todoList = document.getElementById("todoList");
const myToDos = new ToDos(todoList, 'todo');
console.log("I'm on main.js");