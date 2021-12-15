import React, { Component } from "react";
import Header from "./components/Header";
import Mission from "./components/Mission";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import stringData from "./stringData";
import Photos from "./components/Photos";
import NewProjects from "./components/NewProjects";
import NewPastProjects from "./components/NewPastProjects";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header Data={stringData} />
        <Mission Data={stringData} />
        <NewProjects Data={stringData} />
        <NewPastProjects Data={stringData} />
        <Photos />
        <ContactUs Data={stringData} />
        <Footer Data={stringData} />
      </div>
    );
  }
}

export default App;
