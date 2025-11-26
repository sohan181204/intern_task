import React from 'react';
import { useParams } from 'react-router-dom';

const blogPosts = {
  1: { title: "Event Planning Tips", content: "Full blog article here..." },
  2: { title: "Venue Selection Guide", content: "Full blog article here..." }
};

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogPosts[id];

  if (!blog) return <div>Blog not found.</div>;

  return (
    <section className="py-12 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-pink-800 mb-4">{blog.title}</h1>
      <div>{blog.content}</div>
    </section>
  );
};

export default BlogDetail;
