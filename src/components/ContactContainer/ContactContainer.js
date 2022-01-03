import React from "react";
import { Element } from "react-scroll";
import "./ContactContainer.css";
import techlogo from "../../Images/Tech-club-logo.png";

const ContactContainer = (props) => {
  let metadata = props.metadata;
  return (
    <div className="contactcontainer">
      <Element name="Contact" className="contactcontainer__inside">
        <h1>Contact Us</h1>
        <h4>
          <img src={techlogo} width="40" height="40" /> Tech Club
        </h4>
        <p className="addr">
          <bold>Addr:</bold> Annamalai University,Annamalai Nagar,Chidambaram -
          608002
        </p>

        <p className="conatcticon">
          <a href={metadata.github}>
            <i class="fab fa-github"></i>
          </a>
          <a href={metadata.discord}>
            <i class="fab fa-discord"></i>
          </a>
        </p>
        <div className="footer">
          &copy; 2021 Tech Club&nbsp;|&nbsp; All right reserved.
          <br />
          Annamalai University
        </div>
      </Element>
    </div>
  );
};

export default ContactContainer;
