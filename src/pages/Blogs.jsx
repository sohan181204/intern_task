// src/pages/Blogs.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const blogs = [
  {
    id: 1,
    title: 'Event Planning Tips',
    excerpt: 'Best practices to make events memorable, from timelines to vendor coordination.',
    date: 'Oct 10, 2025',
    readTime: '4 min read',
  },
  {
    id: 2,
    title: 'Venue Selection Guide',
    excerpt: 'How to choose a perfect venue based on guest count, budget, and theme.',
    date: 'Nov 2, 2025',
    readTime: '5 min read',
  },
];

const Blogs = () => {
  return (
    <section className="page-wrapper py-12 px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-pink-700">
        Blog & Insights
      </h2>
      <p className="max-w-2xl mx-auto text-center text-gray-600 mb-10">
        Ideas, tips, and behind-the-scenes stories to help you plan unforgettable events.
      </p>

      <div className="max-w-3xl mx-auto space-y-5">
        {blogs.map((blog) => (
          <article
            key={blog.id}
            className="bg-white rounded-xl shadow border border-pink-100 p-5 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
              <span>{blog.date}</span>
              <span>{blog.readTime}</span>
            </div>
            <Link
              to={`/blogs/${blog.id}`}
              className="block text-xl font-semibold text-pink-700 mb-1 hover:text-pink-900 transition-colors"
            >
              {blog.title}
            </Link>
            <p className="text-sm text-gray-700 mb-3">
              {blog.excerpt}
            </p>
            <Link
              to={`/blogs/${blog.id}`}
              className="text-sm font-semibold text-pink-700 hover:text-pink-900 underline"
            >
              Read More →
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
