export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  imageUrl: string;
  featured: boolean;
  category: 'web' | 'mobile' | 'design' | 'other';
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'TaskFlow Pro',
    description: 'A modern task management application with real-time collaboration features.',
    longDescription: 'TaskFlow Pro is a comprehensive task management solution built with React and TypeScript. It features real-time collaboration, drag-and-drop functionality, team workspaces, and advanced filtering capabilities.',
    technologies: ['React', 'TypeScript', 'Node.js', 'Socket.io', 'Tailwind CSS'],
    githubUrl: 'https://github.com/alexmorgan/taskflow-pro',
    demoUrl: 'https://taskflow-pro.vercel.app',
    imageUrl: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600',
    featured: true,
    category: 'web'
  },
  {
    id: '2',
    title: 'EcoTracker',
    description: 'Mobile app for tracking personal carbon footprint and sustainability goals.',
    longDescription: 'EcoTracker helps users monitor their environmental impact through intuitive data visualization and personalized recommendations for reducing carbon footprint.',
    technologies: ['React Native', 'TypeScript', 'Firebase', 'Chart.js'],
    githubUrl: 'https://github.com/alexmorgan/ecotracker',
    imageUrl: 'https://images.pexels.com/photos/4440715/pexels-photo-4440715.jpeg?auto=compress&cs=tinysrgb&w=600',
    featured: true,
    category: 'mobile'
  },
  {
    id: '3',
    title: 'Portfolio Design System',
    description: 'A comprehensive design system and component library for modern web applications.',
    longDescription: 'A complete design system built with React and Storybook, featuring reusable components, design tokens, and comprehensive documentation for scalable web applications.',
    technologies: ['React', 'Storybook', 'Sass', 'Figma', 'Design Tokens'],
    githubUrl: 'https://github.com/alexmorgan/design-system',
    demoUrl: 'https://design-system-demo.vercel.app',
    imageUrl: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
    featured: true,
    category: 'design'
  },
  {
    id: '4',
    title: 'Weather Dashboard',
    description: 'Clean and responsive weather application with location-based forecasts.',
    longDescription: 'A beautiful weather dashboard that provides detailed forecasts, weather maps, and location-based weather information with a focus on clean UI and smooth animations.',
    technologies: ['Vue.js', 'JavaScript', 'Weather API', 'CSS3'],
    githubUrl: 'https://github.com/alexmorgan/weather-dashboard',
    demoUrl: 'https://weather-dashboard-demo.netlify.app',
    imageUrl: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
    featured: false,
    category: 'web'
  },
  {
    id: '5',
    title: 'E-commerce Platform',
    description: 'Full-stack e-commerce solution with admin dashboard and payment integration.',
    longDescription: 'A complete e-commerce platform with user authentication, product management, shopping cart, payment processing, and comprehensive admin dashboard.',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Stripe'],
    githubUrl: 'https://github.com/alexmorgan/ecommerce-platform',
    imageUrl: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
    featured: false,
    category: 'web'
  },
  {
    id: '6',
    title: 'Meditation App UI',
    description: 'Serene and minimalist UI design for a meditation and mindfulness application.',
    longDescription: 'A calming and intuitive user interface design for a meditation app, focusing on accessibility, gentle animations, and a peaceful user experience.',
    technologies: ['Figma', 'Principle', 'Adobe XD', 'Prototyping'],
    demoUrl: 'https://meditation-app-concept.figma.com',
    imageUrl: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=600',
    featured: false,
    category: 'design'
  }
];