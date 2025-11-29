// src/pages/Home.jsx
import React, { useEffect, useState, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';

const galleryImgs = [
  '/images/img1.jpg',
  '/images/img2.jpg',
  '/images/img3.jpg',
];

export default function Home() {
  const heroVideoRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1200, delay: 200 });
  }, []);

  useEffect(() => {
    if (heroVideoRef.current) {
      const playPromise = heroVideoRef.current.play();
      if (playPromise && playPromise.catch) {
        playPromise.catch(() => {});
      }
    }
  }, []);

  return (
    <div className="page-wrapper">
      {/* Top promo bar */}
      <div className="w-full bg-[#b8005a] text-white text-xs md:text-sm py-2 text-center px-4">
        <span className="font-semibold">
          🎉 Flat 10% OFF on your FIRST event – Book Now!
        </span>
      </div>

      {/* HERO VIDEO SECTION (single video) */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <video
          ref={heroVideoRef}
          src="/videos/event1.mp4"
          autoPlay
          muted
          playsInline
          loop
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs md:text-sm text-pink-200 font-semibold tracking-wide mb-3 uppercase">
            Elite Events • Hyderabad
          </p>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 text-white">
            Luxurious Events
            <span className="block text-[#ff4c99]">
              Crafted at Your Doorstep
            </span>
          </h1>

          <p className="text-base md:text-lg text-gray-100 mb-7 max-w-2xl mx-auto">
            Professional, creative and hassle‑free planning for weddings,
            corporate events and private celebrations, tailored to your style and budget.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8 text-gray-100 text-sm">
            <div className="flex flex-col items-center">
              <span className="text-2xl mb-1">💐</span>
              <span className="font-semibold">Designer Décor</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl mb-1">🤝</span>
              <span className="font-semibold">End‑to‑End Planning</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl mb-1">⭐</span>
              <span className="font-semibold">Premium Experience</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4">
            <a
              href="/contact"
              className="px-8 py-3 rounded-full bg-[#b8005a] text-white font-semibold shadow-lg hover:bg-[#97004b] transition"
            >
              Get Instant Quote
            </a>
            <a
              href="https://wa.me/916301859451"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-3 rounded-full bg-white/95 text-[#b8005a] font-semibold shadow hover:bg-white transition"
            >
              Book on WhatsApp
            </a>
          </div>

          <p className="text-xs md:text-sm text-gray-200">
            Trusted by 100+ couples & brands • 5+ years of experience • Transparent pricing
          </p>
        </div>
      </section>

      {/* MAIN HOME CONTENT ON LIGHT BACKGROUND */}
      <section className="homepage-container bg-gray-50">
        {/* Services summary cards */}
        <div className="service-cards flex-wrap relative z-10">
          <div className="card" data-aos="fade-up">
            <h2 className="font-bold text-pink-700 mb-1">Weddings</h2>
            <p className="text-gray-700 text-sm">
              Venue selection, décor, rituals, and artist management for dream weddings.
            </p>
          </div>
          <div className="card" data-aos="fade-up" data-aos-delay="100">
            <h2 className="font-bold text-pink-700 mb-1">Corporate Events</h2>
            <p className="text-gray-700 text-sm">
              Conferences, product launches, and team experiences with flawless logistics.
            </p>
          </div>
          <div className="card" data-aos="fade-up" data-aos-delay="200">
            <h2 className="font-bold text-pink-700 mb-1">Private Parties</h2>
            <p className="text-gray-700 text-sm">
              Birthdays, anniversaries, and home gatherings with curated themes.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="count-section relative z-10" data-aos="fade-right">
          <CountUp end={100} />+ Events Managed · Trusted by 50+ Companies · Across 5 Countries
        </div>

        {/* Testimonials */}
        <div className="relative z-10">
          <Testimonials />
        </div>

        {/* Gallery */}
        <div className="gallery relative z-10">
          {galleryImgs.map((img, idx) => (
            <img
              key={img}
              src={img}
              alt={`Event ${idx + 1}`}
              className="gallery-img"
              data-aos="fade-in"
              data-aos-delay={idx * 200}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

/* === Helpers === */

function CountUp({ end }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const interval = setInterval(() => {
      if (start < end) {
        start += 1;
        setCount(start);
      } else {
        clearInterval(interval);
      }
    }, 20);
    return () => clearInterval(interval);
  }, [end]);

  return <span className="count-up">{count}</span>;
}

function Testimonials() {
  const testimonials = [
    { text: 'Elite Events took away all our wedding stress!', author: 'Ankita & Rahul' },
    { text: 'Our corporate meet was seamless and on-brand.', author: 'Rajesh Sharma' },
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
    <div className="testimonials" data-aos="fade-up">
      <h3 className="text-pink-700 font-bold mb-2">Client Stories</h3>
      <div className="testimonial-text animate__animated animate__fadeIn">
        <blockquote>
          "{testimonials[index].text}"
          <br />
          <small>-- {testimonials[index].author}</small>
        </blockquote>
      </div>
    </div>
  );
}
