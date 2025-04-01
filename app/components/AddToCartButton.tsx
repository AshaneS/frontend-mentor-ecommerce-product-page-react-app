import { BiCartAdd, BiCartAlt } from "react-icons/bi";
import cartIcon from "../assets/icon-cart.svg";

type AddToCartButtonProps = {
  onClick?: () => void; // add to cart function
};

const AddToCartButton = ({ onClick }: AddToCartButtonProps) => {
  return (
    <div
      className="bg-custom-orange flex h-18 w-full cursor-pointer items-center justify-center gap-2 rounded-lg text-2xl font-bold hover:bg-amber-600"
      onClick={onClick}  //onClick prop passedd to the button
    >
      <BiCartAlt size={30} />
      <h1>Add to cart</h1>
    </div>
  );
};
export default AddToCartButton;
