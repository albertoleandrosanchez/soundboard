import { dbxTemporaryLink } from "@/dropbox/service";
import { useState, useEffect, useRef } from "react";

const useSound = (path: string) => {
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef(new Audio());

  useEffect(() => {
    const fetchAudioUrl = async () => {
      try {
        const link = await dbxTemporaryLink(path); // Asegúrate de que esta función está definida
        if (link) setAudioUrl(link.result.link);
      } catch (error) {
        console.error("Error fetching audio URL:", error);
      }
    };

    fetchAudioUrl();

    return () => {
      audioRef.current.pause();
      audioRef.current.src = "";
    };
  }, [path]);

  useEffect(() => {
    if (audioUrl) {
      audioRef.current.src = audioUrl;

      const updateCurrentTime = () => {
        if (audioRef.current.currentTime === audioRef.current.duration) {
          setIsPlaying(false);
        }
        setCurrentTime(audioRef.current.currentTime);
      };

      audioRef.current.addEventListener("timeupdate", updateCurrentTime);

      return () => {
        audioRef.current.removeEventListener("timeupdate", updateCurrentTime);
      };
    }
  }, [audioUrl]);

  const play = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const pause = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  return { play, pause, currentTime, isPlaying };
};

export default useSound;
