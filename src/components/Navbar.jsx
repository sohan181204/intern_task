import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-white p-4 shadow-md flex justify-between items-center sticky top-0 z-50">
    <div className="flex items-center gap-3">
      <img src="/logo.png" alt="Logo" className="h-12 w-12 rounded-full shadow" />
      <span className="font-bold text-2xl text-pink-700">Elite Events</span>
    </div>
    <ul className="flex gap-6 text-lg font-medium">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About Us</Link></li>
      <li><Link to="/services">Services</Link></li>
      <li><Link to="/portfolio">Portfolio</Link></li>
      <li><Link to="/blogs">Blog</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </nav>
);

export default Navbar;
