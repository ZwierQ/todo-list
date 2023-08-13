import closeIcon from "../images/close-one.svg";
import TodosController from "../libs/TodosController";

const ScreenController = () => {
  const todosController = TodosController();

  const todoDescription = document.getElementById("todo-description");
  const todoDueDate = document.getElementById("todo-due-date");
  const todoImportance = document.getElementById("todo-importance");
  const addTodoButton = document.querySelector(".todo-add");
  const todoList = document.querySelector(".todo-list");
  const todoLists = document.getElementById("todo-lists");
  const addListButton = document.querySelector(".add-list");
  const deleteListButton = document.querySelector(".list-delete");
  const newListName = document.getElementById("create-list");

  const getCurrentList = () => todoLists.selectedIndex;
  const getListToRender = () => todosController.getTodos(getCurrentList());

  const formatDate = (date) =>
    date.replace(/(\d{4})-(\d{2})-(\d{2})/, "$3-$2-$1");

  const displayTodos = (list) => {
    todoList.innerHTML = "";

    list.forEach((todo, index) => {
      todoList.innerHTML += `
      <div class="todo" id="${index}">
      <div>${todo.description}</div>
      <div>${formatDate(todo.dueDate)}</div>
      <div>${todo.importance}</div>
      <input type="checkbox" id="status" name="status" value="done">
      <button type="button" class="todo-delete">
      <img src=${closeIcon} class="close-icon">
      </button>
      </div>
      `;
    });
  };

  const renderListsOptions = () => {
    const todosLists = todosController.getList();

    todoLists.innerHTML = "";

    todosLists.forEach((list) => {
      todoLists.innerHTML += `
      <option value="${list.name}">${list.name}</option>
      `;
    });
  };

  const addList = () => {
    const newListNameValue = newListName.value;
    const newListIndex = todosController.getList().length;

    if (newListNameValue === "") return;

    todosController.addList(newListNameValue);
    renderListsOptions();
    todoLists.selectedIndex = newListIndex;
    displayTodos(getListToRender());
  };

  const deleteList = () => {
    todosController.deleteList(getCurrentList());
    renderListsOptions();
    displayTodos(getListToRender());
  };

  const addTodo = () => {
    const todoDescriptionValue = todoDescription.value;
    const todoImportanceValue = todoImportance.value;
    const todoDueDateValue = todoDueDate.value;

    if (todoDescriptionValue === "" || todoDueDateValue === "") return;

    todosController.addTodo(
      getCurrentList(),
      todoDescriptionValue,
      todoImportanceValue,
      todoDueDateValue
    );

    displayTodos(getListToRender());
  };

  const deleteTodo = (event) => {
    if (
      event.target.classList.contains("todo-delete") ||
      event.target.parentElement.classList.contains("todo-delete")
    ) {
      const selectedTodoID = event.target.closest("div").id;

      todosController.deleteTodo(getCurrentList(), selectedTodoID);
      displayTodos(getListToRender());
    }
  };

  todoLists.addEventListener("change", () => displayTodos(getListToRender()));

  addTodoButton.addEventListener("click", () => addTodo());

  todoList.addEventListener("click", (event) => deleteTodo(event));

  addListButton.addEventListener("click", () => addList());

  deleteListButton.addEventListener("click", () => deleteList());

  // Initial List Options selector render
  renderListsOptions();
};

export default ScreenController;
