import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

export const RestaurantCard = (props) => {
  const { name, cuisines, costForTwo, avgRating, cloudinaryImageId, sla } =
    props.resData;
  return (
    <div
      className="m-5 p-3 w-[255px] bg-slate-50 rounded-xl hover:bg-slate-200 hover:shadow-xl"
      data-testid="resCard"
    >
      <img
        src={`${IMG_CDN_URL}/${cloudinaryImageId}`}
        alt="Swiggy food"
        className="w-full rounded-xl"
      />
      <div className="flex flex-col justify-center">
        <h3 className="mt-3 font-bold">{name}</h3>
        <h4 className="mt-4 font-normal">{cuisines.join(", ")}</h4>
        <h4 className="mt-1 font-semibold">{avgRating}⭐️</h4>
        <h4 className="mt-4 text-red-500">{costForTwo}</h4>
        <h4 className="mt-2">
          Delievered in <span className="font-bold">{sla.deliveryTime}</span>{" "}
          minutes
        </h4>
      </div>
      <button className="w-full py-3 mt-3 bg-lime-700 rounded-xl text-white hover:bg-lime-600">
        Order now
      </button>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute bg-black text-white px-1 mt-3 ml-5 rounded-md">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
