import ResCard from "./ResCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [filteredRestros, setFilteredRestros] = useState([]);

  useEffect(()=>{
    fetchData();
  },[])

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.1045461&lng=73.00329959999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await response.json();
    setFilteredRestros(jsonData?.data?.cards[4]?.card?.card.gridElements?.infoWithStyle?.restaurants);
  };


  return filteredRestros.length === 0 ? <Shimmer /> : (
    <div className="body">
      <div className="filterBtn">
        <button
          className="topRatedBtn"
          onClick={() => {
            const filteredList = filteredRestros.filter(
              (res) => res.info.avgRatingString >= 4.3
            );
            setFilteredRestros(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="card-container">
        {filteredRestros.map((restaurant) => (
          <ResCard key={restaurant.info.id} {...restaurant.info} />
        ))}
      </div>
    </div>
  );
};
export default Body;
