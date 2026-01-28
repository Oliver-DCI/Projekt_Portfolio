import { useState } from "react";
import { projekte } from "../data/data";

const skills = [
  "React",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Next.js",
  "HTML",
  "CSS",
  "Tailwind",
  "Git",
  "Responsive Design",
];

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
    <div className="w-full h-full py-6">
      <div className="flex flex-row gap-6 h-full">

        {/* Linke Spalte – feste Höhe */}
        <div
          className="
            flex-[0.9] 
            p-6 
            bg-blue-950
            rounded-md 
            shadow-md shadow-blue-300/30
            flex flex-col 
            gap-4 
            h-[380px]
            overflow-hidden
            hover:shadow-lg hover:shadow-blue-400/60
          "
        >
          <h2 className="text-lg text-slate-50 font-semibold">Skills</h2>

          <div className="grid grid-cols-2 gap-3 mt-1">
            {skills.map((skill) => (
              <div
                key={skill}
                className="
                  bg-white border border-blue-200 
                  rounded-md p-3 text-center text-sm font-medium
                  shadow-sm
                  cursor-default
                "
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Rechte Spalte */}
        <div className="flex-[3] h-full flex flex-col gap-6 pr-2">

          {/* Inputfeld */}
          <div
            className="
              bg-blue-950 p-5 rounded-md shadow-md shadow-blue-300/30
              flex flex-col gap-4 
              hover:shadow-lg hover:shadow-blue-400/60
            "
          >
            <h2 className="text-lg text-white font-semibold">Projekte suchen</h2>

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Projekte durchsuchen z.B. nach React, TypeScript, UI..."
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

          {/* Karten – Scrollcontainer */}
          <div className="flex-1 overflow-y-auto scrollbar-none flex flex-col gap-6">
            {filteredProjects.map((projekt) => (
              <div
                key={projekt.id}
                className="
                  flex items-start gap-4 rounded-md 
                  shadow-md shadow-blue-300/30 bg-white
                  hover:shadow-lg hover:shadow-blue-400/60
                  p-1
                "
              >
                <img
                  src={`/${projekt.imgUrl}.jpg`}
                  alt={projekt.title}
                  className="w-40 h-40 rounded-md object-cover bg-slate-200"
                />

                {/* Inhalt + Button ganz unten */}
                <div className="flex flex-col justify-between w-full h-full">

                  <div>
                    <h2 className="text-base font-semibold pb-1">
                      {projekt.title}
                    </h2>
                    <p className="text-sm text-slate-600 leading-snug">
                      {projekt.description}
                    </p>
                  </div>

                  <div className="flex flex-row gap-2 mt-3">
                    <button className="bg-blue-950 border border-slate-300 text-white px-3 py-2 text-xs rounded-md hover:bg-blue-700 transition">
                      Projekt anzeigen
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
