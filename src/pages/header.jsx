/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import "../Styles/head.css";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CancelIcon from "@mui/icons-material/Cancel";

const header = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <div className="header">
      <div className="logo">
        <img
          src="http://dynamicevents.com.au/wp-content/uploads/2015/05/Dynamic-LOGO-300dpi-rgb.jpg"
          alt="images"
        />
      </div>
      <div className="center-head">
        <ul className={showMediaIcons ? "mobile-menu" : "list"}>
          <li className="menu">
            <Link to="/">Home</Link>
          </li>
          <li className="menu">
            <Link to="/about">About</Link>
          </li>
          <li className="menu">
            <Link to="/service">service</Link>
          </li>
          <li className="menu">
            <Link to="/event">Events</Link>
          </li>
          <li className="menu">
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
      {/* hamburger menu */}
      <div className="hamburger-menu">
        <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
          {showMediaIcons ? <CancelIcon />:<MenuIcon /> }
        </a>
      </div>
    </div>
  );
};

export default header;
