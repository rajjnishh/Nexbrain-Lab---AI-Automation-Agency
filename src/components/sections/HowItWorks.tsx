import React from 'react';
import { motion } from 'motion/react';

const steps = [
  {
    number: '01',
    title: 'Setup',
    description: 'We analyze your business needs and set up the AI infrastructure tailored to your niche.',
  },
  {
    number: '02',
    title: 'Automation',
    description: 'Our AI systems go live, handling your leads, bookings, and customer interactions on autopilot.',
  },
  {
    number: '03',
    title: 'Growth',
    description: 'Watch your business scale as you save time and convert more leads into loyal customers.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold font-display mb-6 tracking-tight">
            How It <span className="text-brand-purple">Works</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            A simple 3-step process to transform your business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-purple/30 to-transparent -translate-y-1/2 z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 rounded-full bg-brand-black border-2 border-brand-purple flex items-center justify-center text-3xl font-bold font-display mb-8 group-hover:bg-brand-purple transition-all duration-500 shadow-xl shadow-brand-purple/20">
                {step.number}
              </div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-white/50 leading-relaxed max-w-xs">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
