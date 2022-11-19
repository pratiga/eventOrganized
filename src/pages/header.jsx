/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import "../Styles/head.css";
import { Link } from "react-router-dom";

const header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          src="http://dynamicevents.com.au/wp-content/uploads/2015/05/Dynamic-LOGO-300dpi-rgb.jpg"
          alt="images"
        />
      </div>
      <div className="center-head">
        <ul className="list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/service">service</Link>
          </li>
          <li>
            <Link to="/event">Events</Link>
          </li>
          <li>
            <Link to="/sponsors">sponsors</Link>
          </li>
        </ul>
      </div>
      <div className="right-head">
        <div className="list button">
          <button className="add events">
            <Link to="/eventForm">Add Event</Link>
          </button>
          <button className="add sponcer">
            <Link to="/sponserForm">Add Sponsor </Link>
           </button>
        </div>
      </div>
    </div>
  );
};

export default header;
