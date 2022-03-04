import { createContext } from "react";

export const UserContext = createContext({
  name: "john doe",
  age: 24,
  gender: true,
  email: "jd@g",
});
