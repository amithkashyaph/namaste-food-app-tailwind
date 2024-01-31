import React, { useState, useEffect } from "react";
import { RestaurantCard, withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Search } from "./Search";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";

const Body = () => {
  const [restaurantsData, setRestaurantsData] = useState([]);
  const [fileteredRestaurantsData, setFilteredRestaurantsData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  /** HOC component
   *
   * RestaurantCardPromoted is a High Order Component which takes in normal RestaurantCard component and based on 'promoted' flag adds
   * 'Promoted' label on to the Restaurant card
   */
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  const fetchData = async () => {
    const restaurantsAPIData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8965641&lng=77.5398539&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    ).then((data) => data.json());
    console.log(restaurantsAPIData);

    setRestaurantsData(
      restaurantsAPIData.data.cards[1].card.card.gridElements.infoWithStyle
        .restaurants
    );
    setFilteredRestaurantsData(
      restaurantsAPIData.data.cards[1].card.card.gridElements.infoWithStyle
        .restaurants
    );
  };

  const searchClickHandler = (searchText) => {
    console.log(searchText);
    if (searchText.length == 0) {
      setFilteredRestaurantsData([...restaurantsData]);
      return;
    }
    const filteredRestautarant = restaurantsData.filter((r) => {
      return r.info.name.toLowerCase().includes(searchText);
    });
    filteredRestautarant.length === 0
      ? setFilteredRestaurantsData([...restaurantsData])
      : setFilteredRestaurantsData(filteredRestautarant);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>Looks like you are offline!</h1>;
  }

  if (restaurantsData.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="flex items-center">
        <Search searchClickHandler={searchClickHandler} />
        <div>
          <button
            className="bg-blue-500  px-4 py-2 mr-4 rounded-2xl"
            onClick={(e) =>
              setFilteredRestaurantsData(
                restaurantsData.filter((r) => r.info.avgRating > 4.2)
              )
            }
          >
            <span>Top rated Restaurants</span>
          </button>
          <button
            className="bg-red-300  px-4 py-2 mr-4 rounded-2xl"
            onClick={(e) => {
              setFilteredRestaurantsData(
                restaurantsData.filter((r) => r.info.avgRating > 4.2)
              );
            }}
          >
            <span>Nearest Restaurants</span>
          </button>
          <button
            className="bg-blue-300  px-4 py-2 mr-4 rounded-2xl"
            onClick={(e) =>
              setFilteredRestaurantsData(
                restaurantsData.filter((r) => r.info.avgRating > 4.2)
              )
            }
          >
            <span>Quick delivery</span>
          </button>
          <button
            className="bg-green-500  px-4 py-2 mr-4 rounded-2xl"
            onClick={(e) =>
              setFilteredRestaurantsData(
                restaurantsData.filter((r) => r.info.avgRating > 4.2)
              )
            }
          >
            <span>Vegetarian</span>
          </button>
          <button
            className="bg-red-500  px-4 py-2 mr-4 rounded-2xl"
            onClick={(e) =>
              setFilteredRestaurantsData(
                restaurantsData.filter((r) => r.info.avgRating > 4.2)
              )
            }
          >
            <span>Non-Vegetarian</span>
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap">
        {fileteredRestaurantsData.map((restaurant) => (
          <Link
            to={`restaurants/${restaurant.info.id}`}
            key={restaurant.info.id}
          >
            {true ? (
              <RestaurantCardPromoted
                name={restaurant.info.name}
                cuisine={restaurant.info.cuisines}
                rating={restaurant.info.avgRating}
                costForTwo={restaurant.info.costForTwo}
                imageId={restaurant.info.cloudinaryImageId}
                eta={restaurant.info.sla.deliveryTime}
                resData={restaurant.info}
              />
            ) : (
              <RestaurantCard
                name={restaurant.info.name}
                cuisine={restaurant.info.cuisines}
                rating={restaurant.info.avgRating}
                costForTwo={restaurant.info.costForTwo}
                imageId={restaurant.info.cloudinaryImageId}
                eta={restaurant.info.sla.deliveryTime}
              />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
