import { Link } from "react-router";
import "../index.css";
import cartIcon from "../assets/icon-cart.svg";
import avatar from "../assets/image-avatar.png";
import { navigation } from "../data/navigationLinks";
import hamburgermenu from "../assets/icon-menu.svg";
const Navbar = () => {
  return (
    <div className="font-primary flex items-center justify-between px-8 py-5 md:border-b-1 md: border-gray-300">
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
        <img src={cartIcon} alt="cart" className="h-5 w-5 md:h-5 md:w-5" />
        <img
          src={avatar}
          alt="avatar"
          className="h-8 w-8 md:h-12 md:w-12 rounded-full hover:border-2 hover:border-orange-400"
        />
      </div>
    </div>
  );
};
export default Navbar;
