import React from "react";
import { Element } from "react-scroll";
import "./VissionMissionContainer.css";

const VissionMissionContainer = (props) => {
  let metadata = props.metadata;

  return (
    <Element name="Mission" className="missioncontainer">
      <div>
        <h1 className="Title">
          <bold>Mission</bold>
        </h1>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-11">
              {metadata.mission.map((item) => {
                return (
                  <ul>
                    <li>{item.Mission1}</li>
                    <li>{item.Mission2}</li>
                    <li>{item.Mission3}</li>
                    <li>{item.Mission4}</li>
                    <li>{item.Mission5}</li>
                    <li>{item.Mission6}</li>
                    <li>{item.Mission7}</li>
                  </ul>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1>
          <bold>Vision</bold>
        </h1>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-11">
              <ul>
                <li style={{listStyleType:"none"}}>{metadata.vission}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default VissionMissionContainer;
