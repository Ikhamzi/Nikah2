import { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nationality, setNationality] = useState("");
  const [religion, setReligion] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [ageRange, setAgeRange] = useState("");
  const [location, setLocation] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  const handleNext = (e) => {
    e.preventDefault();
    if (name && email && phoneNumber && password && confirmPassword) {
      if (password === confirmPassword) {
        setStep(2);
      } else {
        alert("Passwords do not match");
      }
    } else {
      alert("Please fill in all required fields");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!acceptTerms) {
      alert("Please accept the Terms and Conditions to proceed");
      return;
    }
    if (!nationality || !religion || !ageRange || !location) {
      alert("Please complete all fields");
      return;
    }
    // TODO: wire up auth logic
    console.log("Signup:", {
      name, email, password, confirmPassword,
      nationality, religion, phoneNumber, ageRange, location, acceptTerms
    });
  };

  return (
    <div className="h-screen flex overflow-hidden">
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
            Begin Your Journey
          </h2>
          <p
            className="text-white/70 text-lg leading-relaxed"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Join over a crore people who trusted Nikah with their most important search.
          </p>
        </div>
      </div>

      {/* ── RIGHT FORM PANEL ── */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 bg-[#FFF8F0] overflow-hidden">
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
              minHeight: "550px",
            }}
          >
            {/* Step Indicator */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${step === 1 ? "bg-gradient-to-r from-[#D4AF37] to-[#E8A9A9] text-white" : "bg-[#EADBC8] text-[#666]"}`} style={{ fontFamily: "'DM Sans', sans-serif" }}>
                1
              </div>
              <div className={`flex-1 h-1 transition-all ${step === 2 ? "bg-gradient-to-r from-[#D4AF37] to-[#E8A9A9]" : "bg-[#EADBC8]"}`} />
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${step === 2 ? "bg-gradient-to-r from-[#D4AF37] to-[#E8A9A9] text-white" : "bg-[#EADBC8] text-[#666]"}`} style={{ fontFamily: "'DM Sans', sans-serif" }}>
                2
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-bold text-[#2D2D2D]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {step === 1 ? "Create Your Account" : "Complete Your Profile"}
              </h2>
              <p className="text-xs text-[#888] mt-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {step === 1 ? "Step 1 of 2: Basic Information" : "Step 2 of 2: Profile Details"}
              </p>
            </div>

            {/* STEP 1: Basic Information */}
            {step === 1 && (
              <form onSubmit={handleNext} className="flex flex-col gap-4">
                <div>
                  <label
                    className="block text-xs font-medium text-[#666] mb-1.5 tracking-wide uppercase"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Aisha Khan"
                    className="w-full px-4 py-3 rounded-xl bg-white/60 border border-[#EADBC8] text-[#2D2D2D] placeholder-[#aaa] text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  />
                </div>

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
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="+91 98765 43210"
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

                <div>
                  <label
                    className="block text-xs font-medium text-[#666] mb-1.5 tracking-wide uppercase"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full px-4 py-3 rounded-xl bg-white/60 border border-[#EADBC8] text-[#2D2D2D] placeholder-[#aaa] text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full text-white font-semibold text-sm shadow-lg shadow-[#D4AF37]/25 transition-all hover:shadow-xl hover:shadow-[#D4AF37]/30 hover:scale-[1.02] active:scale-[0.98] mt-2"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    background: "linear-gradient(135deg, #D4AF37 0%, #E8A9A9 100%)",
                  }}
                >
                  Next →
                </button>
              </form>
            )}

            {/* STEP 2: Profile Details */}
            {step === 2 && (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label
                    className="block text-xs font-medium text-[#666] mb-1.5 tracking-wide uppercase"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Nationality
                  </label>
                  <select
                    required
                    value={nationality}
                    onChange={(e) => setNationality(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/60 border border-[#EADBC8] text-[#2D2D2D] text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    <option value="">Select Nationality</option>
                    <option value="Indian">Indian</option>
                    <option value="NRI">NRI</option>
                    <option value="US">US</option>
                    <option value="UK">UK</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                    <option value="UAE">UAE</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    className="block text-xs font-medium text-[#666] mb-1.5 tracking-wide uppercase"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Religion
                  </label>
                  <select
                    required
                    value={religion}
                    onChange={(e) => setReligion(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/60 border border-[#EADBC8] text-[#2D2D2D] text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    <option value="">Select Religion</option>
                    <option value="Muslim">Muslim</option>
                    <option value="Hindu">Hindu</option>
                    <option value="Christian">Christian</option>
                    <option value="Sikh">Sikh</option>
                    <option value="Buddhist">Buddhist</option>
                    <option value="Jain">Jain</option>
                    <option value="Jewish">Jewish</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    className="block text-xs font-medium text-[#666] mb-1.5 tracking-wide uppercase"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Age Range
                  </label>
                  <select
                    required
                    value={ageRange}
                    onChange={(e) => setAgeRange(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/60 border border-[#EADBC8] text-[#2D2D2D] text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    <option value="">Select Age Range</option>
                    <option value="18-25">18-25</option>
                    <option value="26-35">26-35</option>
                    <option value="36-45">36-45</option>
                    <option value="46-55">46-55</option>
                    <option value="56-65">56-65</option>
                    <option value="65+">65+</option>
                  </select>
                </div>

                <div>
                  <label
                    className="block text-xs font-medium text-[#666] mb-1.5 tracking-wide uppercase"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Current Location
                  </label>
                  <input
                    type="text"
                    required
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="City, Country"
                    className="w-full px-4 py-3 rounded-xl bg-white/60 border border-[#EADBC8] text-[#2D2D2D] placeholder-[#aaa] text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  />
                </div>

                <div className="flex items-start gap-3 mt-4">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={acceptTerms}
                    onChange={(e) => setAcceptTerms(e.target.checked)}
                    className="w-4 h-4 mt-1 rounded border-[#EADBC8] accent-[#D4AF37] cursor-pointer"
                  />
                  <label
                    htmlFor="terms"
                    className="text-xs text-[#666] flex items-center gap-1"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    I agree to the{" "}
                    <button
                      type="button"
                      onClick={() => setShowTermsModal(true)}
                      className="text-[#D4AF37] hover:text-[#E8A9A9] underline transition-colors"
                    >
                      Terms and Conditions
                    </button>
                  </label>
                </div>

                <div className="flex gap-3 mt-4">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex-1 py-3.5 rounded-full text-[#D4AF37] font-semibold text-sm border-2 border-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    ← Back
                  </button>
                  <button
                    type="submit"
                    disabled={!acceptTerms}
                    className="flex-1 py-3.5 rounded-full text-white font-semibold text-sm shadow-lg shadow-[#D4AF37]/25 transition-all hover:shadow-xl hover:shadow-[#D4AF37]/30 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      background: "linear-gradient(135deg, #D4AF37 0%, #E8A9A9 100%)",
                    }}
                  >
                    Create Account
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Footer link */}
          <p
            className="text-center text-sm text-[#888] mt-8"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {step === 1 ? (
              <>
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-[#D4AF37] font-medium hover:text-[#E8A9A9] transition-colors"
                >
                  Log in
                </Link>
              </>
            ) : (
              <>
                By creating an account, you agree to our{" "}
                <button
                  type="button"
                  onClick={() => setShowTermsModal(true)}
                  className="text-[#D4AF37] font-medium hover:text-[#E8A9A9] transition-colors"
                >
                  Terms and Conditions
                </button>
              </>
            )}
          </p>
        </div>
      </div>

      {/* Terms & Conditions Modal */}
      {showTermsModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div
            className="rounded-3xl bg-white max-w-2xl w-full max-h-[80vh] overflow-y-auto p-8 shadow-2xl"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-[#2D2D2D]">Terms and Conditions</h2>
              <button
                onClick={() => setShowTermsModal(false)}
                className="text-[#888] hover:text-[#2D2D2D] text-2xl leading-none"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 text-[#666] text-sm leading-relaxed">
              <section>
                <h3 className="font-semibold text-[#2D2D2D] mb-2">1. Acceptance of Terms</h3>
                <p>
                  By creating an account and using Nikah's platform, you agree to comply with these Terms and Conditions. If you do not agree, please do not use our services.
                </p>
              </section>

              <section>
                <h3 className="font-semibold text-[#2D2D2D] mb-2">2. User Eligibility</h3>
                <p>
                  You must be at least 18 years old to use Nikah. You represent and warrant that all information provided is accurate, current, and complete.
                </p>
              </section>

              <section>
                <h3 className="font-semibold text-[#2D2D2D] mb-2">3. User Conduct</h3>
                <p>
                  You agree not to use Nikah for any unlawful purposes, harassment, or harmful activities. You will respect the privacy and dignity of other users.
                </p>
              </section>

              <section>
                <h3 className="font-semibold text-[#2D2D2D] mb-2">4. Privacy and Data Protection</h3>
                <p>
                  Your personal information will be protected in accordance with our Privacy Policy. We implement industry-standard security measures to safeguard your data. You have control over what information you share and who can see your profile.
                </p>
              </section>

              <section>
                <h3 className="font-semibold text-[#2D2D2D] mb-2">5. Profile Information</h3>
                <p>
                  You are responsible for maintaining the confidentiality of your account credentials. Any profile information must be truthful and not misleading. We reserve the right to remove profiles that violate these terms.
                </p>
              </section>

              <section>
                <h3 className="font-semibold text-[#2D2D2D] mb-2">6. Communication</h3>
                <p>
                  Nikah facilitates communication between users. We are not responsible for the content of user-generated messages. Users are responsible for their interactions and any outcomes arising from them.
                </p>
              </section>

              <section>
                <h3 className="font-semibold text-[#2D2D2D] mb-2">7. Membership and Payments</h3>
                <p>
                  Membership features and pricing may vary. Payments are processed securely. Refund policies are subject to the terms specified at the time of purchase.
                </p>
              </section>

              <section>
                <h3 className="font-semibold text-[#2D2D2D] mb-2">8. Disclaimer of Warranties</h3>
                <p>
                  Nikah is provided on an "as-is" basis. We make no warranties regarding the accuracy of user profiles or the compatibility between users. We are not responsible for any outcomes of connections made through our platform.
                </p>
              </section>

              <section>
                <h3 className="font-semibold text-[#2D2D2D] mb-2">9. Limitation of Liability</h3>
                <p>
                  To the fullest extent permitted by law, Nikah shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the platform.
                </p>
              </section>

              <section>
                <h3 className="font-semibold text-[#2D2D2D] mb-2">10. Modification of Terms</h3>
                <p>
                  We reserve the right to modify these Terms and Conditions at any time. Continued use of the platform constitutes acceptance of updated terms.
                </p>
              </section>

              <section>
                <h3 className="font-semibold text-[#2D2D2D] mb-2">11. Termination</h3>
                <p>
                  We reserve the right to terminate or suspend your account if you violate these terms or engage in harmful behavior.
                </p>
              </section>

              <section>
                <h3 className="font-semibold text-[#2D2D2D] mb-2">12. Governing Law</h3>
                <p>
                  These Terms and Conditions are governed by the laws of India. Any disputes shall be resolved in accordance with Indian law.
                </p>
              </section>
            </div>

            <div className="flex gap-3 mt-8">
              <button
                onClick={() => setShowTermsModal(false)}
                className="flex-1 px-6 py-3 rounded-full border border-[#D4AF37] text-[#D4AF37] font-semibold hover:bg-[#F8C8DC]/20 transition-all"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setAcceptTerms(true);
                  setShowTermsModal(false);
                }}
                className="flex-1 px-6 py-3 rounded-full text-white font-semibold transition-all"
                style={{
                  background: "linear-gradient(135deg, #D4AF37 0%, #E8A9A9 100%)",
                }}
              >
                I Agree
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

