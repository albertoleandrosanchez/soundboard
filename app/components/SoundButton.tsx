"use client";
import useSound from "../hooks/useSound";
import { cx } from "class-variance-authority";
import React from "react";

type Props = {
  path: string;
  name: string;
};

const SoundButton = (props: Props) => {
  const { play, pause, isPlaying, currentTime } = useSound(props.path);
  const togglePlay = () => {
    if (!isPlaying) {
      play();
    } else {
      pause();
    }
  };

  // mover letras a la izquierda en caso de que no entren en el width

  return (
    <div className="w-24 m-2">
      <p
        className="text-xs 
      text-center
      text-gray-500
      font-semibold
      h-8
      overflow-hidden
      overflow-ellipsis
      "
      >
        {props.name.split(".")[0]}
      </p>
      <div
        className={cx(
          `h-24 bg-gray-100 rounded-sm cursor-pointer transition-all duration-1000  `,
          {
            "bg-gray-400 scale-105 border-primary border": isPlaying,
          }
        )}
        onClick={() => togglePlay()} // Access methods directly
      >
        <img src="/imgs/d20.png" alt="d20" className="h-full w-full" />
      </div>
    </div>
  );
};

export default SoundButton;
