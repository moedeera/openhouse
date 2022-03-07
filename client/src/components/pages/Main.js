import React from "react";
import { Link } from "react-router-dom";
export const Main = () => {
  return (
    <div>
      Main
      <div className="Projects">
        <Link to="/UserContext">Project 1</Link>
      </div>
      <div>
        <Link to="/Reducers">Project 2</Link>
      </div>
      <div></div>
    </div>
  );
};

export default Main;
