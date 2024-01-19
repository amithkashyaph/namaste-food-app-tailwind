import { useEffect, useState } from "react";
import { MENU_API } from "../constants";

const useRestaurantMenu = (resId) => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);

  useEffect(() => {
    fetchResInfo();
  }, []);

  const fetchResInfo = async () => {
    const resData = await fetch(MENU_API + resId).then((data) => data.json());
    console.log(resData);

    setRestaurantInfo(resData.data);
  };

  return [restaurantInfo, restaurantInfo?.cards[0]?.card?.card?.info];
};

export default useRestaurantMenu;
