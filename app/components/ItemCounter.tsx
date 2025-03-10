import { useState } from "react";
import minus from "../assets/icon-minus.svg";
import plus from "../assets/icon-plus.svg";

const ItemCounter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="flex justify-between items-center  bg-gray-200 rounded-lg p-2 px-6 h-18">
      <button onClick={decrement}>
      <img src={minus} alt="" />
      </button>
      <p className="font-bold text-xl">{count}</p>
      <button onClick={increment}>
        <img src={plus} alt="" />
      </button>
    </div>
  );
};
export default ItemCounter;
