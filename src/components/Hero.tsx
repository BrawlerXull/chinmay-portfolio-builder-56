
import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setLoaded(true);
  }, []);
  
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24 md:px-12 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent opacity-70"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-pulse-light"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl animate-pulse-light animation-delay-500"></div>
      </div>
      
      <div className="max-w-4xl w-full text-center space-y-8">
        <div 
          className={`transition-all duration-700 ease-out ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-8 rounded-full overflow-hidden border-4 border-white/20 shadow-xl">
            <img 
              src="https://media.licdn.com/dms/image/v2/D4D03AQFQ9mGMSbIPXg/profile-displayphoto-shrink_800_800/B4DZP8OQk4HMAc-/0/1735103419854?e=1747872000&v=beta&t=Zgzj744wGUZoOdRN16JRL-tRw6sw-bvJypYa-PL1qcA" 
              alt="Chinmay Chaudhari" 
              className="object-cover w-full h-full"
              loading="eager"
            />
          </div>
        </div>
        
        <h1 
          className={`transition-all duration-700 delay-200 ease-out ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="block font-light text-base md:text-lg mb-2">Hello, I'm</span>
          <span className="highlight-text">Chinmay Chaudhari</span>
        </h1>
        
        <p 
          className={`text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto transition-all duration-700 delay-300 ease-out ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Software Engineer specialized in building innovative solutions through full-stack development, API optimization, and technical mentorship.
        </p>
        
        <div 
          className={`flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 transition-all duration-700 delay-400 ease-out ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <a 
            href="#contact" 
            className="px-6 py-3 rounded-full bg-primary text-white font-medium shadow-button hover:shadow-lg hover:translate-y-[-2px] transition-all duration-300"
          >
            Get in Touch
          </a>
          <a 
            href="#about" 
            className="px-6 py-3 rounded-full bg-secondary text-foreground/90 font-medium hover:bg-secondary/80 transition-colors duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-float">
        <a 
          href="#about"
          className="flex items-center justify-center w-10 h-10 rounded-full border border-foreground/10 bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-colors duration-300"
          aria-label="Scroll down"
        >
          <ArrowDown className="w-5 h-5 text-foreground/70" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
