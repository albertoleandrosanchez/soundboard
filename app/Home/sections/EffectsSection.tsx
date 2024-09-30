"use client";
import ButtonSound from "@/app/components/ButtonSound";
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
    </section>
  );
};

export default EffectsSection;
