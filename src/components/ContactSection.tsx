
import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Download } from 'lucide-react';
import { Button } from './ui/button';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sivamanichavvakula@gmail.com',
      href: 'mailto:sivamanichavvakula@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 70366 20609',
      href: 'tel:+917036620609'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Hyderabad, India',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com',
      color: 'hover:text-gray-400'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/sivamanikanta-chavvakula',
      color: 'hover:text-blue-400'
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container-max section-padding">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Ready to collaborate or discuss opportunities in Full Stack development? 
            Let's build something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Get In Touch</h3>
              <p className="text-foreground/80 mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a chat about technology and development. Whether you're 
                looking for a Full Stack developer or want to collaborate on something exciting, 
                I'd love to hear from you.
              </p>

              <div className="space-y-4 mb-8">
                {contactInfo.map((item, index) => (
                  <a 
                    key={index}
                    href={item.href}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-foreground/5 transition-colors duration-200 group"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors duration-200">
                      <item.icon size={20} className="text-blue-400" />
                    </div>
                    <div>
                      <p className="font-medium">{item.label}</p>
                      <p className="text-foreground/70 text-sm">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="flex gap-4 mb-8">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center w-12 h-12 rounded-lg bg-foreground/10 hover:bg-foreground/20 transition-all duration-200 ${social.color} hover:scale-110 transform`}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>

              <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                <Download size={18} className="mr-2" />
                Download Resume
              </Button>
            </div>
          </div>

          <div className="animate-fade-in">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Quick Facts</h3>
              
              <div className="space-y-6">
                <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                  <h4 className="font-semibold text-blue-400 mb-2">Experience Level</h4>
                  <p className="text-foreground/80">5+ years in Full Stack Development</p>
                </div>

                <div className="p-4 rounded-lg bg-purple-500/10 border border-purple-500/20">
                  <h4 className="font-semibold text-purple-400 mb-2">Specialization</h4>
                  <p className="text-foreground/80">React.js, Node.js, TypeScript</p>
                </div>

                <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                  <h4 className="font-semibold text-green-400 mb-2">Current Focus</h4>
                  <p className="text-foreground/80">Scalable architectures & team leadership</p>
                </div>

                <div className="p-4 rounded-lg bg-orange-500/10 border border-orange-500/20">
                  <h4 className="font-semibold text-orange-400 mb-2">Languages</h4>
                  <p className="text-foreground/80">Telugu, English, Hindi</p>
                </div>

                <div className="p-4 rounded-lg bg-pink-500/10 border border-pink-500/20">
                  <h4 className="font-semibold text-pink-400 mb-2">Interests</h4>
                  <p className="text-foreground/80">Cricket, Emerging Technologies</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16 animate-fade-in">
          <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-4">Ready to start a project?</h3>
            <p className="text-foreground/70 mb-6">
              Let's discuss how we can bring your ideas to life with modern, 
              scalable web solutions.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              <Mail size={18} className="mr-2" />
              Start a Conversation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
