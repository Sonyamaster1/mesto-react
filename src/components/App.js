import React, { useEffect } from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";

function App() {
  // попап редактирования
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  // попап добавления
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  // попап аватара
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  // попап удаления
  const [isDeletePopupOpen, setIsDeletePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  // попап редактирования
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  // попап добавления
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  // попап аватара
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleDeleteClick() {
    setIsDeletePopupOpen(true);
  }
  function handleCardClick(card) {
    setSelectedCard(card);
  }
  // закрытие всех попапов
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsDeletePopupOpen(false);
    setSelectedCard(null);
  }
  return (
    <body class="root">
      <div class="page">
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onDelete={handleDeleteClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <PopupWithForm
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          title={"Новое место"}
          buttonText={"Создать"}
          name={"cards"}
          form={"cards-form"}
        >
          <input
            className="popup__input popup__input_type_image"
            type="text"
            name="image"
            id="image-input"
            autoComplete="off"
            placeholder="Название"
            minLength="2"
            maxLength="30"
            required
          />
          <span classNmae="popup__error image-input-error"></span>
          <input
            className="popup__input popup__input_type_link"
            type="url"
            name="link"
            id="link-input"
            autoComplete="off"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="popup__error link-input-error"></span>
        </PopupWithForm>
        <PopupWithForm
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          title={"Редактировать профиль"}
          buttonText={"Сохранить"}
          name={"edit"}
          form={"form-data"}
        >
          <input
            className="popup__input popup__input_type_name"
            type="text"
            name="name"
            id="name-input"
            autoComplete="off"
            minLength="2"
            maxLength="40"
            required
            placeholder="Ваше имя"
          />
          <span className="popup__error name-input-error"></span>
          <input
            className="popup__input popup__input_type_about"
            type="text"
            name="about"
            id="about-input"
            autoComplete="off"
            minLength="2"
            maxLength="200"
            required
            placeholder="О себе"
          />
          <span className="popup__error about-input-error"></span>
        </PopupWithForm>
        <PopupWithForm
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          title={"Обновить аватар"}
          buttonText={"Сохранить"}
          name={"avatar"}
          form={"avatar-form"}
        >
          <input
            type="url"
            className="popup__input popup__input_type_avatar"
            name="avatar"
            placeholder="Ссылка на новый аватар"
            autoComplete="off"
            id="avatar-input"
            minLength="2"
            required
          />
          <span className="popup__error avatar-input-error"></span>
        </PopupWithForm>
        <PopupWithForm
          isOpen={isDeletePopupOpen}
          onClose={closeAllPopups}
          title={"Вы уверены?"}
          buttonText={"Да"}
          name={"trash"}
        />
        <ImagePopup
          isOpen={selectedCard}
          card={selectedCard}
          onClose={closeAllPopups}
        />
      </div>
    </body>
  );
}

export default App;
