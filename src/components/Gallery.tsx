
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const Gallery = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<number>(0);
  
  // In a real implementation, these would be actual images of your micro mouse
  const images = [
    {
      src: "https://placehold.co/600x400?text=Micro+Mouse+Prototype",
      caption: "Initial Prototype Design"
    },
    {
      src: "https://placehold.co/600x400?text=PCB+Design",
      caption: "Custom PCB Layout"
    },
    {
      src: "https://placehold.co/600x400?text=Maze+Testing",
      caption: "Maze Testing Session"
    },
    {
      src: "https://placehold.co/600x400?text=Competition+Run",
      caption: "National Competition Run"
    },
    {
      src: "https://placehold.co/600x400?text=Components",
      caption: "Component Assembly"
    },
    {
      src: "https://placehold.co/600x400?text=Team+Work",
      caption: "Team Working on Code"
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-tech-lightGray">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Gallery</h2>
          <p className="text-gray-600 text-lg">
            Visual documentation of our micro mouse journey from initial prototyping to competition success.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <Carousel className="mb-12">
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Dialog open={open && selectedImage === index} onOpenChange={(isOpen) => {
                      setOpen(isOpen);
                      if (isOpen) setSelectedImage(index);
                    }}>
                      <DialogTrigger asChild>
                        <div className="overflow-hidden rounded-lg cursor-pointer group relative">
                          <img 
                            src={image.src} 
                            alt={image.caption} 
                            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-end">
                            <div className="p-3 text-white w-full transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                              <p className="font-medium">{image.caption}</p>
                            </div>
                          </div>
                        </div>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl">
                        <img 
                          src={image.src} 
                          alt={image.caption} 
                          className="w-full h-auto object-contain"
                        />
                        <p className="text-center text-gray-700 mt-2">{image.caption}</p>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((image, index) => (
              <Dialog key={index} open={open && selectedImage === index} onOpenChange={(isOpen) => {
                setOpen(isOpen);
                if (isOpen) setSelectedImage(index);
              }}>
                <DialogTrigger asChild>
                  <div className="overflow-hidden rounded-lg cursor-pointer group relative">
                    <img 
                      src={image.src} 
                      alt={image.caption} 
                      className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-end">
                      <div className="p-3 text-white w-full transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <p className="font-medium text-sm">{image.caption}</p>
                      </div>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <img 
                    src={image.src} 
                    alt={image.caption} 
                    className="w-full h-auto object-contain"
                  />
                  <p className="text-center text-gray-700 mt-2">{image.caption}</p>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
