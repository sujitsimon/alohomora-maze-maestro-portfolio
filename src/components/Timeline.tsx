
import React from "react";

const Timeline = () => {
  const timelineEvents = [
    {
      year: "2023 Q1",
      title: "Project Inception",
      description: "Team formed and initial project planning completed. Research on past micromouse designs and competitions began."
    },
    {
      year: "2023 Q2",
      title: "Design Phase",
      description: "Hardware components selected, mechanical design finalized, and initial PCB layouts created."
    },
    {
      year: "2023 Q3",
      title: "First Prototype",
      description: "First hardware prototype assembled. Basic movement and sensor testing completed."
    },
    {
      year: "2023 Q4",
      title: "Algorithm Development",
      description: "Flood fill and A* pathfinding algorithms implemented. Simulation environment developed for testing."
    },
    {
      year: "2024 Q1",
      title: "Hardware Optimization",
      description: "Weight reduction and power optimization completed. Second PCB revision manufactured."
    },
    {
      year: "2024 Q2",
      title: "Competition Preparation",
      description: "Final integration testing, performance tuning, and competition preparation completed."
    },
    {
      year: "2024 Q3",
      title: "National Competition",
      description: "First place finish at the National Micromouse Competition with record-setting maze solve time."
    }
  ];

  return (
    <section id="timeline" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Development Timeline</h2>
          <p className="text-gray-600 text-lg">
            Our journey from concept to championship-winning micromouse.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-tech-blue/20"></div>
          
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-tech-blue border-4 border-white"></div>
                
                <div className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Date for mobile */}
                  <div className="md:hidden bg-tech-blue text-white text-sm font-semibold px-3 py-1 rounded-full mb-2 inline-block">
                    {event.year}
                  </div>
                  
                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      {/* Date for desktop */}
                      <div className="hidden md:block bg-tech-blue text-white text-sm font-semibold px-3 py-1 rounded-full mb-2 inline-block">
                        {event.year}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                  </div>
                  
                  {/* Empty div for layout */}
                  <div className="md:w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
