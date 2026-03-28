import React from "react";
import { useNavigate } from "react-router-dom";
import UKHero from "./UKHero";

export default function StudyUK() {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <UKHero />

      {/* Main Content */}
      <section className="py-10 px-6 md:px-8 lg:px-12 bg-[#f0f0f0] min-h-screen">
        <div className="max-w-4xl mx-auto">

          {/* Why Study Card */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-6">
            <h1 className="text-2xl font-bold text-[#1e2a38] mb-2">
              Why Study in United Kingdom?
            </h1>
            <div className="w-12 h-0.5 bg-[#c5a46d] mb-3"></div>
            <p className="text-gray-700 leading-relaxed">
              The UK offers globally recognized degrees with shorter course duration.
              Home to Oxford, Cambridge, and world-class research institutions,
              it's a top destination for Indian students seeking quality education.
            </p>
          </div>

          {/* Cost + Intake */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-lg font-bold text-[#1e2a38] mb-2">
                Cost of Living
              </h2>
              <div className="w-12 h-0.5 bg-[#c5a46d] mb-3"></div>
              <p className="text-gray-800 text-lg">
                £1,000 – £1,500 per month
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-lg font-bold text-[#1e2a38] mb-2">
                Intakes
              </h2>
              <div className="w-12 h-0.5 bg-[#c5a46d] mb-3"></div>
              <p className="text-gray-800">
                September (Main), January (Limited)
              </p>
            </div>

          </div>

          {/* Universities */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-6">
            <h2 className="text-xl font-bold text-[#1e2a38] mb-2">
              Top Universities
            </h2>
            <div className="w-12 h-0.5 bg-[#c5a46d] mb-4"></div>

            <div className="grid md:grid-cols-2 gap-4">
              
              <div className="space-y-2">
                <p className="bg-gray-200 px-3 py-2 rounded-md">• University of Oxford</p>
                <p className="bg-gray-200 px-3 py-2 rounded-md">• Imperial College London</p>
                <p className="bg-gray-200 px-3 py-2 rounded-md">• University of Manchester</p>
              </div>

              <div className="space-y-2">
                <p className="bg-gray-200 px-3 py-2 rounded-md">• University of Cambridge</p>
                <p className="bg-gray-200 px-3 py-2 rounded-md">• UCL</p>
                <p className="bg-gray-200 px-3 py-2 rounded-md">• University of Edinburgh</p>
              </div>

            </div>
          </div>

          {/* Visa + Scholarships */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-lg font-bold text-[#1e2a38] mb-2">
                Visa Process
              </h2>
              <div className="w-12 h-0.5 bg-[#c5a46d] mb-3"></div>
              <p className="text-gray-800">
                Tier 4 Student Visa with CAS letter from university
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-lg font-bold text-[#1e2a38] mb-2">
                Scholarships
              </h2>
              <div className="w-12 h-0.5 bg-[#c5a46d] mb-3"></div>
              <p className="text-gray-800">
                Chevening, GREAT Scholarships, Commonwealth Scholarships
              </p>
            </div>

          </div>

          {/* Apply Button */}
          <div className="text-center mt-8">
            <button
              onClick={() => navigate("/apply")}
              className="px-10 py-3 bg-[#c5a46d] text-white font-semibold rounded-md hover:bg-[#b3925a] transition-all duration-300 shadow-md"
            >
              Apply Now
            </button>
          </div>

          {/* Bottom Line */}
          <div className="mt-8 flex justify-center">
            <div className="w-16 h-0.5 bg-[#c5a46d]"></div>
          </div>

        </div>
      </section>
    </>
  );
}