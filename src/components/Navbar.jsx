import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  
  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { name: "How It Works", path: "/how-it-works" },
    { name: "Communities", path: "/communities" },
    { name: "Success Stories", path: "/success-stories" },
    { name: "Pricing", path: "/membership" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5"
      style={{ background: "rgba(255,248,240,0.9)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(212,175,55,0.1)" }}>
      <Link to="/" className="flex items-center gap-2">
        <span className="text-2xl font-bold gold-text tracking-tight">Nikah</span>
        <span className="text-xs px-2 py-0.5 rounded-full text-[#D4AF37] border border-[#E8A9A9] ml-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>™</span>
      </Link>
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map(l => (
          <Link 
            key={l.name} 
            to={l.path} 
            className="nav-link text-sm transition-colors relative"
            style={{ 
              fontFamily: "'DM Sans', sans-serif",
              color: isActive(l.path) ? "#D4AF37" : "#5A5A5A"
            }}
          >
            {l.name}
            {isActive(l.path) && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#D4AF37]" />
            )}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-3">
        <Link to="/login" className="text-sm text-[#5A5A5A] hover:text-[#2D2D2D] transition-colors px-4 py-2 nav-link" style={{ fontFamily: "'DM Sans', sans-serif" }}>Sign In</Link>
        <Link to="/signup" className="btn-primary text-sm font-medium px-5 py-2.5 rounded-full text-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          <span>Join Free</span>
        </Link>
      </div>
    </nav>
  );
}