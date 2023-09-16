import OneModule from "./OneModule";

const Main = ({ modules }) => {
  return (
    <div className="oneModule">
      {modules.map((module) => (
        <OneModule key={module.id} />
      ))}
    </div>
  );
};

export default Main;
