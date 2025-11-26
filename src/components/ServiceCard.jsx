import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ id, name, description }) => (
  <div className="p-6 bg-white rounded-lg shadow hover:scale-105 transition">
    <h3 className="text-xl font-bold text-pink-600 mb-2">{name}</h3>
    <p className="mb-3">{description}</p>
    <Link to={`/services/${id}`} className="text-pink-700 underline">Learn More</Link>
  </div>
);

export default ServiceCard;
