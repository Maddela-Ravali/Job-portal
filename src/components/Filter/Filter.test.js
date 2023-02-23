import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Filter from "./Filter";

const categoryArr = [
  "All Jobs",
  "Frontend",
  "Backend",
  "Devops",
  "Full Stack",
  "Digital Marketing"
];

const MockFilter = () => (
  <BrowserRouter>
    <Filter />
  </BrowserRouter>
);
test("should render Filter component", () => {
  render(<MockFilter />);
  screen.debug();
  expect(screen.getByTestId("filter")).toBeInTheDocument();
  expect(screen.getByTestId("filter-page")).toBeInTheDocument();
});
test("should render search box", () => {
  render(<MockFilter />);
  screen.debug();
  expect(screen.getByTestId("search-box")).toBeInTheDocument();
  expect(screen.getByTestId("search")).toBeInTheDocument();
  expect(screen.getByRole("heading", { level: 3 })).toBeInTheDocument();
  expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent(
    "Search Jobs"
  );
});

test("should render search field", () => {
  render(<MockFilter />);
  expect(screen.getByTestId("job-search")).toBeInTheDocument();
  let search = screen.getByTestId("search-input");
  expect(search).toBeInTheDocument();
  fireEvent.change(search, { target: { value: "node" } });
  expect(search.value).toBe("node");
});

test("should render categories in filter component", () => {
  render(<MockFilter />);
  expect(screen.getByTestId("categories")).toBeInTheDocument();
  expect(screen.getByTestId("job-category")).toBeInTheDocument();
  expect(screen.getByRole("heading", { level: 4 })).toBeInTheDocument();
  expect(screen.getByRole("heading", { level: 4 })).toHaveTextContent(
    "Categories"
  );
  expect(screen.getByTestId("category-list")).toBeInTheDocument();
  const categories = screen.getAllByTestId("category-list-item");
  expect(categories).toHaveLength(categoryArr.length);
  expect(categories[0]).toBeInTheDocument();
  expect(categories[0]).toHaveTextContent(categoryArr[0]);
  expect(categories[1]).toBeInTheDocument();
  expect(categories[1]).toHaveTextContent(categoryArr[1]);
  expect(categories[2]).toBeInTheDocument();
  expect(categories[2]).toHaveTextContent(categoryArr[2]);
  expect(categories[3]).toBeInTheDocument();
  expect(categories[3]).toHaveTextContent(categoryArr[3]);
  expect(categories[4]).toBeInTheDocument();
  expect(categories[4]).toHaveTextContent(categoryArr[4]);
  expect(categories[5]).toBeInTheDocument();
  expect(categories[5]).toHaveTextContent(categoryArr[5]);
});
