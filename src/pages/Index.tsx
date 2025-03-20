
import { Suspense, lazy, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";

// Lazy load components for better performance
const About = lazy(() => import("@/components/About"));
const Experience = lazy(() => import("@/components/Experience"));
const Skills = lazy(() => import("@/components/Skills"));
const Projects = lazy(() => import("@/components/Projects"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

// Loading placeholder
const SectionLoading = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-12 h-12 rounded-full border-4 border-primary/30 border-t-primary animate-spin"></div>
  </div>
);

const Index = () => {
  useEffect(() => {
    // Intersection Observer for reveal animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    // Observe all elements with reveal-animation class
    document.querySelectorAll('.reveal-animation').forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      document.querySelectorAll('.reveal-animation').forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);
  
  return (
    <div className="overflow-hidden">
      <Navigation />
      
      <main>
        <Hero />
        
        <Suspense fallback={<SectionLoading />}>
          <About />
        </Suspense>
        
        <Suspense fallback={<SectionLoading />}>
          <Experience />
        </Suspense>
        
        <Suspense fallback={<SectionLoading />}>
          <Skills />
        </Suspense>
        
        <Suspense fallback={<SectionLoading />}>
          <Projects />
        </Suspense>
        
        <Suspense fallback={<SectionLoading />}>
          <Contact />
        </Suspense>
        
        <Suspense fallback={<div className="h-24" />}>
          <Footer />
        </Suspense>
      </main>
    </div>
  );
};

export default Index;
