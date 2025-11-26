import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';

const bgVideos = [
  '/videos/event1.mp4',
  '/videos/event2.mp4',
  '/videos/event3.mp4'
];

const galleryImgs = [
  '/images/img1.jpg',
  '/images/img2.jpg',
  '/images/img3.jpg'
];

export default function Home() {
  const [currentVideo, setCurrentVideo] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1200, delay: 200 });
  }, []);

  // Video switching on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sectionHeight = window.innerHeight * 0.8;
      const scrollPos = window.scrollY;
      const vidIndex = Math.min(Math.floor(scrollPos / sectionHeight), bgVideos.length - 1);
      setCurrentVideo(vidIndex);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="homepage-container">
      {/* Background Video Section */}
      <div className="bg-video-wrapper">
        <video
          src={bgVideos[currentVideo]}
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          className="bg-video"
          style={{ pointerEvents: 'none' }}
          onError={() => console.log('Video failed to load!')}
        />
        <div className="bg-overlay" />
      </div>

      {/* Hero Section */}
      <header className="hero-text animate__animated animate__fadeInDown">
        <h1>Unforgettable Events, Perfectly Planned</h1>
        <p>Trusted professionals for stylish weddings, corporate events, and celebrations.</p>
        <button className="cta-btn" data-aos="zoom-in">Get A Quote</button>
      </header>

      {/* Service Cards */}
      <div className="service-cards">
        <div className="card" data-aos="fade-up">
          <h2>Weddings</h2>
          <p>Venue, Decor, Artist Management</p>
        </div>
        <div className="card" data-aos="fade-up" data-aos-delay="100">
          <h2>Corporate Events</h2>
          <p>Conferences, Launches, Team Building</p>
        </div>
        <div className="card" data-aos="fade-up" data-aos-delay="200">
          <h2>Private Parties</h2>
          <p>Birthdays, Anniversaries, Celebrations</p>
        </div>
      </div>

      {/* Animated Statistic */}
      <div className="count-section" data-aos="fade-right">
        <CountUp end={100} />+ Events Managed · Trusted by 50+ Companies · Across 5 Countries
      </div>

      {/* Testimonials Carousel */}
      <Testimonials />

      {/* Gallery Images with Fade */}
      <div className="gallery">
        {galleryImgs.map((img, idx) => (
          <img
            src={img}
            alt={`Event ${idx+1}`}
            className="gallery-img"
            data-aos="fade-in"
            data-aos-delay={idx * 200}
            key={img}
          />
        ))}
      </div>
    </div>
  );
}

// Simple CountUp animation
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

// Testimonials Carousel
function Testimonials() {
  const testimonials = [
    { text: "Elite Events took away all my stress!", author: "John Doe" },
    { text: "Our company event was flawless.", author: "Priya C." },
  ];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() =>
      setIndex((i) => (i + 1) % testimonials.length), 3000);
    return () => clearTimeout(timer);
  }, [index]);
  return (
    <div className="testimonials" data-aos="fade-up">
      <h3>Testimonials</h3>
      <div className="testimonial-text animate__animated animate__fadeIn">
        <blockquote>
          "{testimonials[index].text}"<br />
          <small>-- {testimonials[index].author}</small>
        </blockquote>
      </div>
    </div>
  );
}
