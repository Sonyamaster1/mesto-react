import React from "react";
import closeIcon from "../images/CloseIcon.svg";
function ImagePopup(props) {
  return (
    <div
      className={`popup popup_full-screen ${props.card ? "popup_opened" : ""}`}
    >
      <figure class="popup__container-full-screen">
        <img
          src={props.card ? props.card.link : ""}
          alt={props.card ? props.card.name : ""}
          class="popup__full-image"
        />
        <figcaption class="popup__full-text">
          {props.card ? props.card.name : ""}
        </figcaption>
        <button type="button" class="popup__close">
          <img
            src={closeIcon}
            alt="закрывающий крестик"
            class="popup__close-image"
            onClick={props.onClose}
          />
        </button>
      </figure>
    </div>
  );
}
export default ImagePopup;
