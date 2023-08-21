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
  const tabButtons = document.querySelectorAll("[data-menu-button]");

  const getCurrentList = () => todoLists.selectedIndex;
  const getListToRender = () => todosController.getTodos(getCurrentList());
  const getElements = () => [todoList, todoLists, tabButtons];

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

  const addList = () => {
    const newListNameValue = newListName.value;
    const existingLists = todosController.getList();
    const newListIndex = existingLists.length;

    // If new list name is empty return without adding list
    if (newListNameValue === "") {
      addError(newListName, addListError);
      addListError.innerHTML = "Please Name Your List";

      return;
    }

    // If new list name is not unique return without adding list
    if (
      existingLists.findIndex((list) => list.name === newListNameValue) !== -1
    ) {
      addError(newListName, addListError);
      addListError.innerHTML = "This List Name Already Exists";

      newListName.value = "";

      return;
    }

    displayNewList(newListNameValue, newListIndex);
  };

  const deleteList = () => {
    closeModal();
    todosController.deleteList(getCurrentList());
    renderListsOptions();
    displayTodos();
  };

  const addTodo = () => {
    // If todos description or due date are empty return without adding todo
    if (todoDescription.value === "") {
      addError(todoDescription, descriptionError);
      return;
    }

    displayNewTodo();
  };

  const deleteTodo = (event) => {
    // deletes todo on "close-icon" click
    if (event.target.classList.contains("close-icon")) {
      const selectedTodoID = event.target.closest(".todo").id;

      todosController.deleteTodo(getCurrentList(), selectedTodoID);
      displayTodos();
    }
  };

  const changeTodoState = (event) => {
    // change status on checkbox click
    if (event.target.classList.contains("todo__status")) {
      const todo = event.target.closest(".todo").id;

      todosController.changeTodoState(getCurrentList(), todo);
      displayTodos();
    }
  };

  const selectTab = (event) => {
    const selectedTab = event.target.classList[0];
    const tabElements = document.querySelectorAll(`.${selectedTab}`);

    tabElements.forEach((item) => {
      const itemClasses = item.classList;
      // clicked tab "selected" class toggle
      itemClasses.contains("selected")
        ? itemClasses.remove("selected")
        : itemClasses.add("selected");
    });

    tabButtons.forEach((button) => {
      const buttonClass = button.classList[0];
      // Removing "selected" class from other tabs
      if (buttonClass !== selectedTab) {
        const otherButtons = document.querySelectorAll(`.${buttonClass}`);

        otherButtons.forEach((item) => item.classList.remove("selected"));
      }
    });

    removeError(todoDescription, descriptionError, newListName, addListError);
  };

  return {
    initialRender,
    displayTodos,
    addTodo,
    deleteTodo,
    changeTodoState,
    addList,
    deleteList,
    selectTab,
    displayModal,
    closeModal,
    getElements,
  };
};

export default ScreenController;
