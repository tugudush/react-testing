import { render, screen } from "@testing-library/react";
import App from "./App";

// test("App contains correct heading", () => {
//   render(<App />);
//   const headingElement = screen.getByText(/learn React/i);
//   expect(headingElement).toBeInTheDocument();
// });

test("App contains correct heading", () => {
  render(<App />);
  const headingElement = screen.getByRole("heading", { name: /learn React/i });
  expect(headingElement).toBeInTheDocument();
});

// test("empty test", () => {

// })

// test("test throws error explicitly", () => {
//   throw new Error("fails this test!");
// });
