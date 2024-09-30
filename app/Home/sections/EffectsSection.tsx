"use client";
import CategoryTitle from "@/app/components/CategoryTitle";
import SoundButton from "@/app/components/SoundButton";
import { dbxListFiles } from "@/dropbox/service";
import React, { useEffect } from "react";

type Props = {};

const EffectsSection = (props: Props) => {
  useEffect(() => {
    (async () => {
      const files = await dbxListFiles();
      console.log(files);
    })();
  }, []);
  return (
    <section>
      <CategoryTitle className="text-3xl">Sonidos</CategoryTitle>
      <div className="p-4 h-44 bg-white text-black flex flex-row flex-wrap">
        <SoundButton
          path="/Sounds/otros/LA noire Correct jingle.mp3"
          name="locking door"
        />
      </div>
    </section>
  );
};

export default EffectsSection;
