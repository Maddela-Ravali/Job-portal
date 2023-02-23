import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Footer";
const imgLinks = [
  {
    url: "https://assets.website-files.com/5ec5d86528da2f24250d634c/5ec7175d7e0c401a3e668a1d_facebook-logo.svg",
    name: "fb"
  },
  {
    url: "https://assets.website-files.com/5ec5d86528da2f24250d634c/5ec7175d68c9b0a57ed94925_google-logo.svg",
    name: "google"
  },
  {
    url: "https://assets.website-files.com/5ec5d86528da2f24250d634c/601e13bc333df3521cce5b6a_youtube-logo-jobs-webflow-template.svg",
    name: "youtube"
  },
  {
    url: "https://assets.website-files.com/5ec5d86528da2f24250d634c/601e13bc774d5a00bcbb0baf_linkedin-logo-jobs-webflow-template.svg",
    name: "linkedin"
  }
];

const MockFooter = () => (
  <BrowserRouter>
    <Footer />
  </BrowserRouter>
);

test("should render footer component", () => {
  render(<MockFooter />);
  screen.debug();
  expect(screen.getByTestId("footer")).toBeInTheDocument();
  expect(screen.getByTestId("images")).toBeInTheDocument();
});
test("should render footer media images in footer component", () => {
  render(<MockFooter />);
  screen.debug();
  const images = screen.getAllByTestId("footer-media-img");
  expect(images).toHaveLength(4);
  expect(images[0]).toBeInTheDocument();
  expect(images[0]).toHaveAttribute("src", imgLinks[0].url);
  expect(images[0]).toHaveAttribute("alt", imgLinks[0].name);

  expect(images[1]).toBeInTheDocument();
  expect(images[1]).toHaveAttribute("src", imgLinks[1].url);
  expect(images[1]).toHaveAttribute("alt", imgLinks[1].name);

  expect(images[2]).toBeInTheDocument();
  expect(images[2]).toHaveAttribute("src", imgLinks[2].url);
  expect(images[2]).toHaveAttribute("alt", imgLinks[2].name);
  
  expect(images[3]).toBeInTheDocument();
  expect(images[3]).toHaveAttribute("src", imgLinks[3].url);
  expect(images[3]).toHaveAttribute("alt", imgLinks[3].name);
});
