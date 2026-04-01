import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  ExternalLink, 
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight,
  Code,
  Palette,
  Layout,
  Cpu
} from 'lucide-react';

// --- Types ---
interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}

interface Skill {
  name: string;
  icon: React.ReactNode;
  level: number;
}

// --- Data ---
const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Minimalist E-Commerce",
    category: "Web Design / Development",
    description: "A clean, high-performance e-commerce platform built with React and Tailwind.",
    image: "https://picsum.photos/seed/shop/800/600",
    link: "#",
    tags: ["React", "Tailwind", "Vite"]
  },
  {
    id: 2,
    title: "Architectural Portfolio",
    category: "UI/UX Design",
    description: "A visually stunning portfolio for a leading architectural firm.",
    image: "https://picsum.photos/seed/arch/800/600",
    link: "#",
    tags: ["Figma", "Next.js", "Motion"]
  },
  {
    id: 3,
    title: "Data Visualization Dashboard",
    category: "Full Stack",
    description: "Interactive real-time data dashboard for financial analytics.",
    image: "https://picsum.photos/seed/data/800/600",
    link: "#",
    tags: ["D3.js", "TypeScript", "Node.js"]
  }
];

const SKILLS: Skill[] = [
  { name: "Frontend Development", icon: <Layout className="w-5 h-5" />, level: 95 },
  { name: "UI/UX Design", icon: <Palette className="w-5 h-5" />, level: 85 },
  { name: "Backend Systems", icon: <Cpu className="w-5 h-5" />, level: 75 },
  { name: "Clean Code", icon: <Code className="w-5 h-5" />, level: 90 }
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-paper/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="font-serif text-2xl font-medium tracking-tight">Nisa.</a>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-12">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm uppercase tracking-widest font-medium hover:text-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-paper border-t border-ink/5 p-6 md:hidden flex flex-col space-y-4 shadow-xl"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-lg font-serif italic hover:text-accent"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="text-sm uppercase tracking-[0.3em] text-muted mb-6 block">Creative Developer & Designer</span>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif leading-[0.9] mb-8 tracking-tighter">
          Crafting digital <br />
          <span className="italic text-accent">experiences</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-muted font-light leading-relaxed mb-12">
          I specialize in building refined, high-performance web applications that bridge the gap between design and technology.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href="#projects" 
            className="px-10 py-4 bg-ink text-paper rounded-full text-sm uppercase tracking-widest hover:bg-accent transition-all duration-300 flex items-center group"
          >
            View My Work
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <div className="flex space-x-6">
            <a href="#" className="p-3 border border-ink/10 rounded-full hover:border-accent hover:text-accent transition-all">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="p-3 border border-ink/10 rounded-full hover:border-accent hover:text-accent transition-all">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="w-6 h-6 text-muted" />
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-32 px-6 bg-ink text-paper">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden rounded-2xl">
            <img 
              src="https://picsum.photos/seed/nisa/800/1000" 
              alt="Nisa" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 w-48 h-48 border border-paper/20 rounded-full flex items-center justify-center text-center p-6 backdrop-blur-sm hidden lg:flex">
            <p className="text-xs uppercase tracking-widest leading-relaxed">
              Based in <br /> <span className="text-lg font-serif italic">London, UK</span>
            </p>
          </div>
        </div>
        
        <div>
          <h2 className="text-5xl md:text-6xl font-serif mb-8 italic">About Me</h2>
          <div className="space-y-6 text-lg font-light text-paper/70 leading-relaxed">
            <p>
              Hello, I'm Nisa. I'm a developer with a passion for creating beautiful, functional, and user-centered digital experiences. With over 5 years of experience in the field, I have a strong background in both design and development.
            </p>
            <p>
              I believe that great design is not just about how something looks, but how it works. My approach is rooted in understanding user needs and translating them into elegant technical solutions.
            </p>
            <p>
              When I'm not coding, you can find me exploring art galleries, practicing photography, or experimenting with new cooking recipes.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-2 gap-8">
            <div>
              <span className="text-3xl font-serif block mb-1">5+</span>
              <span className="text-xs uppercase tracking-widest text-paper/50">Years Experience</span>
            </div>
            <div>
              <span className="text-3xl font-serif block mb-1">50+</span>
              <span className="text-xs uppercase tracking-widest text-paper/50">Projects Completed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="group cursor-pointer"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-6">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-ink/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="w-12 h-12 bg-paper rounded-full flex items-center justify-center text-ink translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <ExternalLink className="w-5 h-5" />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-start">
        <div>
          <span className="text-xs uppercase tracking-widest text-muted mb-2 block">{project.category}</span>
          <h3 className="text-2xl font-serif group-hover:text-accent transition-colors">{project.title}</h3>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map(tag => (
          <span key={tag} className="text-[10px] uppercase tracking-widest px-3 py-1 border border-ink/10 rounded-full">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <span className="text-sm uppercase tracking-[0.3em] text-muted mb-4 block">Selected Work</span>
            <h2 className="text-5xl md:text-7xl font-serif tracking-tighter">Featured <span className="italic">Projects</span></h2>
          </div>
          <p className="max-w-md text-muted font-light leading-relaxed">
            A collection of projects that demonstrate my technical skills and design philosophy.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {PROJECTS.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-32 px-6 bg-paper border-y border-ink/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-serif mb-4">Core Expertise</h2>
          <p className="text-muted font-light">The tools and technologies I use to bring ideas to life.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILLS.map((skill) => (
            <div key={skill.name} className="p-8 border border-ink/5 rounded-2xl hover:border-accent/30 transition-all group">
              <div className="w-12 h-12 bg-ink/5 rounded-xl flex items-center justify-center mb-6 text-ink group-hover:bg-accent group-hover:text-paper transition-all">
                {skill.icon}
              </div>
              <h3 className="text-xl font-serif mb-4">{skill.name}</h3>
              <div className="w-full h-1 bg-ink/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="h-full bg-accent"
                />
              </div>
              <span className="text-[10px] uppercase tracking-widest text-muted mt-2 block text-right">{skill.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <span className="text-sm uppercase tracking-[0.3em] text-muted mb-6 block">Get in Touch</span>
        <h2 className="text-5xl md:text-7xl font-serif mb-12 italic">Let's create something <br /> amazing together.</h2>
        
        <div className="flex flex-col items-center gap-8">
          <a 
            href="mailto:hello@nisa.dev" 
            className="text-3xl md:text-4xl font-serif hover:text-accent transition-colors border-b border-ink/20 pb-2"
          >
            hello@nisa.dev
          </a>
          
          <div className="flex space-x-12 mt-8">
            <a href="#" className="text-sm uppercase tracking-widest hover:text-accent transition-colors">Instagram</a>
            <a href="#" className="text-sm uppercase tracking-widest hover:text-accent transition-colors">Twitter</a>
            <a href="#" className="text-sm uppercase tracking-widest hover:text-accent transition-colors">Dribbble</a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-ink/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-xs uppercase tracking-widest text-muted">
          &copy; {new Date().getFullYear()} Nisa Portfolio. All rights reserved.
        </p>
        <div className="flex space-x-8">
          <a href="#" className="text-xs uppercase tracking-widest text-muted hover:text-ink transition-colors">Privacy Policy</a>
          <a href="#" className="text-xs uppercase tracking-widest text-muted hover:text-ink transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
