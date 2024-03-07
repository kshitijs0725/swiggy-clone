import { Link } from 'react-router-dom'

const Cart = () => {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <h1 className="font-bold text-2xl">Your cart is empty. Add something from the menu.</h1>
          <Link to="/"><button className="px-4 py-2 border-2 border-[#f3dacc] bg-[#ffede4] text-orange-400 rounded-lg mt-4 font-semibold">Browse Restaurants</button></Link>
        </div>
      </div>
    );
  };
  
  export default Cart;
  