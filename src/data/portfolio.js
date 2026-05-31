export const personalInfo = {
  name: "Alex Chen",
  title: "Full-Stack Developer",
  taglines: [
    "I build things for the web.",
    "I create seamless user experiences.",
    "I turn ideas into reality.",
    "I craft clean, scalable code.",
  ],
  email: "alex@example.com",
  location: "San Francisco, CA",
  bio: `I'm a passionate full-stack developer with 5+ years of experience building 
web applications that delight users and solve real problems. I specialize in React, 
Node.js, and cloud-native architectures.

When I'm not coding, you'll find me contributing to open-source projects, writing 
technical blog posts, or exploring the latest in AI and machine learning. I believe 
in writing clean, maintainable code and building products that make a difference.

I'm always excited to take on new challenges and collaborate with talented teams 
to build something amazing.`,
  resumeUrl: "/resume.pdf",
  avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
};

export const socialLinks = {
  github: "https://github.com/alexchen",
  linkedin: "https://linkedin.com/in/alexchen",
  twitter: "https://twitter.com/alexchen",
};

export const skills = [
  { name: "React / Next.js", level: 95, category: "Frontend" },
  { name: "TypeScript", level: 90, category: "Frontend" },
  { name: "Tailwind CSS", level: 92, category: "Frontend" },
  { name: "Vue.js", level: 78, category: "Frontend" },
  { name: "Node.js / Express", level: 88, category: "Backend" },
  { name: "Python / Django", level: 82, category: "Backend" },
  { name: "PostgreSQL", level: 85, category: "Backend" },
  { name: "MongoDB", level: 80, category: "Backend" },
  { name: "AWS / GCP", level: 83, category: "DevOps" },
  { name: "Docker / K8s", level: 78, category: "DevOps" },
  { name: "CI/CD Pipelines", level: 85, category: "DevOps" },
  { name: "Terraform", level: 72, category: "DevOps" },
];

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with real-time inventory management, Stripe payment integration, and an admin dashboard for order tracking and analytics.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    category: "fullstack",
    githubUrl: "https://github.com/alexchen/ecommerce",
    liveUrl: "https://ecommerce-demo.alexchen.dev",
  },
  {
    id: 2,
    title: "AI Task Manager",
    description:
      "Smart task management app that uses AI to prioritize tasks, suggest deadlines, and auto-categorize items based on natural language input.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    tags: ["Next.js", "OpenAI API", "Prisma", "Tailwind"],
    category: "ai",
    githubUrl: "https://github.com/alexchen/ai-taskmanager",
    liveUrl: "https://tasks.alexchen.dev",
  },
  {
    id: 3,
    title: "DevOps Dashboard",
    description:
      "Real-time monitoring dashboard for cloud infrastructure with custom alerting, log aggregation, and deployment tracking across multiple environments.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    tags: ["React", "D3.js", "Go", "Docker"],
    category: "devops",
    githubUrl: "https://github.com/alexchen/devops-dash",
    liveUrl: null,
  },
  {
    id: 4,
    title: "Social Media Analytics",
    description:
      "Analytics platform that aggregates data from multiple social media platforms, providing unified insights, engagement metrics, and content performance reports.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    tags: ["Vue.js", "Python", "MongoDB", "Chart.js"],
    category: "fullstack",
    githubUrl: "https://github.com/alexchen/social-analytics",
    liveUrl: "https://analytics.alexchen.dev",
  },
  {
    id: 5,
    title: "Chatbot Builder",
    description:
      "Visual chatbot builder with drag-and-drop conversation flow designer, NLP integration, and multi-platform deployment support for customer service automation.",
    image: "https://images.unsplash.com/photo-1531746790095-e5f6a4f5eb8?w=600&h=400&fit=crop",
    tags: ["React", "Python", "TensorFlow", "WebSocket"],
    category: "ai",
    githubUrl: "https://github.com/alexchen/chatbot-builder",
    liveUrl: "https://chatbot.alexchen.dev",
  },
  {
    id: 6,
    title: "Infrastructure as Code Toolkit",
    description:
      "Collection of reusable Terraform modules and GitHub Actions workflows for provisioning and managing cloud infrastructure with best practices baked in.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
    tags: ["Terraform", "AWS", "GitHub Actions", "Bash"],
    category: "devops",
    githubUrl: "https://github.com/alexchen/iac-toolkit",
    liveUrl: null,
  },
];

export const experiences = [
  {
    id: 1,
    title: "Senior Full-Stack Developer",
    company: "TechCorp Inc.",
    period: "2023 — Present",
    description:
      "Leading a team of 6 developers building a next-generation SaaS platform. Architected the microservices backend, implemented CI/CD pipelines, and reduced deployment time by 60%.",
    technologies: ["React", "Node.js", "AWS", "Docker", "PostgreSQL"],
  },
  {
    id: 2,
    title: "Full-Stack Developer",
    company: "StartupXYZ",
    period: "2021 — 2023",
    description:
      "Built the core product from scratch, growing it from 0 to 50K users. Implemented real-time features using WebSockets, integrated payment systems, and optimized performance for sub-second load times.",
    technologies: ["Next.js", "Python", "MongoDB", "Redis", "GCP"],
  },
  {
    id: 3,
    title: "Frontend Developer",
    company: "Digital Agency Co.",
    period: "2019 — 2021",
    description:
      "Developed responsive web applications for 20+ clients across various industries. Specialized in React component libraries and accessibility-first development practices.",
    technologies: ["React", "TypeScript", "Sass", "GraphQL", "Figma"],
  },
  {
    id: 4,
    title: "Junior Developer",
    company: "WebDev Studios",
    period: "2018 — 2019",
    description:
      "Started my professional journey building WordPress themes and custom plugins. Transitioned to React development and contributed to the company's internal component library.",
    technologies: ["JavaScript", "PHP", "WordPress", "CSS", "MySQL"],
  },
];
