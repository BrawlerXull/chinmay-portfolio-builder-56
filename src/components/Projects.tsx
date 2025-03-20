
import { useState } from "react";
import AnimatedCard from "./ui-components/AnimatedCard";
import TechTag from "./ui-components/TechTag";
import { ExternalLink, Star, ArrowRight } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  highlight?: boolean;
}

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const projects: Project[] = [
    {
      title: "AudioPod Media Processor",
      description: "Developed an advanced media processing tool using FFmpeg for audio manipulation and enhancement.",
      tags: ["Python", "FFmpeg", "API Development"],
      link: "#",
      highlight: true
    },
    {
      title: "VCode Event Platform",
      description: "Built a full-stack event management platform that won 1st runner-up at VCode 24.",
      tags: ["Next.js", "Prisma", "Tailwind CSS"],
      link: "#",
      highlight: true
    },
    {
      title: "GSoC Open Source Contribution",
      description: "Contributed to open-source projects, focusing on API optimization and feature development.",
      tags: ["Open Source", "JavaScript", "RESTful API"],
      link: "#"
    },
    {
      title: "Hackathon Winning Project",
      description: "Developed an innovative solution that secured first place at multiple hackathons.",
      tags: ["React", "Node.js", "MongoDB"],
      link: "#"
    }
  ];
  
  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider mb-2">Showcase</span>
          <h2 className="text-3xl md:text-4xl font-display mb-6">Featured Projects</h2>
          <div className="h-1 w-20 bg-primary/30 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <AnimatedCard 
              key={index} 
              delay={index * 100}
              className={`relative overflow-hidden transition-all duration-500 ${
                project.highlight ? "border-primary/30" : ""
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {project.highlight && (
                <div className="absolute top-4 right-4">
                  <span className="flex items-center text-xs font-medium text-primary">
                    <Star className="w-3 h-3 mr-1 fill-primary" />
                    Featured
                  </span>
                </div>
              )}
              
              <h3 className="text-xl font-medium mb-2">{project.title}</h3>
              <p className="text-foreground/70 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <TechTag key={tagIndex} name={tag} />
                ))}
              </div>
              
              <a 
                href={project.link}
                className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                View Project
                <ArrowRight 
                  className={`w-4 h-4 ml-1 transition-transform duration-300 ${
                    hoveredIndex === index ? "transform translate-x-1" : ""
                  }`}
                />
              </a>
            </AnimatedCard>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="https://github.com/chinmayc14"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-full bg-white text-foreground/90 font-medium shadow-button hover:shadow-lg hover:translate-y-[-2px] transition-all duration-300"
          >
            <span>View More on GitHub</span>
            <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
