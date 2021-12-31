import React from "react";
import { Link } from "react-scroll";
import "./Header.css";
import icon from "../../Images/tech.png";

const Header = (props) => {
  let metadata = props.metadata;
  return (
    <div className="header">
      <div className="header__left">
        <h1>
          <img className="imagelogo" src={icon} alt="" width="30" height="30" />
          ech
          <span>Club</span>
        </h1>
      </div>
      <div className="header__right">
        <Link to="Home" smooth={true} duration={500}>
          <h4>Home</h4>
        </Link>
        <Link to="Mission" smooth={true} duration={500}>
          <h4>Vission & Mission    </h4>
        </Link>
        <Link to="Work" smooth={true} duration={500}>
          <h4>Work</h4>
        </Link>
        <Link to="Event" smooth={true} duration={500}>
          <h4>Events</h4>
        </Link>
        <Link to="Contact" smooth={true} duration={500}>
          <h4>Contact</h4>
        </Link>
      </div>
    </div>
  );
};

export default Header;
