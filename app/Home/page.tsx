import type { NextPage } from "next";
import EffectsSection from "./sections/EffectsSection";
import AmbientSection from "./sections/AmbientSection";

const Home: NextPage = () => {
  return (
    <div>
      <AmbientSection />

      {/* seccion de musica de combate */}

      <EffectsSection />
    </div>
  );
};

export default Home;
