"use client";
import { useSound } from "@/hooks/useSound";
import { cx } from "class-variance-authority";
import React, { useEffect, useState } from "react";

type Props = {
  path: string;
  name: string;
};

const SoundButton = (props: Props) => {
  const [isLoading, setIsLoading] = useState(true); // Add loading state
  const audioElement = useSound(props.path); // Use audioElement directly

  useEffect(() => {
    (async () => {
      setIsLoading(false); // Set loading state to false after audio loads
    })();
  }, [audioElement]); // Only run when audioElement changes

  return (
    <>
      {isLoading ? ( // Display loading state while audio loads
        <div className="h-16 w-16 bg-gray-200 animate-pulse rounded-sm">
          Loading...
        </div>
      ) : (
        <div
          className={cx(`h-16 w-16 bg-gray-100 rounded-sm cursor-pointer`, {
            "bg-gray-400": audioElement?.paused, // Use audioElement
          })}
          onClick={() => audioElement?.play()} // Access methods directly
        >
          <img src="/imgs/d20.png" alt="d20" className="h-full w-full" />
        </div>
      )}
      <p>{JSON.stringify(audioElement?.paused)}</p>
    </>
  );
};

export default SoundButton;
