import { Link } from "react-router-dom";
import { useState } from "react";
import AboutModal from "./AboutModal";
import ContactModal from "./ContactModal";

const Header = () => {
  const [openAbout, setOpenAbout] = useState(false);
  const [openContact, setOpenContact] = useState(false);

  return (
    <>
      <header className="w-full bg-gray-50">
        <div className="max-w-8xl mx-auto flex items-center justify-between px-50 py-4">

          {/* Logo */}
          <Link
            to="/"
            className="flex flex-col text-2xl font-bold tracking-wide text-blue-950 hover:text-blue-700 transition-colors"
          >
            VISION_DESIGN
          </Link>

          {/* Navigation */}
          <nav className="flex gap-8 text-lg">
            <button
              onClick={() => setOpenAbout(true)}
              className="text-blue-950 hover:text-blue-700 transition-colors"
            >
              Über mich
            </button>

            <button
              onClick={() => setOpenContact(true)}
              className="text-blue-950 hover:text-blue-700  transition-colors"
            >
              Kontakt
            </button>
          </nav>

        </div>
      </header>

      {/* Modals */}
      <AboutModal isOpen={openAbout} onClose={() => setOpenAbout(false)} />
      <ContactModal isOpen={openContact} onClose={() => setOpenContact(false)} />
    </>
  );
};

export default Header;
