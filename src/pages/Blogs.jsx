import React from 'react';
import { Link } from 'react-router-dom';

const blogs = [
  { id: 1, title: "Event Planning Tips", excerpt: "Best practices to make events memorable." },
  { id: 2, title: "Venue Selection Guide", excerpt: "How to choose a perfect venue for any event." }
];

const Blogs = () => (
  <section className="py-12 px-4">
    <h2 className="text-3xl font-bold mb-4 text-center text-pink-700">Blog</h2>
    <div className="max-w-2xl mx-auto space-y-6">
      {blogs.map(blog => (
        <div key={blog.id}>
          <Link to={`/blogs/${blog.id}`} className="text-xl text-pink-700 font-semibold">{blog.title}</Link>
          <p>{blog.excerpt}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Blogs;
