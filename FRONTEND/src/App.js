import React, { useState } from "react";
import "./App.css";

import Navbar from "./Components/Navbar";
import Main from "./Components/Main";

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({ type: "", name: "", password: "" });

  return (
    <div className="App">

      <header>
        <h1>MODULES</h1>
      </header>

      <Navbar isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />

      <Main />
    </div>
  );
};

export default App;
