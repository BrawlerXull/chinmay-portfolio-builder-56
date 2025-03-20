
import { Github, Linkedin, ExternalLink, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  return (
    <footer className="py-16 px-6 md:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-display font-medium mb-6">
              <span className="highlight-text">Chinmay</span> Chaudhari
            </h3>
            <p className="text-foreground/70 mb-6">
              Software Engineer specializing in full-stack development, API optimization, and technical mentorship.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/chinmayc14" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-secondary transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/in/chinmay-chaudhari-28129b230" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-secondary transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:chinmay.chaudhari@example.com"
                className="p-2 rounded-full hover:bg-secondary transition-colors duration-200"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-foreground/70 hover:text-primary transition-colors">About</a>
              </li>
              <li>
                <a href="#experience" className="text-foreground/70 hover:text-primary transition-colors">Experience</a>
              </li>
              <li>
                <a href="#skills" className="text-foreground/70 hover:text-primary transition-colors">Skills</a>
              </li>
              <li>
                <a href="#projects" className="text-foreground/70 hover:text-primary transition-colors">Projects</a>
              </li>
              <li>
                <a href="#contact" className="text-foreground/70 hover:text-primary transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-6">Connect</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://github.com/chinmayc14" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-primary transition-colors flex items-center"
                >
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
              <li>
                <a 
                  href="https://linkedin.com/in/chinmay-chaudhari-28129b230" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-primary transition-colors flex items-center"
                >
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
              <li>
                <a 
                  href="mailto:chinmay.chaudhari@example.com"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  chinmay.chaudhari@example.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between">
          <p className="text-foreground/60 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Chinmay Chaudhari. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="p-3 rounded-full bg-secondary hover:bg-secondary/70 transition-colors duration-200"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
