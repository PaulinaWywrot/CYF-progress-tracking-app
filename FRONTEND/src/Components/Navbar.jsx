import React, { useState } from "react";
import Modal from "../UIElements/Modal";
import "./Navbar.css"; // Import your CSS file for styling

const Navbar = ({ isLoggedIn, setLoggedIn, user }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-content">
          {user.name && <p>{"Hello, " + user.name}</p>}
          <div className="navbar-buttons">
            <button className="navbar-button" onClick={toggleModal}>
              SIGN UP
            </button>
            <button className="navbar-button">LOGIN</button>
          </div>
        </div>
      </nav>
      {modalIsOpen && <Modal closeModal={toggleModal} />}
    </>
  );
};

export default Navbar;
