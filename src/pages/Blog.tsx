import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Tag, X } from 'lucide-react';
import { blogPosts, BlogPost } from '../data/blog';
import BlogCard from '../components/BlogCard';

const Blog: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const openPost = (post: BlogPost) => {
    setSelectedPost(post);
    document.body.style.overflow = 'hidden';
  };

  const closePost = () => {
    setSelectedPost(null);
    document.body.style.overflow = 'unset';
  };

  const publishedPosts = blogPosts.filter(post => post.published);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
          Blog
        </h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Thoughts on development, design, and the ever-evolving world of technology. 
          Sharing insights and lessons learned along the way.
        </p>
      </motion.div>

      {/* Blog Posts */}
      <div className="space-y-8">
        {publishedPosts.map((post, index) => (
          <BlogCard 
            key={post.id} 
            post={post} 
            index={index} 
            onClick={() => openPost(post)} 
          />
        ))}
      </div>

      {/* Empty State */}
      {publishedPosts.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center py-20"
        >
          <p className="text-gray-500 dark:text-gray-400">
            No blog posts published yet. Check back soon!
          </p>
        </motion.div>
      )}

      {/* Full Post Modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={closePost}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800">
                <button
                  onClick={closePost}
                  className="flex items-center text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-colors"
                >
                  <ArrowLeft size={20} className="mr-2" />
                  Back to Blog
                </button>
                <button
                  onClick={closePost}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
                <article className="p-6 lg:p-8">
                  <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                      {selectedPost.title}
                    </h1>
                    
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4 space-x-6">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-2" />
                        {new Date(selectedPost.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </div>
                      <div className="flex items-center">
                        <Clock size={16} className="mr-2" />
                        {selectedPost.readTime}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedPost.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md"
                        >
                          <Tag size={10} className="mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="prose prose-gray dark:prose-invert max-w-none">
                    <div className="whitespace-pre-wrap text-gray-700 dark:text-gray-300 leading-relaxed">
                      {selectedPost.content}
                    </div>
                  </div>
                </article>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Blog;