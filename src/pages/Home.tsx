import React from 'react';
import AetherHero from '../components/ui/aether-hero';
import Clients from '../components/sections/Clients';
import Services from '../components/sections/Services';
import HowItWorks from '../components/sections/HowItWorks';
import Results from '../components/sections/Results';
import CTASection from '../components/sections/CTASection';

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center">
        <AetherHero
          title="Automate Your Business Growth with AI-Powered Solutions"
          subtitle="More leads. More bookings. Less manual work."
          ctaLabel="Book a Free Call"
          ctaHref="https://calendly.com/info-rajnishh/30min"
          align="left"
          overlayGradient="linear-gradient(90deg, #09090bbb 0%, #09090b88 40%, transparent 100%)"
          className="w-full"
        />
      </div>

      <Clients />
      <Services />
      <HowItWorks />
      <Results />
      <CTASection />
    </main>
  );
}
