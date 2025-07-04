import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Award } from 'lucide-react';
import { Experience } from '../data/experience';

interface TimelineItemProps {
  experience: Experience;
  index: number;
  isLast: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ experience, index, isLast }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative"
    >
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-6 top-12 w-0.5 h-full bg-gray-200 dark:bg-gray-800" />
      )}
      
      {/* Timeline Dot */}
      <div className="absolute left-4 top-6 w-4 h-4 bg-gray-900 dark:bg-gray-100 rounded-full border-4 border-white dark:border-gray-950 shadow-sm" />
      
      {/* Content */}
      <div className="ml-16 pb-12">
        <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow duration-300">
          {/* Header */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-1">
              {experience.position}
            </h3>
            <div className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
              {experience.company}
            </div>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center">
                <Calendar size={14} className="mr-1" />
                {experience.duration}
              </div>
              <div className="flex items-center">
                <MapPin size={14} className="mr-1" />
                {experience.location}
              </div>
            </div>
          </div>
          
          {/* Description */}
          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
            {experience.description}
          </p>
          
          {/* Responsibilities */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Key Responsibilities:
            </h4>
            <ul className="space-y-1">
              {experience.responsibilities.map((responsibility, idx) => (
                <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                  <span className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 mr-2 flex-shrink-0" />
                  {responsibility}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Achievements */}
          {experience.achievements && experience.achievements.length > 0 && (
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2 flex items-center">
                <Award size={14} className="mr-1" />
                Key Achievements:
              </h4>
              <ul className="space-y-1">
                {experience.achievements.map((achievement, idx) => (
                  <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {/* Technologies */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Technologies Used:
            </h4>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TimelineItem;