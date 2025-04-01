import type { Route } from "./+types/home";
import "../index.css";
import Leftcard from "~/components/Leftcard";
import Rightcard from "~/components/Rightcard";
import Banner from "~/components/Banner";
import { products } from "../data/products";

export default function Home() {
  return (
    <div className="flex h-full max-w-[488px] flex-col md:max-w-5xl md:flex-row md:items-center md:justify-between">
      <div className="w-full md:p-6">
        <Leftcard />
      </div>
      <div className="w-full pt-3 md:p-6">
        {products.map((product, key) => (
          <Rightcard key={key} data={product} />
        ))}
      </div>
    </div>
  );
}
