import type { NextPage } from "next";
import { SoundCard } from "./components/SoundCard";
const Home: NextPage = () => {
  return (
    <main>
      <section className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-6xl font-bold">Welcome to the Soundboard</h1>
        <p className="text-2xl mt-4">Listen to some sounds</p>
      </section>
      <div className="flex flex-row">
        {/* categorias de sonidos */}
        <nav className="w-72">
          <ul className="flex justify-evenly flex-col">
            <li className="w-full cursor-pointer bg-stone-800 hover:bg-stone-700 text-white font-bold p-2 ">
              All
            </li>
            <li className="w-full cursor-pointer bg-stone-800 hover:bg-stone-700 text-white font-bold p-2 ">
              Nature
            </li>
            <li className=" w-full cursor-pointer bg-stone-800 hover:bg-stone-700 text-white font-bold p-2 ">
              Sci-fi
            </li>
            <li className="w-full cursor-pointer bg-stone-800 hover:bg-stone-700 text-white font-bold p-2 ">
              Fantasy
            </li>
            <li className="w-full cursor-pointer bg-stone-800 hover:bg-stone-700 text-white font-bold p-2 ">
              Horror
            </li>
          </ul>
        </nav>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  ">
          <SoundCard />
          <SoundCard />
          <SoundCard />
          <SoundCard />
          <SoundCard />
          <SoundCard />
        </section>{" "}
      </div>
    </main>
  );
};

export default Home;
