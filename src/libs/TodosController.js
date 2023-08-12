import Todo from "./Todo";

const TodosController = () => {
  let todosLists = [
    { name: "Default List", todos: [] },
    { name: "Second List", todos: [] },
  ];

  const addList = (name) => {
    todosLists.push({ name: name, todos: [] });
  };

  const deleteList = (listIndex) => {
    todosLists = todosLists.filter((list) => {
      todosLists.indexOf(list) !== parseInt(listIndex);
    });
  };

  const getTodos = (listIndex) => todosLists[listIndex].todos;

  const addTodo = (listIndex, description, importance, dueDate) => {
    const todo = new Todo(description, importance, dueDate);
    todosLists[listIndex].todos.push(todo);
  };

  const deleteTodo = (listIndex, todoID) => {
    todosLists[listIndex].todos = todosLists[listIndex].todos.filter(
      (item) => todosLists[listIndex].todos.indexOf(item) !== parseInt(todoID)
    );
  };

  return { addList, deleteList, getTodos, addTodo, deleteTodo };
};

export default TodosController;
