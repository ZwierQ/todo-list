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
      <div class="todo-form__input-container todo-lists">
        <select name="todo-projects" id="todo-lists" class="todo-form__input">
        </select>
      </div>
    </div>
    <div class="create-todo tab-add-todo">
      <h2 class="form-heading">Create New To-Do</h2>
      <div class="todo-form__input-container create-todo__description">
        <input type="text" id="todo-description" class="todo-form__input" placeholder="Task Description">
        <p class="error-message" data-description-error>Please Add Description</p>
      </div>
      <div class="todo-form__input-container create-todo__due-date">
        <label for="todo-due-date">Due Date</label>
        <input type="date" id="todo-due-date" class="todo-form__input" value=${getMinDate()} min=${getMinDate()}>
      </div>
      <div class="todo-form__input-container create-todo__priority">
        <label for="todo-priority">Priority</label>
        <select name="todo-priority" id="todo-priority" class="todo-form__input"> 
          <option value="low" class="todo-form__input">Low</option>
          <option value="medium" class="todo-form__input">Medium</option>
          <option value="high" class="todo-form__input">High</option>
        </select>
      </div>
      <button class="todo-form__button" type="button" data-add-todo >Add To-Do</button>
    </div>
    <div class="create-list tab-add-list">
      <h2 class="form-heading">Create New List</h2>
      <div class="todo-form__input-container list-name">
        <input type="text" id="create-list" class="todo-form__input" placeholder="List Name">
        <p class="error-message" data-add-list-error></p>
      </div>
      <button class="todo-form__button" type="button" data-add-list>Create List</button>
    </div>
    <div class="delete-list tab-delete-list">
      <h2 class="form-heading">Delete Current List</h2>
      <button class="todo-form__button" type="button" data-list-delete>Delete Current List</button>
    </div>
  `;

  parentElement.appendChild(todoForm);
};

export default TodoForm;
