import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ChevronRight
} from 'lucide-react';
import axiosInstance from '../api/axiosInstance';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear status when user types
    if (formStatus.message) setFormStatus({ type: '', message: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({ 
        type: 'error', 
        message: 'Please fill in all required fields' 
      });
      return;
    }

    // Email validation
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        type: 'error',
        message: 'Please enter a valid email address'
      });
      return;
    }

    setLoading(true);
    
    try {
      const response = await axiosInstance.post('/contact', formData);
      
      if (response.data.success) {
        setFormStatus({ 
          type: 'success', 
          message: response.data.message || 'Message sent successfully! We\'ll get back to you soon.' 
        });
        setSubmitted(true);
        
        // Reset form
        setFormData({ name: '', email: '', phone: '', message: '' });
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitted(false);
          setFormStatus({ type: '', message: '' });
        }, 5000);
      } else {
        setFormStatus({ 
          type: 'error', 
          message: response.data.message || 'Failed to send message. Please try again.' 
        });
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
      setFormStatus({ 
        type: 'error', 
        message: error.response?.data?.message || 'Network error. Please check your connection and try again.' 
      });
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Phone",
      details: ["+91 9523435814", "+91 98765 43211"],
      timing: "Mon-Sat 9am-7pm",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "WhatsApp",
      details: ["+91 9523435814"],
      timing: "Quick response",
      bgColor: "bg-green-50",
      iconBg: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Email",
      details: ["info@eduorbix.com", "support@eduorbix.com"],
      timing: "24hr response",
      bgColor: "bg-purple-50",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      icon: <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Office",
      details: ["123 Education Hub", "Sector 62, Noida", "Uttar Pradesh 201309"],
      timing: "Visit us",
      bgColor: "bg-orange-50",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600"
    }
  ];

  const socialLinks = [
    { icon: <Facebook size={18} sm:size={20} />, href: "https://facebook.com", bg: "bg-blue-600", hover: "hover:bg-blue-700" },
    { icon: <Twitter size={18} sm:size={20} />, href: "https://twitter.com", bg: "bg-sky-500", hover: "hover:bg-sky-600" },
    { icon: <Linkedin size={18} sm:size={20} />, href: "https://linkedin.com", bg: "bg-blue-700", hover: "hover:bg-blue-800" },
    { icon: <Instagram size={18} sm:size={20} />, href: "https://instagram.com", bg: "bg-pink-600", hover: "hover:bg-pink-700" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative bg-[#0b2a4a] text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
        </div>
        
        <div className="absolute top-20 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm mb-4 sm:mb-6 animate-fadeIn">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-ping"></span>
              <span>Available 24/7 for you</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight animate-slideUp">
              <span className="block">Reach Out</span>
              <span className="text-[#c5a46d] block text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-1 sm:mt-2">Get in Touch</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto animate-slideUp delay-100 px-2">
              We'd love to hear from you. Reach out to us anytime.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-12 md:-mt-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className={`${info.bgColor} rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2 animate-slideUp`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className={`${info.iconBg} ${info.iconColor} p-2 sm:p-3 rounded-xl flex-shrink-0`}>
                  {info.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-1 sm:mb-2">{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-700 text-xs sm:text-sm truncate">{detail}</p>
                  ))}
                  <div className="flex items-center gap-1 mt-1 sm:mt-2 text-xs font-medium text-gray-500 bg-white/50 px-2 py-1 rounded-full inline-flex">
                    <Clock size={10} className="sm:w-3 sm:h-3" />
                    <span className="text-xs">{info.timing}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-10 lg:gap-12">
          {/* Left Column - Map & Info */}
          <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8 animate-slideRight">
            {/* Office Location Card */}
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden border border-gray-100">
              <div className="h-48 sm:h-56 md:h-64 bg-[#0b2a4a] relative">
                <div className="absolute inset-0 opacity-20">
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                      <pattern id="grid" patternUnits="userSpaceOnUse" width="10" height="10">
                        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
                      </pattern>
                    </defs>
                    <rect width="100" height="100" fill="url(#grid)" />
                  </svg>
                </div>
                
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-400 rounded-full flex items-center justify-center text-blue-900 animate-bounce">
                      <MapPin size={20} className="sm:w-6 sm:h-6" />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-yellow-400 rotate-45"></div>
                  </div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 sm:p-6">
                  <p className="text-white font-semibold text-sm sm:text-base">123 Education Hub, Sector 62</p>
                  <p className="text-white/80 text-xs sm:text-sm">Noida, Uttar Pradesh 201309</p>
                </div>
              </div>
              
              <div className="p-4 sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3 sm:mb-4">
                  <h3 className="font-bold text-gray-900 text-base sm:text-lg">Visit Our Office</h3>
                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#c5a46d] hover:text-[#b8945d] text-xs sm:text-sm font-medium inline-flex items-center gap-1"
                  >
                    Get Directions <ChevronRight size={14} className="sm:w-4 sm:h-4" />
                  </a>
                </div>
                
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center gap-2 sm:gap-3 text-gray-600">
                    <Clock size={14} className="sm:w-4 sm:h-4 text-yellow-500 flex-shrink-0" />
                    <span className="text-xs sm:text-sm">Monday - Saturday: 9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 text-gray-600">
                    <MapPin size={14} className="sm:w-4 sm:h-4 text-yellow-500 flex-shrink-0" />
                    <span className="text-xs sm:text-sm">Sunday: Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Connect */}
            <div className="bg-[#0b2a4a] rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 text-white shadow-xl">
              <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">Connect With Us</h3>
              <p className="text-gray-200 mb-4 sm:mb-6 text-xs sm:text-sm">Follow us on social media for updates and news</p>
              
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${social.bg} ${social.hover} w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-xl flex items-center justify-center transition-all duration-200 transform hover:scale-110 hover:rotate-3`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="w-full lg:w-1/2 bg-white rounded-2xl sm:rounded-3xl shadow-xl p-5 sm:p-6 md:p-8 border border-gray-100 animate-slideLeft">
            <div className="mb-5 sm:mb-6 md:mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">Send us a Message</h2>
              <p className="text-gray-600 text-sm sm:text-base">Fill the form below and we'll get back to you</p>
            </div>

            {/* Form Status Message */}
            {formStatus.message && (
              <div className={`mb-4 sm:mb-6 p-3 sm:p-4 rounded-xl flex items-center gap-2 sm:gap-3 ${
                formStatus.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
              }`}>
                {formStatus.type === 'success' ? <CheckCircle size={18} className="sm:w-5 sm:h-5 flex-shrink-0" /> : <AlertCircle size={18} className="sm:w-5 sm:h-5 flex-shrink-0" />}
                <span className="text-xs sm:text-sm font-medium break-words">{formStatus.message}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
              {/* Name Field */}
              <div className="space-y-1.5 sm:space-y-2">
                <label className="text-xs sm:text-sm font-semibold text-gray-700 flex items-center gap-1">
                  Name <span className="text-red-500">*</span>
                </label>
                <div className="relative group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 transition-all bg-gray-50 group-hover:bg-white text-sm sm:text-base"
                    disabled={submitted || loading}
                    required
                  />
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-900/10 rounded-xl pointer-events-none transition-all"></div>
                </div>
              </div>

              {/* Email Field */}
              <div className="space-y-1.5 sm:space-y-2">
                <label className="text-xs sm:text-sm font-semibold text-gray-700 flex items-center gap-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <div className="relative group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 transition-all bg-gray-50 group-hover:bg-white text-sm sm:text-base"
                    disabled={submitted || loading}
                    required
                  />
                </div>
              </div>

              {/* Phone Field */}
              <div className="space-y-1.5 sm:space-y-2">
                <label className="text-xs sm:text-sm font-semibold text-gray-700">Phone</label>
                <div className="relative group">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXXXXXXX"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 transition-all bg-gray-50 group-hover:bg-white text-sm sm:text-base"
                    disabled={submitted || loading}
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="space-y-1.5 sm:space-y-2">
                <label className="text-xs sm:text-sm font-semibold text-gray-700 flex items-center gap-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <div className="relative group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us how we can help..."
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 transition-all bg-gray-50 group-hover:bg-white resize-none text-sm sm:text-base"
                    disabled={submitted || loading}
                    required
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submitted || loading}
                className={`w-full bg-[#c5a46d] text-white py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-[1.01] sm:hover:scale-[1.02] hover:shadow-xl flex items-center justify-center gap-2 sm:gap-3 ${
                  (submitted || loading) ? 'opacity-75 cursor-not-allowed' : 'hover:bg-[#b8945d]'
                }`}
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : submitted ? (
                  <>
                    <CheckCircle size={16} className="sm:w-5 sm:h-5 animate-bounce" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={14} className="sm:w-4 sm:h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-12 sm:py-16 md:py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Frequently Asked <span className="text-[#c5a46d]">Questions</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto px-2">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 max-w-4xl mx-auto">
            {[
              {
                q: "How quickly do you respond?",
                a: "We typically respond within 2-4 hours during business hours."
              },
              {
                q: "Do you provide online counseling?",
                a: "Yes, we offer both online and in-person counseling sessions."
              },
              {
                q: "Is there any consultation fee?",
                a: "Initial consultation is free. We'll discuss fees for ongoing services."
              },
              {
                q: "Which countries do you cover?",
                a: "We cover major study destinations including USA, UK, Canada, Australia, and Europe."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-4 sm:p-5 md:p-6 hover:shadow-md transition-all">
                <h3 className="font-semibold text-gray-900 mb-1.5 sm:mb-2 flex items-center gap-2 text-sm sm:text-base">
                  <span className="w-1.5 h-1.5 bg-[#c5a46d] rounded-full flex-shrink-0"></span>
                  {faq.q}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm pl-4 sm:pl-5">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideRight {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideLeft {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
        
        .animate-slideUp {
          animation: slideUp 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-slideRight {
          animation: slideRight 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-slideLeft {
          animation: slideLeft 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .delay-100 {
          animation-delay: 100ms;
        }
        
        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </div>
  );
};

export default ContactPage;