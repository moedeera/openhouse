import React, { useContext } from "react";
import { UserContext } from "../../Context/UserContext";

export const ProjectOne = () => {
  const { teams, league } = useContext(UserContext);
  console.log(teams, league);

  return <div>ProjectOne</div>;
};

export default ProjectOne;
