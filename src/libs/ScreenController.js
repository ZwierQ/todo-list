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
  const displayForm = document.querySelector(".display-form");
  const todoForm = document.querySelector(".todo-form");

  const getCurrentList = () => todoLists.selectedIndex;
  const getListToRender = () => todosController.getTodos(getCurrentList());

  const formatDate = (date) =>
    date.replace(/(\d{4})-(\d{2})-(\d{2})/, "$3-$2-$1");

  const displayTodos = (list) => {
    todoList.innerHTML = `<h1>${
      todosController.getList()[getCurrentList()].name
    }</h1>`;

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

    // If new list name is empty or new name is not unique return without adding list
    if (newListNameValue === "") {
      newListName.classList.add("error");
      newListName.placeholder = "Please type List Name";
      return;
    }

    if (
      existingLists.findIndex((list) => list.name === newListNameValue) !== -1
    ) {
      newListName.classList.add("error");
      newListName.value = "";
      newListName.placeholder = "List already exist";
      return;
    }

    todosController.addList(newListNameValue);
    renderListsOptions();
    todoLists.selectedIndex = newListIndex;
    displayTodos(getListToRender());
    newListName.value = "";
    newListName.classList.remove("error");
    newListName.placeholder = "List Name";
  };

  const deleteList = () => {
    modal.close();
    todosController.deleteList(getCurrentList());
    renderListsOptions();
    displayTodos(getListToRender());
  };

  const addTodo = () => {
    // If todos description or due date are empty return without adding todo
    if (todoDescription.value === "") {
      todoDescription.classList.add("error");
      todoDescription.placeholder = "What you want to do?";
      return;
    }

    todosController.addTodo(
      getCurrentList(),
      todoDescription.value,
      todoImportance.value,
      todoDueDate.value
    );
    displayTodos(getListToRender());
    todoDescription.value = "";
    todoDueDate.value = getMinDate();
    todoImportance.selectedIndex = 0;
    todoDescription.classList.remove("error");
    todoDescription.placeholder = "Task Description";
  };

  const deleteTodo = (event) => {
    // deletes todo if we click close icon
    if (event.target.classList.contains("close-icon")) {
      const selectedTodoID = event.target.closest(".todo").id;

      todosController.deleteTodo(getCurrentList(), selectedTodoID);
      displayTodos(getListToRender());
    }
  };

  const changeTodoState = (event) => {
    // change status if we click checkbox
    if (event.target.classList.contains("status")) {
      const todo = event.target.closest(".todo").id;

      todosController.changeTodoState(getCurrentList(), todo);
      displayTodos(getListToRender());
    }
  };

  const toggleFormVisibility = () => {
    todoForm.classList.toggle("hidden");
    if (todoForm.classList.contains("hidden")) {
      displayForm.innerHTML = "Show Menu";
    } else {
      displayForm.innerHTML = "Hide Menu";
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
  cancelListDelete.addEventListener("click", () => modal.close());
  displayForm.addEventListener("click", () => toggleFormVisibility());

  // Initial Lists Options selector render
  renderListsOptions();
  // Initial Todos render
  displayTodos(getListToRender());
};

export default ScreenController;
