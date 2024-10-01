"use client";
import CategoryTitle from "@/components/CategoryTitle";
import SoundContainer from "@/components/SoundContainer";
import { dbxListFiles } from "@/dropbox/service";
import { files } from "dropbox";
import React, { useEffect } from "react";
const BASE_SOUND_PATH = "/Sounds";

const EffectsSection = () => {
  const [files, setFiles] = React.useState<
    | (
        | files.FileMetadataReference
        | files.FolderMetadataReference
        | files.DeletedMetadataReference
      )[]
    | undefined
  >(undefined);

  useEffect(() => {
    (async () => {
      const res = await dbxListFiles(BASE_SOUND_PATH);
      if (!res) return;
      const { result } = res;
      const mFiles = result?.entries.filter((file) => file[".tag"] === "file");
      setFiles(mFiles);
    })();
  }, []);

  return (
    <section>
      <CategoryTitle className="text-3xl">Sonidos</CategoryTitle>
      <SoundContainer sounds={files} />
    </section>
  );
};

export default EffectsSection;
