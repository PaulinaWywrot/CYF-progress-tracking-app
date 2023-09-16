import React, { useState } from "react";

import Modal from "../UIElements/Modal";

const Navbar = ({ isLoggedIn, setLoggedIn }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <p>Hello, </p>
        <button onClick={toggleModal}>SIGN UP</button>
        <button>LOGIN</button>
      </nav>
      {modalIsOpen && <Modal />}
    </>
  );
};

export default Navbar;
