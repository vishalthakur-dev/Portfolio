export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  achievements?: string[];
}

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Turno',
    position: 'Senior Software Engineer',
    duration: '2022 - Present',
    startDate: '2022-03',
    endDate: 'present',
    location: 'Bengaluru, India',
    description: 'Leading end-to-end development of scalable internal and customer-facing platforms. Driving automation, improving operational efficiency, and exploring AI integrations to build smarter tools for teams and users.',
    responsibilities: [
      'Built & scaled internal loan processing platform: dashboard, credit workflows, and fraud prevention.',
      'Developed customer-facing website for lead generation and behavioral analytics using Amplitude & GA.',
      'Integrated offline conversion tracking with Meta & Google Ads to improve marketing attribution.',
      'Created vehicle tracking features (TVR, geofencing, risk classification) to reduce EMI defaults.',
      'Automated data scraping tools using Streamlit + Selenium for vehicle sales intelligence.'
    ],
    technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'GraphQL', 'Jest'],
    achievements: [
     'Boosted loan approval FTR rate by 60% by reducing credit ops back-and-forth',
     'Enabled AI-based early warning system using vehicle telemetry + behavior modeling',
     'Reduced lead drop-offs through web performance optimization and analytics tuning'
    ]
  },
{
  id: '2',
  company: 'Coindhan',
  position: 'Frontend Engineer Intern',
  duration: '2022-01 - 2022-04',
  startDate: '2022-01',
  endDate: '2022-04',
  location: 'Bengaluru, India',
  description: 'Contributed to building the crypto trading platform UI and driving product-led feature releases. Built Quick Trade interface & revamped user profile screen. Integrated Firebase push notifications and dynamic links. Helped improve mobile-first UI/UX across homepage and key flows.',
  responsibilities: [
    'Built Quick Trade interface & revamped user profile screen.',
    'Integrated Firebase push notifications and dynamic links.',
    'Helped improve mobile-first UI/UX across homepage and key flows.'
  ],
  technologies: ['React', 'TypeScript', 'JavaScript', 'Next.js', 'Vue.js', 'HTML5', 'CSS3', 'Sass', 'Tailwind CSS', 'Node.js', 'GraphQL', 'REST APIs', 'Git', 'Jest', 'Cypress'],
},
  
];

export const skills = {
  technical: [
    'React', 'TypeScript', 'JavaScript', 'Node.js', 'Tailwind CSS', 'HTML5', 'CSS3', 'Sass', 'MongoDB', 'REST APIs', 'GraphQL', 'MySQL', 'Python', 'Selenium'
  ],
  ai: [
    'OpenAI API', 'LangChain', 'Whisper', 'n8n', 'Streamlit', 'Pinecone', 'GPT-4', 'Prompt Engineering', 'Automation Workflows', 'LLM Integrations'
  ],
  tools: [
    'Git', 'GitHub', 'Vercel', 'AWS', 'Docker', 'VS Code', 'Postman', 'Notion', 'Jira', 'Slack', 'Amplitude', 'Google Analytics', 'Firebase', 'Webpack', 'Vite'
  ]
};