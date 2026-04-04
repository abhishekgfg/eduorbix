import React from "react";
import {
  Cpu,
  Briefcase,
  Stethoscope,
  Scale,
  Monitor,
  BookOpen,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const programs = [
  {
    icon: <Cpu size={24} />,
    title: "Engineering",
    courses: "B.Tech / M.Tech",
    stats: "5000+ placed",
    hover: "hover:bg-blue-50",
  },
  {
    icon: <Briefcase size={24} />,
    title: "Management",
    courses: "MBA / BBA",
    stats: "3500+ placed",
    hover: "hover:bg-green-50",
  },
  {
    icon: <Stethoscope size={24} />,
    title: "Medical",
    courses: "MBBS / BDS",
    stats: "2000+ placed",
    hover: "hover:bg-red-50",
  },
  {
    icon: <Scale size={24} />,
    title: "Law",
    courses: "LLB / LLM",
    stats: "1200+ placed",
    hover: "hover:bg-purple-50",
  },
  {
    icon: <Monitor size={24} />,
    title: "Computer Science",
    courses: "BCA / MCA / B.Sc IT",
    stats: "2800+ placed",
    hover: "hover:bg-cyan-50",
  },
  {
    icon: <BookOpen size={24} />,
    title: "Research",
    courses: "PhD Programs",
    stats: "800+ placed",
    hover: "hover:bg-yellow-50",
  },
];

export default function Programs() {
  return (
    <section className="bg-[#f5f7fb] py-10 md:py-10 px-4 md:px-10">

      {/* Heading */}
      <div className="text-center mb-12 md:mb-14">
        <p className="text-[#c5a46d] text-xs md:text-sm tracking-widest font-semibold mb-2">
          EXPLORE PROGRAMS
        </p>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0b2a4a]">
          Popular <span className="text-[#c5a46d]">Programs</span>
        </h2>

        <p className="text-gray-500 mt-3 md:mt-4 max-w-2xl mx-auto text-sm md:text-base px-2">
          Explore programs that match your career goals across top universities.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-6xl mx-auto">

        {programs.map((item, i) => (
          <div
            key={i}
            className={`group p-6 rounded-2xl border border-gray-200 bg-white 
            transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${item.hover}`}
          >

            {/* Top Row */}
            <div className="flex items-center justify-between mb-4">

              {/* Icon */}
              <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-[#fbf3e6] text-[#c5a46d] 
              group-hover:scale-110 transition">
                {item.icon}
              </div>

              {/* Arrow */}
              <div className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-gray-400 
              group-hover:bg-[#c5a46d] group-hover:text-black transition">
                <ArrowRight size={16} />
              </div>

            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-[#c5a46d] mb-1">
              {item.title}
            </h3>

            {/* Courses */}
            <p className="text-sm text-gray-500 mb-3">
              {item.courses}
            </p>

            {/* Stats Badge */}
           <span className="inline-block text-xs font-semibold bg-[#faf3e3] text-[#c5a46d] px-3 py-1 rounded-full">
  {item.stats}
</span>

          </div>
        ))}

      </div>

      {/* Button */}
      <div className="text-center mt-10">
<Link to="/courses">
        <button className="border border-[#c5a46d] text-[#c5a46d] px-6 py-2.5 rounded-lg font-medium 
        hover:bg-yellow-400 hover:text-black transition">
          View All Courses →
        </button>
</Link>
      </div>

    </section>
  );
}