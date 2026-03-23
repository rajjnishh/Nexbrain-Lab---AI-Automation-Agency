import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Bot, Star, Phone, Globe, Share2, Target, PenTool } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import HowItWorks from '../components/sections/HowItWorks';
import CTASection from '../components/sections/CTASection';

const services = [
  {
    title: "AI Chatbots",
    icon: Bot,
    subtitle: "24/7 Intelligent Support",
    description: "Our intelligent AI chatbots are designed to provide seamless, 24/7 customer support. By leveraging advanced natural language processing, these agents can handle complex queries, qualify leads, and integrate directly with your existing CRM, ensuring your customers always receive immediate attention while your team focuses on high-value tasks.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd05a?q=80&w=1000&auto=format&fit=crop",
    features: ["24/7 Customer Support", "Lead Qualification", "Multi-platform Integration"]
  },
  {
    title: "Feedback & Review System",
    icon: Star,
    subtitle: "Build Your Reputation",
    description: "Reputation is everything in the digital age. Our automated feedback and review systems help you proactively collect positive testimonials from satisfied clients while identifying and addressing concerns before they become public issues. We help you build a 5-star reputation that drives trust and conversions.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2923216?q=80&w=1000&auto=format&fit=crop",
    features: ["Automated Review Requests", "Sentiment Analysis", "Reputation Management"]
  },
  {
    title: "AI Calling Agent",
    icon: Phone,
    subtitle: "Natural Voice Automation",
    description: "Experience the future of outbound and inbound communication with our AI calling agents. These human-like voice systems can handle appointment scheduling, lead follow-ups, and even cold calling with natural-sounding synthesis. They never get tired, never miss a detail, and can scale your outreach efforts infinitely.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop",
    features: ["Natural Voice Synthesis", "Appointment Scheduling", "Cold Calling Automation"]
  },
  {
    title: "Website Development",
    icon: Globe,
    subtitle: "High-Performance Digital Hubs",
    description: "We create premium, high-converting websites that serve as the digital heartbeat of your business. Our development process focuses on lightning-fast performance, mobile-first responsiveness, and SEO optimization. We don't just build websites; we build growth engines designed to turn visitors into loyal customers.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    features: ["Responsive Design", "SEO Optimization", "High Performance"]
  },
  {
    title: "Social Media Management",
    icon: Share2,
    subtitle: "Strategic Brand Growth",
    description: "Dominate your niche with a strategic social media presence. Our team handles everything from content creation and trend analysis to community engagement and performance reporting. We ensure your brand voice is consistent and compelling across all platforms, building a loyal following that translates into business growth.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop",
    features: ["Content Strategy", "Community Engagement", "Analytics Reporting"]
  },
  {
    title: "Outreach Systems",
    icon: Target,
    subtitle: "Automated Lead Generation",
    description: "Stop waiting for leads to find you. Our automated outreach systems utilize multi-channel strategies—including email and LinkedIn—to proactively connect with your ideal prospects. We handle the lead scraping, personalization, and follow-up sequences, filling your calendar with qualified sales calls.",
    image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=1000&auto=format&fit=crop",
    features: ["Email Automation", "LinkedIn Outreach", "Lead Scraping"]
  },
  {
    title: "Copywriting",
    icon: PenTool,
    subtitle: "Words That Convert",
    description: "Words sell. Our expert copywriters craft persuasive, high-converting messaging for your ads, email sequences, and landing pages. We focus on psychological triggers and clear value propositions that resonate with your target audience, driving them to take action and increasing your overall marketing ROI.",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1000&auto=format&fit=crop",
    features: ["Ad Copy", "Email Sequences", "Landing Page Copy"]
  }
];

export default function ServicesPage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        const offset = 120; // Offset for navbar
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  }, [hash]);

  return (
    <div className="pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold font-display mb-6 tracking-tighter italic serif">Our Expertise</h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Advanced AI-powered systems engineered to scale your business and automate your success.
          </p>
        </motion.div>

        <div className="space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              id={service.title.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-16 items-center`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-brand-purple/20 blur-2xl rounded-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative aspect-video overflow-hidden rounded-[32px] border border-white/10">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-1/2 relative">
                <div className="absolute -top-12 -left-4 text-[120px] font-bold font-display text-white/[0.03] pointer-events-none select-none">
                  {(index + 1).toString().padStart(2, '0')}
                </div>
                
                <div className="space-y-8 relative z-10">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-brand-purple/10 flex items-center justify-center border border-brand-purple/20">
                        <service.icon size={24} className="text-brand-purple" />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight">
                        {service.title}
                      </h2>
                    </div>
                    <p className="text-lg md:text-xl font-serif italic text-brand-purple/80">
                      {service.subtitle}
                    </p>
                  </div>
                  
                  <p className="text-lg text-white/60 leading-relaxed font-light">
                    {service.description}
                  </p>

                  <div className="flex flex-col gap-4 pt-2">
                    {service.features.map(feature => (
                      <div key={feature} className="flex items-center gap-3 group/feature">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-purple group-hover/feature:scale-150 transition-transform" />
                        <span className="text-xs font-bold tracking-widest uppercase text-white/40 group-hover/feature:text-white/70 transition-colors">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6">
                    <a 
                      href="https://calendly.com/info-rajnishh/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-4 text-lg font-bold group/link text-white hover:text-brand-purple transition-colors"
                    >
                      <span>Discuss this service</span>
                      <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover/link:border-brand-purple group-hover/link:bg-brand-purple transition-all">
                        <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-32">
          <HowItWorks />
        </div>

        <CTASection />
      </div>
    </div>
  );
}
