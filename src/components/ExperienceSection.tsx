
import React from 'react';
import { Calendar, MapPin, Users, Zap } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      company: 'Evonsys India Pvt Ltd',
      role: 'Full Stack Developer (React & Node.js)',
      duration: 'June 2020 – Present (5+ years)',
      location: 'Hyderabad, India',
      type: 'Full-time',
      highlights: [
        'Led end-to-end project delivery for complex web applications using React.js and Material-UI',
        'Integrated backend services in Node.js/Express with RESTful endpoints',
        'Deployed cross-platform mobile apps via Capacitor to App Store and Play Store',
        'Mentored 4-6 junior developers and conducted peer code reviews',
        'Reduced initial bundle size by 30% through code splitting and dynamic imports',
        'Delivered large-scale HR management portal 3 weeks ahead of schedule'
      ],
      technologies: ['React.js', 'Node.js', 'TypeScript', 'Redux Toolkit', 'Material-UI', 'Capacitor']
    },
    {
      company: 'PeopleHCM',
      role: 'Lead Frontend Developer',
      duration: '24 months',
      location: 'Remote',
      type: 'Contract',
      highlights: [
        'Designed and implemented dynamic, responsive UIs for HR management suite',
        'Collaborated with backend engineers to integrate RESTful APIs',
        'Optimized critical rendering paths achieving sub-200ms time-to-first-paint',
        'Established shared component library reducing duplicate code by 40%',
        'Improved code coverage from 60% to 85% through unit and integration tests'
      ],
      technologies: ['React.js', 'TypeScript', 'Material-UI', 'Jest', 'RESTful APIs']
    },
    {
      company: 'Pega Constellation',
      role: 'Frontend Team Lead',
      duration: '24 months',
      location: 'Hyderabad, India',
      type: 'Full-time',
      highlights: [
        'Led team of 5 frontend developers building low-code automation dashboard',
        'Integrated React with Pega CSA for process-automation workflows',
        'Achieved 20% increase in project efficiency through standardized UI patterns',
        'Delivered core Pega module 2 sprints ahead of schedule',
        'Reduced new hire ramp-up time by 30% through comprehensive onboarding'
      ],
      technologies: ['React.js', 'Pega CSA', 'Redux', 'Tailwind CSS']
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container-max section-padding">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            A journey of continuous growth, leadership, and technical excellence
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="glass-card p-8 rounded-xl animate-fade-in hover:scale-[1.02] transition-transform duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="mb-4 lg:mb-0">
                  <h3 className="text-2xl font-bold gradient-text mb-2">{exp.role}</h3>
                  <h4 className="text-xl font-semibold text-foreground/90 mb-2">{exp.company}</h4>
                  <div className="flex flex-wrap gap-4 text-sm text-foreground/70">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users size={14} />
                      <span>{exp.type}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h5 className="font-semibold mb-3 flex items-center gap-2">
                  <Zap size={16} className="text-blue-400" />
                  Key Achievements
                </h5>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, highlightIndex) => (
                    <li 
                      key={highlightIndex}
                      className="flex items-start gap-3 text-foreground/80"
                    >
                      <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h5 className="font-semibold mb-3">Technologies Used</h5>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="tech-badge"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
