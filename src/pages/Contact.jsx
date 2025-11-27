// src/pages/Contact.jsx
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1100 });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2000);
  }

  return (
    <div className="page-wrapper min-h-screen relative flex flex-col justify-center items-center">
      {/* Full Background Video */}
      <div className="bg-video-contactus">
        <video
          src="/videos/contact-bg.mp4"  // file in public/videos
          autoPlay
          loop
          muted
          playsInline
          className="contact-bg-video"
        />
        <div className="contact-bg-overlay" />
      </div>

      {/* Form Card */}
      <div
        className="w-full max-w-md mx-auto p-6 rounded-xl bg-white/90 shadow-lg z-10 mt-10"
        data-aos="zoom-in"
      >
        <h1 className="text-2xl font-bold text-pink-700 text-center mb-7 animate__animated animate__fadeInDown">
          Contact Us
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 relative">
          <input
            type="text"
            placeholder="Full Name"
            required
            className="border rounded px-4 py-2 focus:ring-2 focus:ring-pink-300"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            required
            className="border rounded px-4 py-2 focus:ring-2 focus:ring-pink-300"
          />
          <input
            type="email"
            placeholder="Email ID"
            required
            className="border rounded px-4 py-2 focus:ring-2 focus:ring-pink-300"
          />
          <textarea
            placeholder="Message"
            rows={3}
            required
            className="border rounded px-4 py-2 focus:ring-2 focus:ring-pink-300 resize-none"
          />
          <button
            type="submit"
            className="bg-pink-700 text-white font-bold rounded-lg py-2 mt-2 hover:bg-pink-800 transition text-lg"
          >
            {submitted ? (
              <span className="animate-spin mr-2 inline-block">&#9696;</span>
            ) : (
              'Submit'
            )}
          </button>
          {submitted && (
            <div className="absolute left-0 right-0 bg-green-100 text-green-700 rounded p-2 text-center mt-2 shadow animate__animated animate__fadeInUp">
              Thank you! We'll be in touch soon ✨
            </div>
          )}
        </form>
      </div>

      {/* Contact Info */}
      <div className="w-full max-w-lg mx-auto text-center mt-8 z-10">
        <h2 className="text-pink-700 font-bold text-lg mb-2 animate__animated animate__fadeInUp">
          Elite Events
        </h2>
        <div className="text-gray-700 text-base mb-2">
          Address: 123, Main Road, Hyderabad, India
        </div>
        <div className="text-gray-700 text-base mb-2 flex items-center justify-center gap-2">
          <span className="animate__animated animate__pulse animate__infinite">
            &#128231;
          </span>
          Email:
          <a
            href="mailto:sandeep@akitssconsulting.com"
            className="text-pink-700 underline"
          >
            sandeep@akitssconsulting.com
          </a>
        </div>
        <div className="text-gray-700 text-base flex items-center justify-center gap-2">
          <span className="animate__animated animate__flash animate__infinite">
            &#128222;
          </span>
          Phone:
          <a href="tel:+916301859451" className="text-pink-700 underline">
            +91 6301859451
          </a>
        </div>
      </div>
    </div>
  );
}
