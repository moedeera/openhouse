import logo from "./logo.svg";
import "./App.css";
import Main from "./components/pages/Main";
import ProjectOne from "./components/pages/ProjectOne";
import { ProjectTwo } from "./components/pages/ProjectTwo";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserContext } from "./Context/UserContext";
import { CustomHooks } from "./Context/CustomHooks";

function App() {
  const { league, teams } = CustomHooks();
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />

          <Route
            path="/UserContext"
            element={
              <UserContext.Provider value={{ league, teams }}>
                <ProjectOne />
              </UserContext.Provider>
            }
          />

          <Route path="/Reducers" element={<ProjectTwo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
