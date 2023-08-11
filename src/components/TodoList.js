const TodoList = (parentElement) => {
  const todoList = document.createElement("div");
  todoList.classList.add("todo-container");

  todoList.innerHTML = `
      <div class="todo-list"></div>
  `;

  parentElement.appendChild(todoList);
};

export default TodoList;
