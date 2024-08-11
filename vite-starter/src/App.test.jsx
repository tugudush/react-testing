import { render, screen } from "@testing-library/react";
import App from "./App";

test("button starts with correct color", () => {
  render(<App />);
  screen.getByRole("button");
  const buttonElement = screen.getByRole("button", { name: /blue/i });
  expect(buttonElement).toHaveClass("red");
});

test("button starts with correct text", () => {});

test("button has correct color after click", () => {});

test("button has correct text after click", () => {});
