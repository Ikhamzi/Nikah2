import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

// Hardcoded sample online people
const sampleOnlinePeople = [
    { id: 1, name: "Priya S.", age: 28, religion: "Muslim", nationality: "Indian", city: "Mumbai", image: "👩", status: "online" },
    { id: 2, name: "Anjali M.", age: 26, religion: "Hindu", nationality: "Indian", city: "Delhi", image: "👩", status: "online" },
    { id: 3, name: "Neha K.", age: 29, religion: "Sikh", nationality: "Indian", city: "Bangalore", image: "👩", status: "online" },
    { id: 4, name: "Divya R.", age: 27, religion: "Christian", nationality: "Indian", city: "Hyderabad", image: "👩", status: "online" },
    { id: 5, name: "Swati P.", age: 25, religion: "Muslim", nationality: "Indian", city: "Pune", image: "👩", status: "online" },
    { id: 6, name: "Sarah M.", age: 30, religion: "Jewish", nationality: "US", city: "New York", image: "👩", status: "online" },
    { id: 7, name: "Jessica L.", age: 28, religion: "Christian", nationality: "US", city: "Los Angeles", image: "👩", status: "online" },
    { id: 8, name: "Emily C.", age: 27, religion: "Buddhist", nationality: "US", city: "Chicago", image: "👩", status: "online" },
    { id: 9, name: "Rachel H.", age: 29, religion: "Christian", nationality: "US", city: "Houston", image: "👩", status: "online" },
    { id: 10, name: "Michelle D.", age: 26, religion: "Muslim", nationality: "US", city: "Phoenix", image: "👩", status: "online" },
    { id: 11, name: "Emma W.", age: 29, religion: "Christian", nationality: "UK", city: "London", image: "👩", status: "online" },
    { id: 12, name: "Sophie B.", age: 27, religion: "Muslim", nationality: "UK", city: "Manchester", image: "👩", status: "online" },
    { id: 13, name: "Charlotte K.", age: 28, religion: "Christian", nationality: "UK", city: "Birmingham", image: "👩", status: "online" },
    { id: 14, name: "Olivia T.", age: 30, religion: "Hindu", nationality: "UK", city: "Bristol", image: "👩", status: "online" },
    { id: 15, name: "Lucy J.", age: 26, religion: "Sikh", nationality: "UK", city: "Edinburgh", image: "👩", status: "online" },
    { id: 16, name: "Fatima A.", age: 27, religion: "Muslim", nationality: "UAE", city: "Dubai", image: "👩", status: "online" },
    { id: 17, name: "Aisha M.", age: 28, religion: "Muslim", nationality: "UAE", city: "Abu Dhabi", image: "👩", status: "online" },
    { id: 18, name: "Layla S.", age: 26, religion: "Muslim", nationality: "UAE", city: "Sharjah", image: "👩", status: "online" },
    { id: 19, name: "Noor K.", age: 29, religion: "Muslim", nationality: "UAE", city: "Ajman", image: "👩", status: "online" },
    { id: 20, name: "Hana R.", age: 25, religion: "Muslim", nationality: "UAE", city: "Fujairah", image: "👩", status: "online" },
];

export default function Explore() {
    const [searchQuery, setSearchQuery] = useState("");
    const [ageFilter, setAgeFilter] = useState("");
    const [religionFilter, setReligionFilter] = useState("");
    const [nationalityFilter, setNationalityFilter] = useState("");
    const [locationFilter, setLocationFilter] = useState("");
    const [chatsInitiated, setChatsInitiated] = useState(0);
    const [chatHistory, setChatHistory] = useState([]);
    const [isRegistered, setIsRegistered] = useState(false);

    // Filter people based on criteria
    const filteredPeople = sampleOnlinePeople.filter((person) => {
        const matchesSearch = person.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesAge = !ageFilter || person.age.toString() === ageFilter;
        const matchesReligion = !religionFilter || person.religion === religionFilter;
        const matchesNationality = !nationalityFilter || person.nationality === nationalityFilter;
        const matchesLocation = !locationFilter || person.city.toLowerCase().includes(locationFilter.toLowerCase());

        return matchesSearch && matchesAge && matchesReligion && matchesNationality && matchesLocation;
    });

    const handleInitiateChat = (person) => {
        if (!isRegistered && chatsInitiated >= 5) {
            alert("You've reached the limit of 5 free chats. Please upgrade to Premium to chat with more people.");
            return;
        }

        const newChat = {
            id: chatHistory.length + 1,
            person: person.name,
            timestamp: new Date().toLocaleTimeString(),
        };
        setChatHistory([...chatHistory, newChat]);
        setChatsInitiated(chatsInitiated + 1);
        alert(`Chat initiated with ${person.name}!`);
    };

    const religions = ["Muslim", "Hindu", "Sikh", "Christian", "Buddhist", "Jain", "Jewish"];
    const nationalities = ["Indian", "US", "UK", "Canada", "UAE", "Australia"];
    const ageRanges = ["18-25", "26-35", "36-45", "46-55"];

    return (
        <div
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            className="min-h-screen bg-[#FFF8F0] text-[#2D2D2D] overflow-x-hidden"
        >
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap');
        
        * { scroll-behavior: smooth; }

        ::-webkit-scrollbar { width: 5px; height: 5px; }
        ::-webkit-scrollbar-track { background: #FFF8F0; }
        ::-webkit-scrollbar-thumb { background: #D4AF37; border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: #E8A9A9; }

        .gold-text {
          background: linear-gradient(135deg, #D4AF37, #E8A9A9, #D4AF37);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }

        @keyframes shimmer { 0%{background-position:200% center} 100%{background-position:-200% center} }

        .card-hover { transition: transform 0.4s cubic-bezier(0.23,1,0.32,1), box-shadow 0.4s ease; }
        .card-hover:hover { transform: translateY(-6px); box-shadow: 0 20px 60px rgba(212,175,55,0.2); }

        .btn-primary {
          background: linear-gradient(135deg, #D4AF37 0%, #E8A9A9 100%);
          transition: all 0.3s ease;
        }
        .btn-primary:hover { transform: scale(1.02); }

        .filter-input {
          background: rgba(255,255,255,0.7);
          border: 1px solid rgba(212,175,55,0.2);
          transition: all 0.3s ease;
        }
        .filter-input:focus {
          border-color: #D4AF37;
          background: white;
          outline: none;
          ring: 2px rgba(212,175,55,0.2);
        }
      `}</style>

            <Navbar />

            {/* Hero Section */}
            <section className="pt-28 pb-12 px-6 bg-gradient-to-b from-[#FFF8F0] to-white">
                <div className="max-w-6xl mx-auto text-center mb-12">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        Explore <span className="gold-text">Verified People</span>
                    </h1>
                    <p className="text-lg text-[#666] max-w-2xl mx-auto" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        Browse through thousands of verified profiles and connect with people who match your preferences. Currently viewing {filteredPeople.length} people online.
                    </p>
                </div>

                {/* Search Bar */}
                <div className="max-w-4xl mx-auto mb-8">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search by name..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="filter-input w-full px-6 py-4 rounded-full text-sm focus:ring-2 focus:ring-[#D4AF37]/20"
                            style={{ fontFamily: "'DM Sans', sans-serif" }}
                        />
                        <span className="absolute right-6 top-1/2 -translate-y-1/2 text-xl">🔍</span>
                    </div>
                </div>

                {/* Filters */}
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                        <label className="block text-xs font-semibold text-[#666] mb-2 uppercase tracking-wide" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                            Age Range
                        </label>
                        <select
                            value={ageFilter}
                            onChange={(e) => setAgeFilter(e.target.value)}
                            className="filter-input w-full px-4 py-3 rounded-xl text-sm"
                            style={{ fontFamily: "'DM Sans', sans-serif" }}
                        >
                            <option value="">All Ages</option>
                            {ageRanges.map((range) => (
                                <option key={range} value={range}>{range}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-[#666] mb-2 uppercase tracking-wide" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                            Religion
                        </label>
                        <select
                            value={religionFilter}
                            onChange={(e) => setReligionFilter(e.target.value)}
                            className="filter-input w-full px-4 py-3 rounded-xl text-sm"
                            style={{ fontFamily: "'DM Sans', sans-serif" }}
                        >
                            <option value="">All Religions</option>
                            {religions.map((religion) => (
                                <option key={religion} value={religion}>{religion}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-[#666] mb-2 uppercase tracking-wide" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                            Nationality
                        </label>
                        <select
                            value={nationalityFilter}
                            onChange={(e) => setNationalityFilter(e.target.value)}
                            className="filter-input w-full px-4 py-3 rounded-xl text-sm"
                            style={{ fontFamily: "'DM Sans', sans-serif" }}
                        >
                            <option value="">All Nationalities</option>
                            {nationalities.map((nationality) => (
                                <option key={nationality} value={nationality}>{nationality}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-[#666] mb-2 uppercase tracking-wide" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                            Location
                        </label>
                        <input
                            type="text"
                            placeholder="City name..."
                            value={locationFilter}
                            onChange={(e) => setLocationFilter(e.target.value)}
                            className="filter-input w-full px-4 py-3 rounded-xl text-sm"
                            style={{ fontFamily: "'DM Sans', sans-serif" }}
                        />
                    </div>
                </div>
            </section>

            {/* Chat Limit Info */}
            <section className="px-6 py-4 bg-[#F8C8DC]/20 border-t border-[#E8A9A9]/30">
                <div className="max-w-6xl mx-auto">
                    <p className="text-sm text-[#666]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        {!isRegistered ? (
                            <>
                                <strong>Free Account:</strong> You can initiate {5 - chatsInitiated} more chats. ({chatsInitiated}/5)
                                <Link to="/signup" className="ml-3 text-[#D4AF37] font-semibold hover:text-[#E8A9A9]">
                                    Get Premium for unlimited chats →
                                </Link>
                            </>
                        ) : (
                            <><strong>Premium Account:</strong> Unlimited chats available!</>
                        )}
                    </p>
                </div>
            </section>

            {/* People Grid */}
            <section className="py-12 px-6">
                <div className="max-w-6xl mx-auto">
                    {filteredPeople.length === 0 ? (
                        <div className="text-center py-20">
                            <div className="text-6xl mb-4">🔍</div>
                            <h3 className="text-2xl font-bold text-[#2D2D2D] mb-2">No matches found</h3>
                            <p className="text-[#888]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                                Try adjusting your filters to see more people.
                            </p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredPeople.map((person) => (
                                <div
                                    key={person.id}
                                    className="card-hover rounded-3xl p-6 bg-white border border-[#EADBC8] hover:border-[#D4AF37] shadow-sm"
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex items-center gap-4">
                                            <div className="text-5xl">{person.image}</div>
                                            <div>
                                                <h3 className="text-lg font-bold text-[#2D2D2D]">{person.name}</h3>
                                                <p className="text-sm text-[#888]">{person.age} years</p>
                                                <div className="flex items-center gap-1 mt-2">
                                                    <span className="w-2 h-2 rounded-full bg-green-500" />
                                                    <span className="text-xs text-green-600" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                                                        Online now
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2 mb-6 p-4 rounded-xl bg-[#FFF8F0] border border-[#EADBC8]">
                                        <div className="text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                                            <span className="font-semibold text-[#666]">Religion:</span> <span className="text-[#D4AF37]">{person.religion}</span>
                                        </div>
                                        <div className="text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                                            <span className="font-semibold text-[#666]">Nationality:</span> <span className="text-[#D4AF37]">{person.nationality}</span>
                                        </div>
                                        <div className="text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                                            <span className="font-semibold text-[#666]">Location:</span> <span className="text-[#D4AF37]">{person.city}</span>
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => handleInitiateChat(person)}
                                        disabled={!isRegistered && chatsInitiated >= 5}
                                        className="w-full py-3 rounded-full text-white font-semibold text-sm btn-primary disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                                        style={{
                                            fontFamily: "'DM Sans', sans-serif",
                                            background: !isRegistered && chatsInitiated >= 5 ? "#ccc" : "linear-gradient(135deg, #D4AF37 0%, #E8A9A9 100%)",
                                        }}
                                    >
                                        💬 Initiate Chat
                                    </button>

                                    <Link
                                        to="/signup"
                                        className="block text-center w-full mt-3 py-2 rounded-full border border-[#D4AF37] text-[#D4AF37] text-sm font-medium hover:bg-[#D4AF37]/10 transition-colors"
                                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                                    >
                                        View Full Profile
                                    </Link>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-6 text-center">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Ready to find your <span className="gold-text italic">match?</span>
                    </h2>
                    <p className="text-lg text-[#666] mb-10" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        Create a verified profile and unlock unlimited chats with all these amazing people.
                    </p>
                    <Link to="/signup" className="btn-primary text-base font-semibold px-10 py-4 rounded-full text-white shadow-lg inline-block" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        Create Free Profile
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-[#EADBC8]/30 px-8 py-8 bg-white">
                <div className="max-w-6xl mx-auto text-center">
                    <p className="text-sm text-[#888]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        © 2025 Nikah. All rights reserved. |
                        <Link to="#" className="text-[#D4AF37] hover:text-[#E8A9A9] mx-2">Privacy Policy</Link> |
                        <Link to="#" className="text-[#D4AF37] hover:text-[#E8A9A9] mx-2">Terms & Conditions</Link>
                    </p>
                </div>
            </footer>
        </div>
    );
}
