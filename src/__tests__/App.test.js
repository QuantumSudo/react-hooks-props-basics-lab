import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "../components/App";

test("passes 'name', 'city', and 'color' to <Home> as props", () => {
  render(<App />);
  
  // Check if the text with the name and city is rendered
  const h1 = screen.getByText(/Liza is a Web Developer from New York/i);
  expect(h1).toBeInTheDocument();
  expect(h1.style.color).toEqual("firebrick");
});

test("passes 'bio' to <About> as a prop", () => {
  render(<App />);
  
  // Check if the bio is rendered inside a <p> tag
  const p = screen.queryByText("A passionate web developer");
  expect(p).toBeInTheDocument();
  expect(p.tagName).toEqual("P");
});

test("passes 'linkedin' to <Links> as a prop, via <About>", () => {
  render(<App />);
  
  // Check if the LinkedIn link is rendered inside an <a> tag
  const a = screen.queryByText("https://linkedin.com/in/liza");
  expect(a).toBeInTheDocument();
  expect(a.tagName).toEqual("A");
});
