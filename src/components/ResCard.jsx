import { RESTRO_IMAGES_URL } from '../assets/constants'

const ResCard = (props) =>{
  return(
    <div className='res-card text-[#3d405b] p-5 mx-4 w-[320px] cursor-pointer hover:scale-90'>
        <img src={RESTRO_IMAGES_URL + props.cloudinaryImageId} alt="restaurant-logo" className='restro-logo h-[200px] w-full rounded-lg '/>
      <div className='details-container'>
        <h3 className='restaurant-name text-lg font-medium'>{props.name}</h3>
        <div className='info'>
          <div className='res-params grid grid-flow-col items-center justify-start gap-5px mt-2px text-lg'>
          <svg className='mb-0.5' width="20" height="20" viewBox="0 0 20 20" fill="none" role="img" aria-hidden="true"><circle cx="10" cy="10" r="9" fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"></circle><path d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z" fill="white"></path><defs><linearGradient id="StoreRating20_svg__paint0_linear_32982_71567" x1="10" y1="1" x2="10" y2="19" gradientUnits="userSpaceOnUse"><stop stopColor="#21973B"></stop><stop offset="1" stopColor="#128540"></stop></linearGradient></defs></svg>
            <span className='font-medium'>
            {`${props.avgRatingString + " • "}`}
            </span>
            <span className='eta font-medium'>{props.sla.slaString}</span>
          </div>
          <div className='restaurant-details font-light text-base'>
           <p className='cuisines'>{props.cuisines.join(", ")}</p>
           <p className='res-area'>{props.areaName}</p>
          </div>
        </div>
      </div>
  </div>
  )
}

export const DiscountInfo = (ResCard) => {
  return (props) => {
    return (
      <div>
        <span className='absolute mt-48 ml-16 px-4 rounded-md items-center bg-white text-lg font-extrabold'>
          {props.aggregatedDiscountInfoV3.header} {props.aggregatedDiscountInfoV3.subHeader}
        </span>
        <ResCard {...props}/>
      </div>
    );
  };
};


export default ResCard;