import React from 'react';
import { motion } from 'motion/react';
import { Bot, Star, Phone, Globe, Share2, Target, PenTool } from 'lucide-react';

const services = [
  {
    title: 'AI Chatbots',
    description: 'Intelligent conversational agents that handle customer queries 24/7, increasing conversion rates.',
    icon: Bot,
    color: '#8b5cf6',
  },
  {
    title: 'Feedback & Review System',
    description: 'Automated systems to collect positive reviews and manage feedback to boost your online reputation.',
    icon: Star,
    color: '#3b82f6',
  },
  {
    title: 'AI Calling Agent',
    description: 'Human-like AI voice agents that handle inbound and outbound calls for bookings and follow-ups.',
    icon: Phone,
    color: '#ec4899',
  },
  {
    title: 'Website Development',
    description: 'Premium, high-converting websites built with modern tech stacks for speed and SEO.',
    icon: Globe,
    color: '#10b981',
  },
  {
    title: 'Social Media Management',
    description: 'Strategic content creation and community management to grow your brand presence.',
    icon: Share2,
    color: '#f59e0b',
  },
  {
    title: 'Outreach Systems',
    description: 'Automated cold outreach systems that fill your calendar with qualified leads.',
    icon: Target,
    color: '#ef4444',
  },
  {
    title: 'Copywriting',
    description: 'Persuasive, high-converting copy for your ads, emails, and landing pages.',
    icon: PenTool,
    color: '#6366f1',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold font-display mb-6 tracking-tight">
            Our <span className="text-brand-purple">AI-Powered</span> Services
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            We build the systems that build your business. From automation to outreach, we've got you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-3xl hover:bg-white/10 transition-all group border-white/5"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                style={{ backgroundColor: `${service.color}20`, color: service.color }}
              >
                <service.icon size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-white/50 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
