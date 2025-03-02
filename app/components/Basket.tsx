import deleteIcon from "../assets/icon-delete.svg";
import image1_thumb from "../assets/image-product-1-thumbnail.jpg";

export function Basket() {
  return (
    <div className="flex flex-col gap-4">
      <h2>Cart</h2>
      <div className="flex items-center justify-center gap-3">
        <img src={image1_thumb} alt="" className="h-10 w-10 rounded-sm" />
        <div className="flex flex-col">
          <p>Fall Limited Edition Sneakers</p>
          <div className="flex">
            <p>$125.00</p>
            <p>X3</p>
            <p>$375.00</p>
          </div>
        </div>
        <img src={deleteIcon} className="h-4 w-4" alt="" />
      </div>

      <button>Checkout</button>
    </div>
  );
}
