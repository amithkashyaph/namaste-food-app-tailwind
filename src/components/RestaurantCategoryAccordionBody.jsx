import React from "react";
import { IMG_CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/store/cartSlice";

const RestaurantCategoryAccordionBody = (props) => {
  const dispatch = useDispatch();
  const { categoryData } = props;

  const handleAddItemClick = () => {
    console.log(categoryData);
    dispatch(addItem(categoryData));
  };
  return (
    <>
      <div
        className="flex w-1/2 m-auto justify-between my-4 p-3 mb-12"
        data-testid="accordionBody"
      >
        <div className="flex flex-col items-start w-3/4">
          <h2 className="mb-1 text-lg">{categoryData.name}</h2>
          <p className="flex gap-2 items-center mb-5 text-[14px]">
            {categoryData.price / 100}
            {categoryData.offerTags && (
              <span className="text-[10px] text-orange-700 bg-red-100 px-1 border-s-2 border-solid border-red-500">
                {categoryData.offerTags[0].title} |{" "}
                {categoryData.offerTags[0].subTitle}
              </span>
            )}
          </p>
          <p className="font-light p-0 mt-2 text-left text-sm">
            {categoryData.description}
          </p>
        </div>
        <div className="relative">
          <img
            src={`${IMG_CDN_URL}/${categoryData.imageId}`}
            alt=""
            className="h-24"
          />
          <button
            className="absolute px-8 py-1 bg-slate-100 text-[14px] text-black rounded-md top-[80px] right-6 hover:bg-slate-200"
            onClick={() => handleAddItemClick()}
          >
            Add +
          </button>
        </div>
      </div>
      <div className="w-1/2 m-auto border border-solid  left-1/2"></div>
    </>
  );
};

export default RestaurantCategoryAccordionBody;
