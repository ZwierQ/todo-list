import closeIcon from "../images/close-one.svg";
import TodosController from "../libs/TodosController";
import { getMinDate } from "./getMinDate";

const ScreenController = () => {
  const todosController = TodosController();

  const todoDescription = document.getElementById("todo-description");
  const todoDueDate = document.getElementById("todo-due-date");
  const todoPriority = document.getElementById("todo-priority");
  const addTodoButton = document.querySelector(".todo-add");
  const todoList = document.querySelector(".todo-list");
  const todoLists = document.getElementById("todo-lists");
  const descriptionError = document.querySelector(".description-error-message");
  const addListButton = document.querySelector(".add-list");
  const addListError = document.querySelector(".add-list-error-message");
  const deleteListButton = document.querySelector(".list-delete");
  const newListName = document.getElementById("create-list");
  const modal = document.getElementById("modal");
  const confirmListDelete = document.querySelector(".confirm");
  const cancelListDelete = document.querySelector(".cancel");
  const tabButtons = document.querySelectorAll(".menu__button");

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

    todosController.addList(newListNameValue);
    renderListsOptions();
    todoLists.selectedIndex = newListIndex;
    displayTodos(getListToRender());
    newListName.value = "";
    removeError(newListName, addListError);
  };

  const deleteList = () => {
    modal.close();
    todosController.deleteList(getCurrentList());
    renderListsOptions();
    displayTodos(getListToRender());
  };

  const addError = (borderToChange, errorMessage) => {
    borderToChange.classList.add("error");
    errorMessage.classList.add("error");
  };

  const removeError = (...args) => {
    const displayedErrors = [...args];

    displayedErrors.forEach((error) => error.classList.remove("error"));
  };

  const addTodo = () => {
    // If todos description or due date are empty return without adding todo
    if (todoDescription.value === "") {
      addError(todoDescription, descriptionError);
      return;
    }

    todosController.addTodo(
      getCurrentList(),
      todoDescription.value,
      todoPriority.value,
      todoDueDate.value
    );
    displayTodos(getListToRender());
    todoDescription.value = "";
    todoDueDate.value = getMinDate();
    todoPriority.selectedIndex = 0;
    removeError(todoDescription, descriptionError);
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
    if (event.target.classList.contains("todo__status")) {
      const todo = event.target.closest(".todo").id;

      todosController.changeTodoState(getCurrentList(), todo);
      displayTodos(getListToRender());
    }
  };

  const selectTab = (event) => {
    const selectedTab = event.target.classList[0];
    const tabElements = document.querySelectorAll(`.${selectedTab}`);

    tabElements.forEach((item) => {
      const itemClasses = item.classList;
      // "selected" class toggle clicked tab
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

  todoLists.addEventListener("change", () => displayTodos(getListToRender()));
  addTodoButton.addEventListener("click", () => addTodo());
  todoList.addEventListener("click", (event) => {
    deleteTodo(event), changeTodoState(event);
  });
  addListButton.addEventListener("click", () => addList());
  deleteListButton.addEventListener("click", () => modal.showModal());
  confirmListDelete.addEventListener("click", () => deleteList());
  cancelListDelete.addEventListener("click", () => modal.close());
  tabButtons.forEach((button) => {
    button.addEventListener("click", (event) => selectTab(event));
  });

  // Initial Lists Options selector render
  renderListsOptions();
  // Initial Todos render
  displayTodos(getListToRender());
};

export default ScreenController;
