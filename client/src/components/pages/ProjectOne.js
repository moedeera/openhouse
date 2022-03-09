import React, { useContext } from "react";
import { UserContext } from "../../Context/UserContext";

export const ProjectOne = () => {
  const { teams, league } = useContext(UserContext);
  console.log(teams, league);

  return <div className="main">

< div className="table">
    {teams.map((team)=>(<div key={team.id} className="team"> 
    
    <div className="colors">
         <div className="color" style={{backgroundColor:`${team.color1}`}}></div>
         <div className="color"  style={{backgroundColor:`${team.color2}`}}></div>
    
    </div>
    <div  className="team-row">{team.name}</div>
    <div  className="team-row">{team.gp}</div>
    <div  className="team-row">{team.win}</div>
    <div  className="team-row">{team.lose}</div>
    <div  className="team-row">{team.pts}</div>

    </div>
    
   ))}
</div>



  </div>;
};

export default ProjectOne;

