
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 -left-20 w-64 h-64 bg-tech-blue/10 rounded-full blur-3xl animate-pulse-soft"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-tech-accent/10 rounded-full blur-3xl animate-pulse-soft animation-delay-2000"></div>
        <div className="absolute top-20 right-1/4 w-20 h-20 border border-tech-blue/20 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-40 left-1/4 w-32 h-32 border border-tech-accent/20 rounded-full animate-spin-slow animation-delay-3000"></div>
        <div className="grid grid-cols-12 gap-4 opacity-[0.02] absolute inset-0">
          {Array.from({ length: 200 }).map((_, i) => (
            <div key={i} className="col-span-1 h-4 bg-tech-gray rounded"></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 py-12 md:py-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-tech-blue">Maze</span> Solving <br />
            <span className="text-tech-gray">Excellence</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
            Our award-winning micro mouse robot navigates complex mazes with precision and 
            lightning-fast algorithms, setting new standards in robotics competitions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-tech-blue hover:bg-tech-darkBlue">
              Watch Demo <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              Technical Specs
            </Button>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-tech-lightGray rounded-full flex items-center justify-center">
              <div className="w-48 h-48 md:w-60 md:h-60 bg-white rounded-full shadow-lg flex items-center justify-center">
                {/* This is a placeholder for the mouse image/model. In a real implementation, you'd use an actual image. */}
                <div className="w-32 h-24 bg-tech-gray rounded-lg relative">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-tech-accent rounded-full"></div>
                  <div className="absolute -bottom-2 left-1/3 transform -translate-x-1/2 w-8 h-2 bg-tech-blue rounded-full"></div>
                  <div className="absolute -bottom-2 right-1/3 transform translate-x-1/2 w-8 h-2 bg-tech-blue rounded-full"></div>
                  <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-tech-blue rounded-full"></div>
                  <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-tech-blue rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="absolute top-0 right-0 bg-tech-accent text-white px-4 py-2 rounded-full font-medium">
              v2.5
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
