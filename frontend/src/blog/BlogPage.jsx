import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Search, 
  Clock, 
  Tag, 
  BookOpen,
  Eye
} from 'lucide-react';

const BlogPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: "Complete Guide to Studying Abroad in 2026",
      excerpt: "Everything you need to know about international admissions, visas, and settling in a new country.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop",
      category: "Study Abroad",
      author: "Dr. Sarah Johnson",
      date: "Mar 15, 2026",
      readTime: "8 min read",
      views: "2.5k"
    },
    {
      id: 2,
      title: "Top 10 Scholarships for Indian Students",
      excerpt: "Discover fully-funded scholarships that can make your dream of studying abroad a reality.",
      image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?q=80&w=2070&auto=format&fit=crop",
      category: "Scholarships",
      author: "Priya Sharma",
      date: "Mar 12, 2026",
      readTime: "6 min read",
      views: "3.8k"
    },
    {
      id: 3,
      title: "How to Choose the Right University",
      excerpt: "A step-by-step guide to finding your perfect academic match based on programs, location, and budget.",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2086&auto=format&fit=crop",
      category: "University Guide",
      author: "Michael Chen",
      date: "Mar 10, 2026",
      readTime: "5 min read",
      views: "1.2k"
    },
    {
      id: 4,
      title: "Student Visa Requirements 2026",
      excerpt: "Latest updates on visa processes for USA, UK, Canada, Australia, and Europe.",
      image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=2026&auto=format&fit=crop",
      category: "Visa Guide",
      author: "James Wilson",
      date: "Mar 8, 2026",
      readTime: "7 min read",
      views: "4.1k"
    },
    {
      id: 5,
      title: "Student Accommodation: Tips & Tricks",
      excerpt: "From dormitories to private rentals – find the best housing options for international students.",
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=2069&auto=format&fit=crop",
      category: "Student Life",
      author: "Emma Davis",
      date: "Mar 5, 2026",
      readTime: "4 min read",
      views: "987"
    },
    {
      id: 6,
      title: "Part-Time Jobs While Studying",
      excerpt: "Complete guide to work permits, job hunting, and balancing work with academics.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
      category: "Career Advice",
      author: "Robert Taylor",
      date: "Mar 3, 2026",
      readTime: "6 min read",
      views: "2.3k"
    },
    {
      id: 7,
      title: "Mental Health for International Students",
      excerpt: "Coping strategies and resources to maintain mental well-being while studying abroad.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
      category: "Wellness",
      author: "Dr. Lisa Wang",
      date: "Feb 28, 2026",
      readTime: "5 min read",
      views: "1.8k"
    },
    {
      id: 8,
      title: "Top 5 Countries for STEM Education",
      excerpt: "Comparison of STEM programs, research opportunities, and career prospects worldwide.",
      image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?q=80&w=2070&auto=format&fit=crop",
      category: "STEM",
      author: "Prof. David Kim",
      date: "Feb 25, 2026",
      readTime: "7 min read",
      views: "3.2k"
    },
    {
      id: 9,
      title: "Cultural Adaptation Guide",
      excerpt: "Tips for overcoming culture shock and making the most of your international experience.",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=2069&auto=format&fit=crop",
      category: "Student Life",
      author: "Maria Garcia",
      date: "Feb 22, 2026",
      readTime: "5 min read",
      views: "1.5k"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Posts', count: 9 },
    { id: 'study-abroad', name: 'Study Abroad', count: 1 },
    { id: 'scholarships', name: 'Scholarships', count: 1 },
    { id: 'university-guide', name: 'University Guide', count: 1 },
    { id: 'visa-guide', name: 'Visa Guide', count: 1 },
    { id: 'student-life', name: 'Student Life', count: 2 },
    { id: 'career-advice', name: 'Career Advice', count: 1 },
    { id: 'wellness', name: 'Wellness', count: 1 },
    { id: 'stem', name: 'STEM', count: 1 }
  ];

  const handleReadMore = (post) => {
    navigate(`/blog/${post.id}`, { state: { post } });
  };

  const filteredPosts = blogPosts.filter(post => 
    (selectedCategory === 'all' || post.category.toLowerCase().includes(selectedCategory.replace('-', ' '))) &&
    (searchTerm === '' || post.title.toLowerCase().includes(searchTerm.toLowerCase()) || post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-[#0b2a4a] to-white">
      {/* Hero Section */}
      <div className="relative bg-[#0b2a4a] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6">
              <BookOpen size={16} />
              <span>Knowledge Hub for Students</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Eduorbix <span className="text-yellow-400">Blog</span>
            </h1>
            <p className="text-lg text-gray-200 mb-6 max-w-2xl mx-auto">
              Insights, guides, and stories to help you navigate your educational journey in India and abroad.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search articles, guides, tips..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-3 pr-12 rounded-full text-gray-900 bg-white/95 backdrop-blur-sm border-2 border-transparent focus:border-yellow-400 outline-none text-base shadow-lg"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-blue-900 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Blog Posts Grid - 3x3 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              onClick={() => handleReadMore(post)}
              className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    <Clock size={12} /> {post.readTime}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                  <span className="text-xs font-medium text-gray-700">{post.author}</span>
                  <div className="flex items-center gap-1 text-gray-500">
                    <Eye size={14} />
                    <span className="text-xs">{post.views}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-12 bg-gradient-to-r from-blue-900 to-blue-800 rounded-xl p-6 text-white relative overflow-hidden">
          <div className="relative z-10 text-center max-w-md mx-auto">
            <h3 className="text-xl font-bold mb-2">Never Miss an Update</h3>
            <p className="text-sm text-gray-200 mb-4">Subscribe to our newsletter</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 rounded-lg text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold px-4 py-2 rounded-lg text-sm transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;