import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const steps = [
  {
    icon: "✨",
    title: "Create Profile",
    desc: "Build your profile with your photos, preferences, and values. Tell your story authentically.",
  },
  {
    icon: "🔍",
    title: "Discover Matches",
    desc: "Browse curated matches based on compatibility, shared values, and lifestyle preferences.",
  },
  {
    icon: "💬",
    title: "Private Chat Rooms",
    desc: "Connect in a safe, secure environment. Start conversations with those who resonate with you.",
  },
  {
    icon: "📹",
    title: "Video Calling",
    desc: "Take your connection deeper with face-to-face video calls. See the real person behind the profile.",
  },
  {
    icon: "❤️",
    title: "Build Connections",
    desc: "Nurture meaningful relationships. Our support team is here to help you every step of the way.",
  },
];

const plans = [
  {
    name: "Free",
    price: "₹0",
    period: "forever",
    popular: false,
    features: [
      { icon: "👤", text: "Basic Profile", included: true },
      { icon: "🔍", text: "Browse Matches", included: true },
      { icon: "💝", text: "5 Likes/Day", included: true },
      { icon: "❌", text: "Private Chat Rooms", included: false },
      { icon: "❌", text: "Video Calling", included: false },
      { icon: "❌", text: "Priority Visibility", included: false },
      { icon: "❌", text: "Match Recommendations", included: false },
    ],
  },
  {
    name: "Premium",
    price: "₹499",
    period: "/month",
    popular: true,
    features: [
      { icon: "👤", text: "Enhanced Profile", included: true },
      { icon: "🔍", text: "Unlimited Browsing", included: true },
      { icon: "💝", text: "Unlimited Likes", included: true },
      { icon: "💬", text: "Private Chat Rooms", included: true },
      { icon: "📹", text: "Video Calling", included: true },
      { icon: "⭐", text: "Priority Visibility", included: true },
      { icon: "🎯", text: "Match Recommendations", included: true },
    ],
  },
  {
    name: "Elite",
    price: "₹999",
    period: "/month",
    popular: false,
    features: [
      { icon: "👤", text: "Premium Profile Badge", included: true },
      { icon: "🔍", text: "Unlimited Browsing", included: true },
      { icon: "💝", text: "Unlimited Likes", included: true },
      { icon: "💬", text: "Private Chat Rooms", included: true },
      { icon: "📹", text: "HD Video Calling", included: true },
      { icon: "⭐", text: "Top Visibility", included: true },
      { icon: "🎯", text: "AI Match Recommendations", included: true },
      { icon: "👑", text: "Dedicated Relationship Manager", included: true },
    ],
  },
];

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState("how");

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

        .nav-link {
          position: relative;
          font-family: 'DM Sans', sans-serif;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 0;
          width: 0; height: 1px;
          background: #D4AF37;
          transition: width 0.3s ease;
        }
        .nav-link:hover::after { width: 100%; }

        .tab-active {
          background: linear-gradient(135deg, #D4AF37 0%, #E8A9A9 100%);
          color: white;
        }

        .popular-badge {
          background: linear-gradient(135deg, #D4AF37, #E8A9A9);
          animation: shimmer 3s linear infinite;
        }

        .timeline-line {
          background: linear-gradient(90deg, #E8A9A9, #D4AF37, #E8A9A9);
        }
      `}</style>

      {/* Navbar */}
      <Navbar />

      {/* Tab Navigation */}
      <div className="pt-28 px-6 flex justify-center">
        <div className="flex gap-2 p-1 rounded-full" style={{ background: "rgba(232,169,169,0.2)", border: "1px solid rgba(212,175,55,0.2)" }}>
          <button
            onClick={() => setActiveTab("how")}
            className={`px-8 py-3 rounded-full text-sm font-medium transition-all ${activeTab === "how" ? "tab-active" : "text-[#666] hover:text-[#2D2D2D]"}`}
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            How It Works
          </button>
          <button
            onClick={() => setActiveTab("membership")}
            className={`px-8 py-3 rounded-full text-sm font-medium transition-all ${activeTab === "membership" ? "tab-active" : "text-[#666] hover:text-[#2D2D2D]"}`}
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Membership Plans
          </button>
        </div>
      </div>

      {/* How It Works Section */}
      {activeTab === "how" && (
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>Your Journey to Love</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                How <span className="gold-text">Nikah</span> Works
              </h1>
              <p className="text-[#666] max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Finding your perfect match shouldn't be complicated. We've designed a seamless experience to help you connect with someone who truly complements your life.
              </p>
            </div>

            {/* Steps Timeline */}
            <div className="relative">
              {/* Timeline Line - Desktop */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 timeline-line transform -translate-y-1/2" style={{ top: "120px" }} />

              <div className="grid md:grid-cols-5 gap-6">
                {steps.map((step, i) => (
                  <div key={i} className="relative flex flex-col items-center">
                    <div className="relative z-10 w-20 h-20 rounded-full flex items-center justify-center text-3xl mb-5 card-hover"
                      style={{ 
                        background: i % 2 === 0 ? "linear-gradient(135deg, #FFF8F0, #F8C8DC)" : "linear-gradient(135deg, #F8E8E8, #FFF8F0)",
                        border: "2px solid rgba(212,175,55,0.3)",
                        boxShadow: "0 10px 40px rgba(212,175,55,0.15)"
                      }}>
                      {step.icon}
                    </div>
                    <div className="text-center bg-white/60 rounded-2xl p-5 card-hover" 
                      style={{ border: "1px solid rgba(232,169,169,0.3)", boxShadow: "0 8px 30px rgba(212,175,55,0.1)" }}>
                      <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold mb-3 mx-auto"
                        style={{ background: "linear-gradient(135deg, #D4AF37, #E8A9A9)", color: "white" }}>
                        {i + 1}
                      </div>
                      <h3 className="text-lg font-semibold text-[#2D2D2D] mb-2">{step.title}</h3>
                      <p className="text-sm text-[#666] leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-16">
              <Link to="/membership" className="btn-primary text-base font-semibold px-10 py-4 rounded-full text-white inline-flex items-center gap-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                <span>Get Started →</span>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Membership Plans Section */}
      {activeTab === "membership" && (
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>Choose Your Plan</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Find Your <span className="gold-text">Perfect</span> Match
              </h1>
              <p className="text-[#666] max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Unlock premium features and accelerate your journey to finding a meaningful connection. Choose the plan that works for you.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan, i) => (
                <div key={i} className={`relative rounded-3xl p-8 card-hover ${plan.popular ? "md:-mt-4" : ""}`}
                  style={{ 
                    background: plan.popular 
                      ? "linear-gradient(135deg, #FFF8F0 0%, #F8E8E8 100%)" 
                      : "white",
                    border: plan.popular 
                      ? "2px solid rgba(212,175,55,0.4)" 
                      : "1px solid rgba(232,169,169,0.3)",
                    boxShadow: plan.popular 
                      ? "0 20px 60px rgba(212,175,55,0.2)" 
                      : "0 10px 40px rgba(212,175,55,0.1)"
                  }}>
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-6 py-2 rounded-full text-xs font-semibold text-white popular-badge" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      Most Popular
                    </div>
                  )}

                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <h3 className="text-xl font-semibold text-[#2D2D2D] mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-bold gold-text">{plan.price}</span>
                      <span className="text-sm text-[#888]" style={{ fontFamily: "'DM Sans', sans-serif" }}>{plan.period}</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, j) => (
                      <div key={j} className="flex items-center gap-3">
                        <span className="text-lg">{feature.icon}</span>
                        <span className={`text-sm ${feature.included ? "text-[#2D2D2D]" : "text-[#AAA]"}`} 
                          style={{ fontFamily: "'DM Sans', sans-serif", textDecoration: feature.included ? "none" : "line-through" }}>
                          {feature.text}
                        </span>
                        {!feature.included && (
                          <span className="ml-auto text-[#CCC] text-xs">✕</span>
                        )}
                        {feature.included && plan.popular && (
                          <span className="ml-auto text-[#D4AF37] text-xs">✓</span>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className={`w-full py-4 rounded-full font-semibold transition-all ${plan.popular ? "btn-primary text-white" : "border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white"}`}
                    style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {plan.name === "Free" ? "Get Started Free" : "Subscribe Now"}
                  </button>
                </div>
              ))}
            </div>

            {/* Trust Note */}
            <div className="text-center mt-12">
              <p className="text-sm text-[#888]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                🔒 Secure payments • Cancel anytime • 30-day happiness guarantee
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="border-t border-[#EADBC8]/30 px-8 py-10 mt-16">
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