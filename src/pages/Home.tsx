import React from 'react';
import AetherHero from '../components/ui/aether-hero';
import WhyChooseUs from '../components/sections/WhyChooseUs';

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center">
        <AetherHero
          badge={
            <div className="flex items-center gap-2">
              <span>NEXBRAIN</span>
              <span className="bg-brand-purple/20 px-1.5 py-0.5 rounded-md border border-brand-purple/30 text-[0.65rem]">LAB</span>
            </div>
          }
          title={
            <>
              Automate Your Business Growth with <span style={{ color: '#8b5cf6', textShadow: '0 0 30px rgba(139, 92, 246, 0.4)' }}>AI-Powered Solutions</span>
            </>
          }
          subtitle="Let AI handle the heavy lifting, so you can focus on growing your business."
          ctaLabel="Book a Free Call"
          ctaHref="https://calendly.com/info-rajnishh/30min"
          secondaryCtaLabel="Call Us"
          secondaryCtaHref="tel:+919341743927"
          align="center"
          overlayGradient="linear-gradient(180deg, #00000099, #00000040 40%, transparent)"
          className="w-full"
        />
      </div>

      <WhyChooseUs />
    </main>
  );
}
