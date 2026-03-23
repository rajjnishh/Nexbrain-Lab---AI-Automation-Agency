import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Calendar, Star, Clock } from 'lucide-react';

const results = [
  {
    title: 'More Leads',
    value: '3x',
    description: 'Increase in qualified lead generation through automated outreach and AI chatbots.',
    icon: TrendingUp,
    color: '#8b5cf6',
  },
  {
    title: 'Higher Bookings',
    value: '45%',
    description: 'Boost in appointment bookings with 24/7 AI calling and scheduling agents.',
    icon: Calendar,
    color: '#3b82f6',
  },
  {
    title: 'Better Ratings',
    value: '5.0',
    description: 'Improvement in online reputation with automated feedback and review collection.',
    icon: Star,
    color: '#f59e0b',
  },
  {
    title: 'Time Saved',
    value: '20h+',
    description: 'Weekly hours saved by automating manual tasks and customer interactions.',
    icon: Clock,
    color: '#10b981',
  },
];

export default function Results() {
  return (
    <section id="results" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold font-display mb-6 tracking-tight">
            Real <span className="text-brand-purple">Results</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Our AI systems deliver measurable impact on your bottom line.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {results.map((result, index) => (
            <motion.div
              key={result.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass p-10 rounded-[40px] text-center group hover:border-brand-purple/30 transition-all"
            >
              <div
                className="w-16 h-16 rounded-3xl flex items-center justify-center mb-8 mx-auto transition-transform group-hover:scale-110"
                style={{ backgroundColor: `${result.color}20`, color: result.color }}
              >
                <result.icon size={32} />
              </div>
              <div className="text-5xl font-bold font-display mb-4 text-white">{result.value}</div>
              <h3 className="text-xl font-bold mb-4">{result.title}</h3>
              <p className="text-white/40 leading-relaxed">{result.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
