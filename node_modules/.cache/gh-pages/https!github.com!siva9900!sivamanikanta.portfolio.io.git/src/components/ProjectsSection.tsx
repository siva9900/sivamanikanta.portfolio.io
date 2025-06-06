import React from 'react';
import { ExternalLink, Github, Smartphone, Globe, Database, Users } from 'lucide-react';
import { Button } from './ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'HR Management Portal',
      company: 'Evonsys India',
      description: 'Built a full-featured HR suite including employee onboarding, leave management, attendance tracking, and payroll generation. Designed reusable React components, implemented role-based access control, and integrated RESTful endpoints.',
      image: '/placeholder.svg',
      technologies: ['React.js', 'TypeScript', 'Redux Toolkit', 'Node.js', 'MongoDB', 'Material-UI'],
      features: [
        'Employee onboarding workflows',
        'Real-time attendance tracking',
        'Automated payroll generation',
        'Role-based access control',
        'JWT authentication',
        'WebSocket notifications'
      ],
      icon: Database,
      type: 'Web Application'
    },
    {
      title: 'Mobile Expense Tracker',
      company: 'Cross-Platform App',
      description: 'Developed a cross-platform mobile application for personal expense tracking. Features include receipt capture via camera integration, category-wise spending analytics, and push notifications for bill reminders.',
      image: '/placeholder.svg',
      technologies: ['React Native', 'Capacitor', 'Node.js', 'PostgreSQL'],
      features: [
        'Camera integration for receipts',
        'Category-wise analytics',
        'Push notifications',
        'Cross-platform deployment',
        'Offline data sync',
        'Spending insights'
      ],
      icon: Smartphone,
      type: 'Mobile Application'
    },
    {
      title: 'Low-Code Automation Dashboard',
      company: 'Pega Constellation',
      description: 'Led creation of a modular dashboard allowing business users to configure and monitor automation workflows without coding. Integrated Pega APIs for case management with real-time status updates.',
      image: '/placeholder.svg',
      technologies: ['React.js', 'Pega CSA', 'Tailwind CSS', 'Redux'],
      features: [
        'Drag-and-drop widgets',
        'No-code workflow configuration',
        'Real-time status updates',
        'Case management integration',
        'Business user friendly',
        'Modular architecture'
      ],
      icon: Globe,
      type: 'Enterprise Platform'
    },
    {
      title: 'Employee Onboarding Wizard',
      company: 'PeopleHCM',
      description: 'Designed and implemented a multi-step onboarding wizard guiding new hires through company policies, document uploads, bank account linking, and address autofill with save-for-later functionality.',
      image: '/placeholder.svg',
      technologies: ['React.js', 'TypeScript', 'Formik', 'Yup', 'Material-UI'],
      features: [
        'Multi-step wizard interface',
        'Document upload system',
        'Bank account integration (Dwolla)',
        'Address autofill',
        'Save for later functionality',
        'Conditional step logic'
      ],
      icon: Users,
      type: 'HR Solution'
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container-max section-padding">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Showcasing real-world applications that demonstrate technical expertise and business impact
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="glass-card rounded-xl overflow-hidden group hover:scale-[1.02] transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <project.icon size={24} className="text-blue-400" />
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 border border-blue-500/30 text-blue-300">
                    {project.type}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                  <p className="text-sm text-blue-400 font-medium">{project.company}</p>
                </div>

                <p className="text-foreground/80 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-sm">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-1 text-sm">
                    {project.features.slice(0, 4).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                        <span className="text-foreground/70">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 rounded text-xs font-medium bg-purple-500/20 border border-purple-500/30 text-purple-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                  <Button size="sm" className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600">
                    <ExternalLink size={16} className="mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <Button size="lg" variant="outline" className="px-8 py-3 rounded-full">
            <Github size={20} className="mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
