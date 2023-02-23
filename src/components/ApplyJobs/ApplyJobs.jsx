import React, { useEffect, useState } from "react";
import "./ApplyJobs.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { validate } from "../Validate";
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

  console.log(applications)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((values) => ({ ...values, [name]: value }));
  };
  useEffect(() => {
    axios
      .get(`http://localhost:4000/topjobs/${id}`)
      .then((res) => dispatch({ type: "JOB", payload: res.data }));
  }, []);

  const { role, company } = job;
  return (
    <div className="apply-job">
      <div className="container">
        <h3 className="m-5">
          You are applying for <em>{role}</em> role at <em>{company}</em>{" "}
          company{" "}
        </h3>
      </div>

      <div>
        <header className="header">
          <h1 className="post-job">Fill the form </h1>
        </header>
        <form className="w-50 m-auto">
          <div className="form-group">
            <label id="name-label" for="name">
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
            />
            {errors.name && <p className="error-text">{errors.name}</p>}
          </div>
          <div className="form-group">
            <label id="name-label" for="email">
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
            />
            {errors.email && <p className="error-text">{errors.email}</p>}
          </div>
          <div className="form-group">
            <label id="name-label" for="phone">
              Phone Number <i className="asterick">*</i>
            </label>
            <input
              type="number"
              name="phone"
              value={values.phone}
              className="form-control"
              onChange={handleChange}
              required
            />
            {errors.phone && <p className="error-text">{errors.phone}</p>}
          </div>
          <div className="form-group">
            <label id="name-label" for="address">
              Address
            </label>
            <input
              type="text"
              name="address"
              value={address}
              className="form-control"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label id="name-label" for="exp">
              Experience <i className="asterick">*</i>
            </label>
            <input
              type="text"
              name="exp"
              value={values.exp}
              className="form-control"
              onChange={handleChange}
              required
            />
            {errors.exp && <p className="error-text">{errors.exp}</p>}
          </div>
          <div className="form-group">
            <label>Upload Your Resume</label>
            <label>
              <input type="file" id="myFile" name="filename" />
            </label>
          </div>
          <div className="form-group">
            <button
              type="submit"
              className="submit-button"
              onClick={OnformSubmit}
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
