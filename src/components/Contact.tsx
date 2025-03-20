
import { useState } from "react";
import { MailIcon, Send, MessageSquare, Phone, MapPin } from "lucide-react";
import AnimatedCard from "./ui-components/AnimatedCard";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider mb-2">Get in Touch</span>
          <h2 className="text-3xl md:text-4xl font-display mb-6">Contact Me</h2>
          <div className="h-1 w-20 bg-primary/30 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-2xl font-medium mb-6">Let's Connect</h3>
            
            <p className="text-foreground/70 mb-8">
              Feel free to reach out for collaboration, job opportunities, or just to say hello. I'm always open to discussing new projects and ideas.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-primary/10 mr-4">
                  <MailIcon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-foreground/50 mb-1">Email</h4>
                  <a href="mailto:chinmay.chaudhari@example.com" className="text-lg hover:text-primary transition-colors">
                    chinmay.chaudhari@example.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-primary/10 mr-4">
                  <MessageSquare className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-foreground/50 mb-1">Social</h4>
                  <a 
                    href="https://linkedin.com/in/chinmay-chaudhari-28129b230" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg hover:text-primary transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-primary/10 mr-4">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-foreground/50 mb-1">Location</h4>
                  <p className="text-lg">Mumbai, India</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <AnimatedCard className="p-8">
              <h3 className="text-2xl font-medium mb-6">Send a Message</h3>
              
              {submitted ? (
                <div className="p-6 rounded-lg bg-primary/10 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-primary/20">
                      <Send className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <h4 className="text-xl font-medium mb-2">Message Sent!</h4>
                  <p className="text-foreground/70">
                    Thank you for reaching out. I'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium text-foreground/70 block mb-2">
                      Your Name
                    </label>
                    <input 
                      id="name"
                      name="name"
                      type="text" 
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-secondary/30 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all"
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="text-sm font-medium text-foreground/70 block mb-2">
                      Email Address
                    </label>
                    <input 
                      id="email"
                      name="email"
                      type="email" 
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-secondary/30 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all"
                      placeholder="Enter your email"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="text-sm font-medium text-foreground/70 block mb-2">
                      Message
                    </label>
                    <textarea 
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-secondary/30 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all resize-none"
                      placeholder="Write your message here..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 rounded-lg bg-primary text-white font-medium shadow-button hover:shadow-lg hover:translate-y-[-2px] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:shadow-none disabled:hover:translate-y-0 flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="mr-2">Sending</span>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </AnimatedCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
