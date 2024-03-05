import VegIcon from "../assets/images/veg-icon.png";
import NonVegIcon from "../assets/images/nonVeg-icon.png";
import { DISH_IMAGES_URL } from "../assets/constants";
const AccordionData = (props) => {
  return (
    <div>
      {props.items.map((item) => (
        <div
          key={item.card.info.id}
          className="border-gray-300 border-b-2 mt-4 font-normal text-left"
        >
          {item.card.info.itemAttribute.vegClassifier === "VEG" ? (
            <div>
              <img className=" w-4 h-4 mb-1" src={VegIcon} alt="veg-icon" />
            </div>
          ) : (
            <div>
              <img className="w-4 h-4 mb-1" src={NonVegIcon} />
            </div>
          )}
          {item.card.info.name}
          {item.card.info.defaultPrice ? (
            <p className="font-light text-xs mb-6">
              ₹{item.card.info.defaultPrice / 100}
            </p>
          ) : (
            <p className="font-light text-xs mb-6">
              ₹{item.card.info.price / 100}
            </p>
          )}

          <p className="font-extralight text-xs mb-4">
            {item.card.info.description}
          </p>
          <button className="px-4 py-1 mb-4 bg-black text-white rounded-md">Add</button>
        </div>
      ))}
    </div>
  );
};
export default AccordionData;
