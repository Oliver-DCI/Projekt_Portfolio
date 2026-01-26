const Home = () => {
  return (
    <div className="flex flex-row mx-45 gap-6">
      <div className="flex-1 p-6 border">
        olli spalten 1
      </div>

      <div className="flex-3 p-6 border border-slate-900 shadow-yellow-100">
        <div className="flex border border-slate-500 ">
          <div className="flex">
            <img src="/img/profile_face.jpg" alt="" className="rounded-md"/>
          </div>
        
          <div>
            <h2>{data.titel}</h2>
            <p>beschreibung</p>
          </div>

          <button className="mt-5 bg-blue-600 text-white px-2 py-1 text-lg rounded-md hover:bg-blue-700 transition">gefälllt mir</button>
          <button className="mt-5 bg-blue-600 text-white px-2 py-1 text-lg rounded-md hover:bg-blue-700 transition">Projekt zeigen</button>
        </div>  
      </div>  
        
        
    </div>
  );
};

export default Home;
