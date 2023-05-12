const { text } = require("stream/consumers");

const btnTodo = document.getElementById("todo-button");
const textTodo = document.getElementById("todo-text");
const results = document.getElementById("results");

btnTodo.addEventListener("click", function () {
  console.log("Button-Clicked");

  const input = textTodo.value;

  if (input.trim() !== "") {
    const listItem = document.createElement("li");

    const taskDescription = document.createElement("span");
    taskDescription.textContent = input;
    listItem.appendChild(taskDescription);

    const btnEdit = document.createElement("button");
    btnEdit.textContent = "EDIT";
    btnEdit.addEventListener("click", editTask);
    listItem.appendChild(btnEdit);

    const btnDelete = document.createElement("button");
    btnDelete.textContent = "DELETE";
    btnDelete.addEventListener("click", deleteTask);
    listItem.appendChild(btnDelete);

    results.appendChild(listItem);

    textTodo.value = "";
  }
});

function editTask(event) {
  const listItem = event.target.parentElement;
}
