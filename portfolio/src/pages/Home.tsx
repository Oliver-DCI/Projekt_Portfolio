import { useState } from "react";
import { projekte } from "../data/data";

const Home = () => {
  const [search, setSearch] = useState("");

  const term = search.toLowerCase();

  const filteredProjects = projekte
    .filter((projekt) => {
      if (!term) return true;
      return (
        projekt.title.toLowerCase().includes(term) ||
        projekt.description.toLowerCase().includes(term)
      );
    })
    .sort((a, b) => {
      if (!term) return 0;

      const aMatch =
        a.title.toLowerCase().includes(term) ||
        a.description.toLowerCase().includes(term);

      const bMatch =
        b.title.toLowerCase().includes(term) ||
        b.description.toLowerCase().includes(term);

      return Number(bMatch) - Number(aMatch);
    });

  return (
    <div className="w-full py-10">
      <div className="flex flex-row gap-6">

        {/* Linke Spalte */}
        <div className="flex-[0.9] p-6 bg-white rounded-md shadow-sm">
          olli spalten 1
        </div>

        {/* Rechte Spalte */}
        <div className="flex-[3] flex flex-col gap-8">

          {/* Suchfeld */}
          <div
            className="
              bg-white p-5 rounded-md shadow-xl shadow-blue-300/40 
              flex flex-col gap-4 
              transform transition-all duration-300 
              hover:scale-[1.02] hover:shadow-blue-400/60
            "
          >
            <h2 className="text-lg font-semibold">Projekte suchen</h2>

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="🔍  Suche nach React, TypeScript, UI..."
              className="
                border border-blue-300 
                rounded-md 
                px-3 py-2 
                bg-white
                text-slate-700
                placeholder:text-blue-400
                focus:outline-none 
                focus:ring-2 
                focus:ring-blue-500 
                focus:border-blue-500
                transition
              "
            />
          </div>

          {/* Projektkarten */}
          {filteredProjects.map((projekt) => (
            <div
              key={projekt.id}
              className="
                flex items-start p-2 gap-4 rounded-md 
                shadow-xl shadow-blue-300/40 bg-white
                transform transition-all duration-300
                hover:scale-[1.02] hover:shadow-blue-400/60
              "
            >
              {/* Bild */}
              <img
                src={`/${projekt.imgUrl}.jpg`}
                alt={projekt.title}
                className="w-40 h-40 rounded-md object-cover bg-slate-200"
              />

              {/* Rechte Seite */}
              <div className="flex flex-col justify-between w-full h-full py-1">

                {/* Titel + Beschreibung */}
                <div>
                  <h2 className="text-base font-semibold pb-1">
                    {projekt.title}
                  </h2>
                  <p className="text-sm text-slate-600 leading-snug">
                    {projekt.description}
                  </p>
                </div>

                {/* Button fix unten */}
                <div className="flex flex-row gap-2 mt-3">
                  <button className="border border-slate-300 text-black px-2 py-1 text-xs rounded-md hover:bg-gray-100 transition">
                    Projekt anzeigen
                  </button>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Home;
