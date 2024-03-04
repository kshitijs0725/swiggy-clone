import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RESTRO_MENU_URL } from "../assets/constants";
import ResCategory from "./ResCategory";

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
    console.log(resInfo);
  };

  if (resInfo === null) {
    return <div>Loading...</div>;
  }

  const { name, cuisines, areaName, sla, costForTwoMessage, feeDetails } =resInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  const { carousel } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const filteredItemTypes = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((item) => item?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
  console.log(filteredItemTypes)

  return (
    <div className="menu-container text-center">
      <h1 className="res-name text-2xl my-6 font-bold">{name}</h1>
      <p className="cuisines-list font-medium text-lg">{cuisines.join(", ")} - {costForTwoMessage}</p>
      {filteredItemTypes.map((category) => (
        <ResCategory data={category?.card?.card}/>
      ))}
    </div>
  );
};
export default ResMenu;
