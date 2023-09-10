import React from "react";
import Nav from "./Nav";
import "./Projects.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import projectData from "../data";
import { useNavigate } from "react-router-dom";
const Projects = () => {
  const navigate = useNavigate("");
  return (
    <div>
      <Nav />
      <h1 className="projectHeading">MERN Stack Projects</h1>
      <div className="projectContainer">
        {projectData.map((item) => (
          <div className="project">
            <h4 className="projectName">{item.name}</h4>
            <button
              className="projectButton"
              onClick={() => {
                navigate(`/project/${item.id}`);
              }}
            >
              <VisibilityIcon />
              View Project
            </button>
          </div>
        ))}
      </div>
      <div className="iconImage">
        <img src="code.png" alt="" width="300px" />
      </div>

      {/* <h1 className="projectHeading react">React Projects</h1>
      <div className="projectContainer">
        {reactData.map((item) => (
          <div className="project">
            <h4 className="projectName">{item.name}</h4>
            <button
              className="projectButton"
              onClick={() => {
                window.open(`${item.link}`);
              }}
            >
              <VisibilityIcon />
              View Project
            </button>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Projects;
