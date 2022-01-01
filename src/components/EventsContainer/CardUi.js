import React from "react";
import "./CradUi.css";

const CardUi = (props) => {
  let metadata = props.metadata;
  return (
    // <div className="card-group" >
    <div className="card text-center">
      <div className="overflow">
        <div id="demo" class="carousel slide" data-ride="carousel">
          <ul class="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" class="active"></li>
            <li data-target="#demo" data-slide-to="1"></li>
            <li data-target="#demo" data-slide-to="2"></li>
          </ul>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src={metadata.imgurl1}
                alt="Event image"
                className="card-img-top embed-responsive-item"
              />
            </div>
            <div class="carousel-item">
              <img
                src={metadata.imgurl2}
                alt="Event image"
                className="card-img-top embed-responsive-item"
              />
            </div>
            <div class="carousel-item">
              <img
                src={metadata.imgurl3}
                alt="Event image"
                className="card-img-top embed-responsive-item"
              />
            </div>
          </div>
          <a class="carousel-control-prev" href="#demo" data-slide="prev">
            <span class="carousel-control-prev-icon"></span>
          </a>
          <a class="carousel-control-next" href="#demo" data-slide="next">
            <span class="carousel-control-next-icon"></span>
          </a>
        </div>
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{metadata.name} </h4>
        <p className="card-text text-secondary">{metadata.description}</p>
      </div>
    </div>
    // </div>
  );
};

export default CardUi;
