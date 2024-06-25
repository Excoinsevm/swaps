import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import "./NavBar.css";

const NavBar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav>
      <div className="Title">
        <h1 className="navbar-logo">
          PopSwap
        </h1>
      </div>

      <div className="NavbarItems">
        <ul className={`nav-menu ${clicked ? "active" : ""}`}>
          {MenuItems.map((item, index) => (
            <li key={index}>
              <Link className="nav-links" to={item.url}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="menu-icon" onClick={handleClick}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

