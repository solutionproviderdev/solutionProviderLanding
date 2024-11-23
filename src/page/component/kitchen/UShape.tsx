

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Import icons for navigation buttons

// Import images
import img1 from "../../../assets/kitchenShape/kichent-shape-gpt/i-shape.jpeg";
import img2 from "../../../assets/spLogo/solution_provider.png";
import img3 from "../../../assets/kitchenShape/kichent-shape-gpt/img2.jpg";
import img4 from "../../../assets/kitchenShape/kichent-shape-gpt/img3.jpeg";


const LShapeKitchen = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [img1,img2,img3,img4];

  // Update selected image index when the carousel scrolls
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedImage(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  // Handlers for navigation buttons
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <div className="p-6 flex flex-col-reverse md:flex-row gap-4">
      {/* Carousel Section */}
      <div className="flex-1 flex flex-col items-center w-full max-w-lg mx-auto">
        {/* Carousel Wrapper */}
        <div className="relative w-full overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            {images.map((img, index) => (
              <div className="embla__slide min-w-full flex-shrink-0 flex items-center justify-center" key={index}>
                <img
                  src={img}
                  alt={`Carousel image ${index + 1}`}
                  className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg"
                />
              </div>
            ))}
          </div>

          {/* Previous and Next Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-2 rounded-full shadow-lg"
            aria-label="Previous Slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-2 rounded-full shadow-lg"
            aria-label="Next Slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Thumbnail Navigation Dots */}
        <div className="flex space-x-2 mt-4 justify-center">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => emblaApi && emblaApi.scrollTo(index)}
              className={`w-10 h-10 md:w-16 md:h-16 border rounded-lg overflow-hidden ${
                selectedImage === index ? "border-blue-500" : "border-gray-300"
              }`}
            >
              <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
      {/* Left Section with Details */}
      <div className="flex-1 mb-6 md:mb-0">
        <h3 className="text-4xl md:text-6xl bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-700 font-semibold mb-4 text-transparent bg-clip-text text-right">
          "U" Shape Kitchen
        </h3>
        <ul className=" space-y-2 text-lg md:text-2xl text-right text-gray-700">
          <li>Kitchen sizes</li>
          <li>At which price can bring home</li>
          <li>1st type of area and aesthetics</li>
          <li>Best qualities</li>
          <li>In color coordination</li>
          <li>In other use cases</li>
        </ul>
      </div>

    </div>
  );
};

export default LShapeKitchen;





 