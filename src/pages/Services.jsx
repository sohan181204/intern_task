// src/pages/Services.jsx
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const servicesData = [
  {
    title: 'Wedding Planning',
    desc: 'From concept to completion, venue, décor, entertainment.',
    details:
      'We provide end-to-end wedding planning with personalized themes, stunning venue selection, décor, artist management, and full execution.',
    icon: '💍',
    img: '/images/wedding.jpg',
  },
  {
    title: 'Corporate Events',
    desc: 'Professional conferences, launches, meets, logistics.',
    details:
      'From small team builds to large conferences, we handle everything: logistics, AV, branding, hospitality, and engagement.',
    icon: '🏢',
    img: '/images/corporate.jpg',
  },
  {
    title: 'Birthday & Private Parties',
    desc: 'Personalized themes, catering, décor, fun.',
    details:
      'Personalized party themes, delicious catering, vibrant décor, and fun activities to celebrate every milestone.',
    icon: '🎉',
    img: '/images/party.jpg',
  },
];

export default function Services() {
  const [modal, setModal] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1100 });
  }, []);

  return (
    <div className="page-wrapper min-h-screen bg-gray-50 px-5 py-10">
      <h1
        className="text-4xl font-bold text-pink-700 text-center mb-3"
        data-aos="fade-down"
      >
        Our Services
      </h1>
      <p
        className="text-center text-gray-600 mb-10 max-w-2xl mx-auto"
        data-aos="fade-up"
      >
        End-to-end planning for weddings, corporate events, and private
        celebrations, tailored to your style and budget.
      </p>

      <div className="flex flex-wrap justify-center gap-8 md:gap-10">
        {servicesData.map((svc, idx) => (
          <div
            key={svc.title}
            className="w-full sm:w-80 md:w-96 bg-white rounded-xl shadow hover:shadow-2xl border border-pink-100 p-7 flex flex-col transition-transform duration-300 hover:scale-105 cursor-pointer group"
            data-aos="fade-up"
            data-aos-delay={idx * 120}
            onClick={() => setModal(svc)}
          >
            <span className="text-pink-700 text-4xl mb-4 group-hover:animate-bounce">
              {svc.icon}
            </span>
            <h2 className="text-xl font-bold text-pink-700 mb-1">
              {svc.title}
            </h2>
            <p className="text-gray-700 text-sm mb-4">{svc.desc}</p>
            <button className="text-pink-700 font-semibold underline group-hover:text-pink-900 text-sm">
              Learn More
            </button>
          </div>
        ))}
      </div>

      {/* Optional Testimonials Carousel */}
      <div className="max-w-xl mx-auto mt-14">
        <Testimonials />
      </div>

      {/* CTA */}
      <div className="text-center mt-10" data-aos="fade-up">
        <a
          href="/contact"
          className="inline-block bg-pink-700 text-white rounded-lg px-8 py-3 font-bold shadow hover:bg-pink-800 transition"
        >
          Book Your Event
        </a>
      </div>

      {/* Modal Popup for Learn More */}
      {modal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div
            className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full relative"
            data-aos="zoom-in"
          >
            <button
              className="absolute top-4 right-4 text-lg font-bold text-pink-700"
              onClick={() => setModal(null)}
            >
              ✕
            </button>
            <img
              src={modal.img}
              alt={modal.title}
              className="rounded-full w-20 h-20 mx-auto mb-4 object-cover border-4 border-pink-300"
            />
            <h2 className="text-pink-700 font-bold text-2xl mb-3 text-center">
              {modal.title}
            </h2>
            <p className="text-gray-700 text-center mb-4">
              {modal.details}
            </p>
            <a
              href="/contact"
              className="bg-pink-700 text-white px-5 py-2 rounded font-semibold block mx-auto w-3/4 mt-4 hover:bg-pink-800 transition"
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

function Testimonials() {
  const testimonials = [
    {
      text: 'They planned our wedding flawlessly. Every guest was amazed!',
      author: 'Ankita & Rahul',
    },
    {
      text: 'Our annual corporate meet ran smoothly, no hassle at all.',
      author: 'Rajesh Sharma',
    },
    {
      text: 'Birthday party was full of laughter! Kids loved the magician.',
      author: 'Neha S.',
    },
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(
      () => setIndex((i) => (i + 1) % testimonials.length),
      3200
    );
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div className="bg-white shadow rounded-lg p-6" data-aos="fade-up">
      <h3 className="text-pink-700 font-bold mb-3">Testimonials</h3>
      <blockquote className="italic text-gray-700">
        "{testimonials[index].text}"
      </blockquote>
      <div className="mt-2 text-right text-gray-500">
        -- {testimonials[index].author}
      </div>
    </div>
  );
}
