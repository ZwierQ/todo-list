import TodosController from "../libs/TodosController";

const ScreenController = () => {
  const todosController = TodosController();

  const todoDescription = document.getElementById("todo-description");
  const todoDueDate = document.getElementById("todo-due-date");
  const todoImportance = document.getElementById("todo-importance");

  const todoDisplay = (todos) => {
    todoList.innerHTML = "";

    todos.forEach((todo, index) => {
      todoList.innerHTML += `
          <div class="todo" id="${index}">
          <div>${todo.getDescription()}</div>
          <div>${todo.getDueDate()}</div>
          <div>${todo.getImportance()}</div>
        <input type="checkbox" id="status" name="status" value="done">
        <button class="todo-delete">Delete</button>
        </div>
        `;
    });
  };

  const addButton = document.querySelector(".todo-add");
  addButton.addEventListener("click", () => {
    if (todoDescription.value === "" || todoDueDate.value === "") return;

    todosController.addTodo(
      todoDescription.value,
      todoImportance.value,
      todoDueDate.value
    );

    todoDisplay(todosController.getTodos());
  });

  const todoList = document.querySelector(".todo-list");
  todoList.addEventListener("click", (event) => {
    if (
      event.target.classList.contains("todo-delete") ||
      event.target.parentElement.classList.containts("todo-delete")
    ) {
      const selectedTodoID = event.target.closest("div").id;
      todosController.deleteTodo(selectedTodoID);
      todoDisplay(todosController.getTodos());
    }
  });
};

export default ScreenController;
