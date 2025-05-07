
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Features = () => {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Specifications</h2>
          <p className="text-gray-600 text-lg">
            Our micro mouse combines cutting-edge hardware and software to achieve superior maze-solving performance.
          </p>
        </div>

        <Tabs defaultValue="hardware" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="hardware">Hardware</TabsTrigger>
            <TabsTrigger value="software">Software</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
          </TabsList>
          
          <TabsContent value="hardware" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-tech-lightGray p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Processing</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-tech-blue rounded-full mt-2 mr-2"></span>
                    <span><strong>Microcontroller:</strong> ARM Cortex-M4F @168MHz</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-tech-blue rounded-full mt-2 mr-2"></span>
                    <span><strong>Memory:</strong> 192KB RAM, 1MB Flash</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-tech-blue rounded-full mt-2 mr-2"></span>
                    <span><strong>Co-processor:</strong> Custom FPGA for sensor processing</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-tech-lightGray p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Sensing & Motion</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-tech-accent rounded-full mt-2 mr-2"></span>
                    <span><strong>Motors:</strong> Dual precision micro DC motors with encoders</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-tech-accent rounded-full mt-2 mr-2"></span>
                    <span><strong>Sensors:</strong> 6× IR proximity, 9-axis IMU</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-tech-accent rounded-full mt-2 mr-2"></span>
                    <span><strong>Power:</strong> Custom LiPo battery management system</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-tech-lightGray p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Mechanical</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-tech-blue rounded-full mt-2 mr-2"></span>
                    <span><strong>Dimensions:</strong> 10cm × 8cm × 7cm</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-tech-blue rounded-full mt-2 mr-2"></span>
                    <span><strong>Weight:</strong> 85 grams</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-tech-blue rounded-full mt-2 mr-2"></span>
                    <span><strong>Chassis:</strong> 3D printed carbon-fiber reinforced</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-tech-lightGray p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Communications</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-tech-accent rounded-full mt-2 mr-2"></span>
                    <span><strong>Wireless:</strong> Bluetooth 5.0 BLE</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-tech-accent rounded-full mt-2 mr-2"></span>
                    <span><strong>Debugging:</strong> USB-C with serial interface</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-tech-accent rounded-full mt-2 mr-2"></span>
                    <span><strong>Telemetry:</strong> Real-time data transmission</span>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="software" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-tech-lightGray p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Algorithms</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-tech-blue rounded-full mt-2 mr-2"></span>
                    <span><strong>Maze Mapping:</strong> Modified Flood Fill Algorithm</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-tech-blue rounded-full mt-2 mr-2"></span>
                    <span><strong>Path Finding:</strong> A* with custom heuristics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-tech-blue rounded-full mt-2 mr-2"></span>
                    <span><strong>Motion Planning:</strong> Bezier curve trajectory generation</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-tech-lightGray p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">System Architecture</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-tech-accent rounded-full mt-2 mr-2"></span>
                    <span><strong>RTOS:</strong> FreeRTOS with custom scheduler</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-tech-accent rounded-full mt-2 mr-2"></span>
                    <span><strong>Firmware:</strong> C/C++ with hardware abstraction</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-tech-accent rounded-full mt-2 mr-2"></span>
                    <span><strong>Build System:</strong> CMake with CI/CD integration</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-tech-lightGray p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Control Systems</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-tech-blue rounded-full mt-2 mr-2"></span>
                    <span><strong>Motor Control:</strong> Cascaded PID with feedforward</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-tech-blue rounded-full mt-2 mr-2"></span>
                    <span><strong>State Estimation:</strong> Extended Kalman Filter</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-tech-blue rounded-full mt-2 mr-2"></span>
                    <span><strong>Wall Following:</strong> Adaptive control loop</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-tech-lightGray p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Development Tools</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-tech-accent rounded-full mt-2 mr-2"></span>
                    <span><strong>Simulation:</strong> Custom maze simulator</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-tech-accent rounded-full mt-2 mr-2"></span>
                    <span><strong>Debugging:</strong> SEGGER J-Link with RTT</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-tech-accent rounded-full mt-2 mr-2"></span>
                    <span><strong>Testing:</strong> Automated unit and integration tests</span>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="performance" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-tech-lightGray p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Speed & Agility</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-tech-blue rounded-full mt-2 mr-2"></span>
                    <span><strong>Top Speed:</strong> 2.5 m/s straight-line</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-tech-blue rounded-full mt-2 mr-2"></span>
                    <span><strong>Acceleration:</strong> 0 to 2 m/s in 0.4 seconds</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-tech-blue rounded-full mt-2 mr-2"></span>
                    <span><strong>Turn Rate:</strong> 1200°/second maximum</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-tech-lightGray p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Maze Solving</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-tech-accent rounded-full mt-2 mr-2"></span>
                    <span><strong>First Run:</strong> Complete exploration in under 90 seconds</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-tech-accent rounded-full mt-2 mr-2"></span>
                    <span><strong>Speed Run:</strong> Optimal path traversal in under 10 seconds</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-tech-accent rounded-full mt-2 mr-2"></span>
                    <span><strong>Accuracy:</strong> 99.8% wall detection reliability</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-tech-lightGray p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Power & Endurance</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-tech-blue rounded-full mt-2 mr-2"></span>
                    <span><strong>Battery Life:</strong> 30+ minutes of continuous operation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-tech-blue rounded-full mt-2 mr-2"></span>
                    <span><strong>Power Management:</strong> Dynamic throttling based on tasks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-tech-blue rounded-full mt-2 mr-2"></span>
                    <span><strong>Charging:</strong> Quick-charge in under 15 minutes</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-tech-lightGray p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Competition Results</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-tech-accent rounded-full mt-2 mr-2"></span>
                    <span><strong>2024 National:</strong> 1st Place Overall</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-tech-accent rounded-full mt-2 mr-2"></span>
                    <span><strong>2023 Regional:</strong> 1st Place Speed, 2nd Place Accuracy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-tech-accent rounded-full mt-2 mr-2"></span>
                    <span><strong>Records:</strong> Fastest 16×16 maze completion in school history</span>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Features;
