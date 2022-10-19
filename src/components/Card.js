import like from "../images/Vector3.svg";
import trash from "../images/trash.svg";
import React from "react";
function Card(card, props) {
  function handleClick() {
    card.onCardClick(card);
  }
  return (
    <div className="element">
      <img
        className="element__image"
        src={card.link}
        alt={card.name}
        onClick={handleClick}
      />
      <div className="element__text">
        <h2 className="element__title">{card.name}</h2>
        <button type="button" className="element__button-like">
          <img src={like} className="element__like" />
          <div className="element__like-counter">{card.likes.length}</div>
        </button>
      </div>
      <button type="reset" className="element__button-trash">
        <img src={trash} className="element__trash" />
      </button>
    </div>
  );
}
export default Card;
