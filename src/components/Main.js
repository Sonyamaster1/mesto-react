import React from "react";
import pen from "../images/Vectoredit.svg";
import addBtn from "../images/Vector.svg";
import api from "../utils/Api";
import Card from "./Card.js";
function Main(props) {
  const [info, setInfo] = React.useState({
    name: "Обновление...",
    about: "Обновление...",
    avatar: false,
  });
  React.useEffect(() => {
    api
      .getInfo()
      .then((info) => {
        setInfo({
          name: info.name,
          about: info.about,
          avatar: info.avatar,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const [cards, setCards] = React.useState([]);
  React.useEffect(() => {
    api
      .getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className={Main}>
      <main className="content">
        <section className="profile">
          <img
            src={info.avatar}
            alt="Аватарка страницы"
            className="profile__avatar"
          />
          <div className="profile__pen" onClick={props.onEditAvatar}></div>
          <div className="profile__info">
            <div className="profile__info-container">
              <h1 className="profile__name">{info.name}</h1>
              <button
                type="button"
                className="profile__button-edit"
                onClick={props.onEditProfile}
              >
                <img src={pen} alt="Карандаш" className="profile__image-edit" />
              </button>
            </div>
            <p className="profile__about">{info.about}</p>
          </div>
          <button
            type="button"
            className="profile__button-add"
            onClick={props.onAddPlace}
          >
            <img
              src={addBtn}
              alt="Кнопка добавления"
              className="profile__image-add"
            />
          </button>
        </section>
        <section className="elements">
          {cards.map((card) => (
            <Card key={card._id} {...card} onCardClick={props.onCardClick} />
          ))}
        </section>
      </main>
    </div>
  );
}

export default Main;
