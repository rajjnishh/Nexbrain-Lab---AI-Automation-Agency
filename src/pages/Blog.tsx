import React from 'react';
import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const posts = [
  {
    title: "How AI is Revolutionizing Lead Generation in 2026",
    excerpt: "Discover the latest trends and tools that are changing the way businesses find and convert leads.",
    author: "Karan Singh",
    date: "Mar 15, 2026",
    image: "https://picsum.photos/seed/ai/800/600"
  },
  {
    title: "The Future of Content Creation: AI-Driven Workflows",
    excerpt: "Learn how to leverage AI to create high-quality content at scale without losing your brand's voice.",
    author: "Rajnish",
    date: "Mar 10, 2026",
    image: "https://picsum.photos/seed/content/800/600"
  },
  {
    title: "Automating Customer Support: A Guide for Small Businesses",
    excerpt: "Why 24/7 support is no longer a luxury, and how AI makes it accessible for everyone.",
    author: "Nexbrain Lab",
    date: "Mar 05, 2026",
    image: "https://picsum.photos/seed/support/800/600"
  }
];

export default function BlogPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold font-display mb-6">Insights & Blog</h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Stay ahead of the curve with our latest thoughts on AI, automation, and business growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-[32px] mb-8 border border-white/10">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6 px-4 py-2 rounded-full bg-brand-purple text-white text-xs font-bold">
                  AI & Automation
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
        </div>
      </div>
    </div>
  );
}
