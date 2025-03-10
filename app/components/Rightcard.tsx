import AddToCartButton from "./AddToCartButton";
import ItemCounter from "./ItemCounter";

const Rightcard = () => {
  return (
    <div className="flex flex-col gap-2 min-h-[550px] bg-white md:p-8 p-2">
      <p className="text-base font-bold tracking-widest text-gray-500 uppercase">
        sneaker company
      </p>
      <h1 className="text-4xl font-extrabold text-gray-800">
        Fall Limited Edition Sneakers
      </h1>

      <p className="py-3 text-justify text-xl/9 text-gray-500">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>

      <div className="flex flex-col gap-6 pb-12">
        <div className="flex items-center justify-between gap-4">
          <span className="text-4xl font-bold text-gray-700">$125.00</span>
          <span className="text-xl flex h-[35px] w-[65px] items-center justify-center rounded-lg bg-gray-800 font-bold text-white">
            50%
          </span>
          <span className="text-xl flex-auto text-right font-semibold text-gray-500 line-through">
            $250.00
          </span>
        </div>

        <div className="grid w-full grid-cols-1 justify-center gap-3">
          <ItemCounter />
          <AddToCartButton />
        </div>
      </div>
    </div>
  );
};
export default Rightcard;
