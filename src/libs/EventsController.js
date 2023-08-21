import ScreenController from "./ScreenController";

const EventsController = () => {
  const screenController = ScreenController();

  const addTodoButton = document.querySelector("[data-add-todo]");
  const addListButton = document.querySelector("[data-add-list]");
  const deleteListButton = document.querySelector("[data-list-delete]");
  const confirmListDelete = document.querySelector("[data-confirm]");
  const cancelListDelete = document.querySelector("[data-cancel]");
  const tabButtons = document.querySelectorAll("[data-menu-button]");
  const todoLists = document.getElementById("todo-lists");
  const todoList = document.querySelector("[data-todo-list]");

  const addList = () => {
    const newListNameValue = screenController.getNewListNameValue();
    const existingLists = screenController.getList();
    const newListIndex = existingLists.length;

    // If new list name is empty return without adding list
    if (newListNameValue === "") {
      screenController.emptyListNameError();
      return;
    }

    // If new list name is not unique return without adding list
    if (
      existingLists.findIndex((list) => list.name === newListNameValue) !== -1
    ) {
      screenController.invalidListNameError();
      return;
    }

    screenController.displayNewList(newListNameValue, newListIndex);
  };

  const deleteList = () => {
    screenController.closeModal();
    screenController.rerenderList();
  };

  const addTodo = () => {
    // If todos description or due date are empty return without adding todo
    if (screenController.getTodoDescription() === "") {
      screenController.todoNameError();
      return;
    }

    screenController.displayNewTodo();
  };

  const deleteTodo = (event) => {
    // deletes todo on "close-icon" click
    if (event.target.classList.contains("close-icon")) {
      const selectedTodoID = event.target.closest(".todo").id;

      screenController.removeDisplayedTodo(selectedTodoID);
    }
  };

  const changeTodoState = (event) => {
    // change status on checkbox click
    if (event.target.classList.contains("todo__status")) {
      const todo = event.target.closest(".todo").id;

      screenController.changeTodoState(todo);
    }
  };

  const selectTab = (event) => {
    const selectedTab = event.target.classList[0];
    const tabElements = document.querySelectorAll(`.${selectedTab}`);

    screenController.selectTab(tabElements, tabButtons, selectedTab);
    screenController.resetErrors();
  };

  // Initial render on page load
  window.addEventListener("load", () => screenController.initialRender());

  todoLists.addEventListener("change", () => screenController.displayTodos());

  addTodoButton.addEventListener("click", () => addTodo());

  todoList.addEventListener("click", (event) => {
    deleteTodo(event), changeTodoState(event);
  });

  addListButton.addEventListener("click", () => addList());

  deleteListButton.addEventListener("click", () =>
    screenController.displayModal()
  );

  confirmListDelete.addEventListener("click", () => deleteList());

  cancelListDelete.addEventListener("click", () =>
    screenController.closeModal()
  );

  tabButtons.forEach((button) => {
    button.addEventListener("click", (event) => selectTab(event));
  });
};

export default EventsController;
