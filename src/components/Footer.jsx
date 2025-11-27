// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-gray-100 bg-white/90">
      <div className="max-w-6xl mx-auto px-4 py-8 grid gap-8 md:grid-cols-3 text-sm text-gray-700">
        {/* Brand + tagline */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <img
              src="/logo.png"
              alt="Elite Events logo"
              className="h-9 w-9 rounded-full shadow"
            />
            <span className="font-bold text-lg text-pink-700">
              Elite Events
            </span>
          </div>
          <p className="text-gray-600">
            Crafting unforgettable weddings, corporate events, and celebrations
            with creativity and precision.
          </p>
        </div>

        {/* Quick links */}
        <div className="flex flex-col md:items-center">
          <h4 className="font-semibold text-gray-900 mb-3">Quick Links</h4>
          <nav className="flex flex-col gap-1">
            <Link to="/" className="hover:text-pink-700">Home</Link>
            <Link to="/about" className="hover:text-pink-700">About Us</Link>
            <Link to="/services" className="hover:text-pink-700">Services</Link>
            <Link to="/portfolio" className="hover:text-pink-700">Portfolio</Link>
            <Link to="/blogs" className="hover:text-pink-700">Blog</Link>
            <Link to="/contact" className="hover:text-pink-700">Contact</Link>
          </nav>
        </div>

        {/* Contact info */}
        <div className="md:text-right">
          <h4 className="font-semibold text-gray-900 mb-3">Contact</h4>
          <p>Elite Events, Hyderabad, India</p>
          <p>
            Email:{' '}
            <a
              href="mailto:sandeep@akitssconsulting.com"
              className="text-pink-700 hover:underline"
            >
              sandeep@akitssconsulting.com
            </a>
          </p>
          <p>
            Phone:{' '}
            <a
              href="tel:+916301859451"
              className="text-pink-700 hover:underline"
            >
              +91 6301859451
            </a>
          </p>
        </div>
      </div>

      <div className="border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
          <span>© {year} Elite Events. All rights reserved.</span>
          <span className="mt-1 md:mt-0">
            Designed &amp; built by Sohan Kumar.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
