import React from "react";
import useSound from "../hooks/useSound";

type Props = {
  path: string;
  name: string;
};

const ButtonSound = (props: Props) => {
  const { play, isPlaying, currentTime } = useSound(props.path);
  return (
    <>
      <button onClick={() => play()}> play </button>;
      <p>Current time: {JSON.stringify(isPlaying)}</p>
    </>
  );
};

export default ButtonSound;
