import React from 'react';
import ServiceCard from '../components/ServiceCard';

const services = [
  { id: 1, name: "Wedding Planning", description: "From concept to completion, venue, décor, entertainment." },
  { id: 2, name: "Corporate Events", description: "Professional conferences, launches, meets, logistics." },
  { id: 3, name: "Birthday & Private Parties", description: "Personalized themes, catering, décor, fun." }
];

const Services = () => (
  <section className="py-12 px-4">
    <h2 className="text-3xl font-bold mb-6 text-center text-pink-700">Our Services</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
      {services.map(s => <ServiceCard key={s.id} {...s} />)}
    </div>
  </section>
);

export default Services;
