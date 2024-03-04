import AccordionData from "./AccordionData";
const ResCategory = (props) => {
  console.log(props.data);
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 shadow-lg rounded-xl p-4 font-bold text-md">
        <div className="flex justify-between">
          <span>
            {props.data.title} ({props.data.itemCards.length})
          </span>
          <span>⬇</span>
        </div>
        <div>
          <AccordionData items={props.data.itemCards} />
        </div>
      </div>
    </div>
  );
};
export default ResCategory;
