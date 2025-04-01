import { useState } from "react";
import deleteIcon from "../assets/icon-delete.svg";
import image1_thumb from "../assets/image-product-1-thumbnail.jpg";

import { useCart } from "../context/CartContext";

//Definig the type of the cartItem

export function Cart() {
  const { cart, removeFromCart } = useCart();

  const handleDeleteItem = (itemId: number) => {
    removeFromCart(itemId);
  };

  return (
    <div className="flex h-78 flex-col justify-between rounded-2xl bg-white py-6 pb-8 shadow-lg">
      <div>
        <h2 className="px-6 text-xl font-semibold">Cart</h2>
        <div className="w-full border-b-2 border-gray-200 pb-6"></div>
      </div>
      <div className="m-auto px-4 text-xl">
        {cart.length === 0 ? (
          <div className="flex h-40 flex-col items-center justify-center gap-4">
            <p className="text-base font-bold text-gray-600">
              Your cart is empty.
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-10">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3 text-gray-500"
              >
                <img src={item.image} alt="" className="h-15 w-15 rounded-lg" />
                <div className="flex flex-col gap-2 text-base">
                  <p>{item.name}</p>
                  <div className="flex items-center gap-2 tracking-wider">
                    <p>${item.price}</p>
                    <p>x</p>
                    <p>{item.quantity}</p>
                    <p className="font-bold text-black">
                      ${item.price * item.quantity}
                    </p>
                  </div>
                </div>
                <div
                  className="p-1"
                  onClick={() => {
                    handleDeleteItem(item.id);
                  }}
                >
                  <img src={deleteIcon} className="h-4 w-4" alt="" />
                </div>
              </div>
            ))}

            <div>
              <button className="bg-custom-orange w-full rounded-lg py-4 text-xl font-semibold hover:cursor-pointer hover:bg-amber-600">
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
