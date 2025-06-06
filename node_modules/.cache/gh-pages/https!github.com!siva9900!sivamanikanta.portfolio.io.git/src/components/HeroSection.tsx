
import React, { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ['Full Stack Developer', 'React.js Specialist', 'Node.js Expert', 'Team Leader'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-yellow-400/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float"></div>
        <div className="absolute top-40 right-10 w-80 h-80 bg-orange-500/10 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-amber-400/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '4s' }}></div>
        
        {/* Animated particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-orange-400 rounded-full animate-ping opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-amber-400 rounded-full animate-ping opacity-50" style={{ animationDelay: '2.5s' }}></div>
      </div>

      <div className="container-max section-padding relative z-10">
        <div className="text-center animate-fade-in-up">
          <div className="mb-6">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="text-yellow-400 animate-spin-slow" size={32} />
              <h1 className="text-5xl md:text-7xl font-bold">
                Hi, I'm <span className="gradient-text animate-text-shimmer bg-gradient-to-r from-yellow-400 via-orange-500 to-amber-400 bg-[length:200%_auto] bg-clip-text">Sivamanikanta</span>
              </h1>
              <Sparkles className="text-orange-400 animate-spin-slow" size={32} style={{ animationDelay: '1s' }} />
            </div>
            <div className="text-2xl md:text-3xl text-foreground/80 h-12 flex items-center justify-center">
              <span className="typewriter animate-border-glow border-2 border-transparent px-4 py-2 rounded-lg" key={currentRole}>
                {roles[currentRole]}
              </span>
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto mb-8 leading-relaxed animate-slide-in-left">
            Specializing in React.js & Node.js with 5+ years of experience building responsive, 
            high-performance web applications. I craft scalable architectures and mentor teams 
            to deliver exceptional user experiences.
          </p>

          <div className="flex items-center justify-center gap-6 mb-12 animate-scale-in">
            <Button size="lg" className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 animate-glow hover-glow">
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="outline" size="lg" className="border-yellow-400/40 hover:border-yellow-400 hover:bg-yellow-400/10 px-8 py-3 rounded-full font-semibold hover-glow">
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-8 animate-slide-in-right">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-yellow-400 transition-all duration-300 hover:scale-125 transform hover-glow">
              <Github size={28} />
            </a>
            <a href="https://linkedin.com/in/sivamanikanta-chavvakula" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-orange-400 transition-all duration-300 hover:scale-125 transform hover-glow">
              <Linkedin size={28} />
            </a>
            <a href="mailto:sivamanichavvakula@gmail.com" className="text-foreground/60 hover:text-amber-400 transition-all duration-300 hover:scale-125 transform hover-glow">
              <Mail size={28} />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <a href="#about" className="block p-2 rounded-full bg-yellow-400/20 hover:bg-yellow-400/30 transition-colors duration-300 glow-effect">
            <ArrowDown size={24} className="text-yellow-400" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
