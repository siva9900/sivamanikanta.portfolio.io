
import React from 'react';
import { Code, Database, Layers, Zap, Star, Sparkles } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Frontend Technologies',
      icon: Code,
      color: 'from-yellow-400 to-orange-500',
      skills: [
        { name: 'React.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Redux', level: 88 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Material-UI', level: 85 },
        { name: 'HTML5/CSS3', level: 95 }
      ]
    },
    {
      title: 'Backend & APIs',
      icon: Database,
      color: 'from-orange-400 to-amber-500',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express.js', level: 88 },
        { name: 'RESTful APIs', level: 92 },
        { name: 'MongoDB', level: 80 },
        { name: 'PostgreSQL', level: 75 }
      ]
    },
    {
      title: 'Tools & Methodologies',
      icon: Layers,
      color: 'from-amber-400 to-yellow-500',
      skills: [
        { name: 'Git/GitHub', level: 95 },
        { name: 'Jest Testing', level: 85 },
        { name: 'Agile/Scrum', level: 90 },
        { name: 'CI/CD', level: 80 },
        { name: 'Performance Optimization', level: 88 }
      ]
    }
  ];

  const technologies = [
    'React.js', 'TypeScript', 'Node.js', 'Redux', 'Material-UI', 'Tailwind CSS',
    'Express.js', 'MongoDB', 'PostgreSQL', 'Jest', 'Git', 'Capacitor',
    'Xcode', 'Android Studio', 'Webpack', 'Vite', 'RESTful APIs'
  ];

  const CircularProgress = ({ percentage, delay = 0 }) => {
    const circumference = 2 * Math.PI * 40;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
      <div className="relative w-20 h-20">
        <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="rgba(255, 193, 7, 0.1)"
            strokeWidth="8"
            fill="transparent"
          />
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="url(#gradient)"
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-2000 ease-out"
            style={{ animationDelay: `${delay}s` }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fbbf24" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-bold text-yellow-400">{percentage}%</span>
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-40"></div>
        <div className="absolute top-20 right-20 w-1 h-1 bg-orange-400 rounded-full animate-ping opacity-60" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-amber-400 rounded-full animate-ping opacity-50" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-10 w-2 h-2 bg-yellow-300 rounded-full animate-ping opacity-30" style={{ animationDelay: '3s' }}></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-1/3 w-20 h-20 border border-yellow-400/20 rotate-45 animate-float opacity-30"></div>
        <div className="absolute bottom-1/3 right-1/4 w-16 h-16 border border-orange-400/20 rotate-12 animate-float opacity-40" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container-max section-padding relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="text-yellow-400 animate-spin-slow" size={32} />
            <h2 className="text-4xl md:text-6xl font-bold">
              Technical <span className="gradient-text animate-text-shimmer bg-gradient-to-r from-yellow-400 via-orange-500 to-amber-400 bg-[length:200%_auto] bg-clip-text">Expertise</span>
            </h2>
            <Zap className="text-orange-400 animate-bounce-slow" size={32} />
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-amber-400 mx-auto mb-8 rounded-full glow-effect"></div>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            A comprehensive arsenal of cutting-edge technologies refined through years of hands-on experience
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={categoryIndex}
                className="glass-card p-8 rounded-2xl hover-glow group relative overflow-hidden animate-fade-in"
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                {/* Card glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-center mb-6">
                    <div className={`p-4 rounded-full bg-gradient-to-r ${category.color} bg-opacity-20 glow-effect group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent size={32} className="text-yellow-400" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-8 text-center gradient-text">
                    {category.title}
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex flex-col items-center group/skill">
                        <CircularProgress 
                          percentage={skill.level} 
                          delay={(categoryIndex * 0.2) + (skillIndex * 0.1)} 
                        />
                        <span className="text-sm font-medium mt-3 text-center group-hover/skill:text-yellow-400 transition-colors duration-300">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
              <Star className="text-yellow-400 animate-spin-slow" size={28} />
              <span className="gradient-text">Technology Stack</span>
              <Star className="text-orange-400 animate-spin-slow" size={28} style={{ animationDelay: '1s' }} />
            </h3>
            <p className="text-foreground/60">Tools and frameworks I work with daily</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="tech-badge hover:scale-125 hover:shadow-lg hover:shadow-yellow-400/20 transition-all duration-300 cursor-pointer group relative overflow-hidden"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <span className="relative z-10">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
