import Todo from "./Todo";

const TodosController = () => {
  let todos = [];

  const getTodos = () => todos;

  const addTodo = (description, importance, dueDate) => {
    const todo = Todo(description, importance, dueDate);
    todos.push(todo);
  };
  const deleteTodo = (todoID) => {
    todos = todos.filter((item) => todos.indexOf(item) !== parseInt(todoID));
  };

  return { getTodos, addTodo, deleteTodo };
};

export default TodosController;
