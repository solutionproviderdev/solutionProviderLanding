
import React from "react";
import kitchen_type from "../../../assets/kitchen_type.jpg";

const KitchenType = () => {
  return (
    <div className="p-6 flex flex-col md:flex-row text-center md:text-left justify-between items-center space-y-6 md:space-y-0">
      {/* Text Section */}
      <div className="flex flex-col justify-between py-4 md:mr-6 md:w-1/2 space-y-4">
        <div>
          <h2 className="text-4xl md:text-6xl font-semibold mb-2 md:mb-4 leading-tight">
            10 Types of
          </h2>
          <h2 className="text-4xl md:text-6xl font-semibold leading-tight">
            Bangladeshi Kitchen
          </h2>
        </div>
        <div className="mt-8">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-105 md:mt-12">
            Download
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full max-w-sm md:max-w-md h-[250px] md:h-[400px] bg-gray-200 flex items-center justify-center">
        <img className="h-full w-full object-cover rounded-lg shadow-md" src={kitchen_type} alt="Bangladeshi Kitchen" />
      </div>
    </div>
  );
};

export default KitchenType;
