import React, { Component } from "react";
import Typed from "typed.js";


export default class Header extends Component {
  componentDidMount() {
    const strings = ["Tech Club", "Annamalai University"];
    const options = {
      strings: strings,
      typeSpeed: 40,
      backSpeed: 0,
      loop: true,
      loopCount: Infinity,
    };
    this.typed = new Typed(this.el, options);
  }
  render() {
    let data = this.props.Data;
    return (
      <React.Fragment>
        <header id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
              Show navigation
            </a>
            <a
              className="mobile-btn"
              href="#nav-wrap-close"
              title="Hide navigation"
            >
              Hide navigation
            </a>
            <ul id="nav" className="nav">
              <li className="current">
                <a className="smoothscroll" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#mission">
                  Mission
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#portfolio">
                  Work
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#photos">
                  Team
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div className="row banner">
            <div className="banner-text">
              <div className="wrap">
                <h1 className="type-wrap">
                  <span
                    style={{ whiteSpace: "pre" }}
                    ref={(el) => {
                      this.el = el;
                    }}
                  />
                </h1>
              </div>
              {/* <h1 style={{ color: "#fff", fontFamily: "sans-serif " }}>
                {data.name}
              </h1> */}
              <h3 style={{ color: "#fff", fontFamily: "sans-serif " }}>
                {data.role}
              </h3>

              <hr />
              <ul className="social">
                {data.socialLinks &&
                  data.socialLinks.map((item) => {
                    return (
                      <li key={item.name}>
                        <a href={item.url} target="_blank">
                          <i className={item.className} />
                        </a>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
          <p className="scrolldown">
            <a className="smoothscroll" href="#mission">
              <i className="icon-down-circle" />
            </a>
          </p>
        </header>
      </React.Fragment>
    );
  }
}
