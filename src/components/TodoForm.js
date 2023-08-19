import { getMinDate } from "../libs/getMinDate";
import Heading from "./Heading";
import Menu from "./Menu";

const TodoForm = (parentElement) => {
  const todoForm = document.createElement("div");
  todoForm.classList.add("todo-form");

  Heading(todoForm);
  Menu(todoForm);

  todoForm.innerHTML += `
    <div class="select-list tab-select-list">
      <h2 class="form-heading">Select List</h2>
      <div class="todo-lists">
        <select name="todo-projects" id="todo-lists">
        </select>
      </div>
    </div>
    <div class="create-todo tab-add-todo">
      <h2 class="form-heading">Create New To-Do</h2>
      <div class="create-todo__description">
        <input type="text" id="todo-description" placeholder="Task Description">
        <p class="description-error-message">Please Add Description</p>
      </div>
      <div class="create-todo__due-date">
        <label for="todo-due-date">Due Date</label>
        <input type="date" id="todo-due-date" value=${getMinDate()} min=${getMinDate()}>
      </div>
      <div class="create-todo__priority">
        <label for="todo-priority">Priority</label>
        <select name="todo-priority" id="todo-priority">
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      <button class="todo-add todo-form__button" type="button">Add To-Do</button>
    </div>
    <div class="create-list tab-add-list">
      <h2 class="form-heading">Create New List</h2>
      <div class="list-name">
        <input type="text" id="create-list" placeholder="List Name">
        <p class="add-list-error-message"></p>
      </div>
      <button class="add-list todo-form__button" type="button">Create List</button>
    </div>
    <div class="delete-list tab-delete-list">
      <h2 class="form-heading">Delete Current List</h2>
      <button class="list-delete todo-form__button" type="button">Delete Current List</button>
    </div>
  `;

  parentElement.appendChild(todoForm);
};

export default TodoForm;
