import React from 'react';
import { Linkedin, Mail, Phone, MapPin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="py-20 bg-brand-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" className="text-3xl font-bold font-display tracking-tighter mb-6 block">
              NEXBRAIN <span className="text-brand-purple">LAB</span>
            </Link>
            <p className="text-white/40 leading-relaxed max-w-xs">
              Automating business growth with AI-powered solutions. More leads, more bookings, less manual work.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/services" className="text-white/40 hover:text-brand-purple transition-colors">Services</Link></li>
              <li><Link to="/case-studies" className="text-white/40 hover:text-brand-purple transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="text-white/40 hover:text-brand-purple transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-white/40 hover:text-brand-purple transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-white/40">
                <Phone size={18} className="text-brand-purple" />
                <span>+91 9341743927</span>
              </li>
              <li className="flex items-center gap-3 text-white/40">
                <Phone size={18} className="text-brand-purple" />
                <span>+91 8219564046</span>
              </li>
              <li className="flex items-center gap-3 text-white/40">
                <Mail size={18} className="text-brand-purple" />
                <span>info.rajnishh@gmail.com</span>
              </li>
              <li className="flex items-start gap-3 text-white/40">
                <MapPin size={18} className="text-brand-purple mt-1 shrink-0" />
                <span className="text-sm leading-relaxed">P-, 19, Taratala Rd, CPT Colony, Taratala, Kolkata, West Bengal 700088</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Follow Us</h4>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/kumar-rajnish-18136b2b3/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-brand-purple transition-all">
                <Linkedin size={20} />
              </a>
              <a href="https://www.instagram.com/_rajjnish/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-brand-purple transition-all">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/20 text-sm">
            © {new Date().getFullYear()} Nexbrain Lab. All rights reserved.
          </p>
          <p className="text-white/20 text-sm font-medium">
            Built by <span className="text-white/40">Kumar Rajnish & Karan Singh</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
