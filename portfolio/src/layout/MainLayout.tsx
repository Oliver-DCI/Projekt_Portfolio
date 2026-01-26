import Header from "../components/Header";
import Hero from "../components/Hero";
import ProfileMeta from "../components/ProfileMeta";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="bg-gray-50 min-h-screen">

      <Header />

      <div className="mx-38">
        <div className="relative">

          {/* Hero */}
          <Hero />

          {/* ProfileMeta links über dem Hero */}
          <div className="absolute -bottom-37 left-11">
            <ProfileMeta />
          </div>

        </div>
      </div>

      <main className="mx-38 mt-42">
        <Outlet />
      </main>

    </div>
  );
};

export default MainLayout;
