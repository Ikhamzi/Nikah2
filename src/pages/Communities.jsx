import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const communities = [
  {
    name: "Muslim Community",
    icon: "🕌",
    desc: "Connect with individuals who value faith, tradition, and meaningful relationships within the Muslim community.",
    image: "/images/communities/muslim.jpg",
    color: "from-emerald-100 to-teal-50",
  },
  {
    name: "Hindu Community",
    icon: "🛕",
    desc: "Discover matches who share cultural values, traditions, and family-oriented connections.",
    image: "/images/communities/hindu.jpg",
    color: "from-orange-100 to-amber-50",
  },
  {
    name: "Sikh Community",
    icon: "🪯",
    desc: "Connect with individuals who value equality, faith, and strong community bonds.",
    image: "/images/communities/sikh.jpg",
    color: "from-blue-100 to-indigo-50",
  },
  {
    name: "Buddhist Community",
    icon: "☸️",
    desc: "Find mindful and peaceful connections with like-minded individuals.",
    image: "/images/communities/buddhist.jpg",
    color: "from-purple-100 to-violet-50",
  },
  {
    name: "Jewish Community",
    icon: "✡️",
    desc: "Build relationships rooted in shared heritage, traditions, and values.",
    image: "/images/communities/jewish.jpg",
    color: "from-sky-100 to-cyan-50",
  },
  {
    name: "Christian Community",
    icon: "✝️",
    desc: "Meet people who prioritize faith, love, and long-term commitment.",
    image: "/images/communities/christian.jpg",
    color: "from-rose-100 to-pink-50",
  },
];

const features = [
  { icon: "🎯", title: "Community-based Match Recommendations", desc: "AI-powered matches within your preferred community" },
  { icon: "🛡️", title: "Safe & Respectful Environment", desc: "Moderated spaces that honor your values" },
  { icon: "💬", title: "Private Chat Rooms", desc: "Connect privately within your community" },
  { icon: "📹", title: "Secure Video Calling", desc: "Face-to-face conversations in a safe space" },
  { icon: "✅", title: "Verified Profiles", desc: "Authentic members with Trust Badges" },
];

export default function Communities() {
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

        .card-hover { transition: transform 0.4s cubic-bezier(0.23,1,0.32,1), box-shadow 0.4s ease; }
        .card-hover:hover { transform: translateY(-8px); box-shadow: 0 30px 60px rgba(212,175,55,0.15); }

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

        .community-card {
          background: white;
          border: 1px solid rgba(232,169,169,0.3);
          transition: all 0.4s ease;
        }
        .community-card:hover {
          border-color: rgba(212,175,55,0.5);
          box-shadow: 0 20px 60px rgba(212,175,55,0.15);
        }

        .feature-card {
          background: rgba(255,255,255,0.6);
          border: 1px solid rgba(232,169,169,0.2);
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }
        .feature-card:hover {
          background: rgba(255,255,255,0.9);
          border-color: rgba(212,175,55,0.4);
        }
      `}</style>

      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center text-center px-6 pt-28 pb-16">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#F8C8DC]/30 blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-[#E8A9A9]/20 blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>Our Communities</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Find Connections Within<br />Your <span className="gold-text">Community</span>
          </h1>
          <p className="text-lg text-[#666] max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Meet people who share your values, traditions, and vision for meaningful relationships.
          </p>
        </div>

        {/* Image Placeholder */}
        <div className="mt-12 max-w-4xl mx-auto rounded-3xl overflow-hidden image-placeholder h-64 md:h-80">
          <div className="text-center">
            <div className="text-6xl mb-4">🏘️</div>
            <p className="text-[#888] text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>Image: /images/communities/hero.jpg</p>
            <p className="text-[#AAA] text-xs mt-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>(couple / diverse people / warm tone)</p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl text-[#666] leading-relaxed italic" style={{ fontFamily: "'Playfair Display', serif" }}>
            "Shared beliefs and culture can bring people closer. Explore communities that reflect your identity — or discover new connections beyond boundaries."
          </p>
        </div>
      </section>

      {/* Communities Grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>🌍 Communities We Support</p>
            <h2 className="text-3xl md:text-4xl font-bold">Find Your <span className="gold-text">Community</span></h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {communities.map((community, i) => (
              <div key={i} className="community-card rounded-3xl overflow-hidden card-hover">
                {/* Image Placeholder */}
                <div className="image-placeholder h-48 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl mb-2">{community.icon}</div>
                    <p className="text-[#888] text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>Image: {community.image}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#2D2D2D] mb-3">{community.name}</h3>
                  <p className="text-sm text-[#666] leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>{community.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6" style={{ background: "linear-gradient(180deg, #F8E8E8 0%, #FFF8F0 100%)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>Why Join Our Communities</p>
            <h2 className="text-3xl md:text-4xl font-bold">Built for <span className="gold-text">Meaningful</span> Connections</h2>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="feature-card rounded-2xl p-6 text-center card-hover">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-sm font-semibold text-[#2D2D2D] mb-2">{feature.title}</h3>
                <p className="text-xs text-[#888] leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Features Image Placeholder */}
          <div className="mt-12 rounded-3xl overflow-hidden image-placeholder h-64">
            <div className="text-center">
              <div className="text-6xl mb-4">📱</div>
              <p className="text-[#888] text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>Image: /images/communities/features.jpg</p>
              <p className="text-[#AAA] text-xs mt-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>(app UI / chat / video call preview)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Inclusivity Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            You're Not Limited to <span className="gold-text">One Community</span>
          </h2>
          <p className="text-lg text-[#666] leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Explore freely and connect based on what truly matters to you. Our platform welcomes everyone.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 pb-24">
        <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden relative" style={{ background: "linear-gradient(135deg, #FFF8F0 0%, #F8E8E8 50%, #F8C8DC 100%)", border: "1px solid rgba(212,175,55,0.2)" }}>
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 80% at 80% 50%, rgba(212,175,55,0.1) 0%, transparent 70%)" }} />
          
          <div className="relative z-10 p-12 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Start Exploring <span className="gold-text">Communities</span> Today
            </h2>
            <p className="text-[#666] mb-8 max-w-xl mx-auto" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Join thousands who found their perfect match within their community.
            </p>
            <Link to="/membership" className="btn-primary text-base font-semibold px-10 py-4 rounded-full text-white inline-flex" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <span>Join Now →</span>
            </Link>
          </div>

          {/* CTA Image Placeholder */}
          <div className="relative z-10 px-12 pb-8">
            <div className="rounded-2xl overflow-hidden image-placeholder h-48">
              <div className="text-center">
                <div className="text-5xl mb-2">💑</div>
                <p className="text-[#888] text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>Image: /images/communities/cta.jpg</p>
                <p className="text-[#AAA] text-xs mt-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>(happy couple / engagement vibe)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#EADBC8]/30 px-8 py-10">
        <div className="max-w-6xl mx-auto text-center">
          <Link to="/" className="text-xl font-bold gold-text mb-3 inline-block">Nikah</Link>
          <p className="text-xs text-[#999] mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            © 2025 Nikah. All rights reserved.
          </p>
          <div className="flex justify-center gap-6">
            {["Terms", "Privacy", "Cookies"].map(l => (
              <a key={l} href="#" className="text-xs text-[#AAA] hover:text-[#D4AF37] transition-colors" style={{ fontFamily: "'DM Sans', sans-serif" }}>{l}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}