import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const links = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Blog', path: '/blogs' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 shadow-md backdrop-blur-sm' : 'bg-white'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo + brand */}
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Elite Events logo"
            className="h-10 w-10 rounded-full shadow"
          />
          <span className="font-bold text-2xl text-pink-700 tracking-wide">
            Elite Events
          </span>
        </div>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-6 text-sm lg:text-base font-medium items-center">
          {links.map((link) => {
            const active = location.pathname === link.path;
            return (
              <li key={link.name} className="relative group">
                <Link
                  to={link.path}
                  className={`transition-colors duration-200 ${
                    active ? 'text-pink-700 font-semibold' : 'text-gray-800'
                  }`}
                >
                  {link.name}
                </Link>
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-pink-600 origin-left transform transition-transform duration-300 ${
                    active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                  style={{ width: '100%' }}
                />
              </li>
            );
          })}
          <li>
            <Link
              to="/contact"
              className="ml-2 px-4 py-2 rounded-full bg-pink-700 text-white text-sm font-semibold shadow hover:bg-pink-800 transition"
            >
              Get a Quote
            </Link>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 focus:outline-none"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span
            className={`h-0.5 w-6 bg-gray-900 transition-transform duration-300 ${
              open ? 'translate-y-1.5 rotate-45' : ''
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-gray-900 transition-opacity duration-300 ${
              open ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-gray-900 transition-transform duration-300 ${
              open ? '-translate-y-1.5 -rotate-45' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col bg-white/95 backdrop-blur-sm border-t border-gray-100 px-4 pb-4 text-sm font-medium">
          {links.map((link) => {
            const active = location.pathname === link.path;
            return (
              <li key={link.name} className="border-b border-gray-100 last:border-none">
                <Link
                  to={link.path}
                  className={`block py-3 ${
                    active ? 'text-pink-700 font-semibold' : 'text-gray-800'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
          <li className="pt-2">
            <Link
              to="/contact"
              className="block text-center w-full px-4 py-2 rounded-full bg-pink-700 text-white text-sm font-semibold shadow hover:bg-pink-800 transition"
            >
              Get a Quote
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
