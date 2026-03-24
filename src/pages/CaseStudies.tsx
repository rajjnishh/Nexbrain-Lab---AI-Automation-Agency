import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, ArrowRight, MessageCircle, Phone, X, CheckCircle2 } from 'lucide-react';
import Clients from '../components/sections/Clients';
import Results from '../components/sections/Results';
import TestimonialCarousel from '../components/sections/TestimonialCarousel';
import CTASection from '../components/sections/CTASection';

const cases = [
  {
    title: "Mercantile Marine Academy Kolkata",
    description: "Automated student enrollment and lead generation for one of India's leading maritime academies.",
    image: "https://picsum.photos/seed/marine/1200/800",
    results: ["+150% Lead Volume", "40% Lower CAC", "Automated Follow-ups"],
    fullStory: {
      headline: "Driving MMA's digital growth, positioning, and lead generation system.",
      contributions: [
        {
          title: "Brand Building",
          items: [
            "Created & optimized LinkedIn page + content strategy",
            "Improved authority positioning (director visibility, credibility)"
          ]
        },
        {
          title: "Content Marketing",
          items: [
            "Writing high-converting posts (pain-point driven, trust-based)",
            "Converting raw info into structured templates & scripts"
          ]
        },
        {
          title: "Lead Generation System",
          items: [
            "Designing CTA-focused content (WhatsApp, calls, website)",
            "Aligning with KPI: enquiries & batch filling"
          ]
        },
        {
          title: "Information Structuring",
          items: [
            "Organizing courses, packages, and offerings clearly",
            "Making MMA easier to understand & sell"
          ]
        },
        {
          title: "Strategic Positioning",
          items: [
            "DG Shipping approval",
            "27+ years legacy",
            "Practical training edge"
          ]
        },
        {
          title: "Operational Support",
          items: [
            "Creating templates (hostel, teaching, posts)",
            "Standardizing communication"
          ]
        }
      ],
      impact: [
        "More visibility",
        "Better trust",
        "Higher enquiry conversion",
        "Stronger brand perception"
      ]
    }
  },
  {
    title: "Seastella",
    description: "AI-driven customer support and booking automation for luxury yacht services.",
    image: "https://picsum.photos/seed/yacht/1200/800",
    results: ["24/7 Instant Support", "95% Query Resolution", "+30% Direct Bookings"],
    fullStory: {
      headline: "Service Provided: Website + Growth Systems",
      contributions: [
        {
          title: "Website Development",
          items: ["Built a clean, professional, conversion-focused website"]
        },
        {
          title: "UI/UX Optimization",
          items: ["Mobile-friendly, smooth navigation, trust-building layout"]
        },
        {
          title: "WhatsApp Outreach System",
          items: [
            "Setup + managed automated/manual outreach",
            "Faster response handling and lead nurturing"
          ]
        },
        {
          title: "Email Outreach",
          items: [
            "Cold email setup + messaging strategy",
            "Consistent lead generation pipeline"
          ]
        },
        {
          title: "Content Writing",
          items: [
            "Website + outreach copy",
            "Clear positioning and persuasive messaging"
          ]
        },
        {
          title: "Lead Flow Optimization",
          items: ["Integrated website + outreach → better conversions"]
        }
      ],
      impact: [
        "Improved online presence",
        "Consistent lead inflow",
        "Higher engagement"
      ]
    }
  },
  {
    title: "Tax Harbour",
    description: "Streamlined document processing and client onboarding for a premium tax consultancy.",
    image: "https://picsum.photos/seed/tax/1200/800",
    results: ["80% Faster Onboarding", "Zero Manual Entry", "Improved Client Retention"],
    fullStory: {
      headline: "Service Provided: Website Development & Optimization",
      contributions: [
        {
          title: "Custom Website Development",
          items: ["Designed & built a professional, conversion-focused website"]
        },
        {
          title: "UI/UX Optimization",
          items: ["Clean layout, intuitive navigation, mobile responsiveness"]
        },
        {
          title: "Conversion Setup",
          items: ["Strategic CTAs (book call / inquiry forms) to capture leads"]
        },
        {
          title: "Service Structuring",
          items: ["Clear presentation of offerings for better client understanding"]
        },
        {
          title: "Performance & Speed Optimization",
          items: ["Fast loading → reduced drop-offs"]
        },
        {
          title: "Brand Positioning",
          items: ["Created a strong, credible digital presence"]
        }
      ],
      impact: [
        "Increased trust",
        "Higher engagement",
        "More inbound inquiries"
      ]
    }
  }
];

export default function CaseStudiesPage() {
  const [selectedCase, setSelectedCase] = useState<typeof cases[0] | null>(null);

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold font-display mb-6 italic serif">Our Clients</h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto mb-10">
            Real results for real businesses. See how we've transformed operations with AI.
          </p>
          
          <div className="flex items-center justify-center gap-6">
            <a 
              href="https://wa.me/919341743927" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-500 hover:bg-green-500 hover:text-white transition-all duration-300 shadow-lg shadow-green-500/20"
            >
              <MessageCircle size={28} />
            </a>
            <a 
              href="tel:+919341743927"
              className="w-16 h-16 rounded-full bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center text-brand-purple hover:bg-brand-purple hover:text-white transition-all duration-300 shadow-lg shadow-brand-purple/20"
            >
              <Phone size={28} />
            </a>
          </div>
        </motion.div>

        <Clients />

        <div className="space-y-32 mt-32">
          {cases.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
            >
              <div className="flex-1 w-full">
                <div className="relative group overflow-hidden rounded-[40px] border border-white/10">
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand-purple/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <ExternalLink size={48} className="text-white" />
                  </div>
                </div>
              </div>
              <div className="flex-1 space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold font-display leading-tight">{study.title}</h2>
                <p className="text-xl text-white/60 leading-relaxed">{study.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {study.results.map(result => (
                    <div key={result} className="p-4 rounded-2xl bg-white/5 border border-white/10 text-brand-purple font-bold">
                      {result}
                    </div>
                  ))}
                </div>
                <button 
                  onClick={() => setSelectedCase(study)}
                  className="flex items-center gap-3 text-lg font-bold group"
                >
                  Read Full Story <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedCase && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedCase(null)}
                className="absolute inset-0 bg-black/90 backdrop-blur-xl"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-4xl max-h-[80vh] overflow-y-auto bg-white/5 border border-white/10 rounded-[40px] p-8 md:p-12"
              >
                <button 
                  onClick={() => setSelectedCase(null)}
                  className="absolute top-8 right-8 text-white/40 hover:text-white transition-colors"
                >
                  <X size={32} />
                </button>

                <div className="space-y-12">
                  <div>
                    <h2 className="text-4xl md:text-6xl font-bold font-display mb-6">{selectedCase.title}</h2>
                    <p className="text-2xl text-brand-purple font-serif italic">{selectedCase.fullStory?.headline || selectedCase.description}</p>
                  </div>

                  {selectedCase.fullStory && (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="space-y-8">
                          <h3 className="text-2xl font-bold border-b border-white/10 pb-4">Our Contributions</h3>
                          <div className="space-y-8">
                            {selectedCase.fullStory.contributions.map((section) => (
                              <div key={section.title} className="space-y-3">
                                <h4 className="text-brand-purple font-bold uppercase tracking-wider text-sm">{section.title}</h4>
                                <ul className="space-y-2">
                                  {section.items.map((item) => (
                                    <li key={item} className="text-white/60 flex items-start gap-3">
                                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-purple shrink-0" />
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-8">
                          <div className="p-8 rounded-3xl bg-brand-purple/10 border border-brand-purple/20">
                            <h3 className="text-2xl font-bold mb-6">Net Impact</h3>
                            <div className="space-y-4">
                              {selectedCase.fullStory.impact.map((item) => (
                                <div key={item} className="flex items-center gap-4 text-lg">
                                  <CheckCircle2 className="text-brand-purple shrink-0" />
                                  <span>{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                            <h3 className="text-xl font-bold mb-4">Key Results</h3>
                            <div className="grid grid-cols-1 gap-4">
                              {selectedCase.results.map(result => (
                                <div key={result} className="text-3xl font-bold text-brand-purple">
                                  {result}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        <div className="mt-32">
          <TestimonialCarousel />
        </div>

        <div className="mt-32">
          <Results />
        </div>

        <CTASection />
      </div>
    </div>
  );
}
