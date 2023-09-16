import React from "react";

import "./Modal.css";

const Modal = ({ closeModal, deleteFunc }) => {
  return (
    <div className="modal">
      <div className="modal__container">
        <h3>Register form</h3>
        <div>
          <input type="text" name="" id="" />
          <input type="password" />
          <button
            className="btn btn-danger"
            onClick={() => {
              deleteFunc();
              closeModal(false);
            }}
          >
            REGISTER
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
