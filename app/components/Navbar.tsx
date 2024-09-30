import { Separator } from "@/components/ui/separator";
import { Metal_Mania } from "next/font/google";
import React from "react";

const metalMania = Metal_Mania({
  subsets: ["latin-ext"],
  weight: "400",
});

const Navbar = () => {
  return (
    <div>
      <nav className="h-8 bg-transparent flex justify-between px-2 my-2">
        {/* menu */}
        <div className="flex-1" />
        <div className=" flex justify-center">
          <h1 className={`${metalMania.className} flex-1 text-2xl text-white`}>
            Exermos
          </h1>
        </div>
        <div className="flex-1 flex justify-end">
          <img src={"/imgs/logo.png"} className="h-full w-auto " />
        </div>
        {/* <div className="w-10 "></div> */}
      </nav>
      <div className="px-2">
        <Separator />
      </div>
    </div>
  );
};

export default Navbar;
