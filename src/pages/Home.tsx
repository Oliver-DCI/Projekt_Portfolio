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
    <div className="w-full py-10">
      <div className="flex flex-row gap-6">

        {/* Linke Spalte – bleibt fixiert */}
        <div
          className="
            flex-[0.9] 
            p-6 
            bg-blue-950
            rounded-md 
            shadow-xl shadow-blue-300/40 
            flex flex-col 
            gap-4 
            h-[380px] 
            overflow-hidden
            sticky 
            top-[120px]
            transform transition-all duration-300 
            hover:scale-[1.02]
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
                  transform transition-all duration-300
                  cursor-default
                "
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Rechte Spalte – scrollt normal */}
        <div className="flex-[3] flex flex-col gap-10">

          <div
            className="
              bg-blue-950 p-5 rounded-md shadow-xl shadow-blue-300/40 
              flex flex-col gap-4 
              transform transition-all duration-300 
              hover:scale-[1.02] hover:shadow-blue-400/60
            "
          >
            <h2 className="text-lg text-white font-semibold">Projekte suchen</h2>

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Projekte druchsuchen z.B nach React, TypeScript, UI..."
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
              <img
                src={`/${projekt.imgUrl}.jpg`}
                alt={projekt.title}
                className="w-40 h-40 rounded-md object-cover bg-slate-200"
              />

              <div className="flex flex-col justify-between w-full h-full py-1">

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
  );
};

export default Home;
