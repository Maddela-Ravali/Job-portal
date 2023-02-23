import {
  fireEvent,
  getByRole,
  render,
  screen,
  waitFor
} from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import ApplyJobs from "./ApplyJobs";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import axios from "axios";
import { act } from "react-dom/test-utils";
import { Component } from "react";
import { validate } from "../Validate/Validate";

const mockStore = configureStore([]);

jest.mock("axios");

const job = {
  id: 18,
  company: "Delloite",
  logo: "deloitte.png",
  position: "Full Stack Engineer",
  role: "Full Stack",
  level: "Negative",
  experience: 7,
  salary: 80000,
  location: "Mumbai",
  posted: "2021-07-15"
};

let spy;
let postspy;
let applicationsspy;
let store = mockStore({
  jobs: [],
  applications: [],
  job: {}
});
let values = [
  {
    name: "Reethu",
    email: "reethu@gmail.com",
    phone: "8465789483",
    exp: "Worked for Selenor",
    address: "Maryland, baltimore",
    appliedJobId: 2,
    id: 14
  },
  {
    name: "Rekha",
    email: "hdbfuye@gmAIL.omd",
    phone: "8765927585",
    exp: "Worked for Selenor",
    address: "",
    appliedJobId: 1,
    id: 15
  }
];

describe("Contact us component", () => {
  let component;
  beforeEach(() => {
    store.dispatch = jest.fn();
    spy = jest.spyOn(axios, "get").mockImplementation(() => {
      return Promise.resolve({ data: job });
    });

    postspy = jest.spyOn(axios, "post").mockImplementation(() => {
      return Promise.resolve({ data: values });
    });

    component = render(
      <Provider store={store}>
        <BrowserRouter>
          <ApplyJobs />
        </BrowserRouter>
      </Provider>
    );
  });

  test("should get job details", async () => {
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalled();
    expect(store.dispatch).toHaveBeenCalledWith({
      type: "JOB",
      payload: { ...job }
    });
  });
  test("should render from in component", async () => {
    expect(screen.getByTestId("apply-job-page")).toBeInTheDocument();
    expect(screen.getByTestId("job-desc")).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 3 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent(
      "You are applying for" +
        // job.role +
        " role at" +
        // job.company +
        " company"
    );
  });
  test("should render apply form", () => {
    applicationsspy = jest.spyOn(axios, "get").mockImplementation(() => {
      return Promise.resolve({ data: values });
    });

    expect(screen.getByTestId("apply-form")).toBeInTheDocument();
    expect(screen.getByTestId("form-header")).toBeInTheDocument();
    expect(screen.getByTestId("form-header")).toHaveTextContent(
      "Fill the form"
    );
    expect(screen.getByTestId("form")).toBeInTheDocument();
    expect(screen.getByTestId("form-label-name")).toBeInTheDocument();
    expect(screen.getByTestId("form-label-name")).toHaveTextContent("Name");
    expect(screen.getByTestId("form-input-name")).toBeInTheDocument();
    fireEvent.change(
      screen.getByTestId("form-input-name", { target: { value: "kiran" } })
    );

    // expect(screen.getByTestId("form-error-name")).toBeInTheDocument();

    expect(screen.getByTestId("form-label-email")).toBeInTheDocument();
    expect(screen.getByTestId("form-label-email")).toHaveTextContent("Email");
    expect(screen.getByTestId("form-input-email")).toBeInTheDocument();
    fireEvent.change(
      screen.getByTestId("form-input-email", {
        target: { value: "kiran@gmail.com" }
      })
    );

    // expect(screen.getByTestId("form-error-email")).toBeInTheDocument();

    expect(screen.getByTestId("form-label-phone")).toBeInTheDocument();
    expect(screen.getByTestId("form-label-phone")).toHaveTextContent(
      "Phone Number"
    );
    expect(screen.getByTestId("form-input-phone")).toBeInTheDocument();
    fireEvent.change(
      screen.getByTestId("form-input-phone", {
        target: { value: "9876543219" }
      })
    );

    // expect(screen.getByTestId("form-error-phone")).toBeInTheDocument();

    expect(screen.getByTestId("form-label-address")).toBeInTheDocument();
    expect(screen.getByTestId("form-label-address")).toHaveTextContent(
      "Address"
    );
    expect(screen.getByTestId("form-input-address")).toBeInTheDocument();
    fireEvent.change(
      screen.getByTestId("form-input-address", {
        target: { value: "hyd" }
      })
    );
    // expect(screen.getByTestId("form-error-address")).toBeInTheDocument();

    expect(screen.getByTestId("form-label-exp")).toBeInTheDocument();
    expect(screen.getByTestId("form-label-exp")).toHaveTextContent(
      "Experience"
    );
    expect(screen.getByTestId("form-input-exp")).toBeInTheDocument();
    fireEvent.change(
      screen.getByTestId("form-input-exp", {
        target: { value: "worked at amazon" }
      })
    );
    // expect(screen.getByTestId("form-error-exp")).toBeInTheDocument();
    const submit = screen.getByTestId("submit-btn");
    fireEvent.click(submit);
    // expect(postspy).toHaveBeenCalled();
    expect(applicationsspy).toHaveBeenCalled();
    expect(store.dispatch).toHaveBeenCalled();
    // expect(store.dispatch).toHaveBeenCalledWith({
    //     type: "JOB",
    //     payload: { ...job }
    //   });
    // expect(store.dispatch).toHaveBeenCalledWith({
    //   type: "APPLICATIONS",
    //   payload: [...values]
    // });
  });
});
