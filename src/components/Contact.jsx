import React from "react";
import Nav from "./Nav";
import "./Contact.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const navigate = useNavigate();
  const [from_name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");
  const [myMail, setMail] = useState("rjoshuasujith@gmail.com");

  const submitHandler = () => {
    if (from_name === "" || email === "" || query === "") {
      toast.warning("Please Fill all the fields");
    } else {
      emailjs.send(
        "service_125o7n8",
        "template_c5u0zgq",
        {
          from_name: from_name,
          to_name: "Joshua",
          from_email: email,
          to_email: "rjoshuasujith@gmail.com",
          message: query,
        },
        "b7-7fic01tSVx8u1H"
      );
      toast.success(
        `Hey ${from_name} I received your message, will react out to you soon`
      );
      setName("");
      setEmail("");
      setQuery("");
    }
  };

  return (
    <div>
      <Nav />
      <h1 className="contactHeading">Contact Form</h1>
      <div className="contactForm">
        <input
          type="text"
          placeholder="Enter your name"
          value={from_name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          value={email}
          type="email"
          placeholder="Enter your email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <textarea
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="textarea"
          name=""
          id=""
          rows="10"
          placeholder="Enter your message"
        ></textarea>
        <button className="formButton" onClick={submitHandler}>
          Submit
        </button>
      </div>
      <div className="ContactDetails">
        <a
          className="phone ContactItem"
          href={`https://wa.me/${918105823389}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon /> Whatsapp
        </a>
        <a
          className="phone ContactItem"
          href={`tel:${8105823389}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <LocalPhoneIcon />
          +91 8105823389
        </a>

        <a
          className="phone ContactItem"
          href={`mailto:${myMail}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <EmailIcon />
          rjoshuasujith@gmail.com
        </a>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
