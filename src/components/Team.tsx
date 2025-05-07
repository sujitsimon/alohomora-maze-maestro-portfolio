
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Team Lead",
      image: "https://placehold.co/300x300?text=AJ",
      bio: "Electrical engineering major with a focus on embedded systems. 3-time micromouse competition participant.",
      links: {
        github: "#",
        linkedin: "#",
        email: "mailto:alex@example.com"
      }
    },
    {
      name: "Taylor Wright",
      role: "Hardware Engineer",
      image: "https://placehold.co/300x300?text=TW",
      bio: "Mechanical engineering specialist responsible for chassis design and motor integration.",
      links: {
        github: "#",
        linkedin: "#",
        email: "mailto:taylor@example.com"
      }
    },
    {
      name: "Jamie Lee",
      role: "Software Developer",
      image: "https://placehold.co/300x300?text=JL",
      bio: "Computer science senior with a focus on algorithms and real-time systems.",
      links: {
        github: "#",
        linkedin: "#",
        email: "mailto:jamie@example.com"
      }
    },
    {
      name: "Sam Rivera",
      role: "PCB Designer",
      image: "https://placehold.co/300x300?text=SR",
      bio: "Electronics specialist focusing on custom PCB design and sensor integration.",
      links: {
        github: "#",
        linkedin: "#",
        email: "mailto:sam@example.com"
      }
    }
  ];

  return (
    <section id="team" className="py-20 bg-tech-lightGray">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet the Team</h2>
          <p className="text-gray-600 text-lg">
            The talented individuals behind our award-winning micro mouse project.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="border-none overflow-hidden group">
              <div className="overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-tech-blue font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 mb-4 text-sm">{member.bio}</p>
                <div className="flex space-x-4">
                  <a 
                    href={member.links.github} 
                    className="text-gray-600 hover:text-tech-blue transition-colors"
                    aria-label={`${member.name}'s GitHub profile`}
                  >
                    <Github size={18} />
                  </a>
                  <a 
                    href={member.links.linkedin} 
                    className="text-gray-600 hover:text-tech-blue transition-colors"
                    aria-label={`${member.name}'s LinkedIn profile`}
                  >
                    <Linkedin size={18} />
                  </a>
                  <a 
                    href={member.links.email} 
                    className="text-gray-600 hover:text-tech-blue transition-colors"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail size={18} />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
