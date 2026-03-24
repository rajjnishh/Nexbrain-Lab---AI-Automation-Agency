import React from 'react';
import { motion } from 'motion/react';
import { Brain, TrendingUp, Target, BarChart3 } from 'lucide-react';

const reasons = [
  {
    title: "Expertise in AI",
    description: "Our team consists of AI specialists who stay at the forefront of machine learning and automation technology.",
    icon: Brain,
    color: "from-purple-500/20 to-blue-500/20"
  },
  {
    title: "Proven Track Record",
    description: "We've helped dozens of businesses achieve measurable growth through strategic AI implementation.",
    icon: TrendingUp,
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "Tailored Solutions",
    description: "We don't believe in one-size-fits-all. Every solution is custom-built to solve your specific business challenges.",
    icon: Target,
    color: "from-brand-purple/20 to-purple-500/20"
  },
  {
    title: "Scalable Growth",
    description: "Our systems are designed to grow with you, ensuring your infrastructure remains robust as you scale.",
    icon: BarChart3,
    color: "from-indigo-500/20 to-brand-purple/20"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-purple/5 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-brand-purple text-sm font-bold tracking-widest uppercase mb-4"
          >
            Our Edge
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold font-display"
          >
            Why Choose <span className="text-brand-purple italic">Nexbrain Lab?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/60 max-w-2xl mx-auto mt-6"
          >
            We combine cutting-edge technology with deep business strategy to deliver results that matter.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative p-8 rounded-[32px] bg-white/5 border border-white/10 hover:border-brand-purple/30 transition-all duration-500"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[32px]`} />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center text-brand-purple mb-6 group-hover:scale-110 transition-transform duration-500">
                  <reason.icon size={28} />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-purple transition-colors">{reason.title}</h3>
                <p className="text-white/60 leading-relaxed group-hover:text-white/80 transition-colors">
                  {reason.description}
                </p>
              </div>

              {/* Decorative corner element */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-8 h-8 border-r-2 border-b-2 border-brand-purple/30 rounded-br-xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
