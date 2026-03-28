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

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({ 
        type: 'error', 
        message: 'Please fill in all required fields' 
      });
      return;
    }
    
    // Simulate form submission
    setFormStatus({ 
      type: 'success', 
      message: 'Message sent successfully! We\'ll get back to you soon.' 
    });
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '' });
      setSubmitted(false);
      setFormStatus({ type: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["+91 98765 43210", "+91 98765 43211"],
      timing: "Mon-Sat 9am-7pm",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      details: ["+91 98765 43210"],
      timing: "Quick response",
      bgColor: "bg-green-50",
      iconBg: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["info@eduorbix.com", "support@eduorbix.com"],
      timing: "24hr response",
      bgColor: "bg-purple-50",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Office",
      details: ["123 Education Hub", "Sector 62, Noida", "Uttar Pradesh 201309"],
      timing: "Visit us",
      bgColor: "bg-orange-50",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600"
    }
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, href: "#", bg: "bg-blue-600", hover: "hover:bg-blue-700" },
    { icon: <Twitter size={20} />, href: "#", bg: "bg-sky-500", hover: "hover:bg-sky-600" },
    { icon: <Linkedin size={20} />, href: "#", bg: "bg-blue-700", hover: "hover:bg-blue-800" },
    { icon: <Instagram size={20} />, href: "#", bg: "bg-pink-600", hover: "hover:bg-pink-700" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Hero Section */}
      <div className="relative bg-[#0b2a4a]   text-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
        </div>
        
        {/* Floating Shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full text-sm mb-6 animate-fadeIn">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-ping"></span>
              <span>Available 24/7 for you</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-slideUp">
              <span className="block">Reach Out</span>
              <span className="text-[#c5a46d] block text-4xl md:text-5xl mt-2">Get in Touch</span>
            </h1>
            
            <p className="text-xl text-gray-200 max-w-2xl mx-auto animate-slideUp delay-100">
              We'd love to hear from you. Reach out to us anytime.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className={`${info.bgColor} rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-slideUp`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className={`${info.iconBg} ${info.iconColor} p-3 rounded-xl`}>
                  {info.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-700 text-sm mb-1">{detail}</p>
                  ))}
                  <div className="flex items-center gap-1 mt-2 text-xs font-medium text-gray-500 bg-white/50 px-2 py-1 rounded-full inline-flex">
                    <Clock size={12} />
                    <span>{info.timing}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Map & Info */}
          <div className="space-y-8 animate-slideRight">
            {/* Office Location Card */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
              <div className="h-64 bg-[#0b2a4a] relative">
                {/* Map Placeholder */}
                <div className="absolute inset-0 opacity-20">
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#grid)" />
                  </svg>
                </div>
                
                {/* Map Marker */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-blue-900 animate-bounce">
                      <MapPin size={24} />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-400 rotate-45"></div>
                  </div>
                </div>
                
                {/* Address Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <p className="text-white font-semibold">123 Education Hub, Sector 62</p>
                  <p className="text-white/80 text-sm">Noida, Uttar Pradesh 201309</p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-gray-900 text-lg">Visit Our Office</h3>
                  <button className="text-[#c5a46d] hover:text-[#c5a46d] text-sm font-medium inline-flex items-center gap-1">
                    Get Directions <ChevronRight size={16} />
                  </button>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-600">
                    <Clock size={16} className="text-yellow-500" />
                    <span className="text-sm">Monday - Saturday: 9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin size={16} className="text-yellow-500" />
                    <span className="text-sm">Sunday: Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Connect */}
            <div className="bg-[#0b2a4a] rounded-3xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-2">Connect With Us</h3>
              <p className="text-gray-200 mb-6 text-sm">Follow us on social media for updates and news</p>
              
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`${social.bg} ${social.hover} w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200 transform hover:scale-110 hover:rotate-3`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 animate-slideLeft">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Send us a Message</h2>
              <p className="text-gray-600">Fill the form below and we'll get back to you</p>
            </div>

            {/* Form Status Message */}
            {formStatus.message && (
              <div className={`mb-6 p-4 rounded-xl flex items-center gap-3 ${
                formStatus.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
              }`}>
                {formStatus.type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
                <span className="text-sm font-medium">{formStatus.message}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 flex items-center gap-1">
                  Name <span className="text-red-500">*</span>
                </label>
                <div className="relative group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 transition-all bg-gray-50 group-hover:bg-white"
                    disabled={submitted}
                  />
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-900/10 rounded-xl pointer-events-none transition-all"></div>
                </div>
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 flex items-center gap-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <div className="relative group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 transition-all bg-gray-50 group-hover:bg-white"
                    disabled={submitted}
                  />
                </div>
              </div>

              {/* Phone Field */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Phone</label>
                <div className="relative group">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXXXXXXX"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 transition-all bg-gray-50 group-hover:bg-white"
                    disabled={submitted}
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 flex items-center gap-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <div className="relative group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Tell us how we can help..."
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 transition-all bg-gray-50 group-hover:bg-white resize-none"
                    disabled={submitted}
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submitted}
                className={`w-full bg-[#c5a46d] text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl flex items-center justify-center gap-3 ${
                  submitted ? 'opacity-75 cursor-not-allowed' : 'hover:from-blue-800 hover:to-blue-700'
                }`}
              >
                {submitted ? (
                  <>
                    <CheckCircle size={20} className="animate-bounce" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked <span className="text-yellow-500">Questions</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
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
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-all">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span>
                  {faq.q}
                </h3>
                <p className="text-gray-600 text-sm pl-4">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;