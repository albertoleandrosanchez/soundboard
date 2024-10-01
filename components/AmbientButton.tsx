"use client";
import { PauseCircle, PlayCircle, Volume } from "lucide-react";
import React, { useCallback, useEffect, useRef, useState } from "react";
import useAmbient from "../hooks/useAmbient";

type Props = {
  path: string;
  name: string;
};

const AmbientSound = (props: Props) => {
  const { pause, play, isPlaying, volume } = useAmbient(props.path);

  return (
    <div className="w-full h-10 bg-foreground rounded-md p-2 ">
      <div className="flex items-center">
        <div className="w-20 flex items-center h-full justify-evenly">
          <ControlsButton play={play} pause={pause} isPlaying={isPlaying} />
          <VolumeInput volume={volume} />
        </div>
        <div className="h-full overflow-hidden w-full">
          <p className="text-primary flex text-ellipsis whitespace-nowrap text-sm">
            {props.name.split(".")[0]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AmbientSound;

const ControlsButton = ({
  play,
  pause,
  isPlaying,
}: {
  play: () => void;
  pause: () => void;
  isPlaying: boolean;
}) => {
  return (
    <div className="w-8 flex items-center h-full justify-evenly">
      {!isPlaying ? (
        <PlayCircle
          className="stroke-primary cursor-pointer"
          onClick={() => play()}
        />
      ) : (
        <PauseCircle
          className="stroke-primary cursor-pointer"
          onClick={() => pause()}
        />
      )}
    </div>
  );
};

const VolumeInput = ({ volume }: { volume: (value: number) => void }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [volumeState, setVolumeState] = useState(1); // Volumen por defecto (1 = 100%)
  const volumeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    volume(volumeState); // Actualiza el volumen del audio
  }, [volumeState, volume]);

  const handleMouseMove = useCallback(
    (event: { clientX: number }) => {
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
    <div
      className="relative
      w-8 flex items-center h-full justify-evenly
    "
    >
      <button
        onMouseDown={() => handleMouseDown()}
        // onMouseUp={() => handleMouseUp()}
        onTouchStart={() => handleMouseDown()}
        // onTouchEnd={() => handleMouseUp()}
      >
        <Volume className="stroke-primary" />
      </button>

      {isDragging && (
        <div
          ref={volumeRef}
          className=" bg-gray-300 w-48 h-2 cursor-pointer mt-2 absolute -bottom-3 left-0"
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
