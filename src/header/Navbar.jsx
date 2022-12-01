/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { menuItems } from "../data/menu";
import MenuItems from "./MenuItems";
import MenuIcon from "@mui/icons-material/Menu";
import CancelIcon from "@mui/icons-material/Cancel";
import "../Styles/head.css";
const styleForButton = {
    fontSize:'2rem'
}
const navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <div className="header">
        <div className="logo">
          <img
            src="http://dynamicevents.com.au/wp-content/uploads/2015/05/Dynamic-LOGO-300dpi-rgb.jpg"
            alt="images"
          />
        </div>
        <div className="center-head">
          <ul className={showMediaIcons ? "mobile-menu" : "list"}>
            {menuItems.map((menu, index) => {
              const depthLevel = 0;
              return (
                <MenuItems items={menu} key={index} depthLevel={depthLevel} />
              );
            })}
          </ul>
        </div>
        {/* hamburger menu */}
        <div className="hamburger-menu">
          <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
            {showMediaIcons ? <CancelIcon style={styleForButton} /> : <MenuIcon style={styleForButton} />}
          </a>
        </div>
      </div>
    </>
  );
};

export default navbar;
