import React, { useRef } from "react";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarRef = useRef("");

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <fieldset className="popup__inputs">
        <input
          ref={avatarRef}
          id="link-input"
          type="url"
          className="popup__input popup__item_link"
          name="link"
          placeholder="Ссылка на аватар"
          required
        />
        <span id="link-input-error" className="popup__error" />
      </fieldset>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
