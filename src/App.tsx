/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import CursorRipple from './components/CursorRipple';
import CustomCursor from './components/CustomCursor';
import Footer from './components/sections/Footer';
import HomePage from './pages/Home';
import ServicesPage from './pages/Services';
import CaseStudiesPage from './pages/CaseStudies';
import BlogPage from './pages/Blog';
import ContactPage from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
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
    </Router>
  );
}
