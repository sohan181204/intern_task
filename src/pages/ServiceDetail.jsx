// src/pages/ServiceDetail.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const services = {
  1: {
    name: 'Wedding Planning',
    detail:
      'Full wedding planning solutions: venue selection, décor, guest lists, artist booking, logistics, hospitality, budgeting, and vendor coordination from start to finish.',
    includes: ['Venue & décor', 'Guest experience', 'Artist & entertainment', 'Logistics & hospitality'],
  },
  2: {
    name: 'Corporate Events',
    detail:
      'End-to-end management for conferences, launches, team-building, annual meets, and product unveilings with strong focus on branding and guest comfort.',
    includes: ['Conferences & launches', 'Team-building', 'Stage & AV setup', 'Catering & logistics'],
  },
  3: {
    name: 'Birthday & Private Parties',
    detail:
      'Creative themed parties for birthdays, anniversaries, and intimate celebrations with décor, catering, music, and activities tailored to your guests.',
    includes: ['Theme creation', 'Decor & lighting', 'Catering & cake', 'Games & activities'],
  },
};

const ServiceDetail = () => {
  const { id } = useParams();
  const service = services[id];

  if (!service) {
    return (
      <section className="page-wrapper py-12 text-center">
        <h1 className="text-2xl font-bold text-pink-700 mb-2">Service not found</h1>
        <Link to="/services" className="text-pink-700 underline">
          Back to services
        </Link>
      </section>
    );
  }

  return (
    <section className="page-wrapper py-12 max-w-3xl mx-auto px-4">
      <Link to="/services" className="text-sm text-pink-700 underline mb-4 inline-block">
        ← Back to services
      </Link>

      <h1 className="text-3xl md:text-4xl font-bold text-pink-700 mb-3">
        {service.name}
      </h1>
      <p className="text-gray-600 text-sm mb-5">
        Tailored, end-to-end coordination so you can focus on enjoying the event.
      </p>

      <p className="text-base md:text-lg text-gray-800 mb-6">
        {service.detail}
      </p>

      {service.includes && (
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            What&apos;s Included
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm md:text-base">
            {service.includes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-6">
        <Link
          to="/contact"
          className="inline-block bg-pink-700 text-white px-6 py-2 rounded-full font-semibold text-sm md:text-base shadow hover:bg-pink-800 transition"
        >
          Book This Service
        </Link>
      </div>
    </section>
  );
};

export default ServiceDetail;
