"use client";
import { PauseCircle, PlayCircle, Volume } from "lucide-react";
import React, { useCallback, useEffect, useRef, useState } from "react";
import useAmbient from "../hooks/useAmbient";
import useLongPress from "../hooks/useLongPress";

type Props = {
  path: string;
};

const AmbientSound = (props: Props) => {
  const { pause, play, isPlaying, volume } = useAmbient(props.path);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Inicia la transición de opacidad
    setIsFading(true);
    const timer = setTimeout(() => {
      setIsFading(false);
    }, 300); // Duración de la transición
    return () => clearTimeout(timer);
  }, [isPlaying]);
  return (
    <div className="w-full h-10 bg-foreground rounded-md p-2 ">
      <div className="flex items-center">
        <div className="w-20 flex items-center h-full justify-evenly">
          {!isPlaying ? (
            <PlayCircle
              className={`stroke-primary cursor-pointer transition-opacity duration-1000 ease-in-out ${
                isFading ? "opacity-50 scale-0" : "opacity-100 scale-100"
              }`}
              onClick={() => {
                play();
                setIsFading(true);
              }}
            />
          ) : (
            <PauseCircle
              className={`stroke-primary cursor-pointer transition-opacity duration-1000 ease-in-out ${
                isFading ? "opacity-50 scale-0" : "opacity-100 scale-100"
              }`}
              onClick={() => {
                pause();
                setIsFading(true);
              }}
            />
          )}
          <VolumeInput volume={volume} />
        </div>
        {/* <div className="h-full overflow-hidden w-full">
          <p className="text-primary flex text-ellipsis whitespace-nowrap text-sm">
            Medieval Fantasy Tavern | D&D Fantasy Music and Ambience
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default AmbientSound;

const VolumeInput = ({ volume }: { volume: (value: number) => void }) => {
  // const inputRef = React.useRef<HTMLInputElement>(null);
  // const DELAY = 300;
  // const [showVolume, setShowVolume] = React.useState(false);

  // const longpress = useLongPress(
  //   (e) => handleVolume(e),
  //   () => handleVolume(),
  //   { delay: DELAY }
  // );

  // useEffect(() => {
  //   //on click outside hide volume input range
  //   const handleClick = (e: MouseEvent) => {
  //     if (!(e.target as HTMLElement).closest("input")) {
  //       setShowVolume(false);
  //     }
  //   };
  //   document.addEventListener("click", handleClick);
  //   return () => document.removeEventListener("click", handleClick);
  // });
  // return showVolume ? (
  //   <input
  //     ref={inputRef}
  //     type="range"
  //     min="0"
  //     max="1"
  //     step="0.01"
  //     onChange={(e) => volume(parseFloat(e.target.value))}
  //   />
  // ) : (
  //   <Volume className="stroke-primary" {...longpress} />
  // );

  const [isDragging, setIsDragging] = useState(false);
  const [volumeState, setVolumeState] = useState(1); // Volumen por defecto (1 = 100%)
  const volumeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    volume(volumeState); // Actualiza el volumen del audio
  }, [volumeState, volume]);

  const handleMouseMove = useCallback(
    (event) => {
      console.log(isDragging);
      if (volumeRef.current) {
        const rect = volumeRef.current.getBoundingClientRect();
        const x = event.clientX - rect.left; // Posición X del mouse en relación al contenedor
        const width = rect.width;
        const newVolume = Math.max(0, Math.min(1, x / width)); // Asegura que el volumen esté entre 0 y 1
        setVolumeState(newVolume);
      }
    },
    [isDragging]
  );
  const handleMouseUp = useCallback(() => {
    console.log("mouseup");
    setIsDragging(false);
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  }, [handleMouseMove]);

  const handleMouseDown = useCallback(() => {
    setIsDragging(true);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  }, [handleMouseMove, handleMouseUp]);
  return (
    <div>
      <button
        onMouseDown={() => handleMouseDown()}
        onMouseUp={() => handleMouseUp()}
        onTouchStart={() => handleMouseDown()}
        onTouchEnd={() => handleMouseUp()}
      >
        <Volume className="stroke-primary" />
      </button>

      {isDragging && (
        <div
          ref={volumeRef}
          className=" bg-gray-300 w-48 h-2 cursor-pointer relative mt-2"
        >
          <div
            className={"h-2 bg-blue-500 "}
            style={{
              width: `${volumeState * 100}%`,
            }}
          />
        </div>
      )}
    </div>
  );
};
