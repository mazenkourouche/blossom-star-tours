"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { src: "https://picsum.photos/500/300?random=1", alt: "Image 1" },
  { src: "https://picsum.photos/500/300?random=2", alt: "Image 2" },
  { src: "https://picsum.photos/500/300?random=3", alt: "Image 3" },
  { src: "https://picsum.photos/500/300?random=4", alt: "Image 4" },
  { src: "https://picsum.photos/500/300?random=5", alt: "Image 5" },
];

export default function ExperienceShowcase() {
  return (
    <section className="py-10 lg:py-20">
      <div className="container mx-auto text-center">
        {/* Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <div className="flex justify-between items-end mb-8">
            <div className="flex flex-col items-start text-left max-w-2xl">
              <h2 className="text-3xl lg:text-5xl font-bold text-eucalyptus-600 mb-6">
                The Experience Showcase
              </h2>
              <p className="text-gray-600 text-lg">
                Explore a visual journey through our curated experiences. Each
                image captures the essence of the spiritual and cultural
                adventures we offer.
              </p>
            </div>
            <div className="flex items-end space-x-3">
              {/* Adjust spacing between buttons */}
              <CarouselPrevious className="bg-white rounded-full  p-2">
                <ChevronLeft />
              </CarouselPrevious>
              <CarouselNext className="bg-white rounded-full  p-2">
                <ChevronRight />
              </CarouselNext>
            </div>
          </div>

          <CarouselContent className="">
            {images.map((image, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <div className="rounded-lg overflow-hidden w-full h-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={300}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Controls */}
        </Carousel>
      </div>
    </section>
  );
}
