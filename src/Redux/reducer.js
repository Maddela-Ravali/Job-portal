import React from "react";

const initialState = {
  applications: [],
  jobs: [],
  messages: [],
  job: {}
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "ALL_JOBS":
      return { ...state, jobs: [...action.payload] };

    case "JOB":
      return { ...state, job: action.payload };

    case "APPLICATIONS":
      return {
        ...state,
        // [...state.applications, action.payload]
        applications: [...action.payload]
      };
    case "MESSAGES":
      return {
        ...state,
        messages: [...action.payload]
      };

    default:
      return state;
  }
}
