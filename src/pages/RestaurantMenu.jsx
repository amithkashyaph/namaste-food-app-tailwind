import React, { useEffect, useState } from "react";
import Shimmer from "../components/Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/hooks/useRestaurantMenu";
import RestaurantCategoryAccordion from "../components/RestaurantCategoryAccordion";

const RestaurantMenu = () => {
  //   const [restaurantInfo, setRestaurantInfo] = useState(null);
  //   const [menuData, setMenuData] = useState({});

  const [showItemsListIndex, setShowItemsListIndex] = useState(-1);

  const { id } = useParams();

  /**
   * Custom hook to fetch the restaurant info
   */
  const [restaurantInfo, menuData] = useRestaurantMenu(id);

  //   useEffect(() => {
  //     fetchMenu();
  //   }, []);

  //   const fetchMenu = async () => {
  //     const menuData = await fetch(MENU_API + id).then((data) => data.json());

  //     setMenuData(menuData?.data?.cards[0]?.card?.card?.info);
  //     setRestaurantInfo(menuData.data);
  //     console.log(menuData?.data?.cards[0]?.card?.card?.info);
  //   };

  if (restaurantInfo === null || menuData === null) {
    return <Shimmer />;
  }
  const { itemCards } =
    restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  const restaurantCategories =
    restaurantInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (c) =>
        c.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  const handleAccordionExpandClick = (index) => {
    index === showItemsListIndex
      ? setShowItemsListIndex(!showItemsListIndex)
      : setShowItemsListIndex(index);
  };

  // console.log(restaurantCategories);

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold my-5">{menuData.name}</h1>
      <h3 className="text-xl">{menuData.cuisines.join(", ")}</h3>
      <h4>{menuData.costForTwoMessage}</h4>
      {restaurantCategories.map((category, index) => (
        // controlled component
        <RestaurantCategoryAccordion
          category={category?.card?.card}
          key={category?.card?.card?.title}
          showItems={index === showItemsListIndex}
          onClick={() => handleAccordionExpandClick(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
