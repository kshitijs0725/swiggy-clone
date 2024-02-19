import ResCard from "./ResCard";
import list from "../assets/ResList"

const Body = () => {
    return (
      <div className="body">
        <div className="card-container">
          {list.map((restaurant) => (
            <ResCard 
            key={restaurant.data.id}
            {...restaurant.data}
            />
          ))}
        </div>
      </div>
    );
}
export default Body;
