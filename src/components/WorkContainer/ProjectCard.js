import React from "react";
import "./WorkContainer.css";
import projectphoto from "../../Images/unknown.png";

const ProjectCard = (props) => {
  let metadata = props.metadata;
  return (
    <div>
      <div className="Workcontainer__projects">
        <div className="content">
          <h4 className="projectname">{metadata.name}</h4>
          <p>{metadata.description}</p>
          <p>{metadata.content}</p>
        </div>
        <div className="img">
          <img src={projectphoto} className="img-fluid" alt="project name"/>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default ProjectCard;
