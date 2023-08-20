import addListIcon from "../images/add-to-shopping-list.svg";
import selectListIcon from "../images/page-list.svg";
import deleteListIcon from "../images/remove-from-shopping-list.svg";
import addTodoIcon from "../images/todo-add.svg";

const Menu = (parentElement) => {
  const mobileMenu = document.createElement("div");
  mobileMenu.classList.add("menu");

  mobileMenu.innerHTML = `
    <button type="button" class="tab-add-todo menu__button" data-menu-button>
      <img src=${addTodoIcon} class="tab-add-todo menu__icon">
    </button>
    <button type="button" class="tab-select-list menu__button" data-menu-button>
      <img src=${selectListIcon} class="tab-select-list menu__icon">
    </button>
    <button type="button" class="tab-add-list menu__button" data-menu-button>
      <img src=${addListIcon} class="tab-add-list menu__icon">
    </button>
    <button type="button" class="tab-delete-list menu__button" data-menu-button>
      <img src=${deleteListIcon} class="tab-delete-list menu__icon">
    </button>
  `;

  parentElement.appendChild(mobileMenu);
};

export default Menu;
