import React from "react";
import { Element } from "react-scroll";
import "./WorkContainer.css";
import projectphoto from "../../Images/unknown.png";
import ProjectCard from "./ProjectCard";

const WorkContainer = (props) => {
  let metadata = props.metadata;
  return (
    <Element name="Work" className="workcontainer">
      <div>
        <h1 className="Title">
          <bold>Current Work</bold>
        </h1>
        <div className="container-fluid">
          <div className="row d-flex justify-content-center">
            <div className="col-md-9">
              {metadata.Currentwork.map((item) => {
                return(
                <ProjectCard metadata={item} />
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1>
          <bold>Past Work</bold>
        </h1>
        <div className="container-fluid">
          <div className="row d-flex justify-content-center">
            <div className="col-md-9">
            {metadata.Pastwork.map((item) => {
                return(
                <ProjectCard metadata={item} />
                )
              })}
          </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default WorkContainer;
