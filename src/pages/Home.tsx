import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Palette, Coffee, Server, Brain, Bot } from 'lucide-react';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

const Home: React.FC = () => {
  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="py-10 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Vishal Thakur
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          Full Stack Developer | AI/ML & GenAI Enthusiast
          </p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-gray-500 dark:text-gray-500 max-w-xl mx-auto leading-relaxed mb-12
            text-left"
          >
           I build modern, performant, and human-centered web applications.
From intuitive UI to scalable backend — I specialize in turning ideas into functional products.
Currently exploring the intersection of web and GenAI to create smarter experiences.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            {/* <Link
              to="/projects"
              className="inline-flex items-center px-6 py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 font-medium rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
            >
              View My Work
              <ArrowRight size={18} className="ml-2" />
            </Link> */}
            <a
              href="mailto:vishalthakur78689@gmail.com"
              className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            What I Do
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          I help businesses and creators build web applications that look stunning, scale seamlessly, and think smart — backed by clean code, fast UIs, scalable APIs, and intelligent AI integrations.

          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Code,
              title: 'Frontend Engineering',
              description: 'Building responsive, high-performance UIs with React, Next.js, and TypeScript, optimized for UX and SEO.'
            },
            {
              icon: Server,
              title: 'Full Stack Development',
              description: 'Developing scalable, maintainable backend systems with Node.js, Express, and MongoDB/PostgreSQL — from APIs to deployments.'
            },
            {
              icon: Bot,
              title: 'AI & GenAI Integration',
              description: 'Bringing apps to life with LLMs, ChatGPT, Whisper, LangChain, and tools like n8n, to automate and personalize user experiences.'
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center p-6"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg mb-4">
                <item.icon size={24} className="text-gray-600 dark:text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      {/* <section className="py-20"> */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A selection of recent work that showcases my skills and passion for creating exceptional web experiences.
          </p>
        </motion.div> */}

        {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Link
            to="/projects"
            className="inline-flex items-center px-6 py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 font-medium rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
          >
            View All Projects
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </motion.div> */}
      {/* </section> */}
    </div>
  );
};

export default Home;