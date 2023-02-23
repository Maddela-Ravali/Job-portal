import { render, screen, cleanup } from "@testing-library/react";
import Home from "./Home";
import { BrowserRouter, Route } from "react-router-dom";
import carousel_1 from "../../Assets/images/carousel_1.jpg";
import carousel_2 from "../../Assets/images/carousel_2.jpg";
import carousel_3 from "../../Assets/images/carousel_3.jpg";

const MockHome = () => {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
};
test("should render carousel in home component", () => {
  render(<MockHome />);
  expect(screen.getByTestId("carousel-silde")).toBeInTheDocument();
  const carousel_items = screen.getAllByTestId("carousel-item");
  expect(carousel_items).toHaveLength(3);
  expect(carousel_items[0]).toBeInTheDocument();
  expect(carousel_items[1]).toBeInTheDocument();
  expect(carousel_items[2]).toBeInTheDocument();
});
test("should render carousel images in home component", () => {
  render(<MockHome />);
  const carousel_imgs = screen.getAllByTestId("carousel-img");
  expect(carousel_imgs).toHaveLength(3);

  expect(carousel_imgs[0]).toBeInTheDocument();
  expect(carousel_imgs[0]).toHaveAttribute("src", carousel_1);

  expect(carousel_imgs[1]).toBeInTheDocument();
  expect(carousel_imgs[1]).toHaveAttribute("src", carousel_2);

  expect(carousel_imgs[2]).toBeInTheDocument();
  expect(carousel_imgs[2]).toHaveAttribute("src", carousel_3);
});
test("should render banner image and btn in home component", () => {
  render(<MockHome />);
  expect(screen.getByTestId("banner-img")).toBeInTheDocument();
  expect(screen.getByTestId("banner-btn")).toBeInTheDocument();
  expect(screen.getByTestId("banner-btn")).toHaveTextContent("Browse Jobs");
  screen.debug();
});
test("should render Heading in home component", () => {
  render(<MockHome />);
  const heading = screen.getByRole("heading", { level: 3 });
  expect(heading).toBeInTheDocument();
});

test("should render buttons in Home component", () => {
  render(<MockHome />);
  const buttons = screen.getAllByTestId("btn");
  expect(buttons).toHaveLength(2);
  expect(buttons[0]).toContainElement(screen.getByTestId("btn-jobs"));
  expect(buttons[1]).toContainElement(screen.getByTestId("btn-contact"));
  expect(screen.getByTestId("btn-soon")).toHaveTextContent("Comming Soon..");
});

