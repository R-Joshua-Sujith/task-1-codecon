import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Project from "./components/Project";
import { useState } from "react";
import Brightness3Icon from "@mui/icons-material/Brightness3";
function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  return (
    <div className={`${isDarkMode ? "dark" : "light"}`}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/project/:id" element={<Project />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
      <Brightness3Icon
        className="iconbright"
        onClick={() => setIsDarkMode(!isDarkMode)}
      />
    </div>
  );
}

export default App;
