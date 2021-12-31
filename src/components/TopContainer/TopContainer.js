import React from "react";
import { Element } from "react-scroll";
import TopContent from "../TopContent/TopContent";
import "./TopContainer.css";
import "font-awesome/css/font-awesome.min.css";

const TopContainer = (props) => {
  let metadata = props.metadata;
  return (
    <Element name="Home" className="topcontainer">
      <div className="topconatainer_content">
        <TopContent />
        <h4>powered by {metadata.University}</h4>
        {/* <hr /> */}
        <div className="Icons">
          <a href={metadata.github}>
            <i className="fa fa-github fa-2x"></i>
          </a>
          <a href="#">
            <i className="fa fa-telegram fa-2x"></i>
          </a>
        </div>
      </div>
    </Element>
  );
};

export default TopContainer;
