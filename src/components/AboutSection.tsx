
import React from 'react';
import { Award, Users, Zap, Target } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: Award,
      title: '5+ Years',
      description: 'Professional Experience'
    },
    {
      icon: Users,
      title: 'Team Leadership',
      description: 'Mentored 4-6 developers'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: '30% bundle size reduction'
    },
    {
      icon: Target,
      title: 'Results',
      description: 'Delivered ahead of schedule'
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container-max section-padding">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <div className="glass-card p-8 rounded-2xl">
              <p className="text-lg leading-relaxed text-foreground/80 mb-6">
                I'm a Full Stack Developer specializing in React.js and Node.js, with over five years 
                of professional experience building responsive, high-performance web applications. I take 
                pride in crafting scalable architectures—using tools like Redux, Context API, and RESTful APIs—while 
                ensuring an exceptional user experience across browsers and devices.
              </p>
              
              <p className="text-lg leading-relaxed text-foreground/80 mb-6">
                Over my career, I have led frontend teams and mentored junior developers, driving code quality 
                through hands-on code reviews. I've architected end-to-end solutions from requirements gathering 
                to deploying cross-platform mobile apps via Xcode, Android Studio, and Capacitor.
              </p>

              <p className="text-lg leading-relaxed text-foreground/80">
                My passion lies in staying up to date with emerging technologies—whether it's the latest in 
                TypeScript, exploring Tailwind CSS, or experimenting with new state-management patterns. 
                I thrive on challenges that let me push the boundaries of front-end architecture while 
                mentoring teams to deliver maintainable, testable code.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 animate-fade-in">
            {highlights.map((item, index) => (
              <div 
                key={index} 
                className="glass-card p-6 rounded-xl text-center hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                  <item.icon size={32} className="text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-foreground/70 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
