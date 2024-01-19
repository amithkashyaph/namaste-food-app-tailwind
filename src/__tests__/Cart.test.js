import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../pages/RestaurantMenu";
import RES_MENU_DATA from "../utils/mockRestaurantMenuData.json";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../utils/store/appStore";
import Header from "../components/Header";
import "@testing-library/jest-dom";
import Cart from "../pages/Cart";

// Mocking the fetch function call happening within the RestaurantMenu component
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(RES_MENU_DATA),
  })
);

it("Should load Restaurant Menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const foodCategory = screen.getByText("RICE BOWLZ (7)");
  fireEvent.click(foodCategory);

  expect(screen.getByText("Cart - (0 items)")).toBeInTheDocument();

  const foodItems = screen.getAllByTestId("accordionBody");

  expect(foodItems.length).toBe(7);

  const addBtns = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addBtns[0]);
  fireEvent.click(addBtns[1]);

  expect(screen.getByText("Cart - (2 items)")).toBeInTheDocument();

  expect(screen.getAllByTestId("accordionBody").length).toBe(9);

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

  expect(screen.getAllByTestId("accordionBody").length).toBe(7);
});
