import { projekte } from "../data/data";

const Home = () => {
  return (
    <div className="w-full py-6">
      <div className="flex flex-row gap-6">

        {/* Linke Spalte */}
        <div className="flex-[0.9] p-6 bg-white rounded-md shadow-sm">
          olli spalten 1
        </div>

        {/* Rechte Spalte */}
        <div className="flex-[3] flex flex-col gap-6">

          {projekte.map((projekt) => (
            <div
              key={projekt.id}
              className="flex items-start p-2 gap-4 rounded-md shadow-xl shadow-blue-300/40 bg-white"
            >
              <img
                src={`/${projekt.imgUrl}.jpg`}
                alt={projekt.title}
                className="w-40 h-40 rounded-md object-cover bg-slate-200"
              />
              <div className="flex flex-col gap-3 w-full">
                <div>
                  <h2 className="text-base font-semibold pb-1">
                    {projekt.title}
                  </h2>
                  <p className="text-sm text-slate-600">
                    {projekt.description}
                  </p>
                </div>
                <div className="flex flex-row gap-2 mt-19">
                  <button className="border border-slate-300 text-black px-2 py-1 text-xs rounded-md hover:bg-gray-100 transition">
                    Gefällt mir
                  </button>
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
