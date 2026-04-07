"use client";

import React from "react";

const destinations = [
  {
    code: "IN",
    name: "India",
    desc: "Top private & government universities across major states.",
    uni: "200+ Universities",
    tag: "Affordable Excellence",
  },
  {
    code: "GB",
    name: "United Kingdom",
    desc: "Globally recognized degrees with shorter course duration.",
    uni: "50+ Universities",
    tag: "1-Year Masters",
  },
  {
    code: "CA",
    name: "Canada",
    desc: "Affordable education with post-study work opportunities.",
    uni: "45+ Universities",
    tag: "PR Pathway",
  },
  {
    code: "US",
    name: "USA",
    desc: "World-leading universities & research facilities.",
    uni: "80+ Universities",
    tag: "Top Rankings",
  },
  {
    code: "AU",
    name: "Australia",
    desc: "High employability & safe environment.",
    uni: "35+ Universities",
    tag: "Work While Study",
  },
  {
    code: "DE",
    name: "Germany",
    desc: "Low tuition public universities.",
    uni: "30+ Universities",
    tag: "Low Tuition",
  },
];

export default function StudyDestinations() {
  return (
    <section className="bg-[#1f3b64] py-10 px-4">
      <div className="max-w-7xl mx-auto text-center">

        {/* Heading */}
        <p className="text-[#c5a46d] text-xs tracking-[3px] uppercase mb-2">
          WHERE WILL YOU STUDY?
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Overseas <span className="text-[#c5a46d]">Education</span>
        </h2>

        <p className="text-gray-300 mt-3 mb-14">
          Explore top education destinations across the globe with Eduorbix.
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-7">
          {destinations.map((item, index) => (
            <div
              key={index}
              className="group relative bg-[#2a4a78] border border-[#3b5a8a] rounded-xl p-6 text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,0,0,0.4)]"
            >
              {/* Glow Border */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 border border-yellow-400"></div>

              {/* Badge */}
              <span className="absolute top-4 right-4 bg-[#c5a46d] text-xs px-3 py-1 rounded-full font-medium transition-all duration-300 group-hover:shadow-md group-hover:scale-105">
                {item.tag}
              </span>

              {/* Code */}
              <h3 className="text-2xl text-gray-300 font-semibold mb-2">
                {item.code}
              </h3>

              {/* Country */}
              <h4 className="text-white text-lg font-semibold">
                {item.name}
              </h4>

              {/* Description */}
              <p className="text-gray-300 text-sm mt-2 mb-6 leading-relaxed">
                {item.desc}
              </p>

              {/* Bottom */}
              <div className="flex items-center justify-between mt-auto">
                <span className="text-[#c5a46d] text-sm font-medium">
                  {item.uni}
                </span>

                {/* Arrow */}
                <div className="w-9 h-9 flex items-center justify-center rounded-full bg-[#3b5a8a] text-yellow-400 transition-all duration-300 group-hover:bg-yellow-400 group-hover:text-[#1f3b64] group-hover:translate-x-1">
                  →
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}