import { useState, useEffect } from "react";

import OneModule from "./OneModule";

const Main = () => {
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
    <div className="oneModule">
      {modules.map((module) => (
        <OneModule key={module.id} module={module} />
      ))}
    </div>
  );
};

export default Main;
