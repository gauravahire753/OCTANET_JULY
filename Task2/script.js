
const todoInput = document.getElementById("todo-input");
const datetimeInput = document.getElementById("datetime-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");
const prioritySelect = document.getElementById("priority-select");


addBtn.addEventListener("click", addTodo);


function addTodo() {
  const todoText = todoInput.value.trim();
  const datetimeValue = datetimeInput.value;
  const priority = prioritySelect.value

  if (todoText !== "" && datetimeValue !== "") {
    const listItem = document.createElement("li");
    listItem.className = "todo-item";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    listItem.appendChild(checkbox);

    const label = document.createElement("label");
    label.innerText = todoText;
    listItem.appendChild(label);

    const datetime = document.createElement("span");
    datetime.className = "datetime";
    datetime.innerText = formatDatetime(datetimeValue);
    listItem.appendChild(datetime);

    const priorityText = document.createElement("span");
    priorityText.classList.add("priority");
    priorityText.textContent = priority;
    listItem.appendChild(priorityText);

    todoList.appendChild(listItem);

    todoInput.value = "";
    datetimeInput.value = "";
  }
}


function formatDatetime(datetimeValue) {
  const datetime = new Date(datetimeValue);
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric"
  };
  return datetime.toLocaleString("en-US", options);
}
