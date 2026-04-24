import { useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const stories = [
  {
    names: "Aisha & Rahman",
    image: "/images/success/couple1.jpg",
    quote: "We started with a simple chat and quickly realized how much we had in common. The private chat rooms helped us open up comfortably, and our first video call made everything feel real. Today, we're happily engaged.",
    location: "Mumbai × Delhi",
  },
  {
    names: "Priya & Arjun",
    image: "/images/success/couple2.jpg",
    quote: "What we loved most was the quality of matches. No endless swiping — just genuine people. The platform made it easy to connect and build something meaningful.",
    location: "Bengaluru × Chennai",
  },
  {
    names: "Simran & Harpreet",
    image: "/images/success/couple3.jpg",
    quote: "Having a space where we could connect within our community made all the difference. From chats to video calls, everything felt safe and natural.",
    location: "Toronto × Vancouver",
  },
  {
    names: "Fatima & Omar",
    image: "/images/success/couple4.jpg",
    quote: "The Trust Badge gave us confidence from the start. We knew we were talking to genuine people. Six months later, we're planning our wedding!",
    location: "London × Birmingham",
  },
  {
    names: "Anjali & Vikram",
    image: "/images/success/couple5.jpg",
    quote: "Video calling before meeting in person was a game-changer. It helped us feel connected even before our first date. Now we're married.",
    location: "Dubai × Abu Dhabi",
  },
  {
    names: "Meera & Karthik",
    image: "/images/success/couple6.jpg",
    quote: "The community-based matching introduced us to someone who truly shared our values and outlook on life. We're grateful for this platform.",
    location: "Singapore × Chennai",
  },
];

const testimonials = [
  { quote: "I found someone who truly understands me.", avatar: "/images/success/user1.jpg" },
  { quote: "Safe, simple, and meaningful.", avatar: "/images/success/user2.jpg" },
  { quote: "This platform changed my life.", avatar: "/images/success/user3.jpg" },
];

const features = [
  { icon: "✅", title: "Verified Profiles", desc: "Trust Badge ensures authentic connections" },
  { icon: "💬", title: "Private Chat Rooms", desc: "Safe spaces for real conversations" },
  { icon: "📹", title: "Video Calling", desc: "Connect beyond text with face-to-face" },
  { icon: "🏘️", title: "Community Matching", desc: "Find matches who share your values" },
];

export default function SuccessStories() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 400, behavior: "smooth" });
    }
  };

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

        .story-card {
          background: white;
          border: 1px solid rgba(232,169,169,0.3);
          transition: all 0.4s ease;
        }
        .story-card:hover {
          border-color: rgba(212,175,55,0.5);
          box-shadow: 0 20px 60px rgba(212,175,55,0.15);
        }

        .testimonial-card {
          background: rgba(255,255,255,0.6);
          border: 1px solid rgba(232,169,169,0.2);
          backdrop-filter: blur(10px);
        }

        .story-scroll::-webkit-scrollbar { height: 4px; }
        .story-scroll::-webkit-scrollbar-track { background: #F8E8E8; border-radius: 10px; }
        .story-scroll::-webkit-scrollbar-thumb { background: linear-gradient(90deg, #D4AF37, #E8A9A9); border-radius: 10px; }
      `}</style>

      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center text-center px-6 pt-28 pb-16">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#F8C8DC]/30 blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-[#E8A9A9]/20 blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>Success Stories</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Real Stories. Real Connections.<br /><span className="gold-text">Real Love.</span>
          </h1>
          <p className="text-lg text-[#666] max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Thousands have found meaningful relationships on our platform. Here are some of their journeys.
          </p>
        </div>

        {/* Hero Image Placeholder */}
        <div className="mt-12 max-w-5xl mx-auto rounded-3xl overflow-hidden image-placeholder h-64 md:h-80">
          <div className="text-center">
            <div className="text-6xl mb-4">💑</div>
            <p className="text-[#888] text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>Image: /images/success/hero.jpg</p>
            <p className="text-[#AAA] text-xs mt-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>(happy couple / wedding / engagement)</p>
          </div>
        </div>
      </section>

      {/* Featured Stories Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>💖 Featured Stories</p>
            <h2 className="text-3xl md:text-4xl font-bold">Love <span className="gold-text">Stories</span> That Inspire</h2>
          </div>

          {/* Stories Carousel */}
          <div className="relative">
            <button onClick={() => scroll(-1)}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white border border-[#E8A9A9] flex items-center justify-center text-[#D4AF37] hover:bg-[#F8C8DC]/30 transition-all -translate-x-4 shadow-lg">
              ←
            </button>
            <button onClick={() => scroll(1)}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white border border-[#E8A9A9] flex items-center justify-center text-[#D4AF37] hover:bg-[#F8C8DC]/30 transition-all translate-x-4 shadow-lg">
              →
            </button>

            <div ref={scrollRef} className="story-scroll flex gap-6 overflow-x-auto pb-4 px-8" style={{ scrollSnapType: "x mandatory" }}>
              {stories.map((story, i) => (
                <div key={i} className="story-card flex-shrink-0 w-96 rounded-3xl overflow-hidden card-hover" style={{ scrollSnapAlign: "start" }}>
                  {/* Image Placeholder */}
                  <div className="image-placeholder h-56 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-5xl mb-2">📸</div>
                      <p className="text-[#888] text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>Image: {story.image}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-[#2D2D2D] mb-1">{story.names}</h3>
                    <p className="text-xs text-[#D4AF37] mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>{story.location}</p>
                    <p className="text-sm text-[#666] leading-relaxed italic" style={{ fontFamily: "'Playfair Display', serif" }}>
                      "{story.quote}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why These Stories Matter - Features */}
      <section className="py-16 px-6" style={{ background: "linear-gradient(180deg, #F8E8E8 0%, #FFF8F0 100%)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>🌟 Why These Stories Matter</p>
            <h2 className="text-3xl md:text-4xl font-bold">What Makes <span className="gold-text">Connections</span> Real</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="bg-white/60 rounded-2xl p-6 text-center card-hover" style={{ border: "1px solid rgba(232,169,169,0.2)" }}>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-base font-semibold text-[#2D2D2D] mb-2">{feature.title}</h3>
                <p className="text-sm text-[#888] leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Features Image Placeholder */}
          <div className="mt-12 rounded-3xl overflow-hidden image-placeholder h-64">
            <div className="text-center">
              <div className="text-6xl mb-4">💬</div>
              <p className="text-[#888] text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>Image: /images/success/features.jpg</p>
              <p className="text-[#AAA] text-xs mt-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>(chat/video UI or emotional couple moment)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>💬 User Testimonials</p>
            <h2 className="text-3xl md:text-4xl font-bold">What Our <span className="gold-text">Members</span> Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="testimonial-card rounded-2xl p-6 text-center card-hover">
                {/* Avatar Placeholder */}
                <div className="w-16 h-16 rounded-full mx-auto mb-4 image-placeholder flex items-center justify-center">
                  <span className="text-2xl">👤</span>
                </div>
                <p className="text-lg text-[#2D2D2D] italic leading-relaxed" style={{ fontFamily: "'Playfair Display', serif" }}>
                  "{testimonial.quote}"
                </p>
                <p className="text-xs text-[#AAA] mt-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>Image: {testimonial.avatar}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 pb-24">
        <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden relative" style={{ background: "linear-gradient(135deg, #FFF8F0 0%, #F8E8E8 50%, #F8C8DC 100%)", border: "1px solid rgba(212,175,55,0.2)" }}>
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 80% at 80% 50%, rgba(212,175,55,0.1) 0%, transparent 70%)" }} />
          
          <div className="relative z-10 p-12 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Your Story Could Be <span className="gold-text">Next</span>
            </h2>
            <p className="text-[#666] mb-8 max-w-xl mx-auto" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Join today and start your journey toward a meaningful connection.
            </p>
            <Link to="/membership" className="btn-primary text-base font-semibold px-10 py-4 rounded-full text-white inline-flex" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <span>Get Started →</span>
            </Link>
          </div>

          {/* CTA Image Placeholder */}
          <div className="relative z-10 px-12 pb-8">
            <div className="rounded-2xl overflow-hidden image-placeholder h-48">
              <div className="text-center">
                <div className="text-5xl mb-2">💒</div>
                <p className="text-[#888] text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>Image: /images/success/cta.jpg</p>
                <p className="text-[#AAA] text-xs mt-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>(romantic / wedding vibe)</p>
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