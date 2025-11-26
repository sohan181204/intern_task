import React from 'react';

const testimonials = [
  { name: 'John Doe', quote: "Elite Events took away all my stress!" },
  { name: 'Priya C.', quote: "Our company event was flawless." }
];

const Home = () => (
  <section className="py-12 px-4">
    <div className="flex flex-col items-center justify-center mb-10">
      <h1 className="text-4xl md:text-6xl font-extrabold text-pink-600 mb-4">Unforgettable Events, Perfectly Planned</h1>
      <p className="mb-8 text-lg mx-auto max-w-xl text-gray-800">
        Trusted professionals for stylish weddings, corporate events, and celebrations.
      </p>
      <a href="/contact" className="bg-pink-600 text-white py-3 px-8 rounded-lg shadow hover:bg-pink-700 transition">Get A Quote</a>
    </div>
    <div className="my-8 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white rounded shadow p-4 text-center">
        <h3 className="font-bold text-pink-700 mb-2">Weddings</h3>
        <p>Venue, Decor, Artist Management</p>
      </div>
      <div className="bg-white rounded shadow p-4 text-center">
        <h3 className="font-bold text-pink-700 mb-2">Corporate Events</h3>
        <p>Conferences, Launches, Team Building</p>
      </div>
      <div className="bg-white rounded shadow p-4 text-center">
        <h3 className="font-bold text-pink-700 mb-2">Private Parties</h3>
        <p>Birthdays, Anniversaries, Celebrations</p>
      </div>
    </div>
    <div className="my-8 bg-gray-100 rounded p-6 text-center">
      <div className="text-sm font-medium text-gray-600">100+ Events Managed • Trusted by 50+ Companies • Across 5 Countries</div>
    </div>
    <div className="max-w-xl mx-auto my-8">
      <h3 className="font-bold text-xl mb-4 text-pink-700">Testimonials</h3>
      {testimonials.map((t, i) => (
        <div key={i} className="border-l-4 border-pink-300 pl-4 mb-3">
          <p className="italic">&quot;{t.quote}&quot;</p>
          <span className="block text-sm text-gray-700 font-medium mt-1">-- {t.name}</span>
        </div>
      ))}
    </div>
  </section>
);

export default Home;
