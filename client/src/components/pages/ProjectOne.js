import React, { useContext } from "react";
import { UserContext } from "../../Context/UserContext";

export const ProjectOne = () => {
  const msg = UserContext;
  console.log(msg);
  return <div>ProjectOne</div>;
};

export default ProjectOne;
