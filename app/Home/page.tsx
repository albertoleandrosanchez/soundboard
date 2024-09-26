import type { NextPage } from "next";

const categories = [
  {
    id: "1",
    name: "Ambient",
    img: "https://images.unsplash.com/photo-1471259521144-ce142aba2f9c?q=80&w=1434&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "2",
    name: "Fantasy",
    img: "https://images.unsplash.com/photo-1471259521144-ce142aba2f9c?q=80&w=1434&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "3",
    name: "Sci-fi",
    img: "https://images.unsplash.com/photo-1471259521144-ce142aba2f9c?q=80&w=1434&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "4",
    name: "Horror",
    img: "https://images.unsplash.com/photo-1471259521144-ce142aba2f9c?q=80&w=1434&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Home: NextPage = () => {
  return (
    <div className="flex flex-col w-full">
      <h1 className="text-2xl font-bold">Categorias</h1>
      <div className="flex flex-wrap justify-center justify-items-start">
        {categories.map((category) => (
          <div key={category.id} className="p-4">
            <div
              className="w-32 h-32 bg-cover bg-center rounded-lg"
              style={{ backgroundImage: `url(${category.img})` }}
            >
              <h2 className="text-white w-full px-2 bg-slate-500/75 rounded-t-lg rounded-r-lg">
                {category.name}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
