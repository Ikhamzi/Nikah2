import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const faqs = [
  {
    q: "What makes Nikah different from other matchmaking platforms?",
    a: "Nikah redefines the matrimonial journey with over 60 lakh verified success stories, AI-driven compatibility matching, and a curated pool of genuine profiles. Our focus on trust, safety, and deep personalisation means every suggestion you receive is thoughtfully aligned with your values, lifestyle, and aspirations — not just surface-level criteria.",
  },
  {
    q: "How does Nikah ensure profile authenticity?",
    a: "Every profile on Nikah goes through a rigorous multi-step verification process including document checks, phone verification, and optional video KYC. Our Trust Badge program highlights thoroughly verified members, giving you the confidence to connect without second-guessing.",
  },
  {
    q: "What is the difference between a free and a premium account?",
    a: "A free account lets you create your profile, browse matches, and receive compatibility suggestions. Premium membership unlocks unlimited messaging, advanced filters, read receipts, priority listing in search results, curated daily matches by our relationship experts, and our industry-first 30-day happiness guarantee.",
  },
  {
    q: "Can I find matches from a specific community or region?",
    a: "Absolutely. Nikah supports highly granular search across 200+ communities, 50+ mother tongues, and every major city and region across India and the Indian diaspora worldwide. Our cultural compatibility engine ensures that your roots and traditions are respected in every match suggestion.",
  },
  {
    q: "Is my personal data safe with Nikah?",
    a: "We treat your data with the same care we expect in a lifelong relationship. Nikah is fully DPDP-compliant and uses end-to-end encryption for all communications. You have complete control over what you share, who sees your profile, and how your data is used — always.",
  },
];

const stories = [
  {
    names: "Arjun & Meera",
    location: "Hyderabad × Chennai",
    quote: "Three weeks after signing up, we had our first video call. Six months later, we were engaged. Nikah didn't just find us a match — it found us a best friend.",
    bg: "from-rose-900 to-amber-800",
    emoji: "🌸",
    year: "2024",
  },
  {
    names: "Kabir & Nisha",
    location: "Pune × London",
    quote: "I was skeptical about online matrimony. But the depth of the compatibility score made me pause. Every single thing it flagged was exactly how Nisha turned out to be.",
    bg: "from-indigo-900 to-violet-800",
    emoji: "✨",
    year: "2023",
  },
  {
    names: "Vikram & Priya",
    location: "Bengaluru × Mumbai",
    quote: "The Trust Badge told me Priya was who she said she was. That small thing gave me the courage to take the next step. We got married last November.",
    bg: "from-emerald-900 to-teal-800",
    emoji: "💫",
    year: "2024",
  },
  {
    names: "Rohit & Anjali",
    location: "Delhi × Toronto",
    quote: "We both swiped past what seemed too perfect on paper. Nikah kept nudging us back to each other. Turns out, the algorithm knew something we didn't.",
    bg: "from-orange-900 to-red-900",
    emoji: "🔥",
    year: "2023",
  },
];

const features = [
  {
    icon: "⚡",
    title: "AI Compatibility Engine",
    desc: "Our proprietary model analyses 120+ compatibility dimensions — from career rhythms to conflict styles — to surface matches that genuinely align with your life.",
  },
  {
    icon: "🛡️",
    title: "Trust Badge Verification",
    desc: "Multi-layer profile authentication including document checks and optional video KYC. Trust Badge members receive 45% more genuine connection requests.",
  },
  {
    icon: "💎",
    title: "Happiness Guarantee",
    desc: "Find a meaningful connection within 30 days of your Premium membership, or we refund every rupee. We're that confident in what we've built.",
  },
  {
    icon: "🎯",
    title: "Curated Daily Picks",
    desc: "Each morning, our relationship experts personally review AI shortlists and hand-pick 3–5 profiles most likely to spark something real for you.",
  },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState("India");
  const scrollRef = useRef(null);

  // Hardcoded online people by country
  const onlinePeopleByCountry = {
    India: [
      { name: "Priya S.", age: 28, city: "Mumbai", image: "👩" },
      { name: "Anjali M.", age: 26, city: "Delhi", image: "👩" },
      { name: "Neha K.", age: 29, city: "Bangalore", image: "👩" },
      { name: "Divya R.", age: 27, city: "Hyderabad", image: "👩" },
      { name: "Swati P.", age: 25, city: "Pune", image: "👩" },
    ],
    USA: [
      { name: "Sarah M.", age: 30, city: "New York", image: "👩" },
      { name: "Jessica L.", age: 28, city: "Los Angeles", image: "👩" },
      { name: "Emily C.", age: 27, city: "Chicago", image: "👩" },
      { name: "Rachel H.", age: 29, city: "Houston", image: "👩" },
      { name: "Michelle D.", age: 26, city: "Phoenix", image: "👩" },
    ],
    UK: [
      { name: "Emma W.", age: 29, city: "London", image: "👩" },
      { name: "Sophie B.", age: 27, city: "Manchester", image: "👩" },
      { name: "Charlotte K.", age: 28, city: "Birmingham", image: "👩" },
      { name: "Olivia T.", age: 30, city: "Bristol", image: "👩" },
      { name: "Lucy J.", age: 26, city: "Edinburgh", image: "👩" },
    ],
    Canada: [
      { name: "Jennifer H.", age: 28, city: "Toronto", image: "👩" },
      { name: "Amanda L.", age: 27, city: "Vancouver", image: "👩" },
      { name: "Nicole R.", age: 29, city: "Montreal", image: "👩" },
      { name: "Laura M.", age: 26, city: "Calgary", image: "👩" },
      { name: "Katie S.", age: 28, city: "Ottawa", image: "👩" },
    ],
    Australia: [
      { name: "Melissa G.", age: 29, city: "Sydney", image: "👩" },
      { name: "Rebecca P.", age: 27, city: "Melbourne", image: "👩" },
      { name: "Jessica N.", age: 28, city: "Brisbane", image: "👩" },
      { name: "Lauren T.", age: 26, city: "Perth", image: "👩" },
      { name: "Samantha W.", age: 30, city: "Adelaide", image: "👩" },
    ],
    UAE: [
      { name: "Fatima A.", age: 27, city: "Dubai", image: "👩" },
      { name: "Aisha M.", age: 28, city: "Abu Dhabi", image: "👩" },
      { name: "Layla S.", age: 26, city: "Sharjah", image: "👩" },
      { name: "Noor K.", age: 29, city: "Ajman", image: "👩" },
      { name: "Hana R.", age: 25, city: "Fujairah", image: "👩" },
    ],
    Singapore: [
      { name: "Mei L.", age: 28, city: "Singapore", image: "👩" },
      { name: "Chen W.", age: 27, city: "Central", image: "👩" },
      { name: "Lin Y.", age: 29, city: "East", image: "👩" },
      { name: "Wei H.", age: 26, city: "North", image: "👩" },
      { name: "Hui X.", age: 28, city: "West", image: "👩" },
    ],
    Malaysia: [
      { name: "Nur A.", age: 27, city: "Kuala Lumpur", image: "👩" },
      { name: "Aisyah M.", age: 28, city: "Selangor", image: "👩" },
      { name: "Zainab R.", age: 26, city: "Penang", image: "👩" },
      { name: "Siti K.", age: 29, city: "Johor", image: "👩" },
      { name: "Nadia T.", age: 25, city: "Perak", image: "👩" },
    ],
    "New Zealand": [
      { name: "Sophie A.", age: 28, city: "Auckland", image: "👩" },
      { name: "Hannah K.", age: 27, city: "Wellington", image: "👩" },
      { name: "Emma J.", age: 29, city: "Christchurch", image: "👩" },
      { name: "Grace M.", age: 26, city: "Hamilton", image: "👩" },
      { name: "Lily B.", age: 28, city: "Tauranga", image: "👩" },
    ],
    Germany: [
      { name: "Anna S.", age: 29, city: "Berlin", image: "👩" },
      { name: "Julia M.", age: 27, city: "Munich", image: "👩" },
      { name: "Sophia K.", age: 28, city: "Frankfurt", image: "👩" },
      { name: "Mia H.", age: 26, city: "Hamburg", image: "👩" },
      { name: "Lena F.", age: 30, city: "Cologne", image: "👩" },
    ],
  };

  const countries = Object.keys(onlinePeopleByCountry);

  const scrollStories = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 340, behavior: "smooth" });
    }
  };

  return (
    <div
      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
      className="min-h-screen bg-[#FFF8F0] text-[#2D2D2D] overflow-x-hidden"
    >
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap');
        
        * { scroll-behavior: smooth; }

        ::-webkit-scrollbar { width: 5px; height: 5px; }
        ::-webkit-scrollbar-track { background: #FFF8F0; }
        ::-webkit-scrollbar-thumb { background: #D4AF37; border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: #E8A9A9; }

        .story-scroll::-webkit-scrollbar { height: 4px; }
        .story-scroll::-webkit-scrollbar-track { background: #F8E8E8; border-radius: 10px; }
        .story-scroll::-webkit-scrollbar-thumb { background: linear-gradient(90deg, #D4AF37, #E8A9A9); border-radius: 10px; }

        .hero-glow {
          background: radial-gradient(ellipse 80% 60% at 50% 0%, rgba(212,175,55,0.15) 0%, transparent 70%),
                      radial-gradient(ellipse 40% 40% at 80% 30%, rgba(232,169,169,0.15) 0%, transparent 60%),
                      #FFF8F0;
        }

        .grain::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 999;
          opacity: 0.5;
        }

        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
        @keyframes shimmer { 0%{background-position:200% center} 100%{background-position:-200% center} }

        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-fade-up { animation: fadeUp 0.8s ease forwards; }

        .gold-text {
          background: linear-gradient(135deg, #D4AF37, #E8A9A9, #D4AF37);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }

        .card-hover { transition: transform 0.4s cubic-bezier(0.23,1,0.32,1), box-shadow 0.4s ease; }
        .card-hover:hover { transform: translateY(-6px) scale(1.01); box-shadow: 0 30px 60px rgba(0,0,0,0.5); }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.4s ease, padding 0.4s ease;
          opacity: 0;
        }
        .faq-answer.open {
          max-height: 300px;
          opacity: 1;
        }

        .plus-icon {
          transition: transform 0.4s cubic-bezier(0.4,0,0.2,1);
        }
        .plus-icon.rotated {
          transform: rotate(45deg);
        }

        .nav-link {
          position: relative;
          font-family: 'DM Sans', sans-serif;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 0;
          width: 0; height: 1px;
          background: #b8860b;
          transition: width 0.3s ease;
        }
        .nav-link:hover::after { width: 100%; }

        .btn-primary {
          background: linear-gradient(135deg, #D4AF37 0%, #E8A9A9 100%);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .btn-primary::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #E8A9A9 0%, #F8C8DC 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .btn-primary:hover::before { opacity: 1; }
        .btn-primary span { position: relative; z-index: 1; }

        .divider-line {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(212,175,55,0.4), transparent);
        }

        .stat-card {
          background: rgba(255,255,255,0.5);
          border: 1px solid rgba(212,175,55,0.2);
          backdrop-filter: blur(10px);
          transition: border-color 0.3s ease, background 0.3s ease;
        }
        .stat-card:hover {
          border-color: rgba(212,175,55,0.5);
          background: rgba(248,200,220,0.2);
        }
      `}</style>

      <div className="grain">
        {/* ── NAVBAR ── */}
        <Navbar />

        {/* ── HERO ── */}
        <section className="hero-glow min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 relative">
          {/* Decorative rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
            <div className="w-[700px] h-[700px] rounded-full border border-[#E8A9A9]/20 animate-float" style={{ animationDelay: "0s" }} />
            <div className="w-[500px] h-[500px] rounded-full border border-[#E8A9A9]/15 absolute animate-float" style={{ animationDelay: "1s" }} />
            <div className="w-[900px] h-[900px] rounded-full border border-[#E8A9A9]/10 absolute animate-float" style={{ animationDelay: "2s" }} />
          </div>

          <div className="relative z-10 w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <p className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>India's Most Trusted Matchmaking Platform</p>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                Where <span className="gold-text">Lifelong</span><br />
                Bonds Begin
              </h1>
              <p className="text-lg text-[#666] mb-10 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Beyond a matrimony website — Nikah is a deeply personal journey toward finding someone who truly complements your world. Over <strong className="text-[#D4AF37]">60 Lakh</strong> couples have already found their forever here.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Link to="/how-it-works" className="btn-primary text-base font-semibold px-8 py-4 rounded-full text-white shadow-lg shadow-[#D4AF37]/20 inline-flex" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  <span>Begin Your Journey →</span>
                </Link>
                <Link to="/explore" className="text-sm text-[#666] hover:text-[#2D2D2D] transition-colors border border-[#EADBC8] hover:border-[#D4AF37] px-7 py-4 rounded-full" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Explore People
                </Link>
              </div>
            </div>

            {/* Right Tab with Online People - 2 Column Layout */}
            <div className="rounded-3xl p-8 shadow-xl shadow-black/5 flex gap-6" style={{
              background: "rgba(255,255,255,0.7)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(212,175,55,0.15)",
            }}>
              {/* Left: Country Filter */}
              <div className="w-32 border-r border-[#EADBC8]">
                <h4 className="text-xs font-bold text-[#666] uppercase tracking-wide mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Countries
                </h4>
                <div className="flex flex-col gap-2 max-h-96 overflow-y-auto">
                  {countries.map((country) => (
                    <button
                      key={country}
                      onClick={() => setSelectedCountry(country)}
                      className={`px-3 py-2 rounded-lg text-xs font-medium text-left transition-all ${selectedCountry === country
                          ? "text-white shadow-lg"
                          : "text-[#666] hover:text-[#D4AF37] hover:bg-[#F8C8DC]/20"
                        }`}
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        background: selectedCountry === country ? "linear-gradient(135deg, #D4AF37 0%, #E8A9A9 100%)" : "transparent",
                      }}
                    >
                      {country}
                    </button>
                  ))}
                </div>
              </div>

              {/* Right: Online People List */}
              <div className="flex-1">
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-[#2D2D2D]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    👥 Online in {selectedCountry}
                  </h3>
                  <p className="text-xs text-[#888]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    Verified members looking now
                  </p>
                </div>

                <div className="space-y-3 max-h-80 overflow-y-auto">
                  {onlinePeopleByCountry[selectedCountry].map((person, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/60 border border-[#EADBC8] hover:border-[#D4AF37] hover:bg-white transition-all cursor-pointer"
                    >
                      <div className="text-3xl">{person.image}</div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-[#2D2D2D] text-sm truncate">{person.name}</h4>
                        <p className="text-xs text-[#888]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                          {person.age} • {person.city}
                        </p>
                      </div>
                      <div className="text-xl">🟢</div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-3 rounded-lg bg-[#F8C8DC]/20 border border-[#E8A9A9]/30">
                  <p className="text-xs text-[#666]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    <strong className="text-[#D4AF37]">💡 Tip:</strong> Chat with up to 5 people free.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="divider-line mx-8" />

        {/* ── FEATURES ── */}
        <section className="py-24 px-6 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>Why Nikah</p>
            <h2 className="text-4xl md:text-5xl font-bold">Matchmaking, <em className="gold-text not-italic">Reimagined</em></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((f, i) => (
              <div key={i} className="card-hover stat-card rounded-3xl p-7 flex flex-col gap-4">
                <div className="text-4xl">{f.icon}</div>
                <h3 className="text-lg font-semibold text-[#2D2D2D]">{f.title}</h3>
                <p className="text-sm text-[#666] leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="divider-line mx-8" />

        {/* ── STORIES ── */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <p className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>Real Connections</p>
                <h2 className="text-4xl md:text-5xl font-bold">Stories That <span className="gold-text">Move Us</span></h2>
              </div>
              <div className="flex items-center gap-3">
                <button onClick={() => scrollStories(-1)}
                  className="w-11 h-11 rounded-full border border-[#E8A9A9] flex items-center justify-center text-[#D4AF37] hover:bg-[#F8C8DC]/30 transition-all hover:scale-110 active:scale-95">
                  ←
                </button>
                <button onClick={() => scrollStories(1)}
                  className="w-11 h-11 rounded-full border border-[#E8A9A9] flex items-center justify-center text-[#D4AF37] hover:bg-[#F8C8DC]/30 transition-all hover:scale-110 active:scale-95">
                  →
                </button>
              </div>
            </div>

            <div ref={scrollRef}
              className="story-scroll flex gap-5 overflow-x-auto pb-4"
              style={{ scrollSnapType: "x mandatory" }}>
              {stories.map((s, i) => (
                <div key={i}
                  className={`card-hover flex-shrink-0 w-80 rounded-3xl p-8 bg-gradient-to-br ${s.bg} relative overflow-hidden`}
                  style={{ scrollSnapAlign: "start" }}>
                  <div className="absolute top-4 right-5 text-5xl opacity-20">{s.emoji}</div>
                  <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full opacity-10"
                    style={{ background: "radial-gradient(circle, white, transparent)", transform: "translate(30%, 30%)" }} />
                  <span className="text-xs text-white/50 tracking-widest uppercase" style={{ fontFamily: "'DM Sans', sans-serif" }}>{s.year}</span>
                  <h3 className="text-xl font-bold mt-3 mb-1">{s.names}</h3>
                  <p className="text-xs text-white/60 mb-5" style={{ fontFamily: "'DM Sans', sans-serif" }}>{s.location}</p>
                  <p className="text-sm leading-relaxed text-white/85 italic" style={{ fontFamily: "'Playfair Display', serif" }}>"{s.quote}"</p>
                  <div className="mt-6 flex items-center gap-2">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, j) => <span key={j} className="text-[#D4AF37] text-xs">★</span>)}
                    </div>
                    <span className="text-xs text-white/40" style={{ fontFamily: "'DM Sans', sans-serif" }}>Verified Story</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="divider-line mx-8" />

        {/* ── TRUST BADGE PROMO ── */}
        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden relative"
            style={{ background: "linear-gradient(135deg, #FFF8F0 0%, #F8E8E8 50%, #F8C8DC 100%)", border: "1px solid rgba(212,175,55,0.2)" }}>
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse 60% 80% at 80% 50%, rgba(212,175,55,0.1) 0%, transparent 70%)" }} />
            <div className="relative z-10 p-12 md:p-16 flex flex-col md:flex-row items-center gap-10">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 bg-[#F8C8DC]/30 border border-[#E8A9A9]/40 rounded-full px-4 py-2 mb-6">
                  <span className="text-[#D4AF37] text-lg">🏅</span>
                  <span className="text-[#D4AF37] text-sm font-medium" style={{ fontFamily: "'DM Sans', sans-serif" }}>Trust Badge Program</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-5">Your verified profile<br />speaks before you do</h2>
                <p className="text-[#666] leading-relaxed mb-8" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Trust Badge members don't just get noticed — they get taken seriously. Earn yours through our streamlined verification, and unlock <strong className="text-[#D4AF37]">45% more meaningful connections</strong> with people who are equally serious about their search.
                </p>
                <Link to="/membership" className="btn-primary text-sm font-semibold px-7 py-3.5 rounded-full text-white inline-flex" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  <span>Get Trust Badge →</span>
                </Link>
              </div>
              <div className="flex-shrink-0 w-52 h-52 rounded-full flex items-center justify-center"
                style={{ background: "radial-gradient(circle, rgba(212,175,55,0.15), rgba(232,169,169,0.05))", border: "2px solid rgba(212,175,55,0.25)" }}>
                <div className="text-center">
                  <div className="text-7xl mb-2">🏅</div>
                  <div className="text-[#D4AF37] font-bold text-sm tracking-wider" style={{ fontFamily: "'DM Sans', sans-serif" }}>TRUST BADGE</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="divider-line mx-8" />

        {/* ── FAQ ── */}
        <section className="py-24 px-6 max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>Got Questions?</p>
            <h2 className="text-4xl md:text-5xl font-bold">Everything You <span className="gold-text">Need to Know</span></h2>
          </div>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <div key={i}
                className="rounded-2xl overflow-hidden"
                style={{
                  background: openFaq === i ? "rgba(248,200,220,0.15)" : "rgba(255,255,255,0.5)",
                  border: `1px solid ${openFaq === i ? "rgba(212,175,55,0.4)" : "rgba(234,219,200,0.5)"}`,
                  transition: "background 0.3s ease, border-color 0.3s ease",
                }}>
                <button
                  className="w-full flex items-center justify-between px-7 py-5 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span className="text-base font-semibold pr-4 text-[#2D2D2D]/90">{faq.q}</span>
                  <span className={`plus-icon flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center text-lg font-light ${openFaq === i ? "rotated border-[#D4AF37] text-[#D4AF37]" : "border-[#EADBC8] text-[#666]"}`}
                    style={{ transition: "transform 0.4s cubic-bezier(0.4,0,0.2,1), color 0.3s ease, border-color 0.3s ease" }}>
                    +
                  </span>
                </button>
                <div className={`faq-answer px-7 ${openFaq === i ? "open pb-6" : ""}`}>
                  <p className="text-[#666] leading-relaxed text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="divider-line mx-8" />

        {/* ── CTA ── */}
        <section className="py-28 px-6 text-center relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(212,175,55,0.1) 0%, transparent 70%)" }} />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Your story is<br />waiting to <span className="gold-text italic">begin.</span>
            </h2>
            <p className="text-[#666] mb-10 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Join over a crore people who trusted Nikah with their most important search. Create your profile for free today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/membership" className="btn-primary text-base font-semibold px-10 py-4 rounded-full text-white shadow-xl shadow-[#D4AF37]/20 inline-flex" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                <span>Create Free Profile</span>
              </Link>
              <p className="text-xs text-[#999]" style={{ fontFamily: "'DM Sans', sans-serif" }}>No credit card required · 30-day happiness guarantee</p>
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="border-t border-[#EADBC8]/30 px-8 py-14">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-10 mb-12">
              <div>
                <div className="text-xl font-bold gold-text mb-3">Nikah</div>
                <p className="text-xs text-[#999] leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Two decades of matchmaking wisdom, now powered by AI. Because finding the right person deserves more than an algorithm.
                </p>
              </div>
              {[
                { title: "Platform", links: [{ name: "How It Works", path: "/how-it-works" }, { name: "Communities", path: "/communities" }, { name: "Success Stories", path: "/success-stories" }, { name: "Premium Plans", path: "/membership" }, { name: "Mobile App", path: "#" }] },
                { title: "Company", links: [{ name: "About Us", path: "#" }, { name: "Careers", path: "#" }, { name: "Press", path: "#" }, { name: "Contact", path: "#" }] },
                { title: "Support", links: [{ name: "Help Centre", path: "#" }, { name: "Safety Tips", path: "#" }, { name: "Report Abuse", path: "#" }, { name: "Privacy Policy", path: "#" }] },
              ].map((col) => (
                <div key={col.title}>
                  <h4 className="text-xs font-semibold text-[#888] tracking-widest uppercase mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>{col.title}</h4>
                  <ul className="space-y-2.5">
                    {col.links.map(l => (
                      <li key={l.name}>
                        <Link to={l.path} className="text-sm text-[#888] hover:text-[#D4AF37] transition-colors" style={{ fontFamily: "'DM Sans', sans-serif" }}>{l.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="divider-line mb-8" />
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-xs text-[#AAA]" style={{ fontFamily: "'DM Sans', sans-serif" }}>© 2025 Nikah. All rights reserved.</p>
              <div className="flex items-center gap-6">
                {["Terms", "Privacy", "Cookies"].map(l => (
                  <a key={l} href="#" className="text-xs text-[#AAA] hover:text-[#D4AF37] transition-colors" style={{ fontFamily: "'DM Sans', sans-serif" }}>{l}</a>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}