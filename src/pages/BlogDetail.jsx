// src/pages/BlogDetail.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const blogPosts = {
  1: {
    title: 'Event Planning Tips',
    date: 'Oct 10, 2025',
    readTime: '4 min read',
    content:
      'Full blog article here about planning timelines, budgeting, vendor coordination, and guest experience. You can replace this text with your real article content.',
  },
  2: {
    title: 'Venue Selection Guide',
    date: 'Nov 2, 2025',
    readTime: '5 min read',
    content:
      'Full blog article here about choosing the right venue based on guest count, theme, budget, and logistics. Replace with your real guide text.',
  },
};

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogPosts[id];

  if (!blog) {
    return (
      <div className="page-wrapper max-w-2xl mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold text-pink-700 mb-4">Blog not found</h1>
        <Link to="/blogs" className="text-pink-700 underline">
          Back to all blogs
        </Link>
      </div>
    );
  }

  return (
    <section className="page-wrapper max-w-2xl mx-auto px-4 py-12">
      <Link
        to="/blogs"
        className="text-sm text-pink-700 underline mb-4 inline-block"
      >
        ← Back to all blogs
      </Link>

      <h1 className="text-3xl font-bold text-pink-800 mb-2">
        {blog.title}
      </h1>
      <p className="text-xs text-gray-500 mb-6">
        {blog.date} • {blog.readTime}
      </p>

      <div className="prose max-w-none text-gray-800 leading-relaxed">
        {blog.content}
      </div>
    </section>
  );
};

export default BlogDetail;
