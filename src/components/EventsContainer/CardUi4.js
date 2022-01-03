import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./CradUi.css";

const CardUi = (props) => {
  let metadata = props.metadata;
  return (
    <div className="cardcontainer">
      <div className="card text-center">
        <div className="overflow">
          <div id="demo" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
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
                </div>
                <div>
                  <img alt="" src={metadata.imgurl2} />
                </div>
                <div>
                  <img alt="" src={metadata.imgurl3} />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
        <a href={metadata.url} target="_blank">
          <div className="card-body text-dark">
            <h4 className="card-title">{metadata.name} </h4>
            <p className="card-text text-secondary">{metadata.description}</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default CardUi;
