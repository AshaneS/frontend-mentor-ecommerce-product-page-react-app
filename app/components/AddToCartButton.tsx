import { BiCartAdd, BiCartAlt } from "react-icons/bi";
import cartIcon from "../assets/icon-cart.svg";

const AddToCartButton = () => {
  return (
    <div className="bg-custom-orange flex h-18 w-full items-center justify-center gap-2 rounded-lg text-2xl font-bold">
      <BiCartAlt size={30} />
      <h1>Add to cart</h1>
    </div>
  );
};
export default AddToCartButton;
