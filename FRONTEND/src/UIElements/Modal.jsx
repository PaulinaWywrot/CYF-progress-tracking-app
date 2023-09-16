import React from "react";

import "./Modal.css";

const Modal = ({ closeModal }) => {
  return (
    <div className="modal">
      <div className="modal__container">
        <div className="modal__header">
          <h3>Register form</h3>
          <button className="x-button" onClick={closeModal}>
            X
          </button>
        </div>
        <div className="modal__form">
          <input type="text" name="" id="" />
          <input type="password" />
          <button className="btn btn-primary">REGISTER</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
