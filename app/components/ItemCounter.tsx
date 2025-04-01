import { useState } from "react";
import minus from "../assets/icon-minus.svg";
import plus from "../assets/icon-plus.svg";
import { BiCartAlt } from "react-icons/bi";

const ItemCounter = () => {
  const [quantity, setQuantity] = useState(0);
  const handleMinusQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 0 ? prevQuantity - 1 : 0));
  };
  const handlePlusQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleAddToCart = () => {
    console.log("Added to cart:", quantity);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex h-18 items-center justify-between rounded-lg bg-gray-200 p-2 px-6">
        <button onClick={handleMinusQuantity}>
          <img src={minus} alt="" />
        </button>
        <p>{quantity}</p>
        <button onClick={handlePlusQuantity}>
          <img src={plus} alt="" />
        </button>
      </div>

      <div
        className="bg-custom-orange flex h-18 w-full cursor-pointer items-center justify-center gap-2 rounded-lg text-2xl font-bold hover:bg-amber-600"
        onClick={handleAddToCart}
      >
        <BiCartAlt size={30} />
        <h1>Add to cart</h1>
      </div>
    </div>
  );
};
export default ItemCounter;
