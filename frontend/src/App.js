import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Loading animation
    setTimeout(() => setIsLoading(false), 2000);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const projects = [
    {
      title: "AI-Driven Travel Itinerary Planner",
      description: "AI-powered planner reducing itinerary planning time by 90%. OpenWeather API for real-time data synchronization across 100,000+ locations.",
      tech: ["OpenWeather", "Gemini", "Google Maps API", "AI/ML"],
      status: "Ongoing",
      gradient: "from-blue-600 to-purple-600"
    },
    {
      title: "Facial Recognition Attendance System",
      description: "Automated attendance via facial recognition, reducing manual work by 90%. Real-time monitoring with 85% accuracy.",
      tech: ["Django", "OpenCV", "SQLite", "Python"],
      date: "Nov 2024",
      gradient: "from-green-600 to-teal-600"
    },
    {
      title: "Custom Android ROM Development",
      description: "Built custom ROM modifying UI and system features for enhanced performance. Tweaked kernel settings for phone battery life.",
      tech: ["AOSP", "Linux Kernel", "Android"],
      date: "Jan 2024",
      gradient: "from-orange-600 to-red-600"
    },
    {
      title: "Stock Market Prediction Web App",
      description: "Flask-based ML-powered stock market predictor. Real-time stock data retrieval through yFinance API.",
      tech: ["Flask", "yFinance", "PyTorch", "ML"],
      date: "May 2023",
      gradient: "from-pink-600 to-purple-600"
    }
  ];

  const skills = {
    "Languages": ["C++", "Java", "Python", "SQL", "JavaScript"],
    "Technologies": ["Firebase", "GitHub", "Supabase", "MongoDB Atlas"],
    "Frameworks": ["React", "Django", "Flask", "Streamlit"],
    "Core Subjects": ["DBMS", "Machine Learning", "Computer Networks", "Operating Systems"]
  };

  const certifications = [
    { name: "Developing AI Applications with Python and Flask", date: "Mar 2024 - May 2024" },
    { name: "JavaScript", date: "Jan 2024 - Mar 2024" },
    { name: "Principles of UX/UI Design", date: "Jan 2024 - Mar 2024" },
    { name: "React.JS", date: "Dec 2023 - Mar 2024" },
    { name: "Full Stack Web Development using Node.js", date: "May 2023 - Oct 2023" },
    { name: "Continuous Integration and Delivery - DevOps", date: "May 2023 - Sep 2023" }
  ];

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loader-3d">
          <div className="cube-loader">
            <div className="cube-face"></div>
            <div className="cube-face"></div>
            <div className="cube-face"></div>
            <div className="cube-face"></div>
            <div className="cube-face"></div>
            <div className="cube-face"></div>
          </div>
        </div>
        <h2 className="loading-text">Loading Portfolio...</h2>
      </div>
    );
  }

  return (
    <div className="app">
      {/* 3D Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div 
          className="floating-sphere sphere-1"
          style={{
            transform: `translate3d(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px, 0) rotateX(${mousePosition.y * 0.5}deg) rotateY(${mousePosition.x * 0.5}deg)`
          }}
        ></div>
        <div 
          className="floating-sphere sphere-2"
          style={{
            transform: `translate3d(${mousePosition.x * -0.05}px, ${mousePosition.y * -0.05}px, 0) rotateX(${mousePosition.y * -0.3}deg) rotateY(${mousePosition.x * -0.3}deg)`
          }}
        ></div>
        <div 
          className="floating-cube cube-1"
          style={{
            transform: `translate3d(${mousePosition.x * 0.08}px, ${mousePosition.y * 0.08}px, 0) rotateX(${mousePosition.y * 0.4}deg) rotateY(${mousePosition.x * 0.4}deg) rotateZ(45deg)`
          }}
        ></div>
      </div>

      {/* Hero Section */}
      <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="hero-background"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center">
            <div className="hero-card">
              <h1 className="hero-title">
                <span className="block text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
                  Vipul Utakarsh
                </span>
              </h1>
              <div className="hero-subtitle">
                <h2 className="text-2xl md:text-4xl font-light text-gray-300 mb-6">
                  Full Stack Developer & AI Enthusiast
                </h2>
              </div>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
                Passionate about creating innovative solutions with AI/ML, backend development, and mobile technologies. 
                Currently pursuing Computer Science at Chandigarh University.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <a href="mailto:vipuutakarsh3224@gmail.com" className="contact-btn">
                  <i className="fas fa-envelope"></i>
                  Get In Touch
                </a>
                <a href="#projects" className="projects-btn">
                  <i className="fas fa-code"></i>
                  View Projects
                </a>
              </div>
              <div className="contact-links">
                <a href="mailto:vipuutakarsh3224@gmail.com" className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </a>
                <a href="tel:+919546546797" className="contact-icon">
                  <i className="fas fa-phone"></i>
                </a>
                <a href="#" className="contact-icon">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#" className="contact-icon">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-dot"></div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">About Me</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="about-card">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I'm a passionate Computer Science student at Chandigarh University with a strong foundation in 
                full-stack development, AI/ML, and mobile technologies. My experience spans from backend API 
                development to creating AI-powered applications that solve real-world problems.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                With hands-on experience in projects ranging from facial recognition systems to custom Android 
                ROM development, I bring a unique blend of creativity and technical expertise to every challenge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">Work Experience</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="work-card">
              <div className="work-header">
                <h3 className="text-2xl font-bold text-white">Back End Developer</h3>
                <div className="work-meta">
                  <span className="company">The Detailing Hustler</span>
                  <span className="location">Freelance Remote | Canada</span>
                  <span className="duration">Aug 2023 - Jan 2024</span>
                </div>
              </div>
              <ul className="work-achievements">
                <li>Developed and optimized back-end APIs for the car detailing platform</li>
                <li>Integrated Firebase for real-time data synchronization</li>
                <li>Improved database efficiency, reducing response time by 30%</li>
                <li>Implemented authentication and security best practices</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">Featured Projects</h2>
          </div>
          <div className="projects-showcase">
            {projects.map((project, index) => (
              <div key={index} className={`project-item project-${index + 1}`}>
                <div className="project-visual">
                  <div className={`project-bg bg-gradient-to-br ${project.gradient}`}></div>
                  <div className="project-overlay"></div>
                  <div className="project-icon">
                    <i className={`fas ${index === 0 ? 'fa-brain' : index === 1 ? 'fa-camera' : index === 2 ? 'fa-mobile-alt' : 'fa-chart-line'}`}></i>
                  </div>
                </div>
                <div className="project-details">
                  <div className="project-header">
                    <h3 className="project-name">{project.title}</h3>
                    <span className="project-badge">{project.status || project.date}</span>
                  </div>
                  <p className="project-desc">{project.description}</p>
                  <div className="project-tech-stack">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="tech-pill">{tech}</span>
                    ))}
                  </div>
                  <div className="project-actions">
                    <button className="project-btn primary">
                      <i className="fas fa-eye"></i>
                      View Details
                    </button>
                    <button className="project-btn secondary">
                      <i className="fab fa-github"></i>
                      Code
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">Educational Journey</h2>
          </div>
          <div className="education-journey">
            <div className="journey-path">
              <div className="journey-line"></div>
              <div className="journey-stages">
                <div className="stage stage-1" data-year="2018-2019">
                  <div className="stage-avatar">
                    <div className="avatar-kid">👦</div>
                  </div>
                  <div className="stage-content">
                    <h3>Senior Secondary</h3>
                    <p>S.D.S.V.M, Samastipur</p>
                    <span className="grade">90%</span>
                  </div>
                </div>
                <div className="stage stage-2" data-year="2020-2021">
                  <div className="stage-avatar">
                    <div className="avatar-teen">👨‍🎓</div>
                  </div>
                  <div className="stage-content">
                    <h3>Higher Secondary</h3>
                    <p>Sri Chaitanya Techno School, Vishakhapatnam</p>
                    <span className="grade">96.7%</span>
                  </div>
                </div>
                <div className="stage stage-3" data-year="2021-2025">
                  <div className="stage-avatar">
                    <div className="avatar-college">👨‍💻</div>
                  </div>
                  <div className="stage-content">
                    <h3>B.E. Computer Science</h3>
                    <p>Chandigarh University</p>
                    <span className="grade">CGPA: 7.76</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">Certifications</h2>
          </div>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="certification-card">
                <h3 className="certification-title">{cert.name}</h3>
                <p className="certification-date">{cert.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">Get In Touch</h2>
          </div>
          <div className="contact-container">
            <div className="contact-info-card">
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              <div className="contact-details">
                <div className="contact-detail">
                  <i className="fas fa-envelope contact-detail-icon"></i>
                  <span>vipuutakarsh3224@gmail.com</span>
                </div>
                <div className="contact-detail">
                  <i className="fas fa-phone contact-detail-icon"></i>
                  <span>+91 9546546797</span>
                </div>
                <div className="contact-detail">
                  <i className="fas fa-map-marker-alt contact-detail-icon"></i>
                  <span>Samastipur, Bihar, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">&copy; 2024 Vipul Utakarsh. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;