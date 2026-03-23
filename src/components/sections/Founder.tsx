import React from 'react';
import { motion } from 'motion/react';
import { Linkedin, Mail, Phone } from 'lucide-react';

export default function Founder() {
  return (
    <section id="founder" className="py-32 bg-white/5 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-brand-purple/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden border border-white/10 shadow-2xl shadow-brand-purple/10">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop&q=80"
                alt="Kumar Rajnish - Founder"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-purple font-semibold tracking-widest uppercase text-sm mb-6 block">
              MEET THE FOUNDER
            </span>
            <h2 className="text-4xl md:text-6xl font-bold font-display mb-8 tracking-tight">
              Kumar <span className="text-brand-purple">Rajnish</span>
            </h2>
            <p className="text-xl text-white/70 leading-relaxed mb-10">
              Founder of Nexbrain Lab, building AI systems that help businesses grow on autopilot with co-founder Karan Singh.
            </p>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 text-white/60 hover:text-white transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center">
                  <Linkedin size={20} />
                </div>
                <a href="https://www.linkedin.com/in/kumar-rajnish-18136b2b3/" target="_blank" rel="noopener noreferrer" className="text-lg font-medium">
                  LinkedIn Profile
                </a>
              </div>
              <div className="flex items-center gap-4 text-white/60 hover:text-white transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center">
                  <Mail size={20} />
                </div>
                <a href="mailto:info.rajnishh@gmail.com" className="text-lg font-medium">
                  info.rajnishh@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-4 text-white/60 hover:text-white transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center">
                  <Phone size={20} />
                </div>
                <span className="text-lg font-medium">+91 9341743927</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
