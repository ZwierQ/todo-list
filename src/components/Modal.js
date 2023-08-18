const Modal = (parentElement) => {
  const modal = document.createElement("dialog");
  modal.id = "modal";

  modal.innerHTML = `
    <div class="modal__heading">
      Are you sure you want to delete current list?
    </div>
    <div class="modal__buttons">
      <button type="button" class="modal__button confirm">Confirm</button>
      <button type="button" class="modal__button cancel">Cancel</button>
    </div>
  `;

  parentElement.appendChild(modal);
};

export default Modal;
