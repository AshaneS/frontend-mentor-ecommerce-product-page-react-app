import deleteIcon from "../assets/icon-delete.svg";
import image1_thumb from "../assets/image-product-1-thumbnail.jpg";

export function Basket() {
  return (
    <div className="flex flex-col gap-5 py-6 px-6 shadow-lg rounded-xl ">
      <div>
       <h2 className="font-semibold">Cart</h2>
       <div className="border-b-1 border-gray-200 w-sm pb-6 -mx-8"></div>
      </div>
      <div className="flex items-center justify-center gap-5">
        <img src={image1_thumb} alt="" className="h-12 w-12 rounded-sm" />
        <div className="flex flex-col text-gray-500">
          <p>Fall Limited Edition Sneakers</p>
          <div className="flex gap-2 items-center">
            <p>$125.00</p>
            <p>X3</p>
            <p className="text-black font-bold">$375.00</p>
          </div>
        </div>
        <img src={deleteIcon} className="h-4 w-4" alt="" />
      </div>

      <button className="bg-custom-orange py-4 rounded-lg font-semibold text-sm">Checkout</button>
    </div>
  );
}
