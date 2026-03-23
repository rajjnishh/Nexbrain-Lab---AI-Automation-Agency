import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname === path || location.pathname.startsWith(path);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '/services', isDropdown: true },
    { name: 'Our Clients', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const serviceItems = [
    { name: 'AI Chatbots', href: '/services#ai-chatbots' },
    { name: 'Feedback & Review System', href: '/services#feedback-review-system' },
    { name: 'AI Calling Agent', href: '/services#ai-calling-agent' },
    { name: 'Website Development', href: '/services#website-development' },
    { name: 'Social Media Management', href: '/services#social-media-management' },
    { name: 'Outreach Systems', href: '/services#outreach-systems' },
    { name: 'Copywriting', href: '/services#copywriting' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'py-4' : 'py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold font-display tracking-tighter group">
          NEXBRAIN <span className="text-brand-purple group-hover:text-white transition-colors">LAB</span>
        </Link>

        {/* Desktop Nav - Pill Style */}
        <div className="hidden md:flex items-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-2 py-1.5 shadow-2xl">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group/item">
              {link.isDropdown ? (
                <div 
                  className="relative"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <Link
                    to={link.href}
                    className={`px-6 py-2.5 rounded-full text-lg font-serif transition-all flex items-center gap-2 relative ${
                      isActive(link.href)
                        ? 'text-brand-purple italic bg-brand-purple/10'
                        : 'text-white/70 hover:text-white italic hover:bg-white/5'
                    }`}
                  >
                    {link.name} <ChevronDown size={14} className={`transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                    {isActive(link.href) && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-brand-purple rounded-full shadow-[0_0_8px_#8b5cf6]"
                      />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-brand-black/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-4 shadow-2xl"
                      >
                        <div className="flex flex-col gap-1">
                          {serviceItems.map((item) => (
                            <Link
                              key={item.name}
                              to={item.href}
                              className="px-4 py-3 rounded-xl text-white/60 hover:text-white hover:bg-white/5 transition-all text-sm font-medium"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  to={link.href}
                  className={`px-6 py-2.5 rounded-full text-lg font-serif transition-all relative ${
                    isActive(link.href)
                      ? 'text-brand-purple bg-brand-purple/10'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                  {isActive(link.href) && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-brand-purple rounded-full shadow-[0_0_8px_#8b5cf6]"
                    />
                  )}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="https://calendly.com/info-rajnishh/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-brand-purple hover:bg-brand-purple/90 text-white rounded-full text-sm font-bold transition-all shadow-lg shadow-brand-purple/20 hover:shadow-brand-purple/40 hover:-translate-y-0.5 active:translate-y-0 inline-block"
          >
            Book a Free Call
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="absolute top-24 left-6 right-6 bg-brand-black/95 backdrop-blur-2xl border border-white/10 p-8 rounded-[40px] md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <div key={link.name} className="relative">
                  <Link
                    to={link.href}
                    className={`text-2xl font-serif block transition-all ${
                      isActive(link.href) ? 'text-brand-purple italic translate-x-2' : 'text-white/70'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="flex items-center gap-3">
                      {isActive(link.href) && (
                        <div className="w-1.5 h-1.5 bg-brand-purple rounded-full shadow-[0_0_8px_#8b5cf6]" />
                      )}
                      {link.name}
                    </div>
                  </Link>
                  {link.isDropdown && (
                    <div className="mt-4 ml-6 flex flex-col gap-4 border-l border-white/10 pl-6">
                      {serviceItems.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="text-lg text-white/40"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="h-px bg-white/10 my-4" />
              <a
                href="https://calendly.com/info-rajnishh/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-5 bg-brand-purple text-center text-white rounded-2xl font-bold text-xl shadow-lg shadow-brand-purple/20"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book a Free Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
