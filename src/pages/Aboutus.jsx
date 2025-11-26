import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const teamMembers = [
  { name: 'Sohan Kumar', role: 'Founder & CEO', img: '/images/team1.jpg' },
  { name: 'Priya C.', role: 'Event Manager', img: '/images/team2.jpg' },
  { name: 'John Doe', role: 'Creative Lead', img: '/images/team3.jpg' }
];

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 px-5 py-10">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-pink-700 text-center mb-6" data-aos="fade-down">
        About Us
      </h1>

      {/* Intro/Story */}
      <p className="max-w-2xl mx-auto text-center text-lg text-gray-700 mb-8" data-aos="fade-in">
        Elite Events brings you exceptional service, professionalism, and creativity.
        Our commitment: your vision executed with passion and precision.
      </p>

      {/* Mission, Vision, Values */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 mb-12">
        <InfoCard
          title="Mission"
          icon="🎯"
          text="Create stress-free celebrations with extraordinary experiences."
          aos="fade-right"
        />
        <InfoCard
          title="Vision"
          icon="🌐"
          text="Be the preferred partner for event excellence globally."
          aos="fade-up"
        />
        <InfoCard
          title="Values"
          icon="💡"
          text="Trust, Integrity, Innovation, Joy."
          aos="fade-left"
        />
      </div>

      {/* Stats / Achievements */}
      <div className="flex flex-wrap items-center justify-center gap-12 my-14">
        <StatCounter value={100} label="Events Hosted" />
        <StatCounter value={50} label="Clients Served" />
        <StatCounter value={5} label="Countries Covered" />
      </div>

      {/* Team Section */}
      <h2 className="text-2xl font-semibold text-pink-700 text-center mb-4" data-aos="fade-down">
        Meet The Team
      </h2>
      <div className="flex flex-wrap justify-center gap-8 mb-12">
        {teamMembers.map((tm, idx) => (
          <div
            key={tm.name}
            className="bg-white shadow-lg rounded-lg p-5 w-64 flex flex-col items-center"
            data-aos="zoom-in"
            data-aos-delay={idx * 150}
          >
            <img
              src={tm.img}
              alt={tm.name}
              className="rounded-full w-20 h-20 mb-3 object-cover border-4 border-pink-200"
            />
            <h3 className="font-bold text-lg text-gray-800 mb-1">{tm.name}</h3>
            <p className="text-pink-600 font-medium">{tm.role}</p>
          </div>
        ))}
      </div>

      {/* Testimonial Carousel */}
      <div className="max-w-xl mx-auto">
        <Testimonials />
      </div>

      {/* Call to Action */}
      <div className="text-center mt-10" data-aos="fade-up">
        <a href="/contact" className="inline-block bg-pink-700 text-white rounded-lg px-8 py-3 font-bold shadow hover:bg-pink-800 transition">
          Contact Us Today
        </a>
      </div>
    </div>
  );
}

function InfoCard({ title, icon, text, aos }) {
  return (
    <div
      className="flex flex-col items-center px-6 py-5 bg-white rounded-xl shadow border border-pink-100 w-64"
      data-aos={aos}
    >
      <span className="text-4xl mb-2">{icon}</span>
      <h3 className="text-pink-700 font-bold text-xl mb-2">{title}</h3>
      <p className="text-center text-gray-600">{text}</p>
    </div>
  );
}

function StatCounter({ value, label }) {
  // Simple count up animation
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setCount(i);
      if (i >= value) clearInterval(interval);
    }, 18);
    return () => clearInterval(interval);
  }, [value]);
  return (
    <div className="flex flex-col items-center" data-aos="fade-up">
      <span className="text-3xl text-pink-700 font-bold mb-1">{count}</span>
      <span className="text-gray-600">{label}</span>
    </div>
  );
}

// Simple auto-switch testimonial carousel
function Testimonials() {
  const testimonials = [
    {
      text: "Elite Events took away all my stress! Superb planning.",
      author: "John Doe"
    },
    {
      text: "Our company event was flawless. Thank you!",
      author: "Priya C."
    }
  ];
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    const timer = setTimeout(
      () => setIndex(i => (i + 1) % testimonials.length),
      3500
    );
    return () => clearTimeout(timer);
  }, [index]);
  return (
    <div className="bg-white shadow rounded-lg p-6" data-aos="fade-up">
      <h3 className="text-pink-700 font-bold mb-3">Testimonials</h3>
      <div>
        <blockquote className="italic text-gray-700">
          "{testimonials[index].text}"
        </blockquote>
        <div className="mt-2 text-right text-gray-500">-- {testimonials[index].author}</div>
      </div>
    </div>
  );
}
