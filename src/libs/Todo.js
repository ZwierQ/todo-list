const Todo = (description, importance, dueDate) => {
  const creationDate = new Date();

  let status = false;

  const getDescription = () => description;
  const getImportance = () => importance;
  const getDueDate = () => dueDate;
  const getStatus = () => status;
  const toggleStatus = () => (status = !status);

  return {
    getDescription,
    getImportance,
    getDueDate,
    getStatus,
    toggleStatus,
  };
};

export default Todo;
