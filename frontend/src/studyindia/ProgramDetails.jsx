import React from "react";

export default function ProgramDetails() {
  return (
    <div className="bg-gray-100 min-h-screen pb-20">

      {/* HERO SECTION (UNCHANGED) */}
      <div className="bg-[#1f3b63] text-center text-white py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Engineering Programs (B.Tech /{" "}
          <span className="text-[#c5a46d]">M.Tech</span>)
        </h1>

        <p className="text-base md:text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
          India has some of the finest engineering institutions in the world.
          From IITs to NITs and top private universities, Eduglobe helps you
          find the perfect engineering college.
        </p>
      </div>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto mt-12 space-y-6 px-4">

        {/* TOP 2 CARDS */}
        <div className="grid md:grid-cols-2 gap-5">

          {/* Duration */}
          <div className="bg-white border rounded-xl p-5 shadow-sm">
            <p className="text-lg font-semibold mb-1">Duration</p>
            <div className="w-10 h-[2px] bg-[#c5a46d] mb-2"></div>

            <p className="text-gray-600 text-[17px] leading-relaxed">
              4 years (B.Tech) / 2 years (M.Tech)
            </p>
          </div>

          {/* Fee */}
          <div className="bg-white border rounded-xl p-5 shadow-sm">
            <p className="text-lg font-semibold mb-1">Fee Range</p>
            <div className="w-10 h-[2px] bg-[#c5a46d] mb-2"></div>

            <p className="text-gray-600 text-[17px] leading-relaxed">
              ₹2 lakhs – ₹20 lakhs per year
            </p>
          </div>

        </div>

        {/* ELIGIBILITY */}
        <div className="bg-white border rounded-xl p-6 shadow-sm">
          <h3 className="font-semibold text-xl mb-2">Eligibility</h3>
          <div className="w-12 h-[2px] bg-[#c5a46d] mb-3"></div>

          <ul className="text-[17px] text-gray-600 space-y-2 leading-relaxed">
            <li>✓ 10+2 with Physics, Chemistry & Mathematics</li>
            <li>✓ JEE Main / JEE Advanced / State CET scores</li>
            <li>✓ Minimum 60% aggregate (varies by institution)</li>
          </ul>
        </div>

        {/* TOP UNIVERSITIES */}
        <div className="bg-white border rounded-xl p-6 shadow-sm">
          <h3 className="font-semibold text-xl mb-2">Top Universities</h3>
          <div className="w-12 h-[2px] bg-[#c5a46d] mb-4"></div>

          <div className="grid md:grid-cols-2 gap-3 text-[17px]">
            {[
              "IIT Delhi",
              "IIT Bombay",
              "NIT Trichy",
              "BITS Pilani",
              "VIT Vellore",
              "SRM University",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-100 px-4 py-2 rounded-md"
              >
                🎓 {item}
              </div>
            ))}
          </div>
        </div>

        {/* ADMISSION PROCESS */}
        <div className="bg-white border rounded-xl p-6 shadow-sm">
          <h3 className="font-semibold text-xl mb-2">Admission Process</h3>
          <div className="w-12 h-[2px] bg-[#c5a46d] mb-4"></div>

          <div className="space-y-3 text-[17px] text-gray-600">
            {[
              "Entrance exam qualification",
              "Counselling round",
              "Document verification",
              "Fee payment & confirmation",
            ].map((step, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="bg-[#c5a46d] text-white w-8 h-8 flex items-center justify-center rounded-full text-base font-semibold">
                  {i + 1}
                </span>
                {step}
              </div>
            ))}
          </div>
        </div>

        {/* BUTTON */}
        <div className="text-center pt-4">
          <button className="bg-[#c5a46d] px-8 py-3 rounded-md text-lg font-semibold hover:bg-yellow-500 transition">
            Apply Now
          </button>
        </div>

      </div>
    </div>
  );
}