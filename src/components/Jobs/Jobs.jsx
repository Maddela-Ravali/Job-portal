import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Jobs.css";
import Filter from "../Filter/Filter";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const Jobs = () => {
  const dispatch = useDispatch();
  const { jobs } = useSelector((state) => state);

  const [filteredJobs, setFilteredJobs] = useState([...jobs]);
  const [searchterm, setSearchTerm] = useState("");

  useEffect(() => {
    axios.get("http://localhost:4000/topjobs").then((res) => {
      dispatch({ type: "ALL_JOBS", payload: res.data });
      setFilteredJobs(res.data);
    });
  }, []);

  function handleCategoryFilter(e) {
    const value = e.target.innerText;
    e.preventDefault();
    setFilteredJobs(
      jobs.filter((job) => (value === "All Jobs" ? job : job.role === value))
    );
  }

  const searchEvent = (e) => {
    const data = e.target.value;
    setSearchTerm(data);
    if (searchterm !== "" || searchterm.length > 2) {
      const filterData = jobs.filter((item) => {
        if (item) {
          return Object.values(item)
            .join("")
            .toLowerCase()
            .includes(searchterm.toLowerCase());
        } else {
          return 0;
        }
      });
      setFilteredJobs(filterData);
    } else {
      setFilteredJobs(jobs);
    }
  };
  return (
    <>
      <div className="jobs-for-you">
        <h5 className="text-primary mx-5 m-3">
          {" "}
          Results ({filteredJobs.length})
        </h5>
        <div className="job-section">
          <div className="job-page">
            {filteredJobs.map((job) => {
              const {
                id,
                logo,
                company,
                position,
                location,
                salary,
                experience
              } = job;
              return (
                <div className="job-list">
                  <div className="job-card">
                    <div className="job-name">
                      <img
                        src={
                          logo.length > 20
                            ? logo
                            : require(`../../Assets/images/${logo}`)
                        }
                        alt="logo"
                        className="job-profile"
                      />
                      <div className="job-detail">
                        <h4>{company}</h4>
                        <h2>{position}</h2>
                        <div className="category">
                          <p>
                            <i className="bi bi-briefcase"></i> {experience} yrs
                          </p>
                          <p>
                            <i className="bi bi-geo-alt"></i> {location}
                          </p>
                          <p>
                            <i className="bi bi-currency-rupee"></i>
                            {salary}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="job-button">
                      <div>
                        <Link to={`/apply-job/${id}`} className="job-posting">
                          Apply Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <Filter
            handleCategoryFilter={handleCategoryFilter}
            searchEvent={searchEvent}
          />
        </div>
      </div>
    </>
  );
};

export default Jobs;
