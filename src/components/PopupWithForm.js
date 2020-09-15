import React from "react";

function PopupWithForm({ name, title, buttonText, isOpen, onClose, children }) {
  return (
    <section className={`popup popup_${name} ${isOpen && "popup_opened"}`}>
      <div className="popup__container">
        <button
          type="button"
          className="popup__close"
          onClick={onClose}
        />
        <form action="#" method="post" className="popup__form" name={name}>
          <h2 className="popup__heading">{title}</h2>
          {children}
          <button type="submit" className="popup__button">
            {buttonText}
          </button>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;
