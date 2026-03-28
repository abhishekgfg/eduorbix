import React from "react";
import { MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

const universities = [
  {
    country: "IN",
    rank: "Top 10",
    name: "IIT Delhi",
    location: "New Delhi, India",
    type: "Public",
    tags: ["Engineering", "Science", "Management"],
  },
  {
    country: "IN",
    rank: "Top 20",
    name: "BITS Pilani",
    location: "Rajasthan, India",
    type: "Private",
    tags: ["Engineering", "Science", "Pharmacy"],
  },
  {
    country: "IN",
    rank: "Top 15",
    name: "VIT Vellore",
    location: "Tamil Nadu, India",
    type: "Private",
    tags: ["Engineering", "Management", "Law"],
  },
  {
    country: "GB",
    rank: "Top 5 Global",
    name: "University of Oxford",
    location: "Oxford, UK",
    type: "Public",
    tags: ["All Disciplines"],
  },
  {
    country: "CA",
    rank: "Top 25 Global",
    name: "University of Toronto",
    location: "Toronto, Canada",
    type: "Public",
    tags: ["Engineering", "Business", "Arts"],
  },
  {
    country: "US",
    rank: "Top 3 Global",
    name: "MIT",
    location: "Massachusetts, USA",
    type: "Private",
    tags: ["Engineering", "Science", "Business"],
  },
  {
    country: "AU",
    rank: "Top 35 Global",
    name: "University of Melbourne",
    location: "Melbourne, Australia",
    type: "Public",
    tags: ["Business", "Engineering", "Arts"],
  },
  {
    country: "DE",
    rank: "Top 50 Global",
    name: "TU Munich",
    location: "Munich, Germany",
    type: "Public",
    tags: ["Engineering", "Science", "IT"],
  },
];

export default function Universitylist() {
  const navigate = useNavigate();

  // Separate data
  const indianUniversities = universities.filter((u) => u.country === "IN");
  const abroadUniversities = universities.filter((u) => u.country !== "IN");

  const renderCards = (data, applyRoute) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {data.map((uni, index) => (
        <div
          key={index}
          className="group bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition relative"
        >
          {/* Top Row */}
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm font-semibold text-gray-700">
              {uni.country}
            </span>
            <span className="text-xs text-[#c5a46d] font-medium">
              ⭐ {uni.rank}
            </span>
          </div>

          {/* Name */}
          <h3 className="text-md font-semibold text-gray-900 mb-1">
            {uni.name}
          </h3>

          {/* Location */}
          <div className="flex items-center gap-1 text-sm text-gray-500 mb-2">
            <MapPin size={14} />
            <span>{uni.location}</span>
          </div>

          {/* Type */}
          <span className="inline-block text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md mb-3">
            {uni.type}
          </span>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {uni.tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs bg-[#fbf3e6] text-yellow-700 px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Apply Button */}
          <button
            onClick={() => navigate(applyRoute)}
            className="absolute bottom-4 left-5 text-sm text-[#c5a46d] font-medium opacity-0 group-hover:opacity-100 transition"
          >
            Apply Now →
          </button>
        </div>
      ))}
    </div>
  );

  return (
    <section className="bg-[#f5f5f5] py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* 🇮🇳 Indian Universities */}
        <h2 className="text-2xl font-bold mb-6">🇮🇳 Indian Universities</h2>
        {renderCards(indianUniversities, "/apply-india")}

        {/* 🌍 Abroad Universities */}
        <h2 className="text-2xl font-bold mt-12 mb-6">🌍 Abroad Universities</h2>
        {renderCards(abroadUniversities, "/apply-abroad")}

        {/* Bottom Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mt-12">
          <button
            onClick={() => navigate("/apply-india")}
            className="bg-green-600 text-white px-6 py-3 rounded-lg"
          >
            Apply for Indian Universities →
          </button>

          <button
            onClick={() => navigate("/apply-abroad")}
            className="bg-[#c5a46d] text-white px-6 py-3 rounded-lg"
          >
            Apply for Abroad Universities →
          </button>
        </div>

      </div>
    </section>
  );
}