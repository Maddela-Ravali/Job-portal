import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";

const MockNavbar = () => {
  return (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
};

test("should render navbar component", () => {
  render(<MockNavbar />);
  screen.debug();
  expect(screen.getByTestId("head-navbar")).toBeInTheDocument();
  expect(screen.getByTestId("navbar")).toBeInTheDocument();
});
test("should render navbar brand name", () => {
  render(<MockNavbar />);
  expect(screen.getByTestId("navbar-brand")).toBeInTheDocument();
  expect(screen.getByTestId("navbar-brand")).toHaveTextContent("TopJobs");
});
test("should render navbar links in navbar component", () => {
  render(<MockNavbar />);
  expect(screen.getByTestId("navbar-nav")).toBeInTheDocument();
  const links = screen.getAllByTestId("navbar-link");
  expect(links[0]).toBeInTheDocument();
  expect(links[0]).toHaveTextContent("Home");
  expect(links[1]).toBeInTheDocument();
  expect(links[1]).toHaveTextContent("Jobs");
  expect(links[2]).toBeInTheDocument();
  expect(links[2]).toHaveTextContent("Contact Us");
});
