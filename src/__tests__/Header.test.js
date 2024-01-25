import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../components/Header";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../utils/store/appStore";
import "@testing-library/jest-dom";

/**
 * 1. Header component makes use of react-redux as we are subscribing to the store using useSelector hook
 * 2. Because of this we need to provide the store data while testing Header else the test cases fail
 * 3. Also Header component makes use of react-router-dom for routing which uses Link component internally.
 *    Link also is not recogbnised by React Testing Library and hence routing info also needs to be provided
 *    to Header component during testing
 * 4. @testing-library/jest-dom library is required for using 'toBe' functions
 */
it("Should render Header componet with Login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //   const loginBtn = screen.getByText("Login");
  const loginBtn = screen.getByRole("button", { name: "Login" });

  expect(loginBtn).toBeInTheDocument();
});

it("Should render Header component with 0 Cart items", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartText = screen.getByText("Cart - (0 items)");

  expect(cartText).toBeInTheDocument();
});

it("Should render Header component with 0 Cart items using regex", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartText = screen.getByText(/Cart/);

  expect(cartText).toBeInTheDocument();
});

/**
 * 1. Use fireEvent to simulate events
 */
it("Should change login button to logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginBtn = screen.getByRole("button", { name: "Login" });

  fireEvent.click(loginBtn);

  const logoutBtn = screen.getByRole("button", { name: "Logout" });

  expect(logoutBtn).toBeInTheDocument();
});
