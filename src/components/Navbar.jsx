import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { name: "How It Works", path: "/how-it-works" },
    { name: "Communities", path: "/communities" },
    { name: "Success Stories", path: "/success-stories" },
    { name: "Pricing", path: "/membership" },
  ];

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-8 py-5"
        style={{
          background: "rgba(255,248,240,0.95)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(212,175,55,0.1)",
        }}
      >
        <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
          <span className="text-2xl font-bold gold-text tracking-tight">
            Nikah
          </span>
          <span
            className="text-xs px-2 py-0.5 rounded-full text-[#D4AF37] border border-[#E8A9A9] ml-1"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            ™
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.name}
              to={l.path}
              className="nav-link text-sm transition-colors relative"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                color: isActive(l.path) ? "#D4AF37" : "#5A5A5A",
              }}
            >
              {l.name}
              {isActive(l.path) && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#D4AF37]" />
              )}
            </Link>
          ))}
        </div>

        {/* Desktop Buttons + Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/login"
              className="text-sm text-[#5A5A5A] hover:text-[#2D2D2D] transition-colors px-4 py-2 nav-link"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="btn-primary text-sm font-medium px-5 py-2.5 rounded-full text-white"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <span>Join Free</span>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg focus:outline-none"
            aria-label="Toggle menu"
            style={{ gap: "5px" }}
          >
            <span
              className="block w-6 h-0.5 bg-[#5A5A5A] transition-all duration-300"
              style={{
                transform: isOpen
                  ? "rotate(45deg) translate(4px, 4px)"
                  : "none",
              }}
            />
            <span
              className="block w-6 h-0.5 bg-[#5A5A5A] transition-all duration-300"
              style={{ opacity: isOpen ? 0 : 1 }}
            />
            <span
              className="block w-6 h-0.5 bg-[#5A5A5A] transition-all duration-300"
              style={{
                transform: isOpen
                  ? "rotate(-45deg) translate(4px, -4px)"
                  : "none",
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "rgba(45,45,45,0.3)" }}
        onClick={closeMenu}
      />

      {/* Mobile Menu Dropdown */}
      <div
        className={`fixed top-[76px] left-0 right-0 z-40 md:hidden transition-all duration-300 ease-out ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
        style={{
          background: "rgba(255,248,240,0.98)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(212,175,55,0.15)",
        }}
      >
        <div className="flex flex-col px-6 py-6 gap-5">
          {navLinks.map((l) => (
            <Link
              key={l.name}
              to={l.path}
              onClick={closeMenu}
              className="text-base transition-colors relative w-fit"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                color: isActive(l.path) ? "#D4AF37" : "#5A5A5A",
              }}
            >
              {l.name}
              {isActive(l.path) && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#D4AF37]" />
              )}
            </Link>
          ))}
          <div className="flex flex-col gap-3 pt-3 border-t" style={{ borderColor: "rgba(212,175,55,0.15)" }}>
            <Link
              to="/login"
              onClick={closeMenu}
              className="text-sm text-[#5A5A5A] hover:text-[#2D2D2D] transition-colors py-2"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              onClick={closeMenu}
              className="btn-primary text-sm font-medium px-5 py-2.5 rounded-full text-white text-center"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <span>Join Free</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
