import React, { useEffect, useState } from "react";
import "./ApplyJobs.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { validate } from "../Validate/Validate";
import { useDispatch, useSelector } from "react-redux";

const ApplyJobs = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [address, setAddress] = useState("");
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    exp: ""
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    exp: ""
  });

  const { job, applications } = useSelector((state) => state);

  const OnformSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    if (
      validate(values).name === "" &&
      validate(values).email === "" &&
      validate(values).phone === "" &&
      validate(values).exp === ""
    ) {
      axios.post("http://localhost:4000/applications", {
        ...values,
        address: address,
        appliedJobId: job.id
      });

      axios.get("http://localhost:4000/applications").then((res) =>
        dispatch({
          type: "APPLICATIONS",
          payload: [
            ...res.data,
            {
              ...values,
              address: address,
              appliedJobId: job.id
            }
          ]
        })
      );
      alert("success");
      navigate("/jobs");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((values) => ({ ...values, [name]: value }));
  };
  useEffect(() => {
    axios
      .get(`http://localhost:4000/topjobs/${id}`).then((res) => dispatch({ type: "JOB", payload: res.data }));
  }, []);

  const { role, company } = job;
  return (
    <div className="apply-job" data-testid="apply-job-page">
      <div className="container" data-testid="job-desc">
        <h3 className="mb-5" >
          You are applying for{" "}
          <span>
            <em>{role}</em>
          </span>{" "}
          role at{" "}
          <span>
            <em>{company}</em>
          </span>{" "}
          company{" "}
        </h3>
      </div>

      <div data-testid="apply-form">
        <header className="header">
          <h1 className="post-job" data-testid="form-header">
            Fill the form{" "}
          </h1>
        </header>
        <form className="form" data-testid="form">
          <div className="row">
            <div className="form-group col-sm-6">
              <label id="name-label" htmlFor="name" data-testid="form-label-name">
                Name <i className="asterick">*</i>
              </label>
              <input
                type="text"
                name="name"
                value={values.name || ""}
                className="form-control"
                placeholder="Ex: john doe"
                onChange={handleChange}
                required
                data-testid="form-input-name"
              />
              {errors.name && (
                <p className="error-text" data-testid="form-error-name">
                  {errors.name}
                </p>
              )}
            </div>
            <div className="form-group col-sm-6">
              <label id="name-label"  htmlFor="email" data-testid="form-label-email">
                Email <i className="asterick">*</i>
              </label>
              <input
                type="text"
                name="email"
                value={values.email || ""}
                className="form-control"
                placeholder="johndoe@gmail.com"
                onChange={handleChange}
                required
                data-testid="form-input-email"
              />
              {errors.email && (
                <p className="error-text" data-testid="form-error-email">
                  {errors.email}
                </p>
              )}
            </div>
          </div>
          <div className="row">
            <div className="form-group col-sm-4">
              <label id="name-label"  htmlFor="phone" data-testid="form-label-phone">
                Phone Number <i className="asterick">*</i>
              </label>
              <input
                type="number"
                name="phone"
                value={values.phone}
                className="form-control"
                onChange={handleChange}
                required
                data-testid="form-input-phone"
              />
              {errors.phone && (
                <p className="error-text" data-testid="form-error-phone">
                  {errors.phone}
                </p>
              )}
            </div>
            <div className="form-group col-sm-8">
              <label
                id="name-label"
                htmlFor="address"
                data-testid="form-label-address"
              >
                Address
              </label>
              <input
                type="text"
                name="address"
                value={address}
                className="form-control"
                onChange={(e) => setAddress(e.target.value)}
                data-testid="form-input-address"
              />
            </div>
          </div>

          <div className="form-group">
            <label id="name-label"  htmlFor="exp" data-testid="form-label-exp">
              Experience <i className="asterick">*</i>
            </label>
            <input
              type="text"
              name="exp"
              value={values.exp}
              className="form-control"
              onChange={handleChange}
              required
              data-testid="form-input-exp"
            />
            {errors.exp && (
              <p className="error-text" data-testid="form-error-exp">
                {errors.exp}
              </p>
            )}
          </div>
          <div className="form-group">
            <label data-testid="form-label-resume">Resume</label>

            <input
              type="file"
              id="myFile"
              name="filename"
              data-testid="form-input-resume"
            />
          </div>
          <div className="form-group">
            <button
              type="submit"
              className="submit-button"
              onClick={OnformSubmit}
              data-testid="submit-btn"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplyJobs;
