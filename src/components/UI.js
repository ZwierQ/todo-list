import Heading from "./Heading";
import Modal from "./Modal";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export const content = document.getElementById("content");

const UI = () => {
  Heading(content);
  TodoForm(content);
  TodoList(content);
  Modal(content);
};

export default UI;
