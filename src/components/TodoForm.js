import { getMinDate } from "../libs/getMinDate";

const TodoForm = (parentElement) => {
  const todoForm = document.createElement("div");
  const displayForm = document.createElement("button");

  todoForm.classList.add("todo-form");
  todoForm.classList.add("hidden");
  displayForm.classList.add("display-form");

  todoForm.innerHTML = `
    <div class="select-list">
      <h2>Select List</h2>
      <div class="todo-lists">
        <label for="todo-lists">List Name</label>
        <select name="todo-projects" id="todo-lists">
        </select>
      </div>
    </div>
    <div class="create-todo">
      <h2>Create New To-Do</h2>
      <div class="todo-description">
        <input type="text" id="todo-description" placeholder="Task Description">
      </div>
      <div class="todo-due-date">
        <label for="todo-due-date">Due Date</label>
        <input type="date" id="todo-due-date" value=${getMinDate()} min=${getMinDate()}>
      </div>
      <div class="todo-importance">
        <label for="todo-importance">Importance</label>
        <select name="todo-importance" id="todo-importance">
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      <button class="todo-add" type="button">Add To-Do</button>
    </div>
    <div class="create-list">
      <h2>Create New List</h2>
      <div class="list-name">
        <input type="text" id="create-list" placeholder="List Name">
      </div>
      <button class="add-list" type="button">Create List</button>
    </div>
    <div class="delete-list">
      <h2>Delete Current List</h2>
      <button class="list-delete" type="button">Delete Current List</button>
    </div>
  `;

  displayForm.innerHTML = "Show Menu";

  parentElement.appendChild(todoForm);
  parentElement.appendChild(displayForm);
};

export default TodoForm;
