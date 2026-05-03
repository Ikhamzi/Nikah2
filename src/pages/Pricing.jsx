import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const plans = [
  {
    name: "Free",
    badge: null,
    price: "Free",
    period: "",
    bestFor: "Exploring the platform",
    features: [
      "Create and customize your profile",
      "Browse limited matches",
      "Send up to 5 messages per day",
      "Join basic community spaces",
      "Standard profile visibility",
    ],
    limitations: [
      "Limited chats (5 per day)",
      "No video calling",
      "No priority exposure",
    ],
    cta: "Get Started Free",
    popular: false,
  },
  {
    name: "Premium",
    badge: "Most Popular",
    price: "₹499",
    period: "/month",
    bestFor: "Serious users ready to find their match",
    features: [
      "Unlimited profile browsing",
      "Unlimited messaging",
      "Access to private chat rooms",
      "Video calling feature enabled",
      "Priority profile visibility",
      "Smart match recommendations",
      "Enhanced privacy controls",
      "Top profile highlighting (maximum visibility)",
      "Verified badge for trust",
      "Early access to new matches",
      "Exclusive community access",
      "Personalized matchmaking suggestions",
    ],
    limitations: [],
    whyUpgrade:
      "Get full access to all features and stand out with maximum visibility and trust indicators.",
    cta: "Get Premium",
    popular: true,
  },
];

const comparison = [
  { feature: "Messaging", free: "Limited (5/day)", premium: "Unlimited" },
  { feature: "Private Chat Rooms", free: false, premium: true },
  { feature: "Video Calling", free: false, premium: true },
  { feature: "Profile Visibility", free: "Basic", premium: "Top Highlight" },
  { feature: "Match Recommendations", free: "Basic", premium: "Personalized" },
  { feature: "Verification Badge", free: false, premium: true },
  { feature: "Priority Exposure", free: false, premium: true },
  { feature: "Early Access to Matches", free: false, premium: true },
];

const valuePoints = [
  {
    icon: "📹",
    title: "Build trust with video calls",
    desc: "See each other face-to-face before meeting in person.",
  },
  {
    icon: "💬",
    title: "Communicate safely",
    desc: "Private chat rooms keep your conversations secure and intimate.",
  },
  {
    icon: "🎯",
    title: "Get better matches",
    desc: "Smarter recommendations mean less scrolling and more connection.",
  },
  {
    icon: "❤️",
    title: "Increase your chances",
    desc: "Priority visibility puts you in front of the right people faster.",
  },
];

const trustItems = [
  { icon: "🔒", title: "Secure platform", desc: "End-to-end encryption and DPDP compliance." },
  { icon: "✅", title: "Verified users", desc: "Multi-layer verification including optional video KYC." },
  { icon: "🛡️", title: "Privacy-first communication", desc: "You control who sees what, always." },
];

function Check({ value }) {
  if (value === true)
    return <span className="text-emerald-500 text-lg font-bold">✓</span>;
  if (value === false)
    return <span className="text-rose-300 text-lg font-bold">✕</span>;
  return <span className="text-sm text-[#2D2D2D]">{value}</span>;
}

export default function Pricing() {
  return (
    <div
      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
      className="min-h-screen bg-[#FFF8F0] text-[#2D2D2D] overflow-x-hidden"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');
        
        * { scroll-behavior: smooth; }

        ::-webkit-scrollbar { width: 5px; height: 5px; }
        ::-webkit-scrollbar-track { background: #FFF8F0; }
        ::-webkit-scrollbar-thumb { background: #D4AF37; border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: #E8A9A9; }

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

        .card-hover {
          transition: transform 0.4s cubic-bezier(0.23,1,0.32,1), box-shadow 0.4s ease;
        }
        .card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 30px 60px rgba(212,175,55,0.15);
        }

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

        .image-placeholder {
          background: linear-gradient(135deg, #F8E8E8 0%, #F8C8DC 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .popular-badge {
          background: linear-gradient(135deg, #D4AF37, #E8A9A9);
          animation: shimmer 3s linear infinite;
        }

        .divider-line {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(212,175,55,0.4), transparent);
        }

        .pricing-card {
          background: white;
          border: 1px solid rgba(232,169,169,0.3);
          transition: all 0.4s ease;
        }
        .pricing-card:hover {
          border-color: rgba(212,175,55,0.5);
          box-shadow: 0 20px 60px rgba(212,175,55,0.15);
        }
        .pricing-card.popular {
          background: linear-gradient(135deg, #FFF8F0 0%, #F8E8E8 100%);
          border: 2px solid rgba(212,175,55,0.4);
          box-shadow: 0 20px 60px rgba(212,175,55,0.2);
        }

        .comparison-table th,
        .comparison-table td {
          padding: 1rem 1.25rem;
          text-align: center;
        }
        .comparison-table th:first-child,
        .comparison-table td:first-child {
          text-align: left;
        }
        .comparison-table thead th {
          background: linear-gradient(135deg, #FFF8F0 0%, #F8E8E8 100%);
          border-bottom: 2px solid rgba(212,175,55,0.3);
        }
        .comparison-table tbody tr:nth-child(even) {
          background: rgba(248,232,232,0.3);
        }
        .comparison-table tbody tr {
          transition: background 0.2s ease;
        }
        .comparison-table tbody tr:hover {
          background: rgba(248,200,220,0.2);
        }

        .trust-card {
          background: rgba(255,255,255,0.6);
          border: 1px solid rgba(232,169,169,0.2);
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }
        .trust-card:hover {
          background: rgba(255,255,255,0.9);
          border-color: rgba(212,175,55,0.4);
        }
      `}</style>

      <Navbar />

      {/* ── HERO ── */}
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-6 pt-28 pb-16">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#F8C8DC]/30 blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-[#E8A9A9]/20 blur-3xl animate-float" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-[#E8A9A9]/10 animate-float" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-[#E8A9A9]/15 animate-float" style={{ animationDelay: "1.5s" }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Membership Plans
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Choose the Right Plan<br />for Your <span className="gold-text">Journey</span>
          </h1>
          <p className="text-lg text-[#666] max-w-2xl mx-auto leading-relaxed mb-10" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Unlock powerful features designed to help you connect faster, safer, and more meaningfully.
          </p>
        </div>

        {/* Hero Image Placeholder */}
        <div className="relative z-10 mt-4 max-w-5xl mx-auto rounded-3xl overflow-hidden image-placeholder w-full h-64 md:h-80">
          <div className="text-center">
            <div className="text-6xl mb-4">💑</div>
            <p className="text-[#888] text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Image: /images/pricing/hero.jpg
            </p>
            <p className="text-[#AAA] text-xs mt-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              (premium couple / elegant UI)
            </p>
          </div>
        </div>
      </section>

      <div className="divider-line mx-8" />

      {/* ── PLANS OVERVIEW ── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              💎 Plans Overview
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Find Your <span className="gold-text">Perfect</span> Fit
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start max-w-4xl mx-auto">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`pricing-card rounded-3xl p-8 relative card-hover ${plan.popular ? "popular md:-mt-4" : ""}`}

              >
                {plan.badge && (
                  <div
                    className={`absolute -top-4 left-1/2 transform -translate-x-1/2 px-6 py-2 rounded-full text-xs font-semibold text-white ${plan.popular ? "popular-badge" : "bg-[#2D2D2D]"}`}
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {plan.badge}
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-[#2D2D2D] mb-1">{plan.name}</h3>
                  <p className="text-xs text-[#888] mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    Best for: {plan.bestFor}
                  </p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold gold-text">{plan.price}</span>
                    {plan.period && (
                      <span className="text-sm text-[#888]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        {plan.period}
                      </span>
                    )}
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {plan.features.map((feat, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <span className="text-[#D4AF37] mt-0.5">✓</span>
                      <span className="text-sm text-[#2D2D2D]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        {feat}
                      </span>
                    </div>
                  ))}
                  {plan.limitations.map((lim, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <span className="text-rose-300 mt-0.5">✕</span>
                      <span className="text-sm text-[#AAA]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        {lim}
                      </span>
                    </div>
                  ))}
                </div>

                {plan.whyUpgrade && (
                  <div className="mb-6 p-4 rounded-xl bg-[#F8C8DC]/20 border border-[#E8A9A9]/20">
                    <p className="text-xs text-[#888] leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      <strong className="text-[#D4AF37]">Why Upgrade:</strong> {plan.whyUpgrade}
                    </p>
                  </div>
                )}

                <button
                  className={`w-full py-3.5 rounded-full font-semibold transition-all ${plan.popular
                      ? "btn-primary text-white"
                      : "border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white"
                    }`}
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {plan.popular ? <span>{plan.cta}</span> : plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider-line mx-8" />

      {/* ── FEATURE COMPARISON TABLE ── */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Compare Plans
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Feature <span className="gold-text">Comparison</span>
            </h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-[#EADBC8]/50 shadow-sm">
            <table className="comparison-table w-full text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <thead>
                <tr>
                  <th className="text-[#2D2D2D] font-semibold">Feature</th>
                  <th className="text-[#2D2D2D] font-semibold">Free</th>
                  <th className="text-[#D4AF37] font-semibold">Premium</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={i}>
                    <td className="font-medium text-[#2D2D2D]">{row.feature}</td>
                    <td>
                      <Check value={row.free} />
                    </td>
                    <td>
                      <Check value={row.premium} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <div className="divider-line mx-8" />

      {/* ── VALUE SECTION ── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Why Upgrade Matters
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Build Deeper <span className="gold-text">Connections</span>
              </h2>
              <div className="space-y-6">
                {valuePoints.map((vp, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0" style={{ background: "linear-gradient(135deg, #F8E8E8, #F8C8DC)" }}>
                      {vp.icon}
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-[#2D2D2D] mb-1">{vp.title}</h4>
                      <p className="text-sm text-[#666] leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        {vp.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Value Image Placeholder */}
            <div className="rounded-3xl overflow-hidden image-placeholder h-80 md:h-[28rem]">
              <div className="text-center">
                <div className="text-6xl mb-4">📱</div>
                <p className="text-[#888] text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Image: /images/pricing/features.jpg
                </p>
                <p className="text-[#AAA] text-xs mt-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  (app UI / chat / call preview)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-line mx-8" />

      {/* ── TRUST SECTION ── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Trust & Safety
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Your Safety, Our <span className="gold-text">Priority</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {trustItems.map((item, i) => (
              <div key={i} className="trust-card rounded-2xl p-8 text-center card-hover">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-[#2D2D2D] mb-2">{item.title}</h3>
                <p className="text-sm text-[#666] leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider-line mx-8" />

      {/* ── CTA SECTION ── */}
      <section className="py-24 px-6 pb-32">
        <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden relative" style={{ background: "linear-gradient(135deg, #FFF8F0 0%, #F8E8E8 50%, #F8C8DC 100%)", border: "1px solid rgba(212,175,55,0.2)" }}>
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 80% at 80% 50%, rgba(212,175,55,0.1) 0%, transparent 70%)" }} />

          <div className="relative z-10 p-12 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Start Your Journey <span className="gold-text">Today</span>
            </h2>
            <p className="text-[#666] mb-10 max-w-xl mx-auto" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Upgrade your experience and find meaningful connections faster.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="btn-primary text-base font-semibold px-10 py-4 rounded-full text-white shadow-xl shadow-[#D4AF37]/20 inline-flex" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                <span>Get Premium →</span>
              </button>
              <button className="border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white text-base font-semibold px-10 py-4 rounded-full transition-all inline-flex" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Go Elite
              </button>
            </div>
          </div>

          {/* CTA Image Placeholder */}
          <div className="relative z-10 px-12 pb-8">
            <div className="rounded-2xl overflow-hidden image-placeholder h-48">
              <div className="text-center">
                <div className="text-5xl mb-2">💒</div>
                <p className="text-[#888] text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Image: /images/pricing/cta.jpg
                </p>
                <p className="text-[#AAA] text-xs mt-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  (romantic couple)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-[#EADBC8]/30 px-8 py-10">
        <div className="max-w-6xl mx-auto text-center">
          <Link to="/" className="text-xl font-bold gold-text mb-3 inline-block">Nikah</Link>
          <p className="text-xs text-[#999] mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            © 2025 Nikah. All rights reserved.
          </p>
          <div className="flex justify-center gap-6">
            {["Terms", "Privacy", "Cookies"].map((l) => (
              <a key={l} href="#" className="text-xs text-[#AAA] hover:text-[#D4AF37] transition-colors" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {l}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

