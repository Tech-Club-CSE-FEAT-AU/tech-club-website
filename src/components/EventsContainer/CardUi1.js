import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";

export default function CardUi1(props) {
  let metadata = props.metadata;
  return (
    <div>
      <div className="card text-center">
        <Carousel>
            
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src={metadata.imgurl1}
              alt="Image One"
            />
            <Carousel.Caption>
              <h3>Label for first slide</h3>
              <p>Sample Text for Image One</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src={metadata.imgurl2}
              alt="Image Two"
            />
            <Carousel.Caption>
              <h3>Label for second slide</h3>
              <p>Sample Text for Image Two</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src={metadata.imgurl3}
              alt="Image Two"
            />
            <Carousel.Caption></Carousel.Caption>
            <p>hai</p>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
