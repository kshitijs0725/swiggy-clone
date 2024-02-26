import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ResMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const params = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.1045461&lng=73.00329959999999&restaurantId=45732&catalog_qa=undefined&submitAction=ENTER"
    );
    const jsonData = await data.json();
    setResInfo(jsonData.data)
    console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card)

  };

  if (resInfo === null) {
    return <div>Loading...</div>
  }


  const {name, cuisines, areaName, sla, costForTwoMessage, feeDetails} = resInfo?.cards[2]?.card?.card?.info;
  const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  

  return (
    <div className="menu-container">
      <h1 className="res-name">{name}</h1>
      <p className="cuisines-list">{cuisines.join(", ")}</p>
      <p className="area-name">{areaName}</p>
      <p className="res-distance">{sla?.lastMileTravelString}</p>
      <ul className="add-info">
        <li>
            {costForTwoMessage}
        </li>
      </ul>
      <p>{feeDetails?.message}</p>
      <div className="margin"></div>
      <ul>
        {itemCards.map((item)=> <li>{item.card.info.name}</li>)}
      </ul>
    </div>
  );
};
export default ResMenu;
