import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, ArrowRight } from 'lucide-react';

const cases = [
  {
    title: "Mercantile Marine Academy Kolkata",
    description: "Automated student enrollment and lead generation for one of India's leading maritime academies.",
    image: "https://picsum.photos/seed/marine/1200/800",
    results: ["+150% Lead Volume", "40% Lower CAC", "Automated Follow-ups"]
  },
  {
    title: "Seastella",
    description: "AI-driven customer support and booking automation for luxury yacht services.",
    image: "https://picsum.photos/seed/yacht/1200/800",
    results: ["24/7 Instant Support", "95% Query Resolution", "+30% Direct Bookings"]
  },
  {
    title: "Tax Harbour",
    description: "Streamlined document processing and client onboarding for a premium tax consultancy.",
    image: "https://picsum.photos/seed/tax/1200/800",
    results: ["80% Faster Onboarding", "Zero Manual Entry", "Improved Client Retention"]
  }
];

export default function CaseStudiesPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold font-display mb-6 italic serif">Case Studies</h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Real results for real businesses. See how we've transformed operations with AI.
          </p>
        </motion.div>

        <div className="space-y-32">
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
                <button className="flex items-center gap-3 text-lg font-bold group">
                  Read Full Story <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
