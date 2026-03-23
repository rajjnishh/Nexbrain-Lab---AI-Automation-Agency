import React from 'react';
import { motion } from 'motion/react';
import { Phone, MessageCircle } from 'lucide-react';

export default function CTASection() {
  return (
    <section id="book" className="py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-brand-purple/20 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass p-12 md:p-20 rounded-[60px] border-white/10 shadow-2xl shadow-brand-purple/20"
        >
          <h2 className="text-4xl md:text-7xl font-bold font-display mb-8 tracking-tight">
            Get Your <span className="text-brand-purple">Growth</span> System
          </h2>
          <p className="text-white/60 text-xl md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Stop losing leads and start automating your business growth today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="https://calendly.com/info-rajnishh/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-5 bg-brand-purple hover:bg-brand-purple/90 text-white rounded-2xl text-lg font-bold transition-all shadow-xl shadow-brand-purple/30 flex items-center justify-center gap-3"
            >
              <Phone size={24} />
              Book a Free Call
            </a>
            <a
              href="https://wa.me/919341743927"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-5 bg-green-600 hover:bg-green-700 text-white rounded-2xl text-lg font-bold transition-all shadow-xl shadow-green-600/30 flex items-center justify-center gap-3"
            >
              <MessageCircle size={24} />
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
