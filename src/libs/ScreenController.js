import closeIcon from "../images/close-one.svg";
import TodosController from "../libs/TodosController";
import { getMinDate } from "./getMinDate";

const ScreenController = () => {
  const todosController = TodosController();

  const todoDescription = document.getElementById("todo-description");
  const todoDueDate = document.getElementById("todo-due-date");
  const todoPriority = document.getElementById("todo-priority");
  const todoList = document.querySelector("[data-todo-list]");
  const todoLists = document.getElementById("todo-lists");
  const descriptionError = document.querySelector("[data-description-error]");
  const addListError = document.querySelector("[data-add-list-error]");
  const newListName = document.getElementById("create-list");
  const modal = document.getElementById("modal");

  const getCurrentList = () => todoLists.selectedIndex;
  const getListToRender = () => todosController.getTodos(getCurrentList());
  const getNewListNameValue = () => newListName.value;
  const getTodoDescription = () => todoDescription.value;

  const formatDate = (date) =>
    date.replace(/(\d{4})-(\d{2})-(\d{2})/, "$3-$2-$1");

  const displayTodos = () => {
    const list = getListToRender();
    todoList.innerHTML = `<h1>${
      todosController.getList()[getCurrentList()].name
    }</h1>`;

    // If list array is empty return without render todos
    if (getCurrentList() === -1) return;

    list.forEach((todo, index) => {
      todoList.innerHTML += `
      <div class="todo ${todo.importance} ${
        todo.state ? "checked" : ""
      }" id="${index}">
        <div class="todo__description">${todo.description}</div>
        <div class="todo__info">
          <div class="todo__date">${formatDate(todo.dueDate)}</div>
          <input type="checkbox" class="todo__status" name="status" value="done" ${
            todo.state ? "checked" : ""
          }>
          <button type="button" class="todo__delete-button">
            <img src=${closeIcon} class="close-icon">
          </button>
        </div>
      </div>
      `;
    });
  };

  const addError = (borderToChange, errorMessage) => {
    borderToChange.classList.add("error");
    errorMessage.classList.add("error");
  };

  const removeError = (...args) => {
    const displayedErrors = [...args];

    displayedErrors.forEach((error) => error.classList.remove("error"));
  };

  const resetErrors = () =>
    removeError(todoDescription, descriptionError, newListName, addListError);

  const emptyListNameError = () => {
    addError(newListName, addListError);
    addListError.innerHTML = "Please Name Your List";
  };

  const invalidListNameError = () => {
    addError(newListName, addListError);
    addListError.innerHTML = "There Is A List With That Name";

    newListName.value = "";
  };

  const todoNameError = () => {
    addError(todoDescription, descriptionError);
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

  const initialRender = () => {
    renderListsOptions();
    displayTodos();
  };

  const displayModal = () => modal.showModal();

  const closeModal = () => modal.close();

  const resetValues = (inputField, errorMessage) => {
    inputField.value = "";
    removeError(inputField, errorMessage);
  };

  const displayNewList = (listName, listIndex) => {
    todosController.addList(listName);
    renderListsOptions();
    todoLists.selectedIndex = listIndex;
    displayTodos();
    resetValues(newListName, addListError);
  };

  const rerenderList = () => {
    todosController.deleteList(getCurrentList());
    renderListsOptions();
    displayTodos();
  };

  const displayNewTodo = () => {
    todosController.addTodo(
      getCurrentList(),
      todoDescription.value,
      todoPriority.value,
      todoDueDate.value
    );

    displayTodos();
    todoDueDate.value = getMinDate();
    todoPriority.selectedIndex = 0;
    resetValues(todoDescription, descriptionError);
  };

  const removeDisplayedTodo = (todoID) => {
    todosController.deleteTodo(getCurrentList(), todoID);
    displayTodos();
  };

  const changeTodoState = (todo) => {
    todosController.changeTodoState(getCurrentList(), todo);
    displayTodos();
  };

  const selectTab = (tabs, buttons, selectedTab) => {
    tabs.forEach((item) => {
      const itemClasses = item.classList;
      // toggle "selected" class on given tab
      itemClasses.contains("selected")
        ? itemClasses.remove("selected")
        : itemClasses.add("selected");
    });

    // Removing "selected" class from other tabs buttons
    buttons.forEach((button) => {
      const buttonClass = button.classList[0];
      const otherButtons = document.querySelectorAll(`.${buttonClass}`);

      if (buttonClass === selectedTab) return;

      otherButtons.forEach((item) => item.classList.remove("selected"));
    });
  };

  return {
    initialRender,
    displayTodos,
    displayModal,
    closeModal,
    emptyListNameError,
    invalidListNameError,
    todoNameError,
    rerenderList,
    resetErrors,
    displayNewList,
    displayNewTodo,
    removeDisplayedTodo,
    getNewListNameValue,
    changeTodoState,
    getTodoDescription,
    selectTab,
    getList: todosController.getList,
  };
};

export default ScreenController;
