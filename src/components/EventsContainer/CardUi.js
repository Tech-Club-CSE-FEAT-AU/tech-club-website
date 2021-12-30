import React from "react";
import projectphoto1 from "../../Images/25-11-21 Workshop/Picture 1.png";
import projectphoto2 from "../../Images/25-11-21 Workshop/Picture 2.png";
import projectphoto3 from "../../Images/25-11-21 Workshop/Picture 3.png";
import projectphoto4 from "../../Images/25-11-21 Workshop/Picture 4.png";

import "./CradUi.css";

const CardUi = (props) => {
  let metadata = props.metadata;
  return (
    <div className="cardbody" style={{ width: "18rem" }}>
      <div className="card text-center">
        <div className="overflow">
          <img src={projectphoto1} alt="Event image" className="card-img-top" />
        </div>
        <div className="card-body text-dark"></div>
        <h4 className="card-title">{metadata.name}</h4>
        <p className="card-text text-secondary">{metadata.description}</p>
      </div>
    </div>
  );
};

export default CardUi;
