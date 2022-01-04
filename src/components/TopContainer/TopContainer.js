import React from "react";
import { Element } from "react-scroll";
import TopContent from "../TopContent/TopContent";
import "./TopContainer.css";
// import { AccessAlarm, ThreeDRotation } from "@mui/icons-material";
import GitHubIcon from "@mui/icons-material/GitHub";
import giticon from "../../Images/github-icon.png";
import discordicon from "../../Images/discord-white-icon.jpeg";
import { ClassNames } from "@emotion/react";

const TopContainer = (props) => {
  let metadata = props.metadata;
  return (
    <Element name="Home" className="topcontainer">
      <div className="topconatainer_content">
        <TopContent />
        <h4>powered by {metadata.University}</h4>
        {/* <hr /> */}
        <div className="Icons">
          <a href={metadata.github} target="_blank">
            {/* <i class="fab fa-github"></i> */}
            {/* <GitHubIcon sx={{ color: "white", fontSize: 40 }} /> */}
            <img src={giticon} className="github"></img>
          </a>
          <a href={metadata.discord} target="_blank">
            <img src={discordicon} ClassNames="discord"></img>
            {/* <i class="fab fa-discord"></i> */}
            {/* <DiscordIcon /> */}
          </a>
        </div>
      </div>
    </Element>
  );
};

export default TopContainer;
