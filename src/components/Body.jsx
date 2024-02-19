import ResCard from "./ResCard";
import list from "../assets/ResList";
import { useState } from "react";

const Body = () => {
  const [filteredRestros, setFilteredRestros] = useState(list);

  return (
    <div className="body">
      <div className="filterBtn">
        <button
          className="topRatedBtn"
          onClick={() => {
            const filteredList = filteredRestros.filter(
              (res) => res.data.avgRatingString >= 4.3
            );
            setFilteredRestros(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="card-container">
        {list.map((restaurant) => (
          <ResCard key={restaurant.data.id} {...restaurant.data} />
        ))}
      </div>
    </div>
  );
};
export default Body;
