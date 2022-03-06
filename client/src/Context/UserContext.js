import { createContext } from "react";
import { CustomHooks } from "./CustomHooks";

export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
  const { league, teams } = CustomHooks();

  return (
    <UserContext.Provider value={{ league, teams }}>
      {children}
    </UserContext.Provider>
  );
};
