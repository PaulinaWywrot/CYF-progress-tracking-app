import React, { useState, useEffect } from "react";
import "./App.css";

import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({ type: "", name: "Alex", password: "" });
  const [modules, setModules] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:8000/`)
      .then((res) => {
        if (res.status >= 200 && res.status <= 299) {
          return res.json();
        } else {
          throw new Error(
            `Encountered something unexpected: ${res.status} ${res.statusText}`
          );
        }
      })
      .then((data) => {
        setModules(data);
      })
      .catch((Error) => console.log(Error));
  });

  return (
    <div className="App">
      <header>
        <h1>MODULES</h1>
      </header>

      <Navbar isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} user={user} />
      <Main modules={modules} />
      <Footer />
    </div>
  );
};

export default App;
