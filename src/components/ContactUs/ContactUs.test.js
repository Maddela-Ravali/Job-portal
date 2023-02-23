import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ContactUs from "./ContactUs";

import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

const mockStore = configureStore([]);

describe("Contact us component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      jobs: []
    });
  });
  const MockContactUs = () => (
    <Provider store={store}>
      <BrowserRouter>
        <ContactUs />
      </BrowserRouter>
    </Provider>
  );

  test("should render contact us component", () => {
    render(<MockContactUs />);
    screen.debug();
    expect(screen.getByTestId("contactus")).toBeInTheDocument();
    expect(screen.getByTestId("content")).toBeInTheDocument();
    expect(screen.getByTestId("content-header")).toBeInTheDocument();
    expect(screen.getByTestId("content-header")).toHaveTextContent(
      "Contact Us"
    );
    expect(screen.getByText(/TopJobs Inc/)).toBeInTheDocument();
  });

  test("should render address in contact component", () => {
    render(<MockContactUs />);
    expect(screen.getByTestId("address-form")).toBeInTheDocument();
    expect(screen.getByTestId("contact-info")).toBeInTheDocument();
    const box = screen.getAllByTestId("box");
    expect(box).toHaveLength(3);
    expect(box[0]).toBeInTheDocument();
    expect(box[1]).toBeInTheDocument();
    expect(box[2]).toBeInTheDocument();
    const icon = screen.getAllByTestId("box");
    expect(icon).toHaveLength(3);
    expect(icon[0]).toBeInTheDocument();
    expect(icon[1]).toBeInTheDocument();
    expect(icon[2]).toBeInTheDocument();
    const text = screen.getAllByTestId("box");
    expect(text).toHaveLength(3);
    expect(text[0]).toBeInTheDocument();
    expect(text[1]).toBeInTheDocument();
    expect(text[2]).toBeInTheDocument();
  });
  test("should render addres details in contact us component ", () => {
    render(<MockContactUs />);
    expect(screen.getByTestId("address-header")).toBeInTheDocument();
    expect(screen.getByTestId("address-header")).toHaveTextContent("Address");
    expect(screen.getByTestId("address-para")).toBeInTheDocument();
    expect(screen.getByTestId("address-para")).toHaveTextContent(
      "123 Park Avenue C, AK Marg, Delhi, India"
    );

    expect(screen.getByTestId("email-header")).toBeInTheDocument();
    expect(screen.getByTestId("email-header")).toHaveTextContent("Email");
    expect(screen.getByTestId("email-para")).toBeInTheDocument();
    expect(screen.getByTestId("email-para")).toHaveTextContent(
      "contact@topjobs.com"
    );
    expect(screen.getByTestId("phone-header")).toBeInTheDocument();
    expect(screen.getByTestId("phone-header")).toHaveTextContent("Phone");
    expect(screen.getByTestId("phone-para")).toBeInTheDocument();
    expect(screen.getByTestId("phone-para")).toHaveTextContent(
      "(91) 987 654 3210, (91) 987 654 3211"
    );
  });
  test("should render contact form in component", () => {
    render(<MockContactUs />);
    expect(screen.getByTestId("contact-form")).toBeInTheDocument();
  });
});
