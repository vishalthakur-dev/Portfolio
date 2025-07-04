import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Tag } from 'lucide-react';
import { BlogPost } from '../data/blog';

interface BlogCardProps {
  post: BlogPost;
  index: number;
  onClick: () => void;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, index, onClick }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={onClick}
      className="group bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm hover:shadow-lg border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
    >
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors mb-2">
          {post.title}
        </h2>
        
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3 space-x-4">
          <div className="flex items-center">
            <Calendar size={14} className="mr-1" />
            {new Date(post.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </div>
          <div className="flex items-center">
            <Clock size={14} className="mr-1" />
            {post.readTime}
          </div>
        </div>
        
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
          {post.excerpt}
        </p>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md"
          >
            <Tag size={10} className="mr-1" />
            {tag}
          </span>
        ))}
      </div>
    </motion.article>
  );
};

export default BlogCard;