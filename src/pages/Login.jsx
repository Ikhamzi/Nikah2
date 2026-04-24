import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire up auth logic
    console.log("Login:", { email, password });
  };

  return (
    <div className="min-h-screen flex">
      {/* ── LEFT IMAGE PANEL ── */}
      <div
        className="hidden lg:flex w-1/2 relative items-center justify-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, #2D2D2D 0%, #1a1a1a 100%)" }}
      >
        <img
          src="/src/assets/hero.png"
          alt="Couple"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/30 via-transparent to-[#E8A9A9]/20" />
        <div className="relative z-10 text-center px-12 max-w-lg">
          <h2
            className="text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Welcome Back
          </h2>
          <p
            className="text-white/70 text-lg leading-relaxed"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Sign in to continue your journey toward finding a meaningful, lifelong connection.
          </p>
        </div>
      </div>

      {/* ── RIGHT FORM PANEL ── */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12 bg-[#FFF8F0]">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="text-center mb-10">
            <Link to="/" className="inline-flex items-center gap-2">
              <span
                className="text-3xl font-bold tracking-tight"
                style={{
                  background: "linear-gradient(135deg, #D4AF37, #E8A9A9, #D4AF37)",
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontFamily: "'Playfair Display', Georgia, serif",
                }}
              >
                Nikah
              </span>
              <span
                className="text-xs px-2 py-0.5 rounded-full text-[#D4AF37] border border-[#E8A9A9]"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                ™
              </span>
            </Link>
            <p
              className="text-[#888] text-sm mt-2"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              India's Most Trusted Matchmaking Platform
            </p>
          </div>

          {/* Card */}
          <div
            className="rounded-3xl p-8 shadow-xl shadow-black/5"
            style={{
              background: "rgba(255,255,255,0.7)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(212,175,55,0.15)",
            }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label
                  className="block text-xs font-medium text-[#666] mb-1.5 tracking-wide uppercase"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/60 border border-[#EADBC8] text-[#2D2D2D] placeholder-[#aaa] text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                />
              </div>

              <div>
                <label
                  className="block text-xs font-medium text-[#666] mb-1.5 tracking-wide uppercase"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Password
                </label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 rounded-xl bg-white/60 border border-[#EADBC8] text-[#2D2D2D] placeholder-[#aaa] text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                />
              </div>

              <div className="flex items-center justify-end">
                <Link
                  to="#"
                  className="text-xs text-[#D4AF37] hover:text-[#E8A9A9] transition-colors"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Forgot Password?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full text-white font-semibold text-sm shadow-lg shadow-[#D4AF37]/25 transition-all hover:shadow-xl hover:shadow-[#D4AF37]/30 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  background: "linear-gradient(135deg, #D4AF37 0%, #E8A9A9 100%)",
                }}
              >
                Sign In
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-4 my-6">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#EADBC8] to-transparent" />
              <span
                className="text-xs text-[#aaa] uppercase tracking-widest"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                or
              </span>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#EADBC8] to-transparent" />
            </div>

            {/* Google Auth */}
            <button
              type="button"
              className="w-full py-3.5 rounded-full border border-[#EADBC8] bg-white/60 text-[#2D2D2D] font-medium text-sm flex items-center justify-center gap-3 hover:bg-white hover:border-[#D4AF37]/40 transition-all active:scale-[0.98]"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Continue with Google
            </button>
          </div>

          {/* Footer link */}
          <p
            className="text-center text-sm text-[#888] mt-8"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-[#D4AF37] font-medium hover:text-[#E8A9A9] transition-colors"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

