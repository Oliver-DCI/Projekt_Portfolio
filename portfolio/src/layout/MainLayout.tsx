import Header from "../components/Header";
import Hero from "../components/Hero";
import ProfileMeta from "../components/ProfileMeta";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="min-h-screen w-full bg-gray-50">

      {/* HEADER FIXIERT, HINTERGRUND TRANSPARENT (erbt bg-gray-50) */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>

      {/* HERO + PROFILEMETA FIXIERT, KEIN EIGENER HINTERGRUND */}
      <div className="fixed top-[65px] left-0 w-full z-40">
        <div className="mx-38 relative">

          {/* Hero direkt unter dem Header */}
          <Hero />

          {/* ProfileMeta über dem Hero */}
          <div className="absolute -bottom-37 left-11">
            <ProfileMeta />
          </div>

        </div>
      </div>

      {/* MAIN – startet deutlich unter Hero + ProfileMeta, Abstand bleibt mt-[600px] */}
      <main className="mx-38 mt-[600px] mb-20">
        <Outlet />
      </main>

    </div>
  );
};

export default MainLayout;
