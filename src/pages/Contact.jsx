import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({
    name: "", phone: "", email: "", message: ""
  });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    alert("Submitted! We will contact you soon.");
    setForm({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <section className="py-12 flex flex-col items-center px-4">
      <h2 className="text-2xl font-bold mb-4 text-pink-700">Contact Us</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4 mb-8 bg-white rounded-lg p-6 shadow">
        <input className="w-full p-2 border rounded" type="text" name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required />
        <input className="w-full p-2 border rounded" type="text" name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} />
        <input className="w-full p-2 border rounded" type="email" name="email" placeholder="Email ID" value={form.email} onChange={handleChange} required />
        <textarea className="w-full p-2 border rounded" name="message" placeholder="Message" value={form.message} onChange={handleChange} rows="3" />
        <button type="submit" className="w-full bg-pink-600 text-white py-3 rounded">Submit</button>
      </form>
      <div className="text-center">
        <div className="font-semibold text-pink-700 text-lg mb-1">Elite Events</div>
        <div>Address: 123, Main Road, Hyderabad, India</div>
        <div>Email: <a href="mailto:sandeep@akitssconsulting.com" className="underline text-pink-700">sandeep@akitssconsulting.com</a></div>
        <div>Phone: <a href="tel:+916301859451" className="underline text-pink-700">+91 6301859451</a></div>
      </div>
      {/* Optional Google Maps iframe below */}
      {/* <iframe ... /> */}
    </section>
  );
};

export default Contact;
