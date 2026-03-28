import React from "react";
import { useNavigate } from "react-router-dom";

export default function PopularPrograms() {
  const navigate = useNavigate();
  const programs = [
    {
      title: "Engineering (B.Tech / M.Tech)",
      desc: "Top engineering colleges across India with placement support.",
      students: "5000+ students placed →"
    },
    {
      title: "Management (MBA / BBA)",
      desc: "Premier business schools with industry connections.",
      students: "3500+ students placed →"
    },
    {
      title: "Medical & Allied Health (MBBS)",
      desc: "Government and private medical colleges.",
      students: "2000+ students placed →"
    },
    {
      title: "Law (LLB / LLM)",
      desc: "National law universities and top law colleges.",
      students: "1200+ students placed →"
    },
    {
      title: "Computer Science & IT",
      desc: "BCA, MCA, B.Sc CS and related programs.",
      students: "2800+ students placed →"
    },
    {
      title: "Commerce (B.Com / M.Com)",
      desc: "Top commerce programs with CA/CMA pathways.",
      students: "1500+ students placed →"
    },
    {
      title: "Arts & Humanities",
      desc: "BA, MA programs in leading universities.",
      students: "900+ students placed →"
    },
    {
      title: "PhD Programs",
      desc: "Doctoral research programs across disciplines.",
      students: "800+ students placed →"
    },
    {
      title: "Hotel Management",
      desc: "Top hospitality schools in India.",
      students: "600+ students placed →"
    },
    {
      title: "Pharmacy",
      desc: "B.Pharm and M.Pharm programs.",
      students: "700+ students placed →"
    },
    {
      title: "Distance / Online Programs",
      desc: "Flexible learning from recognized universities.",
      students: "1000+ students placed →"
    },
    {
      title: "Agriculture",
      desc: "B.Sc and M.Sc agriculture programs.",
      students: "400+ students placed →"
    }
  ];

  return (
    <section className="py-10 px-6 md:px-8 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
       <div className="text-center mb-12">
  <h1 className="text-4xl md:text-4xl font-bold mb-2">
    <span className="text-[#1e2a38]"># Popular</span>{' '}
    <span className="text-[#c5a46d]">Programs</span>
  </h1>
  <div className="w-24 h-1 bg-[#c5a46d] mx-auto rounded-full"></div>
</div>
        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {programs.map((program, index) => (
        <div 
  key={index}
  onClick={() => {
    if (program.title.includes("Engineering")) {
      navigate("/program/engineering");
    }
  }}
  className="cursor-pointer bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:border-[#c5a46d] group"
>
              <h3 className="text-lg font-bold group-hover:text-[#b3925a] mb-2  transition-colors">
                {program.title}
              </h3>
              <p className="text-gray-600 text-sm mb-3 leading-relaxed">{program.desc}</p>
              <p className="text-[#c5a46d] font-medium text-sm hover:underline cursor-pointer inline-block">
                {program.students}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}