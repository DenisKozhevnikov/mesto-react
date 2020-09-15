import React from "react";

function Card({ card, onCardClick }) {
  return (
    <article className="card">
      <img
        className="card__image"
        src={card.link}
        alt="#"
        onClick={() => onCardClick(card)}
      />
      <div className="card__container">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like-container">
          <button type="button" className="card__like" />
          <p className="card__like-count">{card.likes.length}</p>
        </div>
      </div>
      <button type="button" className="card__remove" />
    </article>
  );
}

export default Card;
