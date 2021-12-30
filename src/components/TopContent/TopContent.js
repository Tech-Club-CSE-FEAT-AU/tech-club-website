import React from "react";
import Typed from "react-typed";
import "./TopContent.css";

const TopContent = () => {
  return (
    <div className="topcontent">
      <div>
        <Typed
          strings={["TechClub"]}
          typeSpeed={30}
          backSpeed={50}
          loop
        ></Typed>
      </div>
    </div>
  );
};

export default TopContent;
