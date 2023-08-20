import ScreenController from "./ScreenController";

const EventsController = () => {
  const screenController = ScreenController();

  const addTodoButton = document.querySelector("[data-add-todo]");
  const addListButton = document.querySelector("[data-add-list]");
  const deleteListButton = document.querySelector("[data-list-delete]");
  const confirmListDelete = document.querySelector("[data-confirm]");
  const cancelListDelete = document.querySelector("[data-cancel]");

  const [todoList, todoLists, tabButtons] = screenController.getElements();

  // Initial render on page load
  window.addEventListener("load", () => screenController.initialRender());

  todoLists.addEventListener("change", () => screenController.displayTodos());
  addTodoButton.addEventListener("click", () => screenController.addTodo());
  todoList.addEventListener("click", (event) => {
    screenController.deleteTodo(event), screenController.changeTodoState(event);
  });
  addListButton.addEventListener("click", () => screenController.addList());
  deleteListButton.addEventListener("click", () =>
    screenController.displayModal()
  );
  confirmListDelete.addEventListener("click", () =>
    screenController.deleteList()
  );
  cancelListDelete.addEventListener("click", () =>
    screenController.closeModal()
  );
  tabButtons.forEach((button) => {
    button.addEventListener("click", (event) =>
      screenController.selectTab(event)
    );
  });
};

export default EventsController;
