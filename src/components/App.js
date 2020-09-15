import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import PopupWithImage from './PopupWithImage';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  
  function handleEditProfileClick() {
    isEditProfilePopupOpen ? setIsEditProfilePopupOpen(false) : setIsEditProfilePopupOpen(true);
  }
  
  function handleAddPlaceClick() {
    isAddPlacePopupOpen ? setIsAddPlacePopupOpen(false) : setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    isEditAvatarPopupOpen ? setIsEditAvatarPopupOpen(false) : setIsEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    document.querySelector('.popup_opened').classList.remove('popup_opened');
    setSelectedCard({});
  } 

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  return (
    <div className="page">
      <div className="container">
        <Header />
        <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} />
        <Footer />
      </div>
      <PopupWithForm name='profile' title='Редактировать профиль' buttonText='Сохранить' isOpen={isEditProfilePopupOpen} onClose={handleEditProfileClick}>
        <fieldset className="popup__inputs">
          <input id="name-input" type="text" className="popup__input popup__item_name" name="name" placeholder="Имя" required minLength="2" maxLength="40" />
          <span id="name-input-error" className="popup__error"/>
          <input id="about-me-input" type="text" className="popup__input popup__item_about-me" name="aboutMe" placeholder="О себе" required minLength="2" maxLength="200" />
          <span id="about-me-input-error" className="popup__error"/>
        </fieldset>
      </PopupWithForm>
      <PopupWithForm name='add-card' title='Новое место' buttonText='Создать' isOpen={isAddPlacePopupOpen} onClose={handleAddPlaceClick}>
        <fieldset className="popup__inputs">
          <input id="title-input" type="text" className="popup__input popup__item_name" name="name" placeholder="Название" required minLength="1" maxLength="30" />
          <span id="title-input-error" className="popup__error"/>
          <input id="link-input" type="url" className="popup__input popup__item_link" name="link" placeholder="Ссылка на картинку" required />
          <span id="link-input-error" className="popup__error"/>
        </fieldset>
      </PopupWithForm>
      <PopupWithForm name='avatar' title='Обновить аватар' buttonText='Сохранить' isOpen={isEditAvatarPopupOpen} onClose={handleEditAvatarClick}>
        <fieldset className="popup__inputs">
          <input id="link-input" type="url" className="popup__input popup__item_link" name="link" placeholder="Ссылка на аватар" required />
          <span id="link-input-error" className="popup__error"/>
        </fieldset>
      </PopupWithForm>
      <PopupWithImage card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
