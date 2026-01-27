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
            className="flex flex-col text-2xl font-bold tracking-wide hover:text-blue-600 transition-colors"
          >
            VISION_DESIGN
          </Link>

          {/* Navigation */}
          <nav className="flex gap-8 text-lg">
            <button
              onClick={() => setOpenAbout(true)}
              className="hover:text-blue-600 transition-colors"
            >
              About
            </button>

            <button
              onClick={() => setOpenContact(true)}
              className="hover:text-blue-600 transition-colors"
            >
              Contact
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
