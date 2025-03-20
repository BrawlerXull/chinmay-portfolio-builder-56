
import { useEffect, useState } from "react";
import TechTag from "./ui-components/TechTag";
import { Code } from "lucide-react";

const Skills = () => {
  const [activeSkillSet, setActiveSkillSet] = useState(0);
  
  const skillSets = [
    {
      title: "Frontend Development",
      skills: ["React", "Next.js", "HTML", "CSS", "JavaScript", "Tailwind CSS", "TypeScript", "Redux"]
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Python", "Java", "Express", "SQL", "Prisma", "REST API", "MongoDB"]
    },
    {
      title: "Tools & Others",
      skills: ["Git", "GitHub", "Tableau", "Microsoft Excel", "Data Visualization", "Object-Oriented Programming", "API Optimization", "Technical Mentorship"]
    }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSkillSet((prev) => (prev + 1) % skillSets.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [skillSets.length]);
  
  return (
    <section id="skills" className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider mb-2">Expertise</span>
          <h2 className="text-3xl md:text-4xl font-display mb-6">Skills & Technologies</h2>
          <div className="h-1 w-20 bg-primary/30 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl"></div>
            <div className="relative z-10 p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <div className="flex items-center mb-8">
                <div className="p-3 rounded-full bg-primary/10 mr-4">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-medium">Technical Proficiency</h3>
              </div>
              
              <div className="space-y-8">
                {skillSets.map((skillSet, index) => (
                  <div 
                    key={index}
                    className={`transition-all duration-500 ${
                      activeSkillSet === index ? "opacity-100" : "opacity-40"
                    }`}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium">{skillSet.title}</h4>
                      <button 
                        className={`text-sm ${
                          activeSkillSet === index ? "text-primary" : "text-foreground/50"
                        }`}
                        onClick={() => setActiveSkillSet(index)}
                      >
                        View
                      </button>
                    </div>
                    <div className="h-1.5 bg-secondary/70 rounded-full w-full overflow-hidden">
                      <div 
                        className="h-full bg-primary rounded-full transition-all duration-1000"
                        style={{ 
                          width: activeSkillSet === index ? "100%" : "20%",
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex flex-col">
            <h3 className="text-2xl font-medium mb-8">
              {skillSets[activeSkillSet].title}
            </h3>
            
            <div className="flex flex-wrap gap-3 mb-12">
              {skillSets[activeSkillSet].skills.map((skill, index) => (
                <TechTag 
                  key={index}
                  name={skill}
                  className={`animate-scale-in opacity-0`}
                  style={{ animationDelay: `${index * 100}ms` }}
                />
              ))}
            </div>
            
            <p className="text-lg text-foreground/70 mb-8">
              {activeSkillSet === 0 && "Proficient in building responsive, interactive user interfaces with modern frameworks and libraries. Focused on creating intuitive, accessible, and performant web applications."}
              {activeSkillSet === 1 && "Experienced in developing robust server-side applications, RESTful APIs, and database design. Focused on scalability, performance optimization, and security."}
              {activeSkillSet === 2 && "Well-versed in development tools, project management, and specialized skills that enhance productivity and collaboration in technical environments."}
            </p>
            
            <div className="flex space-x-2">
              {skillSets.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeSkillSet === index ? "bg-primary scale-125" : "bg-secondary"
                  }`}
                  onClick={() => setActiveSkillSet(index)}
                  aria-label={`View ${skillSets[index].title}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
