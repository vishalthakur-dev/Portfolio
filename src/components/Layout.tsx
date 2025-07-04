import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { useDarkMode } from '../hooks/useDarkMode';
import { motion, AnimatePresence } from 'framer-motion';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useDarkMode();
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    // { name: 'Projects', path: '/projects' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 font-inter transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="text-xl font-semibold hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
              Vishal Thakur
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-gray-600 dark:hover:text-gray-300 ${
                    isActive(item.path)
                      ? 'text-gray-900 dark:text-gray-100'
                      : 'text-gray-500 dark:text-gray-400'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Social Links */}
              <div className="flex items-center space-x-4">
                <a
                  href="https://github.com/vishalthakur-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/vishalthakur24/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="mailto:vishalthakur78689@gmail.com"
                  className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
                >
                  <Mail size={18} />
                </a>
              </div>

              {/* Dark Mode Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800"
            >
              <div className="px-4 py-4 space-y-4">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block text-sm font-medium transition-colors ${
                      isActive(item.path)
                        ? 'text-gray-900 dark:text-gray-100'
                        : 'text-gray-500 dark:text-gray-400'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="flex items-center space-x-4 pt-4">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href="mailto:alex@example.com"
                    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
                  >
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Left side - Name and tagline */}
            <div className="text-center md:text-left">
              <div className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">
                Vishal Thakur
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
              Full Stack Developer | AI/ML & GenAI Enthusiast.
              </div>
            </div>

            {/* Center - Navigation Links */}
            <div className="flex space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Right side - Social links */}
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/vishalthakur-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/vishalthakur24/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:vishalthakur78689@gmail.com"
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Bottom section - Copyright */}
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center">
                © {new Date().getFullYear()} Vishal Thakur. All rights reserved.
              </div>
             
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;