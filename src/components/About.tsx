
import { Card, CardContent } from "@/components/ui/card";
import { Code, Cpu, Zap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-tech-lightGray">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What is a Micro Mouse?</h2>
          <p className="text-gray-600 text-lg">
            A Micro Mouse is an autonomous robotic vehicle designed to navigate through unknown mazes. 
            The goal is to find the optimal path from the start to the destination in the shortest time possible.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white hover:shadow-lg transition-shadow duration-300 overflow-hidden border-none">
            <CardContent className="p-6">
              <div className="rounded-full bg-tech-blue/10 w-16 h-16 flex items-center justify-center mb-6">
                <Cpu className="text-tech-blue h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Intelligent Hardware</h3>
              <p className="text-gray-600">
                Our Micro Mouse is equipped with advanced sensors, custom-designed PCBs, and precision motors for accurate maze navigation.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white hover:shadow-lg transition-shadow duration-300 overflow-hidden border-none">
            <CardContent className="p-6">
              <div className="rounded-full bg-tech-accent/10 w-16 h-16 flex items-center justify-center mb-6">
                <Code className="text-tech-accent h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Algorithmic Excellence</h3>
              <p className="text-gray-600">
                Our robot implements cutting-edge path-finding algorithms like modified Flood Fill and A* for optimal maze solving.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white hover:shadow-lg transition-shadow duration-300 overflow-hidden border-none">
            <CardContent className="p-6">
              <div className="rounded-full bg-tech-blue/10 w-16 h-16 flex items-center justify-center mb-6">
                <Zap className="text-tech-blue h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Competition Ready</h3>
              <p className="text-gray-600">
                Designed to compete in international Micro Mouse competitions, our robot has been optimized for speed and accuracy.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
