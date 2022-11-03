import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../context/CurrentUserContext.js";

function EditProfilePopup({
  handleUpdateUser,
  closeAllPopups,
  isOpen,
  onClose,
}) {
  const currentUser = React.useContext(CurrentUserContext);
  const { name, about } = currentUser;
  const [profileName, setpProfileName] = React.useState("");
  const [profileAbout, setProfileAbout] = React.useState("");
  // input change
  function handleNameChange(evt) {
    setpProfileName(evt.target.value);
  }
  // input change
  function handleDescriptionChange(evt) {
    setProfileAbout(evt.target.value);
  }
  function handleSubmit(evt) {
    evt.preventDefault();

    handleUpdateUser({
      name: profileName,
      about: profileAbout,
    })
      .then((data) => {
        currentUser.name = data.name;
        currentUser.about = data.about;
      })
      .catch((err) => console.log(err));
    currentUser.name = profileName;
    currentUser.about = profileAbout;
    closeAllPopups();
  }
  // всталяем значение в инпуты
  React.useEffect(() => {
    if (isOpen) {
      setpProfileName(name);
      setProfileAbout(about);
    }
  }, [isOpen, currentUser]);
  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      title={"Редактировать профиль"}
      buttonText={"Сохранить"}
      name={"edit"}
      form={"form-data"}
      onSubmit={handleSubmit}
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
        value={profileName}
        onChange={handleNameChange}
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
        value={profileAbout}
        onChange={handleDescriptionChange}
      />
      <span className="popup__error about-input-error"></span>
    </PopupWithForm>
  );
}
export default EditProfilePopup;
