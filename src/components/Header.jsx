import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/context/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [authState, setAuthState] = useState("Login");

  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg m-3 mb-4 rounded-lg">
      <div className="logo-container">
        <img
          className="w-32 rounded-full"
          src="https://www.clipartmax.com/png/small/111-1118804_android-food-delivery-apps.png"
          alt="Android Food Delivery Apps @clipartmax.com"
        />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            {/* Always use Link component for routing instead of anchor tag */}
            {/* Link doesn't refresh the page hence it is more performant while using <a> anchor tags with href will result in page getting refreshed and hence less performant */}
            {/* Internally Link uses anchor tag */}
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold">
            <Link to="/cart">Cart - ({cartItems.length} items)</Link>
          </li>
          <li>
            <button
              className="px-4"
              onClick={() =>
                authState === "Login"
                  ? setAuthState("Logout")
                  : setAuthState("Login")
              }
            >
              {authState}
            </button>
          </li>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
