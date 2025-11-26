import React from 'react';
import PortfolioItem from '../components/PortfolioItem';

const portfolio = [
  { image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80", title: "Jaipur Royal Wedding", description: "A grand celebration in Rajasthan's palaces." },
  { image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80", title: "Corporate Product Launch", description: "Luxury event for a tech brand in Mumbai." }
];

const Portfolio = () => (
  <section className="py-12 px-4">
    <h2 className="text-3xl font-bold mb-8 text-center text-pink-700">Portfolio / Case Studies</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {portfolio.map((p, idx) => <PortfolioItem key={idx} {...p} />)}
    </div>
  </section>
);

export default Portfolio;
