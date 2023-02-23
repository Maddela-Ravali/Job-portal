import React from "react";
import { Carousel } from "react-bootstrap";
import carousel_1 from '../../Assets/images/carousel_1.jpg';
import carousel_2 from '../../Assets/images/carousel_2.jpg';
import carousel_3 from '../../Assets/images/carousel_3.jpg';

import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="mt-3 mb-3">
        <Carousel>
          <Carousel.Item interval={2000} className='carousel-img'>
            <img
              className="d-block w-100"
              src={carousel_1}
              alt="Image One"
            />
            <Carousel.Caption>
              <h3>Label for first slide</h3>
              <p>Sample Text for Image One</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000} className='carousel-img'>
            <img
              className="d-block w-100"
              src={carousel_2}
              alt="Image Two"
            />
            <Carousel.Caption>
              <h3>Label for second slide</h3>
              <p>Sample Text for Image Two</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000} className='carousel-img'>
            <img
              className="d-block w-100"
              src={carousel_3}
              alt="Image Three"
            />
            <Carousel.Caption>
              <h3>Label for second slide</h3>
              <p>Sample Text for Image Two</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="banner-img">
        <div className="title">
          <h3>
            Find the <span>Right Job</span> In the
            <br />
            <span> Right Companies</span>
          </h3>
          <div className="small-tagline">
            <p>Got fired..!! Get Ready to be hired</p>
          </div>
        </div>
        <div className="button" data-testid="btn">
          <Link to="/Jobs">Browse Jobs</Link>
        </div>
      </div>
    </>
  );
};

export default Home;
