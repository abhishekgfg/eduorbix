import React from "react";
import { useNavigate } from "react-router-dom";

export default function TopDestinations() {
  const navigate = useNavigate();

  const destinations = [
    {
      flag: "🇬🇧",
      country: "United Kingdom",
      desc: "Globally recognized degrees with shorter course duration.",
      features: [
        "1-year Master's programs",
        "Post-study work visa",
        "World-ranked universities"
      ],
      count: "50+ Universities →",
      route: "/study/uk"
    },
    {
      flag: "🇨🇦",
      country: "Canada",
      desc: "Affordable education with post-study work opportunities.",
      features: [
        "PR pathway",
        "Affordable tuition",
        "Multicultural environment"
      ],
      count: "45+ Universities →",
      route: "/study/canada"
    },
    {
      flag: "🇺🇸",
      country: "USA",
      desc: "World-leading universities & research facilities.",
      features: [
        "Ivy League access",
        "OPT/CPT opportunities",
        "Research excellence"
      ],
      count: "80+ Universities →",
      route: "/study/usa"
    },
    {
      flag: "🇦🇺",
      country: "Australia",
      desc: "High employability & safe environment.",
      features: [
        "Post-study work rights",
        "High quality of life",
        "Industry connections"
      ],
      count: "35+ Universities →",
      route: "/study/australia"
    },
    {
      flag: "🇩🇪",
      country: "Germany",
      desc: "Low tuition public universities.",
      features: [
        "Free/low tuition",
        "Strong engineering",
        "EU opportunities"
      ],
      count: "30+ Universities →",
      route: "/study/germany"
    },
    {
      flag: "🇮🇪",
      country: "Ireland",
      desc: "Tech hub with excellent post-study work options.",
      features: [
        "2-year stay back",
        "Tech industry hub",
        "English-speaking"
      ],
      count: "15+ Universities →",
      route: "/study/ireland"
    },
    {
      flag: "🇸🇬",
      country: "Singapore",
      desc: "Asia's premier education destination.",
      features: [
        "Global rankings",
        "Asia hub",
        "Industry integration"
      ],
      count: "10+ Universities →",
      route: "/study/singapore"
    },
    {
      flag: "🇦🇪",
      country: "UAE",
      desc: "Growing education hub with international exposure.",
      features: [
        "International campuses",
        "Tax-free earnings",
        "Cultural diversity"
      ],
      count: "20+ Universities →",
      route: "/study/uae"
    }
  ];

  return (
    <section className="py-10 px-6 md:px-8 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-4xl font-bold mb-2">
            <span className="text-[#1e2a38]"># Top</span>{' '}
            <span className="text-[#c5a46d]">Destinations</span>
          </h1>
          <div className="w-24 h-1 bg-[#c5a46d] mx-auto rounded-full"></div>
        </div>

        {/* Destinations Grid - 4x4 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {destinations.map((dest, index) => (
            <div 
              key={index} 
              onClick={() => navigate(dest.route)}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:border-[#c5a46d] group cursor-pointer"
            >
              {/* Flag and Country */}
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{dest.flag}</span>
                <h3 className="text-lg font-bold text-[#1e2a38] group-hover:text-[#c5a46d] transition-colors">
                  {dest.country}
                </h3>
              </div>
              
              {/* Description */}
              <p className="text-gray-600 text-sm mb-3 leading-relaxed">{dest.desc}</p>
              
              {/* Features List */}
              <ul className="space-y-1 mb-4">
                {dest.features.map((feature, i) => (
                  <li key={i} className="text-xs text-gray-500 flex items-center gap-2">
                    <span className="text-[#c5a46d]">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              {/* University Count */}
              <p className="text-[#c5a46d] font-medium text-sm hover:underline inline-block">
                {dest.count}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}