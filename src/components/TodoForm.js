const TodoForm = (parentElement) => {
  const todoForm = document.createElement("div");
  todoForm.classList.add("todo-form");

  todoForm.innerHTML = `
    <div class="select-list">
      <h2>Select List</h2>
      <div class="todo-lists">
        <label for="todo-projects">Select List</label>
        <select name="todo-projects" id="todo-lists">
        </select>
      </div>
    </div>
    <div class="create-todo">
      <h2>Create New To-Do</h2>
      <div class="todo-description">
        <label for="todo-description">To-do</label>
        <input type="text" id="todo-description">
      </div>
      <div class="todo-due-date">
        <label for="todo-due-date">Due Date</label>
        <input type="date" id="todo-due-date">
      </div>
      <div class="todo-importance">
        <label for="todo-importance">Importance</label>
        <select name="todo-importance" id="todo-importance">
          <option value="low">Low</option>
          <option value="high">High</option>
        </select>
      </div>
      <button class="todo-add" type="button">Add To-Do</button>
    </div>
    <div class="create-list">
      <h2>Create New List</h2>
      <div class="list-name">
        <label for="create-list">List Name</label>
        <input type="text" id="create-list">
      </div>
      <button class="add-list" type="button">Create List</button>
    </div>
    <div class="delete-list">
      <h2>Delete Current List</h2>
      <button class="list-delete" type="button">Delete Current List</button>
    </div>
  `;

  parentElement.appendChild(todoForm);
};

export default TodoForm;
