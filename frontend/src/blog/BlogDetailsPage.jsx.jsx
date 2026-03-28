import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  ArrowLeft,
  Heart,
  MessageCircle,
  Eye,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  BookOpen
} from 'lucide-react';

const BlogDetailsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);
  
  const post = location.state?.post;

  // Related blogs data
  const relatedPosts = [
    {
      id: 101,
      title: "How to Get Full Scholarship in USA",
      excerpt: "Complete guide to securing fully-funded scholarships at top American universities.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop",
      category: "Scholarships",
      author: "Priya Sharma",
      date: "Mar 10, 2026",
      readTime: "5 min read",
      views: "1.8k"
    },
    {
      id: 102,
      title: "Top 10 Universities in Canada for 2026",
      excerpt: "Discover the best Canadian universities for international students.",
      image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?q=80&w=2070&auto=format&fit=crop",
      category: "Study Abroad",
      author: "Michael Chen",
      date: "Mar 8, 2026",
      readTime: "6 min read",
      views: "2.3k"
    },
    {
      id: 103,
      title: "Student Visa Interview Tips That Work",
      excerpt: "Expert advice to crack your student visa interview with confidence.",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2086&auto=format&fit=crop",
      category: "Visa Guide",
      author: "James Wilson",
      date: "Mar 5, 2026",
      readTime: "4 min read",
      views: "3.1k"
    },
    {
      id: 104,
      title: "Part-Time Jobs for International Students",
      excerpt: "Best part-time job opportunities while studying abroad.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
      category: "Career Advice",
      author: "Emma Davis",
      date: "Mar 2, 2026",
      readTime: "7 min read",
      views: "1.5k"
    }
  ];

  const handleRelatedPostClick = (relatedPost) => {
    navigate(`/blog/${relatedPost.id}`, { state: { post: relatedPost } });
  };

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Post not found</h2>
          <button
            onClick={() => navigate('/blog')}
            className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800"
          >
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <button
            onClick={() => navigate('/blog')}
            className="flex items-center gap-2 text-gray-600 hover:text-blue-700 transition-colors group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Blog</span>
          </button>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative h-[350px] md:h-[400px] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        
        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-yellow-400 text-blue-900 px-3 py-1 rounded-full text-xs font-semibold">
              {post.category}
            </span>
            <span className="text-white/80 text-xs flex items-center gap-1">
              <Eye size={14} /> {post.views} views
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 max-w-3xl">
            {post.title}
          </h1>
          <p className="text-white/80 text-sm md:text-base max-w-2xl line-clamp-2">
            {post.excerpt}
          </p>
        </div>
      </div>

      {/* Main Content with Sidebar */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side - Main Article */}
          <div className="lg:w-2/3">
            {/* Author Info */}
            <div className="bg-white rounded-xl p-6 shadow-sm mb-6 flex flex-wrap items-center justify-between">
              <div className="flex items-center gap-4">
                <img
                  src={`https://ui-avatars.com/api/?name=${post.author.replace(' ', '+')}&background=0D2F52&color=fff&size=64`}
                  alt={post.author}
                  className="w-14 h-14 rounded-full border-2 border-yellow-400"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{post.author}</h3>
                  <p className="text-xs text-gray-500 mb-1">Education Expert</p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> {post.readTime}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex items-center gap-2 mt-4 sm:mt-0">
                <button
                  onClick={() => setLiked(!liked)}
                  className={`p-2.5 rounded-full transition-all ${
                    liked ? 'bg-red-50 text-red-500' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <Heart size={18} fill={liked ? 'currentColor' : 'none'} />
                </button>
                <button className="p-2.5 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors">
                  <Share2 size={18} />
                </button>
              </div>
            </div>

            {/* Article Content */}
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm mb-6">
              <div className="prose prose-sm md:prose-base max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  {post.excerpt}
                </p>

                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-8 mb-4">1. Why Study Abroad?</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  International education offers numerous benefits including exposure to different teaching methods, cultural diversity, 
                  language skills improvement, and enhanced career prospects. Employers worldwide value candidates with international 
                  experience as it demonstrates adaptability, independence, and global awareness.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-900 p-4 mb-6">
                  <p className="text-blue-900 font-medium text-sm mb-1">💡 Did You Know?</p>
                  <p className="text-blue-800 text-sm">
                    Students who study abroad are 25% more likely to find employment within six months of graduation.
                  </p>
                </div>

                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-8 mb-4">2. Application Process</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The application process typically involves researching universities, preparing for standardized tests, 
                  gathering documents, writing statements of purpose, and submitting applications before deadlines.
                </p>

                <ul className="list-disc pl-5 mb-6 text-gray-700 space-y-2">
                  <li>Research universities and programs that match your interests</li>
                  <li>Check admission requirements and deadlines</li>
                  <li>Prepare for and take required standardized tests</li>
                  <li>Gather transcripts and recommendation letters</li>
                  <li>Write compelling statements of purpose</li>
                  <li>Submit applications and track their status</li>
                </ul>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">📚 Tuition & Fees</h4>
                    <p className="text-sm text-gray-600">Average: $20,000 - $50,000 per year depending on country and program</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">🏠 Living Expenses</h4>
                    <p className="text-sm text-gray-600">Average: $10,000 - $20,000 per year depending on location</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Comments Section */}
            
          </div>

          {/* Right Sidebar - Related Blogs */}
          <div className="lg:w-1/3">
            {/* Share Options */}
            <div className="bg-white rounded-xl p-5 shadow-sm mb-6">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Share2 size={16} />
                Share this article
              </h3>
              <div className="flex gap-2">
                <button className="flex-1 bg-blue-600 text-white p-2.5 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 text-sm">
                  <Facebook size={16} />
                  Share
                </button>
                <button className="flex-1 bg-sky-500 text-white p-2.5 rounded-lg hover:bg-sky-600 transition-colors flex items-center justify-center gap-2 text-sm">
                  <Twitter size={16} />
                  Tweet
                </button>
              </div>
            </div>

            {/* Related Blogs Section */}
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <BookOpen size={18} />
                Related Articles
              </h3>
              
              <div className="space-y-4">
                {relatedPosts.map((relatedPost) => (
                  <div
                    key={relatedPost.id}
                    onClick={() => handleRelatedPostClick(relatedPost)}
                    className="group cursor-pointer bg-gray-50 rounded-lg overflow-hidden hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex gap-3">
                      {/* Image */}
                      <div className="w-24 h-24 flex-shrink-0 overflow-hidden">
                        <img
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 p-2 pr-3">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] font-medium text-blue-600 bg-blue-100 px-2 py-0.5 rounded-full">
                            {relatedPost.category}
                          </span>
                          <span className="text-[10px] text-gray-500 flex items-center gap-1">
                            <Clock size={10} /> {relatedPost.readTime}
                          </span>
                        </div>
                        
                        <h4 className="text-sm font-bold text-gray-900 mb-1 line-clamp-2 group-hover:text-blue-700 transition-colors">
                          {relatedPost.title}
                        </h4>
                        
                        <div className="flex items-center justify-between mt-1">
                          <span className="text-[10px] font-medium text-gray-600">{relatedPost.author}</span>
                          <div className="flex items-center gap-1 text-gray-400">
                            <Eye size={10} />
                            <span className="text-[10px]">{relatedPost.views}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* View All Link */}
              <div className="mt-4 text-center">
                <button
                  onClick={() => navigate('/blog')}
                  className="text-sm text-blue-600 hover:text-blue-800 font-medium inline-flex items-center gap-1"
                >
                  View All Articles
                  <ArrowLeft size={14} className="rotate-180" />
                </button>
              </div>
            </div>

            {/* Popular Tags */}
            <div className="bg-white rounded-xl p-5 shadow-sm mt-6">
              <h3 className="font-semibold text-gray-900 mb-3">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {['Scholarships', 'Visa', 'USA', 'Canada', 'UK', 'Australia', 'STEM', 'MBA'].map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 rounded-full text-xs cursor-pointer transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsPage;