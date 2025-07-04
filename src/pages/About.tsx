import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, MapPin, Code, Palette, Coffee, Award, Users, Lightbulb, Bot, Wrench } from 'lucide-react';
import { experiences, skills } from '../data/experience';
import TimelineItem from '../components/TimelineItem';

const About: React.FC = () => {
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
          About Me
        </h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
        Passionate full stack developer with 3+ years of experience crafting functional, user-centric web applications — with a frontend edge and a growing focus on AI, GenAI, and intelligent automation.
        </p>
      </motion.div>

      {/* Personal Info */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-20"
      >
        <div className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-800">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Get to Know Me
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                I’m a full stack developer with a frontend mindset and a passion for building scalable, impactful web applications. With experience across high-growth startups like Turno and Coindhan, I’ve built everything from operational dashboards and customer-facing websites to internal AI-powered tools and automation systems.


                </p>
                <p>
                My core strengths lie in React, TypeScript, and modern UI design, but I also thrive on backend development, having worked with Node.js, MongoDB, and Python-based automation. Recently, I’ve been diving deep into LLMs, GenAI workflows, and AI-based systems—bringing intelligence to real-world tools using OpenAI APIs, LangChain, and workflow tools like n8n.


                </p>
                <p>
                Outside of work, I enjoy building side projects, testing out AI agents, and exploring how the web and intelligence are merging to shape the future.
                </p>
                <div className="flex items-center text-sm">
                  <MapPin size={16} className="mr-2 text-gray-400" />
                  Bengaluru, India
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 mt-6">
                <a
                  href="mailto:vishalthakur78689@gmail.com"
                  className="inline-flex items-center px-4 py-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 font-medium rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                >
                  <Mail size={16} className="mr-2" />
                  Get In Touch
                </a>
                <button className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
                onClick={() => window.open(
                  "https://drive.google.com/file/d/1PlkIjm0LsL5barsagnfmbbbILpat4AG6/view?usp=sharing",
                  "_blank"
                )}
                >
                  <Download size={16} className="mr-2" />
                  Download Resume
                </button>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                What I Bring
              </h3>
              <div className="space-y-4">
                {[
                  {
                    icon: Code,
                    title: 'Technical Excellence',
                    description: 'Clean, scalable, and maintainable code with modern dev practices'
                  },
                  {
                    icon: Palette,
                    title: 'Frontend Leadership',
                    description: 'Strong eye for intuitive UI/UX with a performance-first mindset'
                  },
                  {
                    icon: Users,
                    title: 'Team Collaboration',
                    description: 'Experience working across engineering, design, ops, and marketing teams'
                  },
                  {
                    icon: Lightbulb,
                    title: ' AI & Automation',
                    description: 'Proven ability to integrate OpenAI, LangChain, and custom automations into apps'
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center mr-3">
                      <item.icon size={16} className="text-gray-600 dark:text-gray-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-gray-100 text-sm">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Experience Timeline */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-20"
      >
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
          Professional Experience
        </h2>
        <div className="relative">
          {experiences.map((experience, index) => (
            <TimelineItem
              key={experience.id}
              experience={experience}
              index={index}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </motion.section>

      {/* Skills */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-20"
      >
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
          Skills & Technologies
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'Technical Skills', skills: skills.technical, icon: Code },
            { title: 'AI & Automation', skills: skills.ai, icon:  Bot },
            { title: 'Tools & Platforms', skills: skills.tools, icon: Wrench }
          ].map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-800"
            >
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center mr-3">
                  <category.icon size={16} className="text-gray-600 dark:text-gray-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Stats */}
      {/* <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <div className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '5+', label: 'Years Experience' },
              { number: '50+', label: 'Projects Completed' },
              { number: '15+', label: 'Technologies Mastered' },
              { number: '100%', label: 'Client Satisfaction' }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section> */}
    </div>
  );
};

export default About;