import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full border-b border-gray-300">
      <div className="max-w-8xl mx-auto flex items-center justify-between px-45 py-4">
        
        {/* Left: Logo */}
        <Link to="/" className="flex flex-col text-2xl font-bold tracking-wide hover:text-blue-600 transition-colors">
        <span>VISION_DESIGN</span>
        <span className="text-sm font-normal">Web Developer &amp; Web Designer</span>
        </Link>


        {/* Right: Navigation */}
        <nav className="flex gap-8 text-lg">
          <Link to="/about" className="hover:text-blue-600 transition-colors">
            About
          </Link>
          <Link to="/contact" className="hover:text-blue-600 transition-colors">
            Contact
          </Link>
        </nav>

      </div>
    </header>
  );
};

export default Header;
