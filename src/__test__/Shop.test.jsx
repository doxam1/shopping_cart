import { describe, it, expect } from "vitest";
import Shop from "../components/Shop";
import { screen, render } from "@testing-library/react";
import { ClientContext } from "../App";

const MockedShop = () => {
  return (
    <ClientContext.Provider value={{ searchStr: "ssd" }}>
      <Shop />
    </ClientContext.Provider>
  );
};

describe("shop page", () => {
  it("renders", async () => {
    render(<MockedShop />);

    // screen.debug();
    const sanDisk = await screen.findByText(/sandisk/i);

    expect(sanDisk).toBeInTheDocument();
  });
});
