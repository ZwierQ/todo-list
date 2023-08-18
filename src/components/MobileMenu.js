import addListIcon from "../images/add-to-shopping-list.svg";
import selectListIcon from "../images/page-list.svg";
import deleteListIcon from "../images/remove-from-shopping-list.svg";
import addTodoIcon from "../images/todo-add.svg";

const MobileMenu = (parentElement) => {
  const mobileMenu = document.createElement("div");
  mobileMenu.classList.add("mobile-menu");

  mobileMenu.innerHTML = `
    <button type="button" class="tab-add-todo mobile-menu__button">
      <img src=${addTodoIcon} class="tab-add-todo mobile-menu__icon">
    </button>
    <button type="button" class="tab-select-list mobile-menu__button">
      <img src=${selectListIcon} class="tab-select-list mobile-menu__icon">
    </button>
    <button type="button" class="tab-add-list mobile-menu__button">
      <img src=${addListIcon} class="tab-add-list mobile-menu__icon">
    </button>
    <button type="button" class="tab-delete-list mobile-menu__button">
      <img src=${deleteListIcon} class="tab-delete-list mobile-menu__icon">
    </button>
  `;

  parentElement.appendChild(mobileMenu);
};

export default MobileMenu;
