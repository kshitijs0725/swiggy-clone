import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RESTRO_MENU_URL } from "../assets/constants";

const ResMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const {resId} = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      RESTRO_MENU_URL + resId
    );
    const jsonData = await data.json();
    setResInfo(jsonData.data);
    console.log(
      resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card
    );
  };

  if (resInfo === null) {
    return <div>Loading...</div>;
  }

  const { name, cuisines, areaName, sla, costForTwoMessage, feeDetails } =resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  const { carousel } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div className="menu-container">
      <h1 className="res-name">{name}</h1>
      <p className="cuisines-list">{cuisines.join(", ")}</p>
      <p className="area-name">{areaName}</p>
      <p className="res-distance">{sla?.lastMileTravelString}</p>
      <ul className="add-info">
        <li>{costForTwoMessage}</li>
      </ul>
      <p>{feeDetails?.message}</p>
      <div className="margin"></div>
      <ul>
        {itemCards
          ? itemCards.map((item) => (
              <li key={item.card.info.id}> {item.card.info.name} - Rs {(item.card.info.price || item.card.info.defaultPrice)/100} </li>
            ))
          : carousel.map((item) => (
              <li key={item.dish.info.id}>{item.dish.info.name} - Rs {(item.dish.info.price || item.dish.info.defaultPrice)/100} </li>
            ))}
      </ul>
    </div>
  );
};
export default ResMenu;
