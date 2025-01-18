import React, { useState, useEffect } from 'react';
import { Github, Mail, Linkedin, ExternalLink, Download, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiFillRobot,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { BiNetworkChart } from "react-icons/bi";
import { TbDeviceVisionPro } from "react-icons/tb";
import { GiComputerFan } from "react-icons/gi";
import { Menu, X } from 'lucide-react';
import StarBackground from './StarBackground';
import { 
  BsRocketTakeoff,
  BsBarChartFill 
} from "react-icons/bs";
import { PiBrainBold } from "react-icons/pi";
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [ , setIsVisible] = useState({});

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

  const FeatureCard = ({ icon, title, description }) => {
    return (
      <div className="p-6 rounded-xl border border-white/10 bg-black/50 backdrop-blur-sm
                 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1">
        <div className="text-emerald-400 text-4xl mb-4 transition-transform duration-200 hover:scale-110">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3 text-white">
          {title}
        </h3>
        <p className="text-gray-400 leading-relaxed">
          {description}
        </p>
      </div>
    );
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
      description: "Comprehensive comparison of ten state-of-the-art deep learning models for skew detection in receipts by creating a custom dataset that handles five different resolutions.",
      tech: ["ConvNext", "Swin Transformer", "ViT", "OpenCV"],
      category: "computer-vision",
      metrics: ["5 Resolution Types", "Multiple SOTA Models"],
      link: "https://github.com/SaiGaneshPS/Skew_Detection_OCR/tree/main"
    },
    {
      title: "PCG Classification Architecture",
      description: "Novel deep learning architecture for classifying PCG signals using spectrogram conversion.",
      tech: ["Deep Learning", "Signal Processing", "PyTorch"],
      category: "ai",
      metrics: ["92.7% Accuracy", "Improved Performance"],
      link: "https://github.com/SaiGaneshPS/Deep-Learning-Architecture-for-Phonocardiogram-Signal-Classification-using-Spectrogram"
    },
    {
      title: "Machine Learning-Based Task Tracker",
      description: "Full-stack app for managing tasks, built with React, Node.js, secured with JWT auth, Rasa NLU, and AWS RDS. Containerized with Docker for smooth deployment.",
      tech: ["React", "Node.js", "JWT", "Rasa", "AWS RDS", "Docker"],
      category: "ai",
      metrics: [],
      link: "https://github.com/SaiGaneshPS/AI_Driven_Task_Tracker"
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
      {/* Add StarBackground component */}
      <StarBackground />
      
      {/* Subtle gradient overlay */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/80 to-black"></div>
      </div>

      {/* Modified Header/Nav */}
      <nav className="fixed w-full py-2 bg-transparent backdrop-blur-sm border-b border-white/20 z-50">
        <div className="max-w-7xl mx-auto px-4 py-1">
          {/* Main header row */}
          <div className="flex justify-between items-center">
            {/* Name Section - Responsive text size */}
            <div className="h-auto min-h-[2rem] flex items-center">
            <h1 className="text-xl sm:text-2xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-700 to-purple-500 tracking-wider transform transition-all duration-500 hover:scale-110 animate-gradient" style={{ lineHeight: '1.4', textRendering: 'geometricPrecision' }}>
              <span className="inline-block" style={{ marginBottom: '0.1em' }}>Sai Ganesh</span>{" "}
              <span className="inline-block" style={{ marginBottom: '0.1em' }}>Pala Shanmugam</span>
            </h1>
            </div>

            {/* Desktop Navigation - Hidden on mobile */}
            <div className="hidden md:flex gap-8">
            <Link to="/blog" className="group flex items-center text-white text-lg hover:text-emerald-400 transition-colors">
              <AiOutlineHome className="mr-2 group-hover:text-emerald-400 text-3xl" style={{ marginBottom: "2px" }} />
              Blog
              </Link>
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

            {/* Mobile Menu Button - Visible only on mobile */}
            <button 
              className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X size={24} className="text-emerald-400" />
              ) : (
                <Menu size={24} className="text-emerald-400" />
              )}
            </button>
          </div>

          {/* Mobile Navigation Menu - Sliding drawer from right */}
          <div 
            className={`md:hidden fixed top-0 right-0 h-full w-64 bg-black/95 backdrop-blur-md transform transition-transform duration-300 ease-in-out z-50 ${
              isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            {/* Close button for mobile menu */}
            <button 
              className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={24} className="text-emerald-400" />
            </button>

            {/* Mobile menu items */}
            <div className="flex flex-col pt-16 px-4 space-y-6">
              <a 
                href="#home" 
                className="flex items-center text-white text-lg hover:text-emerald-400 transition-colors p-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <AiOutlineHome className="mr-3 text-2xl" />
                Home
              </a>
              <a 
                href="#projects" 
                className="flex items-center text-white text-lg hover:text-emerald-400 transition-colors p-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <AiOutlineFundProjectionScreen className="mr-3 text-2xl" />
                Projects
              </a>
              <a 
                href="#publications" 
                className="flex items-center text-white text-lg hover:text-emerald-400 transition-colors p-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <HiOutlineNewspaper className="mr-3 text-2xl" />
                Publications
              </a>
              <a 
                href="#resume" 
                className="flex items-center text-white text-lg hover:text-emerald-400 transition-colors p-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <CgFileDocument className="mr-3 text-2xl" />
                Resume
              </a>
            </div>
          </div>

          {/* Overlay for mobile menu */}
          {isMobileMenuOpen && (
            <div 
              className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={() => setIsMobileMenuOpen(false)}
            />
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section 
        id="home" 
        className="min-h-screen flex items-center pt-24 sm:pt-16 relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full">
          <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-8">
            {/* Left content */}
            <div className="max-w-2xl w-full">
              <h1 className="text-3xl sm:text-5xl font-bold mb-6 text-center sm:text-left text-white">
                AI Developer & Researcher
              </h1>
              <p className="text-lg sm:text-xl text-gray-400 mb-8 leading-relaxed text-center sm:text-left">
  Recent Master's graduate in Artificial Intelligence, building upon a specialized Bachelor's in AI. 
  Combining academic excellence with practical experience through research publications and internship 
  experience in computational linguistics. Strong foundation in computer vision, NLP, and deep learning, 
  with a particular talent for troubleshooting complex ML systems. Ready to transition from academic 
  success to creating impactful AI solutions in industry.
</p>
              {/* Social links - Centered on mobile */}
              <div className="flex gap-6 mb-12 justify-center sm:justify-start">
                <motion.a
                  href="https://github.com/SaiGaneshPS"
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={24} />
                </motion.a>
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
              {/* Skills grid - 2 columns on mobile, 4 on desktop */}
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
                <div className="p-4 border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm flex flex-col items-center justify-center">
                  <AiFillRobot className="w-8 h-8 mb-2 text-emerald-400" />
                  <p className="font-semibold text-center">Deep Learning</p>
                </div>
                <div className="p-4 border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm flex flex-col items-center justify-center">
                  <BiNetworkChart className="w-8 h-8 mb-2 text-emerald-400" />
                  <p className="font-semibold text-center">NLP</p>
                </div>
                <div className="p-4 border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm flex flex-col items-center justify-center">
                  <TbDeviceVisionPro className="w-8 h-8 mb-2 text-emerald-400" />
                  <p className="font-semibold text-center">Computer Vision</p>
                </div>
                <div className="p-4 border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm flex flex-col items-center justify-center">
                  <GiComputerFan className="w-8 h-8 mb-2 text-emerald-400" />
                  <p className="font-semibold text-center">ML Systems</p>
                </div>
              </div>
            </div>
            
            {/* Right side - Image */}
            <div className="w-48 h-48 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-emerald-500">
              <img 
                src={`${process.env.PUBLIC_URL}/profile.jpeg`}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </motion.section>
      
      <section className="py-20 relative bg-gradient-to-b from-black/50 to-transparent">
  <div className="max-w-6xl mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-400 to-cyan-500 animate-gradient py-1">
        Why Work With Me
      </h2>
      <p className="text-gray-400 max-w-2xl mx-auto">
        Combining technical expertise with a proven track record of delivering impactful AI solutions
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      <FeatureCard
        icon={<PiBrainBold />}
        title="End-to-End AI Solutions"
        description="Expertise in developing and deploying production-ready ML systems that scale. Proven track record of converting research into real-world applications."
      />
      <FeatureCard
        icon={<BsRocketTakeoff />}
        title="Research & Innovation"
        description="Active researcher with publications in international conferences. Constantly exploring and implementing cutting-edge AI technologies."
      />
      <FeatureCard
        icon={<BsBarChartFill />}
        title="Impact-Driven Development"
        description="Focus on creating AI solutions that deliver measurable business value. Interest of improving efficiency and accuracy in production systems."
      />
    </div>
  </div>
</section>

      {/* Projects Section */}
      <motion.section 
        id="projects" 
        className="py-12 sm:py-20 relative px-4"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            variants={fadeInUp}
            className="text-2xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-400 to-cyan-500 tracking-wider transform transition-all duration-500 animate-gradient"
          >
            Featured Projects
          </motion.h2>

          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8"
            variants={staggerContainer}
          >
            {projects.map((project, index) => (
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
        className="py-12 sm:py-20 relative bg-white/5 px-4"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            variants={fadeInUp}
            className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center text-2xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r bg-gradient-to-r from-emerald-300 via-teal-400 to-cyan-500 tracking-wider transform transition-all duration-500 animate-gradient"
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
      <section className="py-12 sm:py-20 relative bg-white/5 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center text-2xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-400 to-cyan-500 tracking-wider transform transition-all duration-500 animate-gradient">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="border border-white/10 rounded-lg p-6 bg-black/50">
                <h3 className="text-xl font-bold mb-4 capitalize">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, index) => (
                    <motion.span
                      key={index}
                      className="bg-white/10 px-3 py-1 rounded-full text-sm hover:bg-emerald-500/20"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {skill}
                    </motion.span>
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
        className="py-12 sm:py-20 relative px-4"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2 
            variants={fadeInUp}
            className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-2xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-400 to-cyan-500 tracking-wider transform transition-all duration-500 animate-gradient"
          >
            Resume
          </motion.h2>
          <motion.div 
            variants={fadeInUp}
            className="mb-8"
          >
            <iframe
              src={`${process.env.PUBLIC_URL}/resume.pdf`}
              className="w-full h-[400px] sm:h-[600px] rounded-lg border border-white/10"
              title="Resume Preview"
            />
          </motion.div>
          <motion.a
            variants={fadeInUp}
            href={`${process.env.PUBLIC_URL}/resume.pdf`}
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