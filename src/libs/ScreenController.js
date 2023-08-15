import closeIcon from "../images/close-one.svg";
import TodosController from "../libs/TodosController";
import { getMinDate } from "./getMinDate";

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
  const modal = document.getElementById("modal");
  const confirmListDelete = document.querySelector(".confirm");
  const cancelListDelete = document.querySelector(".cancel");

  const getCurrentList = () => todoLists.selectedIndex;
  const getListToRender = () => todosController.getTodos(getCurrentList());

  const formatDate = (date) =>
    date.replace(/(\d{4})-(\d{2})-(\d{2})/, "$3-$2-$1");

  const displayTodos = (list) => {
    todoList.innerHTML = "";

    // If list array is empty return without render todos
    if (getCurrentList() === -1) return;

    list.forEach((todo, index) => {
      todoList.innerHTML += `
      <div class="todo ${todo.importance}${
        todo.state ? " checked" : ""
      }" id="${index}">
        <div class="description">${todo.description}</div>
        <div class="todo-info">
          <div class="date">${formatDate(todo.dueDate)}</div>
          <input type="checkbox" class="status" name="status" value="done" ${
            todo.state ? "checked" : ""
          }>
          <button type="button" class="todo-delete">
            <img src=${closeIcon} class="close-icon">
          </button>
        </div>
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
    const existingLists = todosController.getList();
    const newListIndex = existingLists.length;

    // If new list name is empty return without adding list
    if (newListNameValue === "") return;

    // If new name is not unique return without adding list
    if (
      existingLists.findIndex((list) => list.name === newListNameValue) !== -1
    )
      return;

    todosController.addList(newListNameValue);
    renderListsOptions();
    todoLists.selectedIndex = newListIndex;
    displayTodos(getListToRender());
    todosController.storeList();
    newListName.value = "";
  };

  const deleteList = () => {
    todosController.deleteList(getCurrentList());
    renderListsOptions();
    displayTodos(getListToRender());
    todosController.storeList();
    modal.close();
  };

  const addTodo = () => {
    // If todos description or due date are empty return without adding todo
    if (todoDescription.value === "") return;

    todosController.addTodo(
      getCurrentList(),
      todoDescription.value,
      todoImportance.value,
      todoDueDate.value
    );
    displayTodos(getListToRender());
    todosController.storeList();
    todoDescription.value = "";
    todoDueDate.value = getMinDate();
    todoImportance.selectedIndex = 0;
  };

  const deleteTodo = (event) => {
    const selectedTodoID = event.target.closest(".todo").id;
    // deletes todo if we click close icon
    if (event.target.classList.contains("close-icon")) {
      todosController.deleteTodo(getCurrentList(), selectedTodoID);
      displayTodos(getListToRender());
      todosController.storeList();
    }
  };

  const changeTodoState = (event) => {
    const todo = event.target.closest(".todo").id;
    // change status if we click checkbox
    if (event.target.classList.contains("status")) {
      todosController.changeTodoState(getCurrentList(), todo);
      todosController.storeList();
      displayTodos(getListToRender());
    }
  };

  todoLists.addEventListener("change", () => displayTodos(getListToRender()));
  addTodoButton.addEventListener("click", () => addTodo());
  todoList.addEventListener("click", (event) => {
    deleteTodo(event), changeTodoState(event);
  });
  addListButton.addEventListener("click", () => addList());
  deleteListButton.addEventListener("click", () => modal.showModal());
  confirmListDelete.addEventListener("click", () => deleteList());
  cancelListDelete.addEventListener("click", () => closeModal());

  // Initial Lists Options selector render
  renderListsOptions();
  // Initial Todos render
  displayTodos(getListToRender());
};

export default ScreenController;
