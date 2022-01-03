import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./CardUi2.css";

const CardUi2 = (props) => {
  let metadata = props.metadata;
  return (
    <div>
      <Carousel
        className="coursel"
        autoPlay
        infiniteLoop
        showThumbs={false}
        stopOnHover
        transitionTime="500"
        interval="3000"
        responsive
      >
        <div>
          <img alt="" src={metadata.imgurl1} />
          <span className="card_description">{metadata.name}</span>
        </div>
        <div>
          <img alt="" src={metadata.imgurl2} />
          <h4 className="card_description">{metadata.name}</h4>
        </div>
        <div>
          <img alt="" src={metadata.imgurl3} />
          <h4 className="card_description">{metadata.name}</h4>
        </div>
      </Carousel>
    </div>
  );
};

export default CardUi2;
