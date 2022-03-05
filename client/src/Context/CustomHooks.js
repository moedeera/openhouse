import React from "react";
import { useState, useEffect, useContext } from "react";
import axios from "axios";

export const CustomHooks = () => {
  const [league, setLeague] = useState({
    teams: [
      { id: 1, name: "North" },
      { id: 2, name: "West" },
      { id: 3, name: "South" },
      { id: 4, name: "East" },
    ],
    standings: [1, 2, 3, 4],
  });

  const getLeagueData = async () => {
    try {
      const res = await axios.get("/api/league");
      console.log(res.data);
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
  };
};
