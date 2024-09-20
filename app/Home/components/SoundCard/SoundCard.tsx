"use client";
import React from "react";
import { BiRepeat } from "react-icons/bi";
import { GiSoundWaves } from "react-icons/gi";
import { HiHeart } from "react-icons/hi";

export type SoundCardProps = {
  // types...
};

const SoundCard: React.FC<SoundCardProps> = ({}) => {
  return (
    <div
      className="cursor-pointer boton_de_sonido 
			h-32 w-96
		border-stone-800 border drop-shadow-sm rounded-sm p-4 duration-200 bg-stone-950 hover:bg-stone-900  hover:drop-shadow-xl	"
    >
      <GiSoundWaves className="fill-stone-800" />
      <div>
        <p className="text-stone-100 font-bold text-lg">
          Medieval Fantasy Tavern | D&D Fantasy Music and Ambience
        </p>
      </div>
      <div className="flex justify-evenly items-center">
        <button className="bg-stone-800 hover:bg-stone-700 text-white font-bold p-2 rounded-full">
          <BiRepeat />
        </button>
        <button className="bg-stone-800 hover:bg-stone-700 text-white font-bold p-2 rounded-full">
          <HiHeart />
        </button>
      </div>
    </div>
  );
};

export default SoundCard;
