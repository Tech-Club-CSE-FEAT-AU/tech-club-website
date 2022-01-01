import React from "react";
import { Element } from "react-scroll";
import "./EventsContainer.css";
import CardUi from "./CardUi";
import projectphoto1 from "../../Images/25-11-21 Workshop/Picture 1.png";

const EventsContainer = (props) => {
  let metadata = props.metadata;
  return (
    <div>
      <Element name="Event" className="eventcontainer">
        <h1>Upcoming Events</h1>
        <div className="container d-flex justify-content-center">
          <div className="row">
            {metadata.UpcomingEvents.map((item) => {
              return (
                <div className=" col-sm-6 col-md-4">
                  <CardUi metadata={item} />
                </div>
              );
            })}
          </div>
        </div>
        <h1>Past Events</h1>
        <div className="container d-flex justify-content-center">
          <div className="row">
            {metadata.PastEvents.map((item) => {
              return (
                <div className="col-sm-6 col-md-4">
                  <CardUi metadata={item} />
                </div>
              );
            })}
          </div>
        </div>
      </Element>
    </div>
  );
};

export default EventsContainer;
