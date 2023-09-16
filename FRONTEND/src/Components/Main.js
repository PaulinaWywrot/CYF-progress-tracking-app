import modules from "./BACKEND/modules.json";
import OneModule from "./OneModule";

const Main = () => {
  return (
    <div className="oneModule">
      {modules.map((module) => (
        <OneModule key={module.id} video={video} />
      ))}
    </div>
  );
};

export default Main;
