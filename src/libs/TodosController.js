import Todo from "./Todo";

const TodosController = () => {
  const defaultValue = [
    {
      name: "My List",
      todos: [],
    },
  ];

  let todosLists =
    localStorage.getItem("myList") !== null
      ? JSON.parse(localStorage.getItem("myList"))
      : defaultValue;

  const storeList = () => {
    const storedList = JSON.stringify(todosLists);
    localStorage.setItem("myList", storedList);
  };

  const getList = () => todosLists;

  const addList = (name) => {
    todosLists.push({ name: name, todos: [] });
    storeList();
  };

  const deleteList = (listIndex) => {
    todosLists = todosLists.filter(
      (list) => todosLists.indexOf(list) !== parseInt(listIndex)
    );

    if (todosLists.length === 0) {
      localStorage.clear();
      todosLists = defaultValue;
    }
    storeList();
  };

  const getTodos = (listIndex) =>
    // getTodos if array is not empty
    listIndex !== -1 && todosLists[listIndex].todos;

  const addTodo = (listIndex, description, importance, dueDate) => {
    const todo = new Todo(description, importance, dueDate);
    todosLists[listIndex].todos.push(todo);
    storeList();
  };

  const deleteTodo = (listIndex, todoID) => {
    todosLists[listIndex].todos = todosLists[listIndex].todos.filter(
      (item) => todosLists[listIndex].todos.indexOf(item) !== parseInt(todoID)
    );
    storeList();
  };

  const changeTodoState = (listIndex, todo) => {
    todosLists[listIndex].todos[todo].state =
      !todosLists[listIndex].todos[todo].state;
    storeList();
  };

  return {
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
