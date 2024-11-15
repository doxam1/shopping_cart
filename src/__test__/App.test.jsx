import { describe, it, expect, beforeEach, beforeAll } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

// all this is for mocking a server response - it's called Mock Service Worker. all the info in the documentation.
// src/mocks/handlers.js
import { setupServer } from "msw/node";
import handlers from "./mockingHandlers";

const server = setupServer(...handlers);

describe("App integration", () => {
  beforeEach(() => {
    render(<App />);
    server.listen();
    //they all render app, and they all listen to the mock server so i can use before each. beforeAll also works on that one.
  });

  // i can use hooks - beforeEach, beforeAll, afterEach, AfterAll

  it("new search input shows the item in the shop page.", async () => {
    // render(<App />);

    // server.listen();

    const searchInput = screen.getByRole("textbox");
    const findBtn = screen.getByRole("link", { name: /Find/i });

    fireEvent.change(searchInput, { target: { value: "ssd" } });

    fireEvent.click(findBtn);

    const item = await screen.findByText(/ssd/i);
    const items = await screen.findAllByTestId(/product-item/i);

    expect(item).toBeInTheDocument();
    expect(items.length).toBe(1);
  });
});
