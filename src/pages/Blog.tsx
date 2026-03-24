import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, User, ArrowRight, Filter } from 'lucide-react';

const categories = ['All', 'AI & Automation', 'Business Growth', 'Case Studies'];

const posts = [
  {
    title: "How AI is Revolutionizing Lead Generation in 2026",
    excerpt: "Discover the latest trends and tools that are changing the way businesses find and convert leads.",
    author: "Karan Singh",
    date: "Mar 15, 2026",
    image: "https://picsum.photos/seed/ai/800/600",
    category: "AI & Automation"
  },
  {
    title: "The Future of Content Creation: AI-Driven Workflows",
    excerpt: "Learn how to leverage AI to create high-quality content at scale without losing your brand's voice.",
    author: "Rajnish",
    date: "Mar 10, 2026",
    image: "https://picsum.photos/seed/content/800/600",
    category: "AI & Automation"
  },
  {
    title: "Automating Customer Support: A Guide for Small Businesses",
    excerpt: "Why 24/7 support is no longer a luxury, and how AI makes it accessible for everyone.",
    author: "Nexbrain Lab",
    date: "Mar 05, 2026",
    image: "https://picsum.photos/seed/support/800/600",
    category: "Business Growth"
  },
  {
    title: "Scaling Your Agency with AI Automation",
    excerpt: "How we helped a marketing agency double their output while reducing costs by 40%.",
    author: "Karan Singh",
    date: "Feb 28, 2026",
    image: "https://picsum.photos/seed/agency/800/600",
    category: "Case Studies"
  },
  {
    title: "The ROI of AI: Measuring Success in Your Business",
    excerpt: "A practical framework for calculating the return on investment for your AI initiatives.",
    author: "Nexbrain Lab",
    date: "Feb 20, 2026",
    image: "https://picsum.photos/seed/roi/800/600",
    category: "Business Growth"
  }
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = selectedCategory === 'All' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-bold font-display mb-6 italic serif">Insights & Blog</h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Stay ahead of the curve with our latest thoughts on AI, automation, and business growth.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-20">
          <div className="flex items-center gap-2 mr-4 text-white/40">
            <Filter size={18} />
            <span className="text-sm font-bold uppercase tracking-widest">Filter:</span>
          </div>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 border ${
                selectedCategory === category
                  ? 'bg-brand-purple border-brand-purple text-white shadow-lg shadow-brand-purple/20'
                  : 'bg-white/5 border-white/10 text-white/60 hover:border-white/20 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-[32px] mb-8 border border-white/10">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6 px-4 py-2 rounded-full bg-brand-purple text-white text-xs font-bold shadow-lg">
                    {post.category}
                  </div>
                </div>
                <div className="flex items-center gap-6 mb-4 text-sm text-white/40">
                  <div className="flex items-center gap-2">
                    <User size={14} className="text-brand-purple" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={14} className="text-brand-purple" />
                    {post.date}
                  </div>
                </div>
                <h2 className="text-2xl font-bold mb-4 group-hover:text-brand-purple transition-colors leading-tight">
                  {post.title}
                </h2>
                <p className="text-white/60 mb-6 line-clamp-2 leading-relaxed">
                  {post.excerpt}
                </p>
                <button className="flex items-center gap-2 font-bold group/btn">
                  Read More <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
