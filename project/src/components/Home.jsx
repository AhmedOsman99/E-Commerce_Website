import React from "react";
import "./home.css";

import slide11 from "../Images/slide11.jpg";
import slide22 from "../Images/slide22.jpg";
import slide3 from "../Images/slide3.jpg";
import image11 from "../Images/image11.png";
import image2 from "../Images/image2.png";
import image3 from "../Images/image3.png";
import image4 from "../Images/image4.png";
import tick from "../Images/tick.png";
import nike from "../Images/nike.png";
import nb from "../Images/nb.png";
import adidas from "../Images/adidas.png";
import { Carousel } from "react-bootstrap";

export function Home() {
  return (
    <div className="home">
      <div className="container2">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img className="d-block w-100 " src={slide11} alt="First slide" />
            <Carousel.Caption>
              {/* <h3>BOOST YOUR ENERGY</h3> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img className="d-block w-100" src={slide22} alt="Second slide" />
            <Carousel.Caption>
              {/* <h3>Second slide label</h3> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={slide3} alt="Third slide" />
            <Carousel.Caption>
              {/* <h3>Third slide label</h3> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="img">
        <div className="inner-img pb-2">
          <img src={image11} alt="" srcset="" />
          <img className="img2" src={image2} alt="" srcset="" />
          <img className="img3" src={image3} alt="" srcset="" />
          <img className="img4" src={image4} alt="" srcset="" />
          <div className="text">
            <div className="inner-text">
              <span className="reasons">SOME REASONS</span>
              <span className="stroke-text">WHY US ?</span>
            </div>
            <div className="bullet">
              <div className="d-flex gap-2">
                <img src={tick} alt="" srcset="" />
                <span className="d-flex align-items-center">OVER 140+ EXPERTS</span>
              </div>
              <div className="d-flex gap-2">
                <img src={tick} alt="" srcset="" />
                <span className="d-flex align-items-center">SPECIAL OFFERS FOR NEW COSTUMERS</span>
              </div>
              <div className="d-flex gap-2">
                <img src={tick} alt="" srcset="" />
                <span className="d-flex align-items-center">TRUSTED PARTNERS</span>
              </div>
            </div>

            <div>
              <p className="spons-text">SPONSERED BY</p>
              <div className="sponsors">
                <img src={nb} alt="" srcset="" />
                <img src={nike} alt="" srcset="" />
                <img src={adidas} alt="" srcset="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
