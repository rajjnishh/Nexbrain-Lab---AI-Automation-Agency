/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import CursorRipple from './components/CursorRipple';
import CustomCursor from './components/CustomCursor';
import Footer from './components/sections/Footer';
import LoadingIndicator from './components/ui/LoadingIndicator';
import HomePage from './pages/Home';
import ServicesPage from './pages/Services';
import CaseStudiesPage from './pages/CaseStudies';
import BlogPage from './pages/Blog';
import ContactPage from './pages/Contact';

function PageTransitionHandler({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);

    // Briefly show loader on route change
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800); // 800ms for a smooth transition

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingIndicator key="loader" />}
      </AnimatePresence>
      {children}
    </>
  );
}

export default function App() {
  return (
    <Router>
      <PageTransitionHandler>
        <div className="min-h-screen bg-brand-black text-white selection:bg-brand-purple selection:text-white">
          <CustomCursor />
          <CursorRipple />
          <Navbar />
          
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
  
          <Footer />
        </div>
      </PageTransitionHandler>
    </Router>
  );
}
