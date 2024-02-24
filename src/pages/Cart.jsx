import React from "react";
import { useDispatch, useSelector } from "react-redux";
import RestaurantCategoryAccordionBody from "../components/RestaurantCategoryAccordionBody";
import { clearCart } from "../utils/store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price / 100;
    });
    return total;
  };

  const hanldeClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center my-2 p-2 w-full">
      <h1 className="text-3xl font-bold">Cart</h1>
      <button
        className="px-2 py-1 mt-4 bg-red-800 text-white rounded-lg disabled:bg-red-200"
        disabled={cartItems.length === 0}
        onClick={() => hanldeClearCart()}
      >
        Clear Cart
      </button>
      {cartItems.length === 0 && (
        <h1 className="p-10 text-red-700">
          There are no items added to the cart!
        </h1>
      )}
      <div>
        {cartItems.map((item) => (
          <RestaurantCategoryAccordionBody categoryData={item} />
        ))}
      </div>
      {cartItems.length !== 0 ? (
        <h1 className="text-right w-2/3">Total : {calculateTotal()}</h1>
      ) : null}
    </div>
  );
};

export default Cart;
