// import React, { useState } from "react";
// import { Menu, X, ChevronDown } from "lucide-react";
// import { Link } from "react-router-dom";

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="w-full">

//       {/* Top Bar */}
//       <div className="bg-[#0b2a4a] text-white text-xs md:text-sm px-4 md:px-6 py-2 flex justify-between items-center">
//         <div className="flex gap-4 items-center">
//           <span>📞 +91 XXXXXXXX</span>
//         </div>
//        <div className="flex gap-3 text-[11px] sm:text-sm">
//  <Link to="/partner">
//   <span className="cursor-pointer hover:text-yellow-400 transition">
//     Partner With Us
//   </span>
// </Link>

// <Link to="/for-agents">
//   <span className="cursor-pointer hover:text-yellow-400 transition">
//     For Agents
//   </span>
// </Link>
// </div>
//       </div>

//       {/* Main Navbar */}
//       <div className="bg-[#0d2f52] text-white px-4 md:px-8 py-4 flex items-center justify-between">

//         {/* Logo */}
//         <div className="text-xl md:text-2xl font-bold tracking-wide">
//           <span className="text-white">EDU</span>
//           <span className="text-yellow-400">ORBIX</span>
//         </div>

//         {/* Desktop Menu */}
//         <nav className="hidden md:flex items-center gap-4 text-[16px] font-medium">
//           <a href="/" className="hover:text-yellow-400">Home</a>
//             <a href="/about-us" className="hover:text-yellow-400">About Us</a>

//          <a href="/study-in-india" className="flex items-center gap-1 cursor-pointer hover:text-yellow-400">
//   Study in India <ChevronDown size={16} />
// </a>

//          <Link 
//   to="/study-abroad" 
//   className="flex items-center gap-1 cursor-pointer hover:text-yellow-400"
// >
//   Study Abroad <ChevronDown size={16} />
// </Link>
//           <a href="/courses" className="hover:text-yellow-400">Courses</a>
//           <a href="/universities" className="hover:text-yellow-400">Universities</a>
//           <a href="/services" className="hover:text-yellow-400">Services</a>
//           <a href="/scholarships" className="hover:text-yellow-400">Scholarships</a>
//           <a href="/blogs" className="hover:text-yellow-400">Blog</a>
//           <a href="/contact" className="hover:text-yellow-400">Contact</a>
//         </nav>

//         {/* Apply Button (Desktop) */}
//         <button className="hidden md:block bg-[#c5a46d] text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellow-500">
//           Apply Now
//         </button>

//         {/* Mobile Menu Icon */}
//         <div className="md:hidden">
//           <button onClick={() => setIsOpen(!isOpen)}>
//             {isOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-[#0d2f52] text-white px-6 py-6 space-y-4 text-lg">

//           <a href="#" className="block">Home</a>

//           <div className="flex justify-between items-center">
//             <span>Study in India</span>
//             <ChevronDown size={18} />
//           </div>

//           <div className="flex justify-between items-center">
//             <span>Study Abroad</span>
//             <ChevronDown size={18} />
//           </div>

//           <a href="#" className="block">Courses</a>
//           <a href="#" className="block">Universities</a>
//           <a href="#" className="block">Services</a>
//           <a href="#" className="block">Scholarships</a>
//           <a href="#" className="block">Blog</a>
//           <a href="#" className="block">Contact</a>

//           <button className="w-full bg-yellow-400 text-black py-2 rounded-lg font-semibold">
//             Apply Now
//           </button>
//         </div>
//       )}
//     </header>
//   );
// }


import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 👇 scroll detect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0d2f52]/95 backdrop-blur shadow-lg"
          : "bg-transparent"
      }`}
    >
      {/* Top Bar */}
      <div className="bg-[#0b2a4a] text-white text-xs md:text-sm px-4 md:px-6 py-2 flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <span>📞 +91 XXXXXXXX</span>
        </div>

        <div className="flex gap-3 text-[11px] sm:text-sm">
          <Link to="/partner">
            <span className="cursor-pointer hover:text-yellow-400 transition">
              Partner With Us
            </span>
          </Link>

          <Link to="/for-agents">
            <span className="cursor-pointer hover:text-yellow-400 transition">
              For Agents
            </span>
          </Link>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`text-white px-4 md:px-8 py-4 flex items-center justify-between transition-all duration-300 ${
          scrolled ? "bg-[#0b2a4a]" : "bg-[#0b2a4a]"
        }`}
      >
        {/* Logo */}
        <div className="text-xl md:text-2xl font-bold tracking-wide">
          <span className="text-white">EDU</span>
          <span className="text-yellow-400">ORBIX</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-4 text-[16px] font-medium">
          <Link to="/" className="hover:text-yellow-400">Home</Link>
          <Link to="/about-us" className="hover:text-yellow-400">About Us</Link>

          <Link to="/study-in-india" className="flex items-center gap-1 hover:text-yellow-400">
            Study in India <ChevronDown size={16} />
          </Link>

          <Link to="/study-abroad" className="flex items-center gap-1 hover:text-yellow-400">
            Study Abroad <ChevronDown size={16} />
          </Link>

          <Link to="/courses" className="hover:text-yellow-400">Courses</Link>
          <Link to="/universities" className="hover:text-yellow-400">Universities</Link>
          <Link to="/services" className="hover:text-yellow-400">Services</Link>
          <Link to="/scholarships" className="hover:text-yellow-400">Scholarships</Link>
          <Link to="/blogs" className="hover:text-yellow-400">Blog</Link>
          <Link to="/contact" className="hover:text-yellow-400">Contact</Link>
        </nav>

        {/* Apply Button */}
        <button className="hidden md:block bg-[#c5a46d] text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition">
          Apply Now
        </button>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0d2f52] text-white px-6 py-6 space-y-4 text-lg animate-slideDown">
          <Link to="/" className="block">Home</Link>

          <div className="flex justify-between items-center">
            <span>Study in India</span>
            <ChevronDown size={18} />
          </div>

          <div className="flex justify-between items-center">
            <span>Study Abroad</span>
            <ChevronDown size={18} />
          </div>

          <Link to="/courses" className="block">Courses</Link>
          <Link to="/universities" className="block">Universities</Link>
          <Link to="/services" className="block">Services</Link>
          <Link to="/scholarships" className="block">Scholarships</Link>
          <Link to="/blogs" className="block">Blog</Link>
          <Link to="/contact" className="block">Contact</Link>

          <button className="w-full bg-yellow-400 text-black py-2 rounded-lg font-semibold">
            Apply Now
          </button>
        </div>
      )}
    </header>
  );
}