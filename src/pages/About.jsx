import React from 'react';

const About = () => (
  <section className="py-12 max-w-2xl mx-auto text-center px-4">
    <h2 className="text-3xl font-bold mb-4 text-pink-700">About Us</h2>
    <p className="text-lg mb-6">Elite Events brings you exceptional service, professionalism, and creativity. Our commitment: your vision executed with passion and precision.</p>
    <div className="my-8 grid grid-cols-3 gap-6 text-center">
      <div>
        <h4 className="font-bold text-pink-700 mb-1">Mission</h4>
        <p>Create stress-free celebrations with extraordinary experiences.</p>
      </div>
      <div>
        <h4 className="font-bold text-pink-700 mb-1">Vision</h4>
        <p>Be the preferred partner for event excellence globally.</p>
      </div>
      <div>
        <h4 className="font-bold text-pink-700 mb-1">Values</h4>
        <p>Trust, Integrity, Innovation, Joy.</p>
      </div>
    </div>
    <div className="mt-8 text-lg font-semibold text-pink-700">Meet The Team (Coming Soon)</div>
  </section>
);

export default About;
