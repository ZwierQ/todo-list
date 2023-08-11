import listTodo from "../images/list-todo.svg";

const Heading = (parentElement) => {
  const heading = document.createElement("heading");
  heading.classList.add("heading");

  heading.innerHTML = `
    <img src=${listTodo} class="logo">
    <div class="title">My To-Do</div>
  `;

  parentElement.appendChild(heading);
};

export default Heading;
