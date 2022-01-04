import React from "react";
import { Element } from "react-scroll";
import TopContent from "../TopContent/TopContent";
import "./TopContainer.css";
// import { AccessAlarm, ThreeDRotation } from "@mui/icons-material";
import GitHubIcon from "@mui/icons-material/GitHub";

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
            {/* <i class="fab fa-github"></i> */}
            <GitHubIcon sx={{ color: "white", fontSize: 40 }} />
          </a>
          <a href={metadata.discord}>
            <i class="fab fa-discord"></i>
            {/* <DiscordIcon /> */}
          </a>
        </div>
      </div>
    </Element>
  );
};

export default TopContainer;
