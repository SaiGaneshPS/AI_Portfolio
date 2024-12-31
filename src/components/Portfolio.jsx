import React, { useState, useEffect } from 'react';
import { Github, Mail, Linkedin, ExternalLink, Download, Brain, Terminal, Code, Database, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { HiOutlineNewspaper } from "react-icons/hi2";

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState({});
  const [activeTab, setActiveTab] = React.useState('all');

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Projects data with your actual GitHub links
  const projects = [
    {
      title: "AI-Driven Grocery Management System",
      description: "Built an end-to-end system combining FasterRCNN for receipt text detection, custom GPT-2 for recipe recommendations, and Kivy-based UI for Android.",
      tech: ["PyTorch", "GPT-2", "Kivy", "Android"],
      category: "ai",
      metrics: ["0.81 F1-Score", "Mobile Deployment", "Custom Dataset"],
      link: "https://github.com/SaiGaneshPS/AI-Driven-Grocery-Management-System"
    },
    {
      title: "Skew Detection in Receipts",
      description: "Comprehensive comparison of state-of-the-art deep learning models for skew detection in receipts by utilizing a custom datasets.",
      tech: ["ConvNext", "Swin Transformer", "ViT", "OpenCV"],
      category: "computer-vision",
      metrics: ["5 Resolution Types", "Multiple SOTA Models"],
      link: "#"
    },
    {
      title: "PCG Classification Architecture",
      description: "Novel deep learning architecture for classifying PCG signals using spectrogram conversion.",
      tech: ["Deep Learning", "Signal Processing", "PyTorch"],
      category: "ai",
      metrics: ["92.7% Accuracy", "Improved Performance"],
      link: "https://github.com/SaiGaneshPS/Deep-Learning-Architecture-for-Phonocardiogram-Signal-Classification-using-Spectrogram"
    }
  ];

  // Publications data
  const publications = [
    {
      title: "Artificial Intelligence Framework for COVID protocol detection",
      authors: "P S Sai Ganesh, Kabilan N, Adithan P, Sajith Variyar V V, Sowmya V",
      conference: "International Conference on Computing, Analytics and Networks",
      year: "2022",
      link: "https://ieeexplore.ieee.org/document/10007125"
    }
  ];

  // Skills data
  const skills = {
    ai: ["TensorFlow", "PyTorch", "Scikit-learn", "Deep Learning", "Computer Vision", "NLP"],
    programming: ["Python", "Java", "SQL", "JavaScript", "Ruby", "Julia"],
    tools: ["Git", "Flask", "OpenCV", "Kivy", "Pandas"],
    other: ["Research", "Technical Writing", "Team Leadership", "Problem Solving"]
  };

  // Intersection Observer effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section').forEach(
      section => observer.observe(section)
    );

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Subtle Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900/30 via-black to-black"></div>
      </div>

      {/* Header */}
      <nav className="fixed w-full py-2 bg-transparent backdrop-blur-sm border-b border-white/20 z-50">
        <div className="max-w-7xl mx-auto px-0 py-2 flex justify-between items-center">
          {/* Name Section */}
          <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-800 tracking-wider transform transition-all duration-500 leading-tight ease-in-out hover:scale-110 animate-gradient">
            Sai Ganesh Pala Shanmugam
          </span>
          {/* Links Section */}
          <div className="flex gap-8">
            <a href="#home" className="group flex items-center text-white text-lg hover:text-emerald-400 transition-colors">
              <AiOutlineHome className="mr-2 group-hover:text-emerald-400 text-3xl" style={{ marginBottom: "2px" }} />
              Home
            </a>
            <a href="#projects" className="group flex items-center text-white text-lg hover:text-emerald-400 transition-colors">
              <AiOutlineFundProjectionScreen className="mr-2 group-hover:text-emerald-400 text-3xl" style={{ marginBottom: "2px" }} />
              Projects
            </a>
            <a href="#publications" className="group flex items-center text-white text-lg hover:text-emerald-400 transition-colors">
              <HiOutlineNewspaper className="mr-2 group-hover:text-emerald-400 text-3xl" style={{ marginBottom: "2px" }} />
              Publications
            </a>
            <a href="#resume" className="group flex items-center text-white text-lg hover:text-emerald-400 transition-colors">
              <CgFileDocument className="mr-2 group-hover:text-emerald-400 text-3xl" style={{ marginBottom: "2px" }} />
              Resume
            </a>
          </div>
        </div>
      </nav>


      <style jsx>{`
        /* Keyframes for gradient animation */
        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-gradient {
          background: linear-gradient(to right,rgb(16, 108, 74),rgb(8, 255, 226),rgb(81, 182, 114));
          background-size: 200% 200%;
          background-position: 0% 50%;
          animation: gradientMove 2s ease infinite;
          -webkit-background-clip: text;
          color: transparent;
        }
      `}</style>

      {/* Hero Section */}
      <motion.section 
        id="home" 
        className="min-h-screen flex items-center justify-center pt-16 relative"
        initial="initial"
        animate="animate"
        variants={fadeInUp}
      >
        <div className="max-w-4xl mx-auto px-4 text-center z-10">
          <div className="mb-6 inline-block">
            <Brain className="w-16 h-16 mx-auto mb-4 text-emerald-400" />
          </div>
          <h1 className="text-5xl font-bold mb-6 text-white">
            AI Developer & Researcher
          </h1>
          <p className="text-xl text-gray-400 mb-8 leading-relaxed">
            Masters in AI student at Memorial University of Newfoundland, specializing in deep learning, 
            computer vision, and NLP. Building intelligent systems that solve real-world problems.
          </p>
          <div className="flex justify-center gap-6 mb-12">
          <a href="https://github.com/SaiGaneshPS" 
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
            target="_blank"
            rel="noopener noreferrer">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/sai-ganesh01/" 
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
            target="_blank"
            rel="noopener noreferrer">
            <Linkedin size={24} />
          </a>
          <a href="mailto:pss.ganesh.2001@gmail.com" 
            className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <Mail size={24} />
          </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm">
              <Brain className="w-8 h-8 mx-auto mb-2 text-emerald-400" />
              <p className="font-semibold">Deep Learning</p>
            </div>
            <div className="p-4 border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm">
              <Terminal className="w-8 h-8 mx-auto mb-2 text-emerald-400" />
              <p className="font-semibold">NLP</p>
            </div>
            <div className="p-4 border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm">
              <Code className="w-8 h-8 mx-auto mb-2 text-emerald-400" />
              <p className="font-semibold">Computer Vision</p>
            </div>
            <div className="p-4 border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm">
              <Database className="w-8 h-8 mx-auto mb-2 text-emerald-400" />
              <p className="font-semibold">ML Systems</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        id="projects" 
        className="py-20 relative"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl font-bold mb-12 text-center text-emerald-400"
          >
            Featured Projects
          </motion.h2>
          
          <motion.div 
            variants={fadeInUp}
            className="flex justify-center gap-4 mb-8"
          >
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeTab === 'all' ? 'bg-emerald-500' : 'bg-white/10'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveTab('ai')}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeTab === 'ai' ? 'bg-emerald-500' : 'bg-white/10'
              }`}
            >
              AI/ML
            </button>
            <button
              onClick={() => setActiveTab('computer-vision')}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeTab === 'computer-vision' ? 'bg-emerald-500' : 'bg-white/10'
              }`}
            >
              Computer Vision
            </button>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
          >
            {projects
              .filter(project => activeTab === 'all' || project.category === activeTab)
              .map((project, index) => (
                <motion.div
                key={index}
                variants={fadeInUp}
                className="border border-white/10 rounded-lg p-6 bg-white/5 backdrop-blur-sm
                           hover:border-emerald-500/50 transition-all duration-300 group"
              >
                <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.metrics.map((metric, i) => (
                    <span key={i} className="bg-emerald-500/20 text-emerald-300 px-2 py-1 rounded text-sm">
                      {metric}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-white/10 px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300"
                >
                  View Project <ExternalLink size={16} />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Publications Section */}
      <motion.section 
        id="publications" 
        className="py-20 relative bg-white/5"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl font-bold mb-12 text-center text-emerald-400"
          >
            Publications
          </motion.h2>
          <motion.div 
            className="space-y-6"
            variants={staggerContainer}
          >
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="border border-white/10 rounded-lg p-6 bg-black/50 hover:border-emerald-500/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <BookOpen className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">
                      {pub.title}
                    </h3>
                    <p className="text-gray-400 mb-2">{pub.authors}</p>
                    <p className="text-gray-500">
                      {pub.conference}, {pub.year}
                    </p>
                    <a 
                      href={pub.link}
                      className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 mt-2"
                    >
                      View Publication <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <section className="py-20 relative bg-white/5">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-emerald-500 to-green-500 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="border border-white/10 rounded-lg p-6 bg-black/50">
                <h3 className="text-xl font-bold mb-4 capitalize">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, index) => (
                    <span key={index} className="bg-white/10 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <motion.section 
        id="resume" 
        className="py-20 relative"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl font-bold mb-12 text-emerald-400"
          >
            Resume
          </motion.h2>
          <motion.div 
            variants={fadeInUp}
            className="mb-8"
          >
            <iframe
              src="/resume.pdf"
              className="w-full h-[600px] rounded-lg border border-white/10"
              title="Resume Preview"
            />
          </motion.div>
          <motion.a
            variants={fadeInUp}
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 
                     rounded-full transition-colors font-semibold"
          >
            <Download size={20} />
            Download Resume
          </motion.a>
        </div>
      </motion.section>
    </div>
  );
};

export default Portfolio;