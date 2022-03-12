import logo from "./logo.svg";
import "./App.css";
import Main from "./components/pages/Main";
import ProjectOne from "./components/pages/ProjectOne";
import { ProjectTwo } from "./components/pages/ProjectTwo";
import { ProjectThree } from "./components/pages/ProjectThree";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserContextProvider } from "./Context/UserContext";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Main />} />

            <Route
              path="/UserContext"
              element={
                <UserContextProvider>
                  <ProjectOne />
                </UserContextProvider>
              }
            />

            <Route path="/Reducers" element={<ProjectTwo />} />

            <Route path="/MaterialUI" element={<ProjectThree />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
