import React, { useState } from "react";
import { User, GraduationCap, Globe } from "lucide-react";

const courses = [
  "Engineering - B.Tech / M.Tech / BE / UG/PG",
  "Management - MBA / BBA / PGDM / UG",
  "Medical - MBBS / BDS / BAMS / UG/PG",
  "Law - LLB / LLM / BA LLB / UG/PG",
  "Commerce - B.Com / M.Com / CA / UG/PG",
  "Science - B.Sc / M.Sc / BS / UG/PG",
  "Arts - BA / MA / BFA / UG/PG",
  "IT & Computer Science - BCA / MCA / B.Sc IT / UG/PG",
  "Design - B.Des / M.Des / UG/PG",
  "Hospitality - BHM / MHM / UG",
  "Aviation - B.Sc Aviation / Pilot Training",
  "Doctoral - PhD Programs / All disciplines",
];

const qualifications = [
  "10th",
  "12th",
  "Diploma",
  "Graduate",
  "Post Graduate",
];

const countries = [
  "India",
  "UK",
  "USA",
  "Canada",
  "Australia",
  "Germany",
];

const budgets = [
  "Below 5 Lakhs",
  "5 - 10 Lakhs",
  "10 - 20 Lakhs",
  "20+ Lakhs",
];

export default function ApplicationForm() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    qualification: "",
    course: "",
    country: "",
    budget: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isStepValid = () => {
    if (step === 1) {
      return formData.name && formData.phone && formData.email;
    }
    if (step === 2) {
      return formData.qualification && formData.course;
    }
    if (step === 3) {
      return formData.country && formData.budget;
    }
    return false;
  };

  const next = () => {
    if (isStepValid()) setStep((s) => Math.min(s + 1, 3));
  };

  const back = () => setStep((s) => Math.max(s - 1, 1));

  return (
    <section className="bg-[#f3f3f3] min-h-screen pb-20">
      {/* Header */}
      <div className="bg-[#243b6b] text-center py-16 text-white">
        <p className="text-sm tracking-widest text-yellow-400 mb-2">
          GET STARTED
        </p>
        <h1 className="text-4xl font-semibold">
          Start Your <span className="text-yellow-400">Application</span>
        </h1>
        <p className="text-gray-200 mt-2">
          Complete the steps below to begin your admission journey.
        </p>
      </div>

      {/* Stepper */}
      <div className="max-w-3xl mx-auto -mt-10 bg-white rounded-xl shadow p-4 flex justify-between items-center">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center gap-2">
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-md ${
                step === s
                  ? "bg-yellow-400 text-black"
                  : "bg-gray-100 text-gray-400"
              }`}
            >
              {s === 1 && <User size={18} />}
              {s === 2 && <GraduationCap size={18} />}
              {s === 3 && <Globe size={18} />}
            </div>
            <div className="text-sm">
              <p className="text-gray-400">Step {s}</p>
              <p
                className={`font-medium ${
                  step === s ? "text-black" : "text-gray-400"
                }`}
              >
                {s === 1 && "Personal Details"}
                {s === 2 && "Academic Info"}
                {s === 3 && "Preferences"}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Form */}
      <div className="max-w-3xl mx-auto mt-8 bg-white rounded-xl shadow p-8">
        {step === 1 && (
          <>
            <h2 className="text-xl font-semibold mb-4">Personal Details</h2>
            <input name="name" value={formData.name} onChange={handleChange} placeholder="Your full name" className="w-full border rounded-lg px-4 py-3 mb-4" />
            <div className="grid grid-cols-2 gap-4">
              <input name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 XXXXXXXXXX" className="border rounded-lg px-4 py-3" />
              <input name="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" className="border rounded-lg px-4 py-3" />
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="text-xl font-semibold mb-4">Academic Information</h2>
            <select name="qualification" value={formData.qualification} onChange={handleChange} className="w-full border rounded-lg px-4 py-3 mb-4">
              <option value="">Select your qualification</option>
              {qualifications.map((q, i) => (
                <option key={i}>{q}</option>
              ))}
            </select>

            <select name="course" value={formData.course} onChange={handleChange} className="w-full border rounded-lg px-4 py-3">
              <option value="">Select a course</option>
              {courses.map((c, i) => (
                <option key={i}>{c}</option>
              ))}
            </select>
          </>
        )}

        {step === 3 && (
          <>
            <h2 className="text-xl font-semibold mb-4">Your Preferences</h2>
            <select name="country" value={formData.country} onChange={handleChange} className="w-full border rounded-lg px-4 py-3 mb-4">
              <option value="">Select country</option>
              {countries.map((c, i) => (
                <option key={i}>{c}</option>
              ))}
            </select>

            <select name="budget" value={formData.budget} onChange={handleChange} className="w-full border rounded-lg px-4 py-3 mb-4">
              <option value="">Select budget</option>
              {budgets.map((b, i) => (
                <option key={i}>{b}</option>
              ))}
            </select>

            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell us more about your goals..." className="w-full border rounded-lg px-4 py-3" />
          </>
        )}

        {/* Buttons */}
        <div className="flex justify-between mt-8">
          <button onClick={back} className="text-gray-500">← Back</button>

          {step < 3 ? (
            <button
              onClick={next}
              disabled={!isStepValid()}
              className={`px-6 py-2 rounded-lg ${
                isStepValid()
                  ? "bg-yellow-400"
                  : "bg-gray-300 cursor-not-allowed"
              }`}
            >
              Next →
            </button>
          ) : (
            <button
              disabled={!isStepValid()}
              className={`px-6 py-2 rounded-lg ${
                isStepValid()
                  ? "bg-yellow-400"
                  : "bg-gray-300 cursor-not-allowed"
              }`}
            >
              Submit Application
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
