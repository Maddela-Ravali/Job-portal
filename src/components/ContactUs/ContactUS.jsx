import React from "react";
import GetInTouchForm from "../GetInTouchForm/GetInTouchForm";
import "./ContactUs.css";

export default function ContactUs() {
  return (
    <div className="contact" data-testid="contactus">
      <div className="content" data-testid="content">
        <h2 data-testid="content-header">Contact Us </h2>
        <p data-testid="content-para">
          TopJobs Inc. is a company that renders recruitment services in the US.
          With a network of more than 30 offices nationwide, the company
          specializes in the areas of accounting, finance, sales, marketing,
          information technology, and engineering.
        </p>
      </div>
      <div className="address-form" data-testid="address-form">
        <div className="contact-info" data-testid="contact-info">
          <div className="box" data-testid="box">
            <div className="icon" data-testid="icon">
              <i className="bi bi-geo-alt"></i>
            </div>
            <div className="text" data-testid="text">
              <h3 data-testid="address-header">Address</h3>
              <p data-testid="address-para">
                123 Park Avenue C, AK Marg, Delhi, India
              </p>
            </div>
          </div>
          <div className="box" data-testid="box">
            <div className="icon" data-testid="icon">
              <i className="bi bi-envelope-at"></i>
            </div>
            <div className="text" data-testid="text">
              <h3 data-testid="email-header">Email</h3>
              <p data-testid="email-para">contact@topjobs.com</p>
            </div>
          </div>
          <div className="box" data-testid="box">
            <div className="icon" data-testid="icon">
              <i class="bi bi-telephone"></i>
            </div>
            <div className="text" data-testid="text">
              <h3 data-testid="phone-header">Phone</h3>
              <p data-testid="phone-para">
                (91) 987 654 3210, (91) 987 654 3211
              </p>
            </div>
          </div>
        </div>
        <GetInTouchForm />
      </div>
    </div>
  );
}
