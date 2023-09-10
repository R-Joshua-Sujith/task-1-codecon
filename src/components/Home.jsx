import React from "react";
import Nav from "./Nav";
import "./Home.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import CodeIcon from "@mui/icons-material/Code";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";
import Resume_Joshua from "../Resume_Joshua.pdf";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Nav />
      <img className="profile" src="profile.jpg" alt="" />
      <div className="name">
        <h2>Joshua</h2>
        <LinkedInIcon
          className="linkedIn"
          onClick={() =>
            window.open("https://www.linkedin.com/in/joshuasujith/", "_blank")
          }
        />
      </div>
      <div className="profession">
        <div className="position">
          Full Stack Developer{" "}
          <GitHubIcon
            className="github"
            onClick={() =>
              window.open("https://github.com/R-Joshua-Sujith", "_blank")
            }
          />
        </div>
      </div>
      <hr />
      <div className="tagline">
        Hey !! I love to build full stack web applications.
      </div>
      <div className="actions">
        <button
          className="action"
          onClick={() => {
            navigate("/projects");
          }}
        >
          <CodeIcon />
          Projects
        </button>

        <button
          className="action"
          onClick={() => {
            window.open(Resume_Joshua);
          }}
        >
          <DownloadIcon />
          Download CV
        </button>
      </div>
      <button className="action contactMe" onClick={() => navigate("/contact")}>
        <EmailIcon />
        Contact Me
      </button>
    </div>
  );
};

export default Home;
