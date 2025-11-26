import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Sample portfolio data
const portfolioItems = [
  {
    title: "Grand Rajasthan Celebration",
    desc: "A grand celebration in Rajasthan's palaces.",
    details: "A luxury wedding hosted for 500 guests featuring Rajasthan’s top palaces, folk performances, and celebrity artists. Decor was custom-themed with floral installations and heritage accents.",
    images: [
      "/images/rajasthan1.jpg", "/images/rajasthan2.jpg"
    ],
    client: "Ankita & Rahul",
    date: "Jan 2025"
  },
  {
    title: "Tech Brand Launch in Mumbai",
    desc: "Luxury event for a tech brand in Mumbai.",
    details: "Organized a high-profile launch party for a tech firm at a five-star Mumbai hotel. Event logistics, AV setup, influencer invite, and corporate branding handled end-to-end.",
    images: [
      "/images/mumbai1.jpg", "/images/mumbai2.jpg"
    ],
    client: "TechBrand Inc.",
    date: "Sep 2024"
  }
];

export default function Portfolio() {
  const [modal, setModal] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1100 });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 px-5 py-10">
      <h1 className="text-4xl font-bold text-pink-700 text-center mb-10" data-aos="fade-down">
        Portfolio / Case Studies
      </h1>

      {/* Portfolio cards */}
      <div className="flex flex-wrap justify-center gap-10">
        {portfolioItems.map((item, idx) => (
          <div
            key={item.title}
            className="w-full sm:w-2/5 bg-white rounded-xl shadow hover:shadow-2xl border border-pink-100 p-7 flex flex-col transition-transform duration-300 hover:scale-105 cursor-pointer group"
            data-aos="fade-up"
            data-aos-delay={idx * 160}
            onClick={() => setModal(item)}
          >
            <h2 className="text-xl font-bold text-pink-700 mb-2">{item.title}</h2>
            <p className="text-gray-700 mb-4">{item.desc}</p>
            <button className="text-pink-700 font-semibold underline group-hover:text-pink-900">
              Learn More
            </button>
          </div>
        ))}
      </div>

      {/* Testimonials carousel */}
      <div className="max-w-xl mx-auto mt-14">
        <Testimonials />
      </div>

      {/* Modal for portfolio details */}
      {modal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full relative" data-aos="zoom-in">
            <button
              className="absolute top-4 right-4 text-lg font-bold text-pink-700"
              onClick={() => setModal(null)}
            >
              ✕
            </button>
            <h2 className="text-pink-700 font-bold text-2xl mb-2 text-center">{modal.title}</h2>
            <div className="text-gray-500 text-sm mb-2 text-center">{modal.date} • {modal.client}</div>
            <div className="mb-3 text-gray-700 text-center">{modal.details}</div>
            <div className="flex gap-2 justify-center mb-3">
              {modal.images.map((img, i) => (
                <img
                  src={img}
                  alt={modal.title}
                  key={img}
                  className="w-24 h-24 object-cover rounded border-2 border-pink-200"
                />
              ))}
            </div>
            <a href="/contact" className="bg-pink-700 text-white px-5 py-2 rounded font-semibold block mx-auto w-3/4 mt-2 hover:bg-pink-800 transition">
              Book Similar Event
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
      text: "The Rajasthan wedding was breathtaking. Everything was taken care of perfectly!",
      author: "Ankita & Rahul"
    },
    {
      text: "TechBrand launch was visible everywhere, and our VIPs loved the setup. Will work again!",
      author: "Rajesh Malhotra"
    }
  ];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setTimeout(
      () => setIndex(i => (i + 1) % testimonials.length),
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
      <div className="mt-2 text-right text-gray-500">-- {testimonials[index].author}</div>
    </div>
  );
}
