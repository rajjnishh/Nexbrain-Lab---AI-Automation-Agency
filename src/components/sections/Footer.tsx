import React from 'react';
import { Linkedin, Mail, Phone, MapPin, Instagram, MessageCircle } from 'lucide-react';
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
              <li><Link to="/case-studies" className="text-white/40 hover:text-brand-purple transition-colors">Our Clients</Link></li>
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
              <a href="https://wa.me/919341743927" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-[#25D366] transition-all" title="WhatsApp">
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="lucide lucide-whatsapp"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/20 text-sm">
            © {new Date().getFullYear()} Nexbrain Lab. All rights reserved.
          </p>
          <p className="text-white/20 text-sm font-medium">
            Built by <span className="text-white/40">Rajnish & Karan Singh</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
