
import { useState } from "react";
import AnimatedCard from "./ui-components/AnimatedCard";
import { cn } from "@/lib/utils";
import { Briefcase, GraduationCap } from "lucide-react";

type ExperienceType = 'work' | 'education';

const Experience = () => {
  const [activeType, setActiveType] = useState<ExperienceType>('work');
  
  const workExperiences = [
    {
      title: "Software Engineer Intern",
      company: "AudioPod AI",
      period: "2025 - Present",
      description: "Working on developing innovative audio processing solutions and AI integrations.",
      logo: "https://media.licdn.com/dms/image/v2/D4D0BAQHZF5dmUExkoA/company-logo_400_400/company-logo_400_400/0/1732898229489/audiopod_ai_logo?e=1747872000&v=beta&t=6a3k0iXgs8DQOVZ4eHmMLJxWDWHlAIn76G8v0f9sXH0"
    },
    {
      title: "TE Technical Officer",
      company: "ISTE VESIT",
      period: "2024 - Present",
      description: "Leading technical workshops and mentoring students in various technologies.",
      logo: "https://media.licdn.com/dms/image/v2/D4D0BAQHiw4uN787HYQ/company-logo_400_400/company-logo_400_400/0/1692430545308/iste_vesit_logo?e=1747872000&v=beta&t=jqIVu_3qdIie4ecM4lZ29Q6YslJ0_IIUmGbhVC-_NfQ"
    },
    {
      title: "Full-stack Developer",
      company: "Palcoa Solutions Private Limited",
      period: "2024",
      description: "Developed full-stack web applications using modern technologies and frameworks.",
      logo: ""
    },
    {
      title: "SE Technical Officer",
      company: "ISTE VESIT",
      period: "2023 - 2024",
      description: "Organized technical events and conducted workshops for students.",
      logo: "https://media.licdn.com/dms/image/v2/D4D0BAQHiw4uN787HYQ/company-logo_400_400/company-logo_400_400/0/1692430545308/iste_vesit_logo?e=1747872000&v=beta&t=jqIVu_3qdIie4ecM4lZ29Q6YslJ0_IIUmGbhVC-_NfQ"
    },
    {
      title: "Open Source Developer",
      company: "Google Summer of Code",
      period: "2024",
      description: "Contributed to open-source projects, developing solutions and fixing issues.",
      logo: "https://media.licdn.com/dms/image/v2/C560BAQHk66EsagXmXw/company-logo_400_400/company-logo_400_400/0/1630584303866?e=1747872000&v=beta&t=uDCCMZ2ggr8JPoVPjTfV7HrLa4-PuoXm5HQmZ6y43y0"
    }
  ];
  
  const educationExperiences = [
    {
      title: "Bachelor of Engineering (BE)",
      institution: "Vivekanand Education Society's Institute Of Technology",
      period: "2022 - 2026",
      description: "Pursuing a degree in Information Technology, focusing on software development and data engineering.",
      logo: "https://media.licdn.com/dms/image/v2/D4E0BAQFaNtnsz5gF8A/company-logo_400_400/company-logo_400_400/0/1684850903042/vivekanand_education_societys_institute_of_techno_logo?e=1747872000&v=beta&t=3SqIaaXZr7tv7wNhxKRj1sAn8EznuhE7WtvIsopeEMk"
    }
  ];
  
  return (
    <section id="experience" className="py-24 px-6 md:px-12 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider mb-2">Experience</span>
          <h2 className="text-3xl md:text-4xl font-display mb-6">My Journey</h2>
          <div className="h-1 w-20 bg-primary/30 rounded-full"></div>
        </div>
        
        <div className="flex space-x-4 mb-12">
          <button 
            className={cn(
              "px-6 py-3 rounded-full font-medium transition-all duration-300",
              activeType === 'work' 
                ? "bg-primary text-white shadow-md" 
                : "bg-white hover:bg-white/80 text-foreground/80"
            )}
            onClick={() => setActiveType('work')}
          >
            <span className="flex items-center">
              <Briefcase className="w-5 h-5 mr-2" />
              Work
            </span>
          </button>
          <button 
            className={cn(
              "px-6 py-3 rounded-full font-medium transition-all duration-300",
              activeType === 'education' 
                ? "bg-primary text-white shadow-md" 
                : "bg-white hover:bg-white/80 text-foreground/80"
            )}
            onClick={() => setActiveType('education')}
          >
            <span className="flex items-center">
              <GraduationCap className="w-5 h-5 mr-2" />
              Education
            </span>
          </button>
        </div>
        
        <div className="space-y-8">
          {activeType === 'work' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {workExperiences.map((experience, index) => (
                <AnimatedCard key={index} delay={index * 100}>
                  <div className="flex">
                    <div className="mr-4 flex-shrink-0">
                      {experience.logo ? (
                        <div className="w-12 h-12 rounded-full overflow-hidden border border-primary/10 bg-white flex items-center justify-center">
                          <img 
                            src={experience.logo} 
                            alt={experience.company} 
                            className="w-8 h-8 object-contain"
                          />
                        </div>
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <Briefcase className="w-6 h-6 text-primary" />
                        </div>
                      )}
                    </div>
                    <div>
                      <span className="text-sm text-primary font-medium">{experience.period}</span>
                      <h3 className="text-xl font-medium mt-1">{experience.title}</h3>
                      <h4 className="text-base text-foreground/70 mb-2">{experience.company}</h4>
                      <p className="text-foreground/70">{experience.description}</p>
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          )}
          
          {activeType === 'education' && (
            <div className="grid grid-cols-1 gap-8">
              {educationExperiences.map((education, index) => (
                <AnimatedCard key={index} delay={index * 100}>
                  <div className="flex">
                    <div className="mr-4 flex-shrink-0">
                      {education.logo ? (
                        <div className="w-12 h-12 rounded-full overflow-hidden border border-primary/10 bg-white flex items-center justify-center">
                          <img 
                            src={education.logo} 
                            alt={education.institution} 
                            className="w-8 h-8 object-contain"
                          />
                        </div>
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <GraduationCap className="w-6 h-6 text-primary" />
                        </div>
                      )}
                    </div>
                    <div>
                      <span className="text-sm text-primary font-medium">{education.period}</span>
                      <h3 className="text-xl font-medium mt-1">{education.title}</h3>
                      <h4 className="text-base text-foreground/70 mb-2">{education.institution}</h4>
                      <p className="text-foreground/70">{education.description}</p>
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;
