const Modal = (parentElement) => {
  const modal = document.createElement("dialog");
  modal.id = "modal";

  modal.innerHTML = `
    <div class="confirm-delete">
      Are you sure you want to delete current list?
    </div>
    <div class="confirm-buttons">
      <button type="button" class="modal-button confirm">Confirm</button>
      <button type="button" class="modal-button cancel">Cancel</button>
    </div>
  `;

  parentElement.appendChild(modal);
};

export default Modal;
