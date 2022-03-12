import React from "react";
import { useState, useEffect, useContext } from "react";
import axios from "axios";

export const CustomHooks = () => {
  const [league, setLeague] = useState([]);
  const [teams, setTeams] = useState([]);

  const getLeagueData = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.get("/api/league", config);
      console.log(res.data);
      setLeague(res.data.standings);
      setTeams(res.data.teams);
    } catch (error) {
      console.log(error);
    }
  };

  




  useEffect(() => {
    getLeagueData();
  }, []);

  return {
    league,
    setLeague,
    teams,
  };
};
