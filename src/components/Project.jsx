import React from "react";
import Nav from "./Nav";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CodeIcon from "@mui/icons-material/Code";
import "./Project.css";
import { useNavigate, useParams } from "react-router-dom";
import projectData from "../data";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
const Project = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const data = projectData.filter((item) => item.id == id);

  return (
    <div>
      <Nav />
      <div>
        <h1 className="appHeading">{data[0].name}</h1>
        <div className="view">
          <button
            className="appActions appActions2"
            onClick={() => {
              window.open(`${data[0].link}`);
            }}
          >
            <VisibilityIcon />
            View Live Project
          </button>
        </div>

        <div className="appCodes">
          <button
            className="appActions appActions2"
            onClick={() => {
              window.open(`${data[0].flink}`);
            }}
          >
            <CodeIcon />
            Frontend Source Code
          </button>
          <button
            className="appActions appActions2"
            onClick={() => {
              window.open(`${data[0].blink}`);
            }}
          >
            <CodeIcon />
            Backend Source Code
          </button>
        </div>
      </div>
      <div className="stacks">
        <div className="stack">
          <p className="stackp">
            Frontend : <b>React JS</b>
          </p>
          <p className="stackp">
            Backend: <b>Node.js</b>, <b>Express JS</b>
          </p>
          <p className="stackp">
            Database: <b>MongoDB</b>
          </p>
          <p className="stackp">
            Stack: <b>MERN Stack</b>
          </p>
        </div>
        <div className="stack2">
          <p className="stackp">
            <b>Netlify</b> is used to deploy frontend
          </p>
          <p className="stackp">
            <b>Render</b> is used to deploy backend
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;
