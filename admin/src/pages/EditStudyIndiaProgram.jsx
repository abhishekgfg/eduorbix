import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";
import { FaArrowLeft, FaSave, FaPlus, FaTrash, FaSpinner, FaExclamationTriangle } from "react-icons/fa";

export default function EditStudyIndiaProgram() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [form, setForm] = useState({
    title: "",
    description: "",
    duration: "",
    fee: "",
    eligibility: [""],
    universities: [""],
    admission: [""],
  });

  useEffect(() => {
    fetchProgram();
  }, [id]);

  const fetchProgram = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get(`/study-india-programs/${id}`);
      if (response.data.success) {
        const program = response.data.data;
        setForm({
          title: program.title || "",
          description: program.description || "",
          duration: program.duration || "",
          fee: program.fee || "",
          eligibility: program.eligibility?.length ? program.eligibility : [""],
          universities: program.universities?.length ? program.universities : [""],
          admission: program.admission?.length ? program.admission : [""],
        });
      } else {
        setError("Failed to fetch program");
      }
    } catch (error) {
      console.error("Error fetching program:", error);
      setError(error.response?.data?.message || "Failed to fetch program");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleArrayChange = (type, index, value) => {
    const updated = [...form[type]];
    updated[index] = value;
    setForm({ ...form, [type]: updated });
  };

  const addField = (type) => {
    setForm({ ...form, [type]: [...form[type], ""] });
  };

  const removeField = (type, index) => {
    const updated = [...form[type]];
    updated.splice(index, 1);
    setForm({ ...form, [type]: updated });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      // Remove empty fields from arrays
      const cleanedForm = {
        ...form,
        eligibility: form.eligibility.filter((i) => i.trim() !== ""),
        universities: form.universities.filter((i) => i.trim() !== ""),
        admission: form.admission.filter((i) => i.trim() !== ""),
      };

      const response = await axiosInstance.put(`/study-india-programs/${id}`, cleanedForm);

      if (response.data.success) {
        alert("✅ Program Updated Successfully!");
        navigate("/admin/study-india-programs");
      } else {
        setError(response.data.message || "Failed to update program");
      }
    } catch (error) {
      console.error("Error updating program:", error);
      setError(error.response?.data?.message || "Failed to update program. Please check your connection.");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <FaSpinner className="animate-spin text-4xl text-[#FFD700]" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <button
            onClick={() => navigate("/admin/study-india-programs")}
            className="flex items-center gap-2 text-[#1f3b63] hover:text-[#c5a46d] transition-colors mb-4"
          >
            <FaArrowLeft className="text-sm" />
            <span className="text-sm">Back to Programs</span>
          </button>
          <h1 className="text-3xl font-bold text-gray-800">Edit Program</h1>
          <p className="text-gray-600 mt-1">Update program details</p>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3">
            <FaExclamationTriangle className="text-red-500" />
            <p className="text-red-700">{error}</p>
            <button onClick={() => setError(null)} className="ml-auto text-red-500 hover:text-red-700">
              <FaTrash />
            </button>
          </div>
        )}

        {/* Form */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Program Title *
              </label>
              <input
                type="text"
                name="title"
                placeholder="e.g., Engineering (B.Tech / M.Tech)"
                value={form.title}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-[#c5a46d] focus:ring-1 focus:ring-[#c5a46d] transition-colors"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                name="description"
                placeholder="Program description..."
                value={form.description}
                onChange={handleChange}
                rows="4"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-[#c5a46d] focus:ring-1 focus:ring-[#c5a46d] transition-colors"
              />
            </div>

            {/* Duration and Fee */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Duration
                </label>
                <input
                  type="text"
                  name="duration"
                  placeholder="e.g., 4 years (B.Tech) / 2 years (M.Tech)"
                  value={form.duration}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-[#c5a46d] focus:ring-1 focus:ring-[#c5a46d] transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Fee Range
                </label>
                <input
                  type="text"
                  name="fee"
                  placeholder="e.g., ₹2 lakhs – ₹20 lakhs per year"
                  value={form.fee}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-[#c5a46d] focus:ring-1 focus:ring-[#c5a46d] transition-colors"
                />
              </div>
            </div>

            {/* Eligibility */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Eligibility Criteria
              </label>
              {form.eligibility.map((item, i) => (
                <div key={i} className="flex gap-2 mb-2">
                  <input
                    type="text"
                    placeholder={`Eligibility ${i + 1}`}
                    value={item}
                    onChange={(e) => handleArrayChange("eligibility", i, e.target.value)}
                    className="flex-1 border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-[#c5a46d] focus:ring-1 focus:ring-[#c5a46d] transition-colors"
                  />
                  {form.eligibility.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeField("eligibility", i)}
                      className="px-3 py-2 text-red-600 hover:text-red-800 transition-colors"
                    >
                      <FaTrash />
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={() => addField("eligibility")}
                className="text-sm text-[#c5a46d] hover:text-[#b3925a] flex items-center gap-1 mt-2"
              >
                <FaPlus className="text-xs" />
                Add Eligibility
              </button>
            </div>

            {/* Universities */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Top Universities
              </label>
              {form.universities.map((item, i) => (
                <div key={i} className="flex gap-2 mb-2">
                  <input
                    type="text"
                    placeholder={`University ${i + 1}`}
                    value={item}
                    onChange={(e) => handleArrayChange("universities", i, e.target.value)}
                    className="flex-1 border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-[#c5a46d] focus:ring-1 focus:ring-[#c5a46d] transition-colors"
                  />
                  {form.universities.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeField("universities", i)}
                      className="px-3 py-2 text-red-600 hover:text-red-800 transition-colors"
                    >
                      <FaTrash />
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={() => addField("universities")}
                className="text-sm text-[#c5a46d] hover:text-[#b3925a] flex items-center gap-1 mt-2"
              >
                <FaPlus className="text-xs" />
                Add University
              </button>
            </div>

            {/* Admission Steps */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Admission Process
              </label>
              {form.admission.map((item, i) => (
                <div key={i} className="flex gap-2 mb-2">
                  <input
                    type="text"
                    placeholder={`Step ${i + 1}`}
                    value={item}
                    onChange={(e) => handleArrayChange("admission", i, e.target.value)}
                    className="flex-1 border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-[#c5a46d] focus:ring-1 focus:ring-[#c5a46d] transition-colors"
                  />
                  {form.admission.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeField("admission", i)}
                      className="px-3 py-2 text-red-600 hover:text-red-800 transition-colors"
                    >
                      <FaTrash />
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={() => addField("admission")}
                className="text-sm text-[#c5a46d] hover:text-[#b3925a] flex items-center gap-1 mt-2"
              >
                <FaPlus className="text-xs" />
                Add Step
              </button>
            </div>

            {/* Form Actions */}
            <div className="flex justify-end gap-3 pt-4 border-t">
              <button
                type="button"
                onClick={() => navigate("/admin/study-india-programs")}
                className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                disabled={submitting}
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={submitting}
                className="px-6 py-3 bg-gradient-to-r from-[#1f3b63] to-[#16304d] text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2 disabled:opacity-50"
              >
                {submitting ? <FaSpinner className="animate-spin" /> : <FaSave />}
                Update Program
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}