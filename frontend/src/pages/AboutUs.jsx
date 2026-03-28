import React from "react";
import { useNavigate } from "react-router-dom";

export default function AboutUs() {
  const navigate = useNavigate();

  const leadershipTeam = [
    {
      name: "Rajesh Mehta",
      designation: "Founder & CEO",
      image: "/api/placeholder/120/120",
      description: "15+ years in education consulting"
    },
    {
      name: "Priya Sharma",
      designation: "Director - Admissions",
      image: "/api/placeholder/120/120",
      description: "Former university admissions head"
    },
    {
      name: "Dr. Vikram Singh",
      designation: "Head - Academic Partnerships",
      image: "/api/placeholder/120/120",
      description: "PhD in Education Leadership"
    }
  ];

  const networkLocations = [
    "Delhi NCR", "Mumbai", "Bengaluru", "Pune",
    "Ahmedabad", "Hyderabad", "Chennai", "Kolkata",
    "London (UK)", "Dubai (UAE)", "Toronto (Canada)"
  ];

  const certifications = [
    "ISO 9001:2015 Certified",
    "Member - AIEC (Association of Indian Education Consultants)",
    "British Council Certified Agent",
    "ICEF Trained Counsellor"
  ];

  const accreditations = [
    "Registered with Ministry of Corporate Affairs",
    "PSARA Certified",
    "UAE KHDA Approved Partner",
    "Australian Education Association Member"
  ];

  return (
    <section className="py-10 px-6 md:px-8 lg:px-12 bg-[#f5f5f5] min-h-screen">
      <div className="max-w-1xl mx-auto">
        {/* Back Button */}
        
        {/* Header Section */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-[#0A1F44] to-[#1F3A6E] p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">About Eduorbix</h1>
            <div className="w-20 h-1 bg-[#C9A227] mb-4"></div>
            <p className="text-white text-lg opacity-90 max-w-3xl">
              Empowering students with reliable, transparent, and professional education consultancy services since 2015.
            </p>
          </div>
          
          <div className="p-8">
            <p className="text-gray-700 leading-relaxed text-lg">
              Eduorbix is a professional education consultancy platform dedicated to helping students secure admission 
              in reputed colleges and universities across India and globally. We simplify the entire admission journey — 
              from course selection and profile evaluation to documentation, applications, scholarships, and visa guidance.
            </p>
          </div>
        </div>

        {/* Vision & Mission - Two Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Vision Card */}
          <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-t-[#C9A227]">
            <h2 className="text-2xl font-bold text-[#0A1F44] mb-3">Our Vision</h2>
            <div className="w-12 h-0.5 bg-[#C9A227] mb-4"></div>
            <p className="text-gray-700 leading-relaxed">
              To become a globally trusted education advisory platform that bridges the gap between 
              aspiring students and their dream academic institutions worldwide.
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-t-[#C9A227]">
            <h2 className="text-2xl font-bold text-[#0A1F44] mb-3">Our Mission</h2>
            <div className="w-12 h-0.5 bg-[#C9A227] mb-4"></div>
            <p className="text-gray-700 leading-relaxed">
              To empower students with the right information, personalized guidance, and structured 
              support systems that enable academic success and career growth.
            </p>
          </div>
        </div>

        {/* Leadership Team */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-[#0A1F44] mb-2">Leadership Team</h2>
          <div className="w-16 h-0.5 bg-[#C9A227] mb-6"></div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {leadershipTeam.map((leader, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">
                  <img 
                    src={leader.image} 
                    alt={leader.name}
                    className="w-28 h-28 rounded-full border-4 border-[#C9A227] object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#0A1F44]">{leader.name}</h3>
                <p className="text-[#C9A227] font-medium mb-2">{leader.designation}</p>
                <p className="text-gray-600 text-sm">{leader.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Network */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-[#0A1F44] mb-2">Our Network</h2>
          <div className="w-16 h-0.5 bg-[#C9A227] mb-6"></div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {networkLocations.map((location, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="text-[#C9A227] text-xl">•</span>
                <span className="text-gray-700">{location}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-[#f8f8f8] rounded-lg">
            <p className="text-gray-700">
              <span className="font-bold text-[#0A1F44]">Plus:</span> Global partner network across 15+ countries with 100+ university collaborations
            </p>
          </div>
        </div>

        {/* Certifications & Accreditations - Two Cards Side by Side */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Certifications */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold text-[#0A1F44] mb-3 flex items-center gap-2">
              <span className="text-[#C9A227]">✓</span> Certifications
            </h3>
            <div className="space-y-3">
              {certifications.map((item, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="text-[#C9A227] mt-1">•</span>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Accreditations */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold text-[#0A1F44] mb-3 flex items-center gap-2">
              <span className="text-[#C9A227]">✓</span> Accreditations
            </h3>
            <div className="space-y-3">
              {accreditations.map((item, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="text-[#C9A227] mt-1">•</span>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-[#0A1F44] to-[#1F3A6E] rounded-xl shadow-md p-8 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-[#C9A227]">15+</div>
              <div className="text-white text-sm">Years of Excellence</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#C9A227]">25k+</div>
              <div className="text-white text-sm">Students Placed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#C9A227]">100+</div>
              <div className="text-white text-sm">University Partners</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#C9A227]">15+</div>
              <div className="text-white text-sm">Countries</div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-8">
          <button 
            onClick={() => navigate("/contact-us")}
            className="px-10 py-3 bg-[#C9A227] text-[#0A1F44] font-semibold rounded-md hover:bg-[#0A1F44] hover:text-white transition-all duration-300 shadow-md border-2 border-[#C9A227]"
          >
            Connect With Our Team
          </button>
        </div>

        {/* Gold line at bottom */}
        <div className="mt-8 flex justify-center">
          <div className="w-16 h-0.5 bg-[#C9A227]"></div>
        </div>
      </div>
    </section>
  );
}