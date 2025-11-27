// src/components/ServiceCard.jsx
import React from 'react';

const ServiceCard = ({ icon, title, subtitle, points = [], onClick }) => {
  return (
    <div
      className="bg-white rounded-xl shadow hover:shadow-2xl border border-pink-100 p-6 flex flex-col gap-3 transition-transform duration-300 hover:scale-[1.03] cursor-pointer"
      onClick={onClick}
    >
      {/* Icon + title */}
      <div className="flex items-center gap-3">
        {icon && (
          <span className="text-3xl md:text-4xl text-pink-600">
            {icon}
          </span>
        )}
        <div>
          <h3 className="text-lg md:text-xl font-bold text-pink-700">
            {title}
          </h3>
          {subtitle && (
            <p className="text-xs text-gray-500">{subtitle}</p>
          )}
        </div>
      </div>

      {/* Description list */}
      {points.length > 0 && (
        <ul className="mt-1 list-disc list-inside text-sm text-gray-700 space-y-1">
          {points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      )}

      {/* Learn more */}
      <button
        type="button"
        className="mt-2 self-start text-sm font-semibold text-pink-700 hover:text-pink-900 underline"
      >
        Learn More
      </button>
    </div>
  );
};

export default ServiceCard;
