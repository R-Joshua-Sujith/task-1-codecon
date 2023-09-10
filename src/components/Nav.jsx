import React from "react";
import "./Nav.css";
import { useNavigate } from "react-router-dom";
const Nav = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <div
        className="nav-items home"
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </div>
      <div className="subNav">
        <div
          className="nav-items"
          onClick={() => {
            navigate("/projects");
          }}
        >
          Projects
        </div>
        <div
          className="nav-items"
          onClick={() => {
            navigate("/contact");
          }}
        >
          Contact Me
        </div>
      </div>
    </nav>
  );
};

export default Nav;
