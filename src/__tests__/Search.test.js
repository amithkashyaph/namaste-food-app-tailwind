import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../components/Body";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import restaurantsAPIData from "../utils/mockData.json";
import "@testing-library/jest-dom";

/**
 * Mocking the Fecth API call as js-dom doesn't have the capability of an actual browser
 */
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(restaurantsAPIData);
    },
  });
});

it("Should render the Body compomnent with Search input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const searchBtn = screen.getByRole("button", {
    name: "Search",
  });

  expect(searchBtn).toBeInTheDocument();
});

it("Should Search restaurant results after clicking on search button for serachText KFC", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeSearch = screen.getAllByTestId("resCard");

  expect(cardsBeforeSearch.length).toBe(20);

  const searchBtn = screen.getByRole("button", {
    name: "Search",
  });

  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "kfc" } });

  fireEvent.click(searchBtn);

  const resCards = screen.getAllByTestId("resCard");

  expect(resCards.length).toBe(1);
});

it("Should filter Top rated Restaurants", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeSearch = screen.getAllByTestId("resCard");

  expect(cardsBeforeSearch.length).toBe(20);

  const topRatedRestaurantBtn = screen.getByRole("button", {
    name: "Top rated Restaurants",
  });

  fireEvent.click(topRatedRestaurantBtn);

  const cardsAfterSearch = screen.getAllByTestId("resCard");

  expect(cardsAfterSearch.length).toBe(15);
});
