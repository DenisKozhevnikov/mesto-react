import React from "react";
import api from "../utils/api";
import Card from "./Card";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getItems()])
      .then(([user, items]) => {
        setUserName(user.name);
        setUserDescription(user.about);
        setUserAvatar(user.avatar);
  
        setCards(items);
      })
      .catch((err) => console.log(err));
  }, []);  
  
  return (
    <main className="main">
      <section className="profile">
        <div className="profile__container">
          <div className="profile__avatar-container" onClick={onEditAvatar}>
            <img src={userAvatar} alt="Аватар" className="profile__avatar" />
          </div>
          <div className="profile__info">
            <div className="profile__info-container">
              <h1 className="profile__name">{userName}</h1>
              <button
                type="button"
                className="profile__edit"
                onClick={onEditProfile}
              />
            </div>
            <p className="profile__about-me">{userDescription}</p>
          </div>
        </div>
        <button
          type="button"
          className="profile__add-card"
          onClick={onAddPlace}
        />
      </section>
      <section className="cards">
        {cards.map((card) => {
          return <Card key={card._id} card={card} onCardClick={onCardClick} />;
        })}
      </section>
    </main>
  );
}

export default Main;
