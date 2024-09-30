import { useEffect, useRef } from "react";
import { getTemporaryLink } from "../dropbox/service/index";

export const useSound = (path: string) => {
  const audio = useRef<HTMLAudioElement | null>(null);

  const loadSound = async (path: string) => {
    const file = await getTemporaryLink(path);
    audio.current = new Audio(file?.result.link);
    return audio.current;
  };

  useEffect(() => {
    (async () => {
      await loadSound(path);
    })();
  }, [path]);

  return audio.current; // Return audioElement directly
};
