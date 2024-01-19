import { render, screen } from "@testing-library/react";
import Contact from "../pages/Contact";
import "@testing-library/jest-dom";
/**
 * describe - used to group test cases of similar nature or similar behavior
 * test - is used write individual test cases
 *      - test block can be nested within a describe block
 *      - a describe block can be nested within another describe block
 * 'test' keyword can be replaced by 'it'. 'it' is an alias for 'test'
 */

test("should render Conatct component", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});

test("should load button on contact page", () => {
  render(<Contact />);

  const button = screen.getByRole("button");

  expect(button).toBeInTheDocument();
});

test("should render Submit text on Contact page", () => {
  render(<Contact />);

  const button = screen.getByText("Submit");

  expect(button).toBeInTheDocument();
});

test("should load input name inside Contact component", () => {
  render(<Contact />);

  const inputElement = screen.getByPlaceholderText("Type your name");

  expect(inputElement).toBeInTheDocument();
});

test("should render 2 input boxes on Contact page", () => {
  render(<Contact />);

  const inputBoxes = screen.getAllByRole("textbox");

  expect(inputBoxes.length).toBe(2);
});

describe("Contact page test cases", () => {
  it("should load input name inside Contact component", () => {
    render(<Contact />);

    const inputElement = screen.getByPlaceholderText("Type your name");

    expect(inputElement).toBeInTheDocument();
  });

  it("should render 2 input boxes on Contact page", () => {
    render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox");

    expect(inputBoxes.length).toBe(2);
  });
});
