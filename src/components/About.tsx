
import AnimatedCard from "./ui-components/AnimatedCard";
import { User, Book, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider mb-2">About Me</span>
          <h2 className="text-3xl md:text-4xl font-display mb-6">Who I Am</h2>
          <div className="h-1 w-20 bg-primary/30 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-foreground/80">
              I'm a passionate <span className="font-medium text-foreground">Software Engineer</span> currently interning at <span className="font-medium text-foreground">AudioPod AI</span>, where I work on cutting-edge solutions for audio processing and AI integration.
            </p>
            
            <p className="text-lg leading-relaxed text-foreground/80">
              With a background in full-stack development and a knack for problem-solving, I specialize in building efficient, user-friendly applications with modern technologies like Next.js, Prisma, and Python.
            </p>
            
            <p className="text-lg leading-relaxed text-foreground/80">
              I'm deeply involved in the tech community—from contributing to open-source projects through Google Summer of Code to mentoring fellow students at ISTE VESIT. I thrive in collaborative environments and enjoy tackling complex challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            <AnimatedCard delay={100}>
              <div className="flex items-start">
                <div className="mr-4 p-3 rounded-full bg-primary/10">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Technical Leader</h3>
                  <p className="text-foreground/70">
                    As a Technical Officer at ISTE VESIT, I lead workshops and guide students in technical domains, fostering a collaborative learning environment.
                  </p>
                </div>
              </div>
            </AnimatedCard>
            
            <AnimatedCard delay={200}>
              <div className="flex items-start">
                <div className="mr-4 p-3 rounded-full bg-primary/10">
                  <Book className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Continuous Learner</h3>
                  <p className="text-foreground/70">
                    Currently pursuing my Bachelor's in Information Technology at VESIT, I'm constantly exploring new technologies and methodologies to stay at the cutting edge.
                  </p>
                </div>
              </div>
            </AnimatedCard>
            
            <AnimatedCard delay={300}>
              <div className="flex items-start">
                <div className="mr-4 p-3 rounded-full bg-primary/10">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Award Winner</h3>
                  <p className="text-foreground/70">
                    3x Hackathon winner and recognized for excellence at competitions like CodePlay by Coding Ninjas and VCode 24.
                  </p>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
