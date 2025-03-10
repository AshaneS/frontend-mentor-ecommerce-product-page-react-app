import deleteIcon from "../assets/icon-delete.svg";
import image1_thumb from "../assets/image-product-1-thumbnail.jpg";

export function Basket() {
  return (
    <div className="flex flex-col py-6 shadow-lg h-86 rounded-2xl bg-white justify-between pb-8">
      <div>
        <h2 className="px-6 font-semibold text-xl">Cart</h2>
        <div className="w-full border-b-2 border-gray-200 pb-6"></div>
      </div>
      <div className="flex items-center justify-around text-xl">
        <img src={image1_thumb} alt="" className="h-18 w-18 rounded-lg" />
        <div className="flex flex-col text-gray-500">
          <p>Fall Limited Edition Sneakers</p>
          <div className="flex items-center gap-2">
            <p>{`$125.00`}</p>
            <p>{`X3`}</p>
            <p className="font-bold text-black">{`$375.00`}</p>
          </div>
        </div>
        <img src={deleteIcon} className="h-4 w-4" alt="" />
      </div>

      <div className="px-6">
        <button className="bg-custom-orange w-full rounded-lg py-6 text-xl font-semibold hover:cursor-pointer hover:bg-amber-600">
          Checkout
        </button>
      </div>
    </div>
  );
}
