import TodosController from "../libs/TodosController";
import closeIcon from "../images/close-one.svg";

const ScreenController = () => {
  const todosController = TodosController();

  const todoDescription = document.getElementById("todo-description");
  const todoDueDate = document.getElementById("todo-due-date");
  const todoImportance = document.getElementById("todo-importance");
  const addButton = document.querySelector(".todo-add");
  const todoList = document.querySelector(".todo-list");
  const todoLists = document.getElementById("todo-lists");

  const todoDisplay = (list) => {
    todoList.innerHTML = "";

    list.forEach((todo, index) => {
      todoList.innerHTML += `
      <div class="todo" id="${index}">
      <div>${todo.description}</div>
      <div>${todo.dueDate}</div>
      <div>${todo.importance}</div>
      <input type="checkbox" id="status" name="status" value="done">
      <button type="button" class="todo-delete">
      <img src=${closeIcon} class="close-icon">
          </button>
        </div>
        `;
    });
  };

  const getListToRender = () =>
    todosController.getTodos(todoLists.selectedIndex);

  const addTodo = () => {
    if (todoDescription.value === "" || todoDueDate.value === "") return;

    todosController.addTodo(
      todoLists.selectedIndex,
      todoDescription.value,
      todoImportance.value,
      todoDueDate.value
    );
  };

  const deleteTodo = (event) => {
    if (
      event.target.classList.contains("todo-delete") ||
      event.target.parentElement.classList.contains("todo-delete")
    ) {
      const selectedTodoID = event.target.closest("div").id;
      todosController.deleteTodo(todoLists.selectedIndex, selectedTodoID);
    }
  };

  todoLists.addEventListener("change", () => {
    todoDisplay(getListToRender());
  });

  addButton.addEventListener("click", () => {
    addTodo();
    todoDisplay(getListToRender());
  });

  todoList.addEventListener("click", (event) => {
    deleteTodo(event);
    todoDisplay(getListToRender());
  });
};

export default ScreenController;
