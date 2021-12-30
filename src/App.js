import React from "react";
import Header from "./components/Header/Header";
import TopContainer from "./components/TopContainer/TopContainer";
import "font-awesome/css/font-awesome.min.css";
import MissionContainer from "./components/VissionMissionContainer/VissionMissionContainer";
import WorkContainer from "./components/WorkContainer/WorkContainer";
import ContactContainer from "./components/ContactContainer/ContactContainer";
import EventsContainer from "./components/EventsContainer/EventsContainer";
import metadata from "./Metadata";
// import "./App.css";
import Header1 from "./components/Header/Header1";

const App = () => {
  return (
    <div>
      <Header1 metadata={metadata} />
      {/* <Header metadata={metadata} /> */}
      <TopContainer metadata={metadata} />
      <MissionContainer metadata={metadata} />
      <WorkContainer metadata={metadata} />
      <EventsContainer metadata={metadata} />
      <ContactContainer metadata={metadata} />
    </div>
  );
};

export default App;
