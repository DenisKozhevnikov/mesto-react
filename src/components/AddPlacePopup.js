import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const textRef = React.useRef("");
  const linkRef = React.useRef("");

  function handleAddPlaceSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name: textRef.current.value,
      link: linkRef.current.value,
    });
  }

  return (
    <PopupWithForm
      name="add-card"
      title="Новое место"
      buttonText="Создать"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleAddPlaceSubmit}
    >
      <fieldset className="popup__inputs">
        <input
          ref={textRef}
          id="title-input"
          type="text"
          className="popup__input popup__item_name"
          name="name"
          placeholder="Название"
          required
          minLength="1"
          maxLength="30"
        />
        <span id="title-input-error" className="popup__error" />
        <input
          ref={linkRef}
          id="link-input"
          type="url"
          className="popup__input popup__item_link"
          name="link"
          placeholder="Ссылка на картинку"
          required
        />
        <span id="link-input-error" className="popup__error" />
      </fieldset>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
