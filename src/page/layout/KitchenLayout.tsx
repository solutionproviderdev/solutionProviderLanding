import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { LayoutTemplate, CircleDot, AlignJustify } from "lucide-react";
import imageL from "../../assets/kitchenShape/kichent-shape-gpt/L-shape.webp";
import imageU from "../../assets/kitchenShape/kichent-shape-gpt/U-shape.webp";
import imageI from "../../assets/kitchenShape/kichent-shape-gpt/I-shape.webp";

const KitchenLayout = () => {
  const layouts = [
    {
      id: 1,
      name: "L Shape",
      icon: LayoutTemplate,
      color: "bg-gradient-to-br from-sky-400 via-sky-700 to-sky-600",
      route: "#lshape",
      image: imageL,
    },
    {
      id: 2,
      name: "U Shape",
      icon: CircleDot,
      color: "bg-gradient-to-r from-sky-700 to-sky-500",
      route: "#ushape",
      image: imageU,
    },
    {
      id: 3,
      name: "I Shape",
      icon: CircleDot,
      color: "bg-gradient-to-r from-sky-700 to-sky-500",
      route: "#ishape",
      image: imageI,
    },
    {
      id: 4,
      name: "L Shape",
      icon: CircleDot,
      color: "bg-gradient-to-r from-sky-700 to-sky-500",
      route: "#lshape",
      image: imageL,
    },
    {
      id: 5,
      name: "U Shape",
      icon: CircleDot,
      color: "bg-gradient-to-r from-sky-700 to-sky-500",
      route: "#ushape",
      image: imageU,
    },
    {
      id: 6,
      name: "I Shape",
      icon: AlignJustify,
      color: "bg-gradient-to-br from-sky-600 via-sky-400 to-sky-600",
      route: "#ishape",
      image: imageI,
    },
  ];

  return (
    <div className="p-2 bg-gray-100 rounded-xl">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 text-gray-800">
        Choose Your Kitchen Layout
      </h2>
      <div className="relative">
        {/* Mobile View: Grid Buttons */}
        <div className="grid grid-cols-3 gap-4 md:hidden p-4">
          {layouts.map((layout) => (
            <a
              href={layout.route}
              key={layout.id}
              className="py-2 hover:shadow-6xl"
            >
              <div
                className={`h-28 flex flex-col items-center justify-center rounded-lg shadow-md transition-transform transform hover:scale-105 text-white ${layout.color}`}
              >
                <img src={layout.image} className="rounded" />
                <h3 className="text-sm font-semibold pb-3">{layout.name}</h3>
              </div>
            </a>
          ))}
        </div>

        {/* Medium and Large Devices: Horizontal Scroll */}
        <div className="hidden md:flex justify-start md:justify-center space-x-4 overflow-x-auto overflow-y-hidden scroll-smooth scrollbar-hide p-4">
          {layouts.map((layout) => (
            <a href={layout.route} key={layout.id}>
              <div
                className="overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer
                rounded-lg "
              >
                <div>
                  <div
                    className={` flex flex-col items-center justify-center text-white `}
                  >
                    <img src={layout.image} className="shapes" />
                  </div>
                    <p className="p-1 bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500  text-sm text-black text-center ">
                      {layout.name.toLowerCase()} kitchen
                    </p>
                   
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KitchenLayout;
