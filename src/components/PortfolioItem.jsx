// src/components/PortfolioItem.jsx
import React from 'react';

const PortfolioItem = ({ title, summary, location, date, image, onClick }) => {
  return (
    <div
      className="bg-white rounded-xl shadow hover:shadow-2xl border border-pink-100 p-6 flex flex-col md:flex-row gap-4 transition-transform duration-300 hover:scale-[1.02] cursor-pointer"
      onClick={onClick}
    >
      {/* Thumbnail */}
      {image && (
        <div className="w-full md:w-40 h-28 md:h-32 flex-shrink-0 overflow-hidden rounded-lg">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
          />
        </div>
      )}

      {/* Text content */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg md:text-xl font-bold text-pink-700 mb-1">
            {title}
          </h3>
          {location || date ? (
            <p className="text-xs text-gray-500 mb-1">
              {location && <span>{location}</span>}
              {location && date && <span> • </span>}
              {date && <span>{date}</span>}
            </p>
          ) : null}
          <p className="text-sm md:text-base text-gray-700">
            {summary}
          </p>
        </div>

        <button
          type="button"
          className="mt-3 self-start text-sm font-semibold text-pink-700 hover:text-pink-900 underline"
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default PortfolioItem;
