// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';

const bgVideos = [
  '/videos/event1.mp4',
  '/videos/event2.mp4',
  '/videos/event3.mp4',
];

const galleryImgs = [
  '/images/img1.jpg',
  '/images/img2.jpg',
  '/images/img3.jpg',
];

export default function Home() {
  const [currentVideo, setCurrentVideo] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1200, delay: 200 });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sectionHeight = window.innerHeight * 0.8;
      const scrollPos = window.scrollY;
      const vidIndex = Math.min(
        Math.floor(scrollPos / sectionHeight),
        bgVideos.length - 1
      );
      setCurrentVideo(vidIndex);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="page-wrapper homepage-container">
      {/* Background Video */}
      <div className="bg-video-wrapper">
        <video
          src={bgVideos[currentVideo]}
          autoPlay
          loop
          muted
          playsInline
          className="bg-video"
        />
        <div className="bg-overlay" />
      </div>

      {/* Hero */}
      <header className="hero-text animate__animated animate__fadeInDown relative z-10">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-2">
          Unforgettable Events, Perfectly Planned
        </h1>
        <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto">
          Trusted professionals for stylish weddings, corporate events, and
          private celebrations in Hyderabad and beyond.
        </p>
        <button className="cta-btn" data-aos="zoom-in">
          Get A Quote
        </button>

        {/* Scroll cue */}
        <div className="mt-6 text-sm text-gray-600 flex flex-col items-center">
          <span>Scroll to explore</span>
          <span className="mt-1 animate-bounce">⌄</span>
        </div>
      </header>

      {/* Services */}
      <div className="service-cards relative z-10 flex-wrap">
        <div className="card" data-aos="fade-up">
          <h2 className="font-bold text-pink-700 mb-1">Weddings</h2>
          <p className="text-gray-700 text-sm">
            Venue selection, décor, rituals, and artist management for dream
            weddings.
          </p>
        </div>
        <div className="card" data-aos="fade-up" data-aos-delay="100">
          <h2 className="font-bold text-pink-700 mb-1">Corporate Events</h2>
          <p className="text-gray-700 text-sm">
            Conferences, product launches, and team experiences with flawless
            logistics.
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
        <CountUp end={100} />+ Events Managed · Trusted by 50+ Companies · Across
        5 Countries
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
    </div>
  );
}

function CountUp({ end }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const interval = setInterval(() => {
      if (start < end) {
        start++;
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
    { text: 'Elite Events took away all my stress!', author: 'John Doe' },
    { text: 'Our company event was flawless.', author: 'Priya C.' },
  ];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setTimeout(
      () => setIndex((i) => (i + 1) % testimonials.length),
      3000
    );
    return () => clearTimeout(timer);
  }, [index]);
  return (
    <div className="testimonials" data-aos="fade-up">
      <h3 className="text-pink-700 font-bold mb-2">Testimonials</h3>
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
