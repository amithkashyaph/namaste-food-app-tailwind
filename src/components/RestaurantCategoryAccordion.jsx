import React, { useState } from "react";
import RestaurantCategoryAccordionBody from "./RestaurantCategoryAccordionBody";

const RestaurantCategoryAccordion = (props) => {
  //   const [showItems, setShowItems] = useState(false);
  const { category, showItems, onClick } = props;

  //   const handleClick = () => {
  //     setShowItems(!showItems);
  //   };
  //   console.log(category);
  return (
    <div>
      <div
        className="w-1/2 m-auto flex justify-between p-4 border my-3 shadow-lg hover:bg-slate-100 cursor-pointer"
        onClick={onClick}
        data-testid="accordionHeader"
      >
        <span className="font-bold">
          {category.title} ({category.itemCards.length})
        </span>
        <span>⬇️</span>
      </div>
      <div>
        {showItems &&
          category.itemCards.map((c, i) => (
            <RestaurantCategoryAccordionBody
              key={c.card.info.id}
              categoryData={c.card.info}
            />
          ))}
      </div>
    </div>
  );
};

export default RestaurantCategoryAccordion;
