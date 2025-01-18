import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogs } from '../data/blogs';
import StarBackground from './StarBackground';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { Highlight, themes } from 'prism-react-renderer';
import { IoArrowBack } from 'react-icons/io5'; // Install react-icons if not already

const BlogPost = () => {
  const { id } = useParams();
  const blog = blogs.find(blog => blog.id === id);

  if (!blog) return <div>Blog not found</div>;

  return (
    <div className="min-h-screen bg-black text-white">
      <StarBackground />
      <div className="fixed inset-0 bg-black/40 backdrop-blur-[2px] z-0"></div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative z-10 max-w-4xl mx-auto px-4 py-24"
      >
        {/* Enhanced Back Button */}
        <Link 
          to="/blog" 
          className="inline-flex items-center text-lg text-emerald-400 hover:text-emerald-300 mb-12 group transition-colors"
        >
          <IoArrowBack className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Blogs
        </Link>

        {/* Blog Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            {blog.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-lg text-gray-400">
            <span className="flex items-center">
              📅 {blog.date}
            </span>
            <span>•</span>
            <span className="flex items-center">
              ⏱️ {blog.readTime}
            </span>
            <span>•</span>
            <span className="text-emerald-400">
              {blog.category}
            </span>
          </div>
        </header>

        {/* Blog Content */}
        <article className="prose prose-invert prose-lg max-w-none">
          <ReactMarkdown
            components={{
              // Headers get special treatment
              h1: ({children}) => <h1 className="text-4xl font-bold mb-6">{children}</h1>,
              h2: ({children}) => <h2 className="text-3xl font-bold mb-4 text-emerald-400">{children}</h2>,
              h3: ({children}) => <h3 className="text-2xl font-bold mb-3">{children}</h3>,
              
              // Paragraphs get bigger text
              p: ({children}) => <p className="text-lg leading-relaxed mb-6 text-gray-200">{children}</p>,
              
              // Lists get better spacing
              ul: ({children}) => <ul className="text-lg space-y-2 mb-6">{children}</ul>,
              ol: ({children}) => <ol className="text-lg space-y-2 mb-6">{children}</ol>,
              
              // Code blocks with enhanced styling
              code({node, inline, className, children, ...props}) {
                const match = /language-(\w+)/.exec(className || '');
                return !inline && match ? (
                  <div className="rounded-lg overflow-hidden mb-6">
                    <div className="bg-gray-800 px-4 py-2 text-sm font-mono text-gray-400">
                      {match[1]}
                    </div>
                    <Highlight
                      theme={themes.dracula}
                      code={String(children).replace(/\n$/, '')}
                      language={match[1]}
                    >
                      {({className, style, tokens, getLineProps, getTokenProps}) => (
                        <pre className="p-4 overflow-auto" style={style}>
                          {tokens.map((line, i) => (
                            <div key={i} {...getLineProps({line})} className="leading-6">
                              <span className="mr-4 text-gray-500">{i + 1}</span>
                              {line.map((token, key) => (
                                <span key={key} {...getTokenProps({token})} />
                              ))}
                            </div>
                          ))}
                        </pre>
                      )}
                    </Highlight>
                  </div>
                ) : (
                  <code className="font-mono bg-gray-800 rounded px-2 py-1" {...props}>
                    {children}
                  </code>
                );
              }
            }}
          >
            {blog.content}
          </ReactMarkdown>
        </article>

        {/* Navigation Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex justify-between text-lg">
            <Link to="/blog" className="text-emerald-400 hover:text-emerald-300">
              ← Back to all posts
            </Link>
            {/* You could add next/previous post navigation here */}
          </div>
        </footer>
      </motion.div>
    </div>
  );
};

export default BlogPost;