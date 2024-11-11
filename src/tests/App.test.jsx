import { describe, it, expect } from "vitest";

import { render, screen } from "@testing-library/react";

import App from "../App";
import Home from "../components/Home";

describe("somthing truthy and falsy", () => {
  it("true to be true", () => {
    expect(true).toBe(true);
  });

  it("false to be false", () => {
    expect(false).toBe(false);
  });
});

describe("App", () => {
  it("renders home Header first", () => {
    render(<App title="React" />);

    screen.debug();

    expect(
      screen.getByText(/We've got everything you need/)
    ).toBeInTheDocument();

    // screen.getByRole("");
  });
});
