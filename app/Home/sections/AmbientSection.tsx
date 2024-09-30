"use client";
import CategoryTitle from "@/app/components/CategoryTitle";
import { dbxListFiles } from "@/dropbox/service";
import React, { useEffect } from "react";
import { files } from "dropbox";
import AmbientContainer from "@/app/components/AmbientContainer";

const BASE_AMBIENT_PATH = "/Ambient";

const AmbientSection = () => {
  // Tendra corriendo una lista de sonidos ambientales al que se le ira añadiendo mas o quitando
  // Se podra pausar o reproducir, y se podra cambiar el volumen

  const [ambientSounds, setAmbientSounds] = React.useState<
    | (
        | files.FileMetadataReference
        | files.FolderMetadataReference
        | files.DeletedMetadataReference
      )[]
    | undefined
  >(undefined);
  useEffect(() => {
    (async () => {
      const res = await dbxListFiles(BASE_AMBIENT_PATH);
      if (!res) return;
      const { result } = res;
      const mFiles = result?.entries.filter((file) => file[".tag"] === "file");
      setAmbientSounds(mFiles);
    })();
  }, []);
  return (
    <section>
      <CategoryTitle className="text-3xl">Ambientales</CategoryTitle>
      <AmbientContainer sounds={ambientSounds} />
    </section>
  );
};

export default AmbientSection;
