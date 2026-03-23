import React from 'react';

const clients = [
  { name: 'Mercantile Marine Academy Kolkata', logo: 'https://images.unsplash.com/photo-1599305090598-fe179d501227?w=200&h=100&fit=crop&q=80' },
  { name: 'Seastella', logo: 'https://images.unsplash.com/photo-1599305090598-fe179d501227?w=200&h=100&fit=crop&q=80' },
  { name: 'Tax Harbour', logo: 'https://images.unsplash.com/photo-1599305090598-fe179d501227?w=200&h=100&fit=crop&q=80' },
];

export default function Clients() {
  return (
    <section className="py-20 border-y border-white/5 bg-brand-black/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-white/40 mb-12">
          TRUSTED BY INDUSTRY LEADERS
        </p>
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {clients.map((client) => (
            <div key={client.name} className="flex flex-col items-center gap-4">
              <div className="h-12 w-48 flex items-center justify-center bg-white/5 rounded-lg border border-white/10 px-4">
                <span className="text-sm font-bold text-white/80 text-center">{client.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
