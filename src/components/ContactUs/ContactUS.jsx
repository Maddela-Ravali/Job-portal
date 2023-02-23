import React from "react";
import GetInTouchForm from "../GetInTouchForm/GetInTouchForm";
import "./ContactUs.css";

export default function ContactUs() {
  return (
    <div className="contact">
      <div className="content">
        <h2>Contact Us </h2>
        <p>
          TopJobs Inc. is a company that renders recruitment services in the US.
          With a network of more than 30 offices nationwide, the company
          specializes in the areas of accounting, finance, sales, marketing,
          information technology, and engineering.
        </p>
      </div>
      <div className="container">
        <div className="contact-info">
          <div className="box">
            <div className="icon">
              <i className="bi bi-geo-alt"></i>
            </div>
            <div className="text">
              <h3>Address</h3>
              <p>123 Park Avenue C, AK Marg, Delhi, India</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <i className="bi bi-envelope-at"></i>
            </div>
            <div className="text">
              <h3>Email</h3>
              <p>contact@topjobs.com</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <i class="bi bi-telephone"></i>
            </div>
            <div className="text">
              <h3>Phone</h3>
              <p>(91) 987 654 3210", (91) 987 654 3211</p>
            </div>
          </div>
        </div>
        <GetInTouchForm />
      </div>
    </div>
  );
}
