"use client";
import AmbientSound from "@/app/components/AmbientSound";
import CategoryTitle from "@/app/components/CategoryTitle";
import React from "react";

type Props = {};

const AmbientSection = (props: Props) => {
  // Tendra corriendo una lista de sonidos ambientales al que se le ira añadiendo mas o quitando
  // Se podra pausar o reproducir, y se podra cambiar el volumen

  const [ambientSounds, setAmbientSounds] = React.useState([]);

  return (
    <section>
      <CategoryTitle className="text-3xl">Ambientales</CategoryTitle>
      <AmbientSound path={"rain.mp3"} />
    </section>
  );
};

export default AmbientSection;
