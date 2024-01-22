import { render, screen } from "@testing-library/react";

import {
  RestaurantCard,
  withPromotedLabel,
} from "../components/RestaurantCard";
import restaurants from "../utils/";

import "@testing-library/jest-dom";

it("Should render RestaurantCard with props Data", () => {
  render(<RestaurantCard resData={restaurants[0].info} />);

  expect(screen.getByText(restaurants[0].info.name)).toBeInTheDocument();
});

/** Testing Higher Order Components */
it("Should render Restaurant card with Promoted label", () => {
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  render(<RestaurantCardPromoted resData={restaurants[0].info} />);

  const label = screen.getByLabelText("Promoted");
  expect(label).toBeInTheDocument();
});
