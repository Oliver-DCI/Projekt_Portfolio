import Header from "../components/Header";
import Hero from "../components/Hero";
import ProfileMeta from "../components/ProfileMeta";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* HEADER FIXIERT */}
      <div className="fixed top-0 left-0 w-full z-50 bg-gray-50">
        <Header />
      </div>

      {/* HERO-BEREICH FIXIERT + GRAUER HINTERGRUND */}
      <div className="fixed top-[65px] left-0 w-full z-40 bg-gray-50 h-[430px]">
        <div className="mx-38 relative">

          {/* Hero direkt unter dem Header */}
          <Hero />

          {/* ProfileMeta über dem Hero */}
          <div className="absolute -bottom-32 left-11">
            <ProfileMeta />
          </div>

        </div>
      </div>

      {/* MAIN – startet deutlich unter Hero + ProfileMeta */}
      <main className="mx-38 mt-[550px] mb-20">
        <Outlet />
      </main>

    </div>
  );
};

export default MainLayout;
