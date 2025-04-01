import minus from "../assets/icon-minus.svg";
import plus from "../assets/icon-plus.svg";
import { BiCartAlt } from "react-icons/bi";
import { products } from "../data/products";
import { useState } from "react";
import { useCart } from "../context/CartContext";

const Rightcard = (props) => {
  const { name, description, price } = props.data;
 
  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(0);

  const handleMinusQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 0 ? prevQuantity - 1 : 0));
  };
  const handlePlusQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleAddToCart = () => {
    addToCart(props.data, quantity);
    console.log("Added to cart:", quantity);
  };

  return (
    <div className="flex min-h-[550px] flex-col gap-2 bg-white p-2 md:p-8">
      <p className="text-base font-bold tracking-widest text-gray-500 uppercase">
        sneaker company
      </p>

      <h1 className="text-4xl font-extrabold text-gray-800">{name}</h1>

      <p className="py-3 text-justify text-xl/9 text-gray-500">{description}</p>

      <div className="flex flex-col gap-6 pb-12">
        <div className="flex items-center justify-between gap-4">
          <span className="text-4xl font-bold text-gray-700">${price}</span>
          <span className="flex h-[35px] w-[65px] items-center justify-center rounded-lg bg-gray-800 text-xl font-bold text-white">
            50%
          </span>
          <span className="flex-auto text-right text-xl font-semibold text-gray-500 line-through">
            $250.00
          </span>
        </div>

        <div>
          <div className="flex flex-col gap-4">
            <div className="flex h-18 items-center justify-between rounded-lg bg-gray-200">
              <button onClick={handleMinusQuantity} className="p-8">
                <img src={minus} alt="" />
              </button>
              <p>{quantity}</p>
              <button onClick={handlePlusQuantity} className="p-8">
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
        </div>
      </div>
    </div>
  );
};
export default Rightcard;
