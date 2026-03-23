import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold font-display mb-6 italic serif">Get In Touch</h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Ready to scale your business with AI? Let's talk about your vision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div className="space-y-8">
              <h2 className="text-4xl font-bold font-display">Contact Information</h2>
              <p className="text-xl text-white/60 leading-relaxed">
                We're here to help you automate your growth. Reach out to us through any of these channels.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-2xl bg-brand-purple/10 flex items-center justify-center group-hover:bg-brand-purple transition-colors">
                  <Mail size={24} className="text-brand-purple group-hover:text-white" />
                </div>
                <div>
                  <p className="text-white/40 text-sm font-bold uppercase tracking-widest mb-1">Email Us</p>
                  <p className="text-xl font-bold">info.rajnishh@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-2xl bg-brand-purple/10 flex items-center justify-center group-hover:bg-brand-purple transition-colors">
                  <Phone size={24} className="text-brand-purple group-hover:text-white" />
                </div>
                <div>
                  <p className="text-white/40 text-sm font-bold uppercase tracking-widest mb-1">Call Us</p>
                  <p className="text-xl font-bold">+91 9341743927</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-2xl bg-brand-purple/10 flex items-center justify-center group-hover:bg-brand-purple transition-colors">
                  <MapPin size={24} className="text-brand-purple group-hover:text-white" />
                </div>
                <div>
                  <p className="text-white/40 text-sm font-bold uppercase tracking-widest mb-1">Location</p>
                  <p className="text-xl font-bold">Bangalore, India</p>
                </div>
              </div>
            </div>

            <div className="pt-12 border-t border-white/10">
              <a 
                href="https://calendly.com/info-rajnishh/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 text-2xl font-bold group"
              >
                Book a Strategy Call <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-12 rounded-[40px] bg-white/5 border border-white/10 shadow-2xl shadow-brand-purple/5"
          >
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-sm font-bold text-white/40 uppercase tracking-widest">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-brand-purple focus:outline-none transition-colors"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold text-white/40 uppercase tracking-widest">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-brand-purple focus:outline-none transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-sm font-bold text-white/40 uppercase tracking-widest">Subject</label>
                <input 
                  type="text" 
                  placeholder="How can we help?"
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-brand-purple focus:outline-none transition-colors"
                />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-bold text-white/40 uppercase tracking-widest">Message</label>
                <textarea 
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-brand-purple focus:outline-none transition-colors resize-none"
                />
              </div>
              <button className="w-full py-5 bg-brand-purple text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-brand-purple/90 transition-all shadow-lg shadow-brand-purple/20">
                Send Message <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
