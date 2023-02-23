import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { validate } from "../Validate/Validate";
import "./GetInTouchForm.css";

export default function GetInTouchForm() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    msg: ""
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    msg: ""
  });
  const dispatch = useDispatch();

  const OnformSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    if (
      validate(values).name === "" &&
      validate(values).email === "" &&
      validate(values).phone === "" &&
      validate(values).msg === ""
    ) {
      axios.post("http://localhost:4000/messages", values);
      axios
        .get("http://localhost:4000/messages")
        .then((res) =>
          dispatch({ type: "MESSAGES", payload: [...res.data, values] })
        );
      alert("Thanks for reaching us. We will get back to you soon....");
      setValues({
        name: "",
        email: "",
        phone: "",
        msg: ""
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues((values) => ({ ...values, [name]: value }));
  };

  return (
    <div className="contact-form" data-testid="contact-form">
      <form onSubmit={OnformSubmit}>
        <h2>Get In Touch With Us Here </h2>
        <div className="form-group">
          <input
            type={"text"}
            name="name"
            value={values.name}
            required
            onChange={handleChange}
          />
          <span>
            Full Name <i className="asterick">*</i>
          </span>
          {errors.name && <p className="error-text">{errors.name}</p>}
        </div>
        <div className="form-group">
          <input
            type={"email"}
            name="email"
            value={values.email}
            required
            onChange={handleChange}
          />
          <span>
            Email <i className="asterick">*</i>
          </span>
          {errors.email && <p className="error-text">{errors.email}</p>}
        </div>
        <div className="form-group">
          <input
            type={"number"}
            name="phone"
            required
            value={values.phone}
            onChange={handleChange}
          />
          <span>
            Phone <i className="asterick">*</i>
          </span>
          {errors.phone && <p className="error-text">{errors.phone}</p>}
        </div>
        <div className="form-group">
          <textarea
            type={"text"}
            name="msg"
            value={values.msg}
            required
            onChange={handleChange}
          />
          <span>
            Write you message <i className="asterick">*</i>
          </span>
          {errors.msg && <p className="error-text">{errors.msg}</p>}
        </div>
        <div className="form-group">
          <input type="submit" value={"Send"} />
        </div>
      </form>
    </div>
  );
}
