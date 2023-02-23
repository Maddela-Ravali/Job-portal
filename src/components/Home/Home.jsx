import React from "react";
import { Carousel } from "react-bootstrap";
import carousel_1 from "../../Assets/images/carousel_1.jpg";
import carousel_2 from "../../Assets/images/carousel_2.jpg";
import carousel_3 from "../../Assets/images/carousel_3.jpg";

import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="mt-3 mb-3">
        <Carousel data-testid="carousel-silde">
          <Carousel.Item interval={2000} className="carousel-img" data-testid="carousel-item" >
            <img className="d-block w-100" src={carousel_1} alt="Image One"data-testid="carousel-img" />
            <Carousel.Caption>
              <h4>Label for first slide</h4>
              <p>Sample Text for Image One</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000} className="carousel-img" data-testid="carousel-item">
            <img className="d-block w-100" src={carousel_2} alt="Image Two" data-testid="carousel-img"/>
            <Carousel.Caption>
              <h4>Label for second slide</h4>
              <p>Sample Text for Image Two</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000} className="carousel-img" data-testid="carousel-item">
            <img className="d-block w-100" src={carousel_3} alt="Image Three" data-testid="carousel-img"/>
            <Carousel.Caption>
              <h4>Label for second slide</h4>
              <p>Sample Text for Image Two</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="banner-img" data-testid="banner-img">
        <div className="title">
          <h3>
            <span>New Job.</span> New Adventures.<span> New You.</span>
            <br /> <span>Let's do this thing !</span>
          </h3>
          <div className="small-tagline" data-testid="small-tagline">
            <p>Find out your dream job here!!!</p>
          </div>
        </div>
        <div className="button" >
          <Link to="/Jobs" data-testid="banner-btn">Browse Jobs</Link>
        </div>
      </div>
      <div className="bg-dark p-5 w-100 d-flex justify-content-evenly">
        <div className="button-link" data-testid="btn">
          <Link to="/jobs" data-testid="btn-jobs">Jobs</Link>
        </div>
        <div className="button-link" data-testid="btn">
          <Link to="/contact" data-testid="btn-contact">Contact US</Link>
        </div>
        <div className="button-link" data-testid="btn-soon">
          Comming Soon..
        </div>
      </div>
    </>
  );
};

export default Home;
