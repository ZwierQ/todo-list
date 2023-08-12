const TodoForm = (parentElement) => {
  const todoForm = document.createElement("div");
  todoForm.classList.add("todo-form");

  todoForm.innerHTML = `
    <div class="todo-lists">
      <label for="todo-projects">List Name</label>
      <select name="todo-projects" id="todo-lists">
        <option value="Default List" >Default List</option>
        <option value="Second List" >Second List</option>
      </select>
    </div>
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
    <button class="todo-add">Add To-Do</button>
    
  `;

  parentElement.appendChild(todoForm);
};

export default TodoForm;
