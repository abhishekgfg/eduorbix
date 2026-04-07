// import React from "react";

// export default function ProgramDetails() {
//   return (
//     <div className="bg-gray-100 min-h-screen pb-20">

//       {/* HERO SECTION (UNCHANGED) */}
//       <div className="bg-[#1f3b63] text-center text-white py-20 px-4">
//         <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
//           Engineering Programs (B.Tech /{" "}
//           <span className="text-[#c5a46d]">M.Tech</span>)
//         </h1>

//         <p className="text-base md:text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
//           India has some of the finest engineering institutions in the world.
//           From IITs to NITs and top private universities, Eduglobe helps you
//           find the perfect engineering college.
//         </p>
//       </div>

//       {/* CONTENT */}
//       <div className="max-w-4xl mx-auto mt-12 space-y-6 px-4">

//         {/* TOP 2 CARDS */}
//         <div className="grid md:grid-cols-2 gap-5">

//           {/* Duration */}
//           <div className="bg-white border rounded-xl p-5 shadow-sm">
//             <p className="text-lg font-semibold mb-1">Duration</p>
//             <div className="w-10 h-[2px] bg-[#c5a46d] mb-2"></div>

//             <p className="text-gray-600 text-[17px] leading-relaxed">
//               4 years (B.Tech) / 2 years (M.Tech)
//             </p>
//           </div>

//           {/* Fee */}
//           <div className="bg-white border rounded-xl p-5 shadow-sm">
//             <p className="text-lg font-semibold mb-1">Fee Range</p>
//             <div className="w-10 h-[2px] bg-[#c5a46d] mb-2"></div>

//             <p className="text-gray-600 text-[17px] leading-relaxed">
//               ₹2 lakhs – ₹20 lakhs per year
//             </p>
//           </div>

//         </div>

//         {/* ELIGIBILITY */}
//         <div className="bg-white border rounded-xl p-6 shadow-sm">
//           <h3 className="font-semibold text-xl mb-2">Eligibility</h3>
//           <div className="w-12 h-[2px] bg-[#c5a46d] mb-3"></div>

//           <ul className="text-[17px] text-gray-600 space-y-2 leading-relaxed">
//             <li>✓ 10+2 with Physics, Chemistry & Mathematics</li>
//             <li>✓ JEE Main / JEE Advanced / State CET scores</li>
//             <li>✓ Minimum 60% aggregate (varies by institution)</li>
//           </ul>
//         </div>

//         {/* TOP UNIVERSITIES */}
//         <div className="bg-white border rounded-xl p-6 shadow-sm">
//           <h3 className="font-semibold text-xl mb-2">Top Universities</h3>
//           <div className="w-12 h-[2px] bg-[#c5a46d] mb-4"></div>

//           <div className="grid md:grid-cols-2 gap-3 text-[17px]">
//             {[
//               "IIT Delhi",
//               "IIT Bombay",
//               "NIT Trichy",
//               "BITS Pilani",
//               "VIT Vellore",
//               "SRM University",
//             ].map((item, i) => (
//               <div
//                 key={i}
//                 className="bg-gray-100 px-4 py-2 rounded-md"
//               >
//                 🎓 {item}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* ADMISSION PROCESS */}
//         <div className="bg-white border rounded-xl p-6 shadow-sm">
//           <h3 className="font-semibold text-xl mb-2">Admission Process</h3>
//           <div className="w-12 h-[2px] bg-[#c5a46d] mb-4"></div>

//           <div className="space-y-3 text-[17px] text-gray-600">
//             {[
//               "Entrance exam qualification",
//               "Counselling round",
//               "Document verification",
//               "Fee payment & confirmation",
//             ].map((step, i) => (
//               <div key={i} className="flex items-center gap-3">
//                 <span className="bg-[#c5a46d] text-white w-8 h-8 flex items-center justify-center rounded-full text-base font-semibold">
//                   {i + 1}
//                 </span>
//                 {step}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* BUTTON */}
//         <div className="text-center pt-4">
//           <button className="bg-[#c5a46d] px-8 py-3 rounded-md text-lg font-semibold hover:bg-yellow-500 transition">
//             Apply Now
//           </button>
//         </div>

//       </div>
//     </div>
//   );
// }






import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";

export default function ProgramDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [program, setProgram] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProgramDetails();
  }, [id]);

  const fetchProgramDetails = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get(`/study-india-programs/${id}`);
      if (response.data.success) {
        setProgram(response.data.data);
      } else {
        setError("Program not found");
      }
    } catch (err) {
      console.error("Error fetching program details:", err);
      if (err.response?.status === 404) {
        setError("Program not found");
      } else {
        setError(err.response?.data?.message || "Failed to fetch program details");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleApplyNow = () => {
    navigate("/application-form", { state: { program: program.title } });
  };

  if (loading) {
    return (
      <div className="bg-gray-100 min-h-screen pb-20">
        <div className="flex justify-center items-center h-96">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#c5a46d]"></div>
        </div>
      </div>
    );
  }

  if (error || !program) {
    return (
      <div className="bg-gray-100 min-h-screen pb-20">
        <div className="max-w-4xl mx-auto mt-12 px-4 text-center">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-red-500 mb-4">Error</h2>
            <p className="text-gray-600 mb-6">{error || "Program not found"}</p>
            <button
              onClick={() => navigate("/study-in-india")}
              className="bg-[#c5a46d] px-6 py-2 rounded-md text-white hover:bg-[#b3925a] transition"
            >
              Back to Programs
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen pb-20">
      {/* HERO SECTION */}
      <div className="bg-[#1f3b63] text-center text-white py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          {program.title}
        </h1>
        <p className="text-base md:text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
          {program.description}
        </p>
      </div>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto mt-12 space-y-6 px-4">
        {/* Duration and Fee Cards */}
        <div className="grid md:grid-cols-2 gap-5">
          {program.duration && (
            <div className="bg-white border rounded-xl p-5 shadow-sm">
              <p className="text-lg font-semibold mb-1">Duration</p>
              <div className="w-10 h-[2px] bg-[#c5a46d] mb-2"></div>
              <p className="text-gray-600 text-[17px] leading-relaxed">
                {program.duration}
              </p>
            </div>
          )}

          {program.fee && (
            <div className="bg-white border rounded-xl p-5 shadow-sm">
              <p className="text-lg font-semibold mb-1">Fee Range</p>
              <div className="w-10 h-[2px] bg-[#c5a46d] mb-2"></div>
              <p className="text-gray-600 text-[17px] leading-relaxed">
                {program.fee}
              </p>
            </div>
          )}
        </div>

        {/* Eligibility */}
        {program.eligibility && program.eligibility.length > 0 && (
          <div className="bg-white border rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold text-xl mb-2">Eligibility</h3>
            <div className="w-12 h-[2px] bg-[#c5a46d] mb-3"></div>
            <ul className="text-[17px] text-gray-600 space-y-2 leading-relaxed">
              {program.eligibility.map((item, index) => (
                <li key={index}>✓ {item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Top Universities */}
        {program.universities && program.universities.length > 0 && (
          <div className="bg-white border rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold text-xl mb-2">Programs</h3>
            <div className="w-12 h-[2px] bg-[#c5a46d] mb-4"></div>
            <div className="grid md:grid-cols-2 gap-3 text-[17px]">
              {program.universities.map((uni, index) => (
                <div key={index} className="bg-gray-100 px-4 py-2 rounded-md">
                  🎓 {uni}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Admission Process */}
        {program.admission && program.admission.length > 0 && (
          <div className="bg-white border rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold text-xl mb-2">Admission Process</h3>
            <div className="w-12 h-[2px] bg-[#c5a46d] mb-4"></div>
            <div className="space-y-3 text-[17px] text-gray-600">
              {program.admission.map((step, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="bg-[#c5a46d] text-white w-8 h-8 flex items-center justify-center rounded-full text-base font-semibold">
                    {index + 1}
                  </span>
                  {step}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Apply Button */}
        <div className="text-center pt-4">
          <button
            onClick={handleApplyNow}
            className="bg-[#c5a46d] px-8 py-3 rounded-md text-lg font-semibold hover:bg-yellow-500 transition"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}