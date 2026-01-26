const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10">

      <div className="flex flex-row mx-38 gap-6">

        {/* Linke Spalte (grau) */}
        <div className="flex-1 p-6 bg-gray-100 rounded-md shadow-sm">
          olli spalten 1
        </div>

        {/* Rechte Spalte (grau) */}
        <div className="flex-3 bg-gray-100 rounded-md shadow-sm">

          {/* Innere weiße Karte */}
          <div className="flex items-start p-2 gap-4 rounded-md shadow-xl shadow-blue-300/40 bg-white">

            {/* Bild */}
            <img
              src="/img/profile_face.jpg"
              alt="Profil"
              className="w-42 h-42 rounded-md object-contain bg-slate-200"
            />

            {/* Text + Buttons */}
            <div className="flex flex-col gap-3 w-full">

              {/* Titel + Beschreibung */}
              <div>
                <h2 className="text-lg font-semibold pb-3">titel</h2>
                <p className="text-sm text-slate-600">
                  beschreibung Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ut laborum voluptatibus veritatis debitis...beschreibung Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ut laborum voluptatibus veritatis debitis...beschreibung Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ut laborum voluptatibus veritatis debitis...
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-row gap-2 mt-7">
                <button className="border border-slate-300 text-black px-2 py-1 text-xs rounded-md hover:bg-gray-100 transition">
                  Gefällt mir
                </button>

                <button className="border border-slate-300 text-black px-2 py-1 text-xs rounded-md hover:bg-gray-100 transition">
                  Projekt anzeigen
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Home;
