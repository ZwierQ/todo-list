import closeIcon from "../images/close-one.svg";
import { formatDate } from "../libs/formatDate";

const Todo = (todo, ID) => {
  return `
    <div 
      class="todo 
      ${todo.importance} 
      ${todo.state ? "checked" : ""}" 
      id="${ID}"
    >
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
};

export default Todo;
