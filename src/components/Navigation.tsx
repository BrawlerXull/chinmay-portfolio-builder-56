
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Github, ExternalLink } from "lucide-react";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 py-4 flex items-center justify-between",
        scrolled ? "bg-background/70 backdrop-blur-md shadow-subtle" : "bg-transparent"
      )}
    >
      <a href="#" className="text-xl font-display font-medium">
        <span className="highlight-text">Chinmay</span> Chaudhari
      </a>
      
      <nav className="hidden md:flex items-center space-x-6">
        <a href="#about" className="nav-item">About</a>
        <a href="#experience" className="nav-item">Experience</a>
        <a href="#skills" className="nav-item">Skills</a>
        <a href="#projects" className="nav-item">Projects</a>
        <a href="#contact" className="nav-item">Contact</a>
      </nav>
      
      <div className="flex items-center space-x-4">
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
          <ExternalLink className="w-5 h-5" />
        </a>
      </div>
    </header>
  );
};

export default Navigation;
