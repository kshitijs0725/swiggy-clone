import ResCard, {DiscountInfo} from "./ResCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { NavLink } from "react-router-dom";
import { RESTRO_CARDS_URL } from "../assets/constants";

const Body = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const [filteredRestros, setFilteredRestros] = useState([]);
  const [searchRestroList, setSearchRestroList] = useState([]);
  const ResDiscountInfo = DiscountInfo(ResCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      RESTRO_CARDS_URL
    );
    const jsonData = await response.json();
    setFilteredRestros(
      jsonData?.data?.cards[4]?.card?.card.gridElements?.infoWithStyle
        ?.restaurants
    );
    setSearchRestroList(
      jsonData?.data?.cards[4]?.card?.card.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return filteredRestros.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">

      <div className="container flex justify-center">
        <div className="search-container m-4 p-4">
          <input
            type="text"
            placeholder="Search for restaurants"
            className="search-box border border-solid border-black rounded-md py-1 px-4"
            value={searchTxt}
            onChange={(e) => {
              setSearchTxt(e.target.value);
            }}
          />
          <button
            className="search-btn bg-[#e07a5f] px-4 py-1.5 m-4 rounded-lg"
            onClick={() => {
              const searchedRestro = filteredRestros.filter((res) =>
                res.info.name.toLowerCase().includes(searchTxt.toLowerCase())
              );
              setSearchRestroList(searchedRestro);
            }}
          >
            Search
          </button>
        </div>
      <div className="filter m-4 p-4">
        <div className="filterBtn bg-[#81b29a] px-4 py-1 m-4 rounded-lg">
          <button
            className="topRatedBtn"
            onClick={() => {
              const filteredList = filteredRestros.filter(
                (res) => res.info.avgRatingString >= 4.3
              );
              setSearchRestroList(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
    </div>
      
      <div className="card-container flex flex-wrap justify-center box-border overflow-hidden">
        {searchRestroList.map((restaurant) => (
          <NavLink
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {(restaurant.info.aggregatedDiscountInfoV3) ? <ResDiscountInfo {...restaurant.info}/> : <ResCard {...restaurant.info} /> }
          </NavLink>
        ))}
      </div>
    </div>
  );
};
export default Body;
