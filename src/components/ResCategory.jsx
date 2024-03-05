import AccordionData from "./AccordionData";
import { useState } from "react";


const ResCategory = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  }
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 shadow-lg rounded-xl p-4 font-bold text-md">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span>
            {props.data.title} ({props.data.itemCards.length})
          </span>
          <span>⬇</span>
        </div>
        {isClicked && 
        <div>
          <AccordionData items={props.data.itemCards} />
        </div>
}
      </div>
    </div>
  );
};
export default ResCategory;
