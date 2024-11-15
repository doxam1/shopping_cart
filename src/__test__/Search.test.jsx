import { describe, it, expect, vi } from "vitest";
import Search from "../components/Search";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ClientContext } from "../App";

const mockedSetSearchStr = vi.fn();

const MockedSearch = () => {
  return (
    <BrowserRouter>
      <ClientContext.Provider
        value={{ searchStr: "ssd", setSearchStr: mockedSetSearchStr }}>
        <Search />
      </ClientContext.Provider>
    </BrowserRouter>
  );
};

describe("Search", () => {
  it("should render", () => {
    render(<MockedSearch />);

    const searchInput = screen.getByRole("textbox");

    expect(searchInput).toBeInTheDocument();
  });

  it("should change value when typing", async () => {
    render(<MockedSearch />);

    const searchInput = screen.getByRole("textbox");
    fireEvent.change(searchInput, { target: { value: "test" } });

    expect(searchInput.value).toBe("test");
  });
});
