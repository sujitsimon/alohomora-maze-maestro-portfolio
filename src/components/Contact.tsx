
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would send the form data to a backend service
    console.log("Form submitted:", formData);
    toast.success("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-600 text-lg">
            Interested in our project? Have questions or want to collaborate? We'd love to hear from you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-tech-blue/10 p-3 rounded-full mr-4">
                  <Mail className="text-tech-blue h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Email</h4>
                  <p className="text-gray-600">micromouse@university.edu</p>
                  <p className="text-sm text-gray-500 mt-1">For project inquiries and collaboration</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-tech-blue/10 p-3 rounded-full mr-4">
                  <Phone className="text-tech-blue h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Phone</h4>
                  <p className="text-gray-600">(123) 456-7890</p>
                  <p className="text-sm text-gray-500 mt-1">Monday-Friday, 9am-5pm</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-tech-blue/10 p-3 rounded-full mr-4">
                  <MessageSquare className="text-tech-blue h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Office</h4>
                  <p className="text-gray-600">Engineering Building, Room 314</p>
                  <p className="text-sm text-gray-500 mt-1">University of Technology</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-4">Follow Our Progress</h3>
              <p className="text-gray-600 mb-4">
                Our team regularly updates our research and development progress on social media.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="bg-tech-gray text-white p-3 rounded-full hover:bg-tech-accent transition-colors">
                  <Github className="h-5 w-5" />
                </a>
                <a href="#" className="bg-tech-gray text-white p-3 rounded-full hover:bg-tech-accent transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="bg-tech-gray text-white p-3 rounded-full hover:bg-tech-accent transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your interest in our project..."
                  required
                  className="w-full min-h-32"
                />
              </div>
              
              <Button type="submit" className="w-full bg-tech-blue hover:bg-tech-darkBlue">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
