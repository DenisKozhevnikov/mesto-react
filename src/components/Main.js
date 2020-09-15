import React from 'react';
import api from '../utils/Api';
import Card from './Card'

function Main(props) {
  const [userName, setUserName] = React.useState('');
  const [userDescription , setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo()
      .then((result) => {
        setUserName(result.name);
        setUserDescription(result.about);
        setUserAvatar(result.avatar)
      })
      .catch((err) => console.log(err));

    api.getItems()
      .then((result) => {
        setCards(result)
      })
      .catch((err) => console.log(err));
  }, [])  

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__container">
          <div className="profile__avatar-container" onClick={props.onEditAvatar}>
            <img src={userAvatar} alt="Аватар" className="profile__avatar"/>
          </div>
          <div className="profile__info">
            <div className="profile__info-container">
              <h1 className="profile__name">{userName}</h1>
              <button type="button" className="profile__edit" onClick={props.onEditProfile}></button>
            </div>
            <p className="profile__about-me">{userDescription}</p>
          </div>
        </div>
        <button type="button" className="profile__add-card" onClick={props.onAddPlace}></button>
      </section>
      <section className="cards">
        {
          cards.map((card) => {
            return (
              <Card key={card._id} card={card} onCardClick={props.onCardClick} />
            )
          })
        }
      </section>
    </main>
  )
}

export default Main;