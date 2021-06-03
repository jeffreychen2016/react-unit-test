import { render, screen } from "@testing-library/react";
import Aysnc from "./Async";

describe("Async component", () => {
  //   test("renders post s if request succeeds", async () => {
  //     render(<Aysnc />);

  //     // all methods start with find*** are returning promise
  //     const listItemElements = await screen.findAllByRole("listitem");

  //     expect(listItemElements).not.toHaveLength(0);
  //   });

  test("renders post s if request succeeds", async () => {
    // mock the fetch function
    window.fetch = jest.fn();
    // mock the returning value
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First post" }],
    });
    render(<Aysnc />);

    // all methods start with find*** are returning promise
    const listItemElements = await screen.findAllByRole("listitem");

    expect(listItemElements).not.toHaveLength(0);
  });
});
