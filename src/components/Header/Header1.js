import React from "react";
import { Link } from "react-scroll";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import icon from "../../Images/tech.png";
import "./header1.css";

const Header1 = () => {
  return (
    <div>
      <nav
        className="navbar navbar-inverse  navbar-fixed-top"
        style={{ margin: "0px", padding: "0px", borderRadius: "0px" }}
      >
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#myNavbar"
            >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">
              <div className="header__left">
                <h1>
                  Tech
                  <span>Club</span>
                </h1>
              </div>
            </a>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav navbar-right ">
              <li>
                <Link to="Home" smooth={true} duration={500}>
                  <h4 className="nav__right">Home</h4>
                </Link>
              </li>
              <li>
                <Link to="Mission" smooth={true} duration={500}>
                  <h4>Vission & Mission </h4>
                </Link>
              </li>
              <li>
                <Link to="Work" smooth={true} duration={500}>
                  <h4>Work</h4>
                </Link>
              </li>
              <li>
                <Link to="Event" smooth={true} duration={500}>
                  <h4>Events</h4>
                </Link>
              </li>
              <li>
                <Link to="Contact" smooth={true} duration={500}>
                  <h4>Contact</h4>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header1;
