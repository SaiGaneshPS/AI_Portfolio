import React from 'react';
import StarBackground from './StarBackground';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { blogs } from '../data/blogs';

const Blog = () => {
  const featuredBlog = blogs[0];
  const regularBlogs = blogs.slice(1);

  return (
    <div className="min-h-screen bg-black text-white">
      <StarBackground />
      <div className="fixed inset-0 bg-black/40 backdrop-blur-[2px] z-0"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center pt-24 pb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-400 to-cyan-500 animate-gradient"
          >
            Welcome to s.AI!
          </motion.h1>
        </div>

        {/* Featured Post */}
        <div className="max-w-4xl mx-auto px-4 mb-16">
          <Link to={`/blog/${featuredBlog.id}`}>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="relative h-[400px] rounded-xl overflow-hidden group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"/>
              <img 
                src={featuredBlog.imageUrl || '/default-featured.jpg'}
                alt="Featured post"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                <span className="text-emerald-400 font-medium">Featured</span>
                <h2 className="text-3xl font-bold mt-2 mb-4 group-hover:text-emerald-400 transition-colors">
                  {featuredBlog.title}
                </h2>
                <p className="text-gray-300">{featuredBlog.preview}</p>
              </div>
            </motion.div>
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="max-w-7xl mx-auto px-4 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularBlogs.map((blog, index) => (
              <Link key={blog.id} to={`/blog/${blog.id}`}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-black/50 border border-white/10 rounded-lg overflow-hidden hover:border-emerald-500/50 transition-all duration-300 group cursor-pointer"
                >
                  <div className="relative h-48">
                    <img 
                      src={blog.imageUrl || '/default-blog.jpg'}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"/>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3 text-sm text-gray-400">
                      <span>{blog.category}</span>
                      <span>•</span>
                      <span>{blog.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-gray-400 text-sm line-clamp-2">
                      {blog.preview}
                    </p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;