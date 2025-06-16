import { useState, useEffect } from 'react';
import { Code, Brain, Database, Cpu, Github, Linkedin, Mail, ExternalLink, ChevronDown, Zap, BookOpen, User, } from 'lucide-react';

const Portfolio = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isTyping, setIsTyping] = useState(true);

  // Typing animation effect
  const [displayText, setDisplayText] = useState('');
  const fullText = "B tech CSE (AI) Student ";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  // Mouse tracking for interactive background
  useEffect(() => {
    //@ts-ignore
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const skills = [
        
      { name: 'C', level: 75, icon: '🔵', category: 'Programming' },
      { name: 'C++', level: 78, icon: '🔷', category: 'Programming' },
      { name: 'Python', level: 90, icon: '🐍', category: 'AI/ML' },
      { name: 'Java', level: 80, icon: '☕', category: 'Programming' },
      { name: 'HTML/CSS', level: 85, icon: '🌐', category: 'Frontend' },
      { name: 'JavaScript', level: 87, icon: '�', category: 'Frontend' },
      { name: 'React', level: 88, icon: '⚛️', category: 'Frontend' },
      { name: 'Node.js', level: 82, icon: '🟢', category: 'Backend' },
      { name: 'MongoDB', level: 75, icon: '🍃', category: 'Database' },
      { name: 'PyTorch', level: 80, icon: '🔥', category: 'AI/ML' },
      { name: 'AWS', level: 65, icon: '☁️', category: 'Cloud' },
    
  ];

  const projects = [
        {
      title: "Bong Pizza Website",
      description: "A modern, responsive website for Bong Pizza featuring online ordering, menu browsing, and customer reviews.",
      tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      github: "#",
      demo: "#",
      image: "🍕"
    },
    
          {
        title: "College Fest Management System",
        description: "A comprehensive web platform to manage college fests, enabling event creation, online registrations, scheduling, team management, and real-time updates for participants and organizers.",
        tech: ["MongoDB", "React"],
        github: "#",
        demo: "#",
        image: "🎉"
      }
  
  ];

  const achievements = [
    { title: "hackathon Winner", description: "3rd Place at TechFest 2024 for AI Innovation at Santra", icon: "🏆" },
    // { title: "Research Publication", description: "Published paper on 'Neural Networks in Healthcare'", icon: "📄" },
    { title: "Certification", description: "Full stack web development", icon: "🎓" },
    // { title: "Open Source", description: "Contributed to 15+ GitHub repositories", icon: "🌟" }
  ];
  //@ts-ignore
  const ScrollSection = ({ children, id }) => (
    <section id={id} className="min-h-screen flex items-center justify-center p-8">
      {children}
    </section>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-purple-500 rounded-full opacity-10 blur-3xl transition-all duration-1000"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transform: 'translate(-50%, -50%)'
          }}
        />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full opacity-5 blur-2xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500 rounded-full opacity-5 blur-2xl animate-pulse delay-1000" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            &lt;Portfolio/&gt;
          </div>
          <div className="hidden md:flex space-x-8">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-cyan-400 transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <ScrollSection id="home">
        <div className="text-center space-y-8 relative z-10">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              SK JASIR
            </h1>
            <div className="text-2xl md:text-3xl text-gray-300 h-12 flex items-center justify-center">
              <span className="font-mono">
                {displayText}
                {isTyping && <span className="animate-pulse">|</span>}
              </span>
            </div>
          </div>
          
          <div className="flex justify-center space-x-6 text-4xl">
            <Brain className="text-purple-400 animate-bounce" />
            <Code className="text-cyan-400 animate-bounce delay-200" />
            <Database className="text-pink-400 animate-bounce delay-400" />
            <Cpu className="text-yellow-400 animate-bounce delay-600" />
          </div>

          <div className="flex justify-center space-x-6">
            <a href="https://github.com/skjasir17" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/sk-jasir-software-developer/" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:skjasir21@gmail.com" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110">
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-gray-400" />
          </div>
        </div>
      </ScrollSection>

      {/* About Section */}
      <ScrollSection id="about">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
             I’m a third-year B.Tech CSE (Artificial Intelligence) student with a strong interest in Artificial Intelligence, Machine Learning, and Web Development. Alongside my studies, I run a service-based startup called INNOVEBERG, where we provide IT consulting, development, and creative solutions to clients. I’m passionate about solving real-world problems through technology and constantly exploring innovative ways to merge AI with modern web technologies. Whether it's academic work or professional projects, I believe in building impactful, user-centric solutions that create real value.


            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <BookOpen className="w-8 h-8 text-cyan-400 mb-2" />
                <h3 className="font-semibold">Education</h3>
                <p className="text-sm text-gray-400">10+2 from Santra KL High School(HS) |
                  B.Tech CSE (AI) from BBIT</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <Zap className="w-8 h-8 text-purple-400 mb-2" />
                <h3 className="font-semibold">Focus</h3>
                <p className="text-sm text-gray-400">AI/ML & Web Dev</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-full flex items-center justify-center group">
              <User className="w-32 h-32 text-white/50 absolute" />
              <img
                src="/jasir.jpg"
                alt="JASIR"
                className="w-56 h-56 rounded-full object-cover border-4 border-transparent transition-all duration-300 group-hover:border-cyan-400 group-hover:scale-105 relative z-10"
              />
            </div>
          </div>
        </div>
      </ScrollSection>

      {/* Skills Section */}
      <ScrollSection id="skills">
        <div className="max-w-6xl mx-auto space-y-12">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <div key={skill.name} className="group">
                <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="text-2xl">{skill.icon}</span>
                    <div>
                      <h3 className="font-semibold">{skill.name}</h3>
                      <p className="text-xs text-gray-400">{skill.category}</p>
                    </div>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-cyan-400 to-purple-400 h-2 rounded-full transition-all duration-1000 delay-300"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <p className="text-right text-sm text-gray-400 mt-1">{skill.level}%</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollSection>

      {/* Projects Section */}
      <ScrollSection id="projects">
        <div className="max-w-6xl mx-auto space-y-12">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group">
                <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
                  <div className="text-6xl mb-4">{project.image}</div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a href={project.github} className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors">
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                    <a href={project.demo} className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                      <span>Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollSection>

      {/* Achievements Section */}
      <ScrollSection id="achievements">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Achievements
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-purple-400/50 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <span className="text-3xl">{achievement.icon}</span>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{achievement.title}</h3>
                    <p className="text-gray-400">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollSection>

      {/* Contact Section */}
      <ScrollSection id="contact">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-gray-300 text-lg">
            I'm always open to discussing new opportunities, innovative projects, or just having a chat about AI and technology.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <a href="mailto:your.email@example.com" className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
              <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-1">Email</h3>
              <p className="text-gray-400 text-sm">skjasir21@gmail.com</p>
            </a>
            <a href="https://www.linkedin.com/in/sk-jasir-software-developer/" className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
              <Linkedin className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-1">LinkedIn</h3>
              <p className="text-gray-400 text-sm">Connect with me</p>
            </a>
            <a href="https://github.com/skjasir17" className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-pink-400/50 transition-all duration-300 hover:scale-105">
              <Github className="w-8 h-8 text-pink-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-1">GitHub</h3>
              <p className="text-gray-400 text-sm">Check out my code</p>
            </a>
          </div>
        </div>
      </ScrollSection>

      {/* Footer */}
      <footer className="bg-black/20 border-t border-white/10 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 Sk Jasir. Built with Vite React for Portfolio.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;