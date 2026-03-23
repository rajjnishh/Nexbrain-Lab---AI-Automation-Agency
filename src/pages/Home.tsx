import React from 'react';
import AetherHero from '../components/ui/aether-hero';

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center">
        <AetherHero
          title="Automate Your Business Growth with AI-Powered Solutions"
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
    </main>
  );
}
