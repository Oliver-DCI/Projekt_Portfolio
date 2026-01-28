import Header from "../components/Header";
import Hero from "../components/Hero";
import ProfileMeta from "../components/ProfileMeta";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="bg-gray-50 h-full">

      {/* HEADER FIXIERT */}
      <div className="fixed top-0 left-0 w-full z-50 bg-gray-50">
        <Header />
      </div>

      {/* HERO-BEREICH FIXIERT */}
      <div className="fixed top-[65px] left-0 w-full z-40 bg-gray-50 h-[480px]">
        <div className="mx-38 relative">
          <Hero />
          <div className="absolute -bottom-32 left-11">
            <ProfileMeta />
          </div>
        </div>
      </div>

      {/* MAIN – fester Bereich unter Hero, scrollt selbst NICHT */}
      <main
        className="
          mx-38 
          mt-[550px] 
          h-[calc(100vh-550px)]
          overflow-hidden
        "
      >
        <Outlet />
      </main>

    </div>
  );
};

export default MainLayout;
