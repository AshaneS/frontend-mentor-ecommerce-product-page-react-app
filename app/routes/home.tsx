import type { Route } from "./+types/home";
import "../index.css";
import Leftcard from "~/components/Leftcard";
import Rightcard from "~/components/Rightcard";
import Banner from "~/components/Banner";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    // <div className="grid grid-rows-8 gap-2 grid-col-1 h-full">
    //   <div className="bg-red-500 min-h-[50px] row-span-4 "></div>
    //   <div className="bg-blue-500 min-h-[50px] row-span-1"></div>
    //   <div className="bg-yellow-500 min-h-[50px] row-span-2"></div>
    //   <div className="bg-green-500 min-h-[50px] row-span-1"></div>

    // </div>

    <div className="flex h-full max-w-[488px] flex-col md:max-w-5xl md:flex-row md:justify-between md:items-center ">
      <div className="w-full  md:p-6 ">
        <Leftcard />
      </div>
      <div className="w-full  md:p-6 pt-3">
        <Rightcard />
      </div>
    </div>
  );
}
