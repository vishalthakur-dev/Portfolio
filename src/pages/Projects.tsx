import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter } from 'lucide-react';
import { projects, Project } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Apps' },
    { id: 'mobile', name: 'Mobile' },
    { id: 'design', name: 'Design' },
    { id: 'other', name: 'Other' }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
          Projects
        </h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          A comprehensive collection of my work, from web applications to design systems. 
          Each project represents a unique challenge and creative solution.
        </p>
      </motion.div>

      {/* Filter Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-2 mb-12"
      >
        <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mr-4">
          <Filter size={16} className="mr-2" />
          Filter by:
        </div>
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
              selectedCategory === category.id
                ? 'bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            {category.name}
          </button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </motion.div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center py-20"
        >
          <p className="text-gray-500 dark:text-gray-400">
            No projects found in this category.
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default Projects;