import { BiCartAdd, BiCartAlt } from "react-icons/bi";
import cartIcon from "../assets/icon-cart.svg";

const AddToCartButton = () => {
  return (
    <div className="bg-custom-orange flex h-14 w-full items-center justify-center gap-2 rounded-lg text-base font-bold">
      <BiCartAlt size={20} />
      <h1>Add to cart</h1>
    </div>
  );
};
export default AddToCartButton;
