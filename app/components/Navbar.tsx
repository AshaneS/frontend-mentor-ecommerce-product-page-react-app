import { Link } from "react-router";
import "../index.css";
import cartIcon from "../assets/icon-cart.svg";
import avatar from "../assets/image-avatar.png";
import { navigation } from "../data/navigationLinks";
import hamburgermenu from "../assets/icon-menu.svg";
import { useState } from "react";
import { Basket } from "./Basket";
const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="font-primary md: flex items-center justify-between border-gray-300 px-8 py-5 md:border-b-1">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <img src={hamburgermenu} alt="" className="h-4 w-4 md:hidden" />
          </div>
          <div className="pb-1 text-4xl font-bold text-gray-800">
            <h1>sneakers</h1>
          </div>
        </div>
        <ul className="hidden items-center justify-between space-x-6 text-base font-normal text-gray-500 md:flex">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link to={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-between gap-6">
        <img
          src={cartIcon}
          alt="cart"
          className="h-5 w-5 md:h-5 md:w-5"
          onClick={toggleCart}
        />
        <img
          src={avatar}
          alt="avatar"
          className="h-8 w-8 rounded-full hover:border-2 hover:border-orange-400 md:h-12 md:w-12"
        />

        {/* Conditional rendering the cart basket */}

        {isCartOpen && (
          <div className="md:absolute md:top-20 md:right-60 rounded-md bg-white shadow-lg">
            {/* Cart content goes here */}
            <Basket />
          </div>
        )}
      </div>
    </div>
  );
};
export default Navbar;
