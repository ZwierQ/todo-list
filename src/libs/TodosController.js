import Todo from "./Todo";

const TodosController = () => {
  let todosLists =
    localStorage.getItem("myList") !== null
      ? JSON.parse(localStorage.getItem("myList"))
      : [
          {
            name: "Default List",
            todos: [new Todo("test", "low", "2023-08-15")],
          },
        ];

  const storeList = () => {
    const storedList = JSON.stringify(todosLists);
    localStorage.setItem("myList", storedList);
  };

  const getList = () => todosLists;

  const addList = (name) => {
    todosLists.push({ name: name, todos: [] });
  };

  const deleteList = (listIndex) => {
    todosLists = todosLists.filter(
      (list) => todosLists.indexOf(list) !== parseInt(listIndex)
    );
  };

  const getTodos = (listIndex) =>
    // getTodos if array is not empty
    listIndex !== -1 && todosLists[listIndex].todos;

  const addTodo = (listIndex, description, importance, dueDate) => {
    const todo = new Todo(description, importance, dueDate);
    todosLists[listIndex].todos.push(todo);
  };

  const deleteTodo = (listIndex, todoID) => {
    todosLists[listIndex].todos = todosLists[listIndex].todos.filter(
      (item) => todosLists[listIndex].todos.indexOf(item) !== parseInt(todoID)
    );
  };

  const changeTodoState = (listIndex, todo) => {
    todosLists[listIndex].todos[todo].state =
      !todosLists[listIndex].todos[todo].state;
  };

  return {
    storeList,
    getList,
    addList,
    deleteList,
    getTodos,
    addTodo,
    deleteTodo,
    changeTodoState,
  };
};

export default TodosController;
