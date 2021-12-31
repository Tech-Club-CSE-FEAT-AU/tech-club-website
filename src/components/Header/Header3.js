import React from "react";
import { Link } from "react-scroll";
import "./Header3.css";

const Header3 = () => {
  return (
    <div>
      <div className="header">
        <nav class="navbar navbar-expand-md bg-dark navbar-dark navbar-fixed-top fixed-top">
          <a class="navbar-brand" href="#">
            <div className="header__left" style={{ paddingTop: "0" }}>
              <h1>
                Tech<span>Club</span>
              </h1>
            </div>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="collapsibleNavbar">
            <ul class="navbar-nav  navbar-right ml-auto">
              <li class="nav-item">
                <Link
                  to="Home"
                  smooth={true}
                  duration={500}
                  className="nav-item"
                >
                  <h4 className="nav__right">Home</h4>
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  to="Mission"
                  smooth={true}
                  duration={500}
                  className="nav-item"
                >
                  <h4>Vission & Mission </h4>
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  to="Work"
                  smooth={true}
                  duration={500}
                  className="nav-item"
                >
                  <h4>Work</h4>
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  to="Event"
                  smooth={true}
                  duration={500}
                  className="nav-item"
                >
                  <h4>Events</h4>
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  to="Contact"
                  smooth={true}
                  duration={500}
                  className="nav-item"
                >
                  <h4>Contact</h4>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header3;
