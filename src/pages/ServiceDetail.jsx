import React from 'react';
import { useParams } from 'react-router-dom';

const services = {
  1: {
    name: "Wedding Planning",
    detail: "Full wedding planning solutions: venue selection, décor, guest lists, artist booking, logistics, hospitality, budgeting, coordination, vendor management."
  },
  2: {
    name: "Corporate Events",
    detail: "Conferences, launches, team-building, product unveilings, annual meets, hotel bookings, stage setups, catering, and more."
  },
  3: {
    name: "Birthday & Private Parties",
    detail: "Creative themed parties: birthdays, anniversaries, celebrations—catering, décor, music, activities, and fun experiences."
  }
};

const ServiceDetail = () => {
  const { id } = useParams();
  const service = services[id];

  if (!service) return <div className="py-12 text-center">Service not found.</div>;

  return (
    <section className="py-12 max-w-2xl mx-auto px-4">
      <h1 className="text-3xl font-bold text-pink-700 mb-4">{service.name}</h1>
      <p className="text-lg text-gray-800">{service.detail}</p>
    </section>
  );
};

export default ServiceDetail;
