import React, { useContext } from "react";
import { UserContext } from "../../Context/UserContext";

export const ProjectOne = () => {
  const { league, setLeague } = useContext(UserContext);
  console.log(league);
  return <div>ProjectOne</div>;
};

export default ProjectOne;
