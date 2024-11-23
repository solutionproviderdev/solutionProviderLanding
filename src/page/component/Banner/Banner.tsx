
// import { useEffect, useRef, useState } from "react";
// import Lottie from "lottie-react";
// import { Button } from "@/components/ui/button";

// import imageL from "../../../assets/kitchenShape/kichent-shape-gpt/L-shape.webp";
// import imageU from "../../../assets/kitchenShape/kichent-shape-gpt/U-shape.webp";
// import imageI from "../../../assets/kitchenShape/kichent-shape-gpt/I-shape.webp";

 
// const Banner = () => {
//   const lottieRef = useRef<any>(null);
//   const [animationData, setAnimationData] = useState<any>(null);
//   // console.log(lottieRef);

//   useEffect(() => {
//     fetch(
//       "https://lottie.host/f571f7c5-2ba1-4361-90ea-319e4a68f1b7/IKZa3byzwu.json"
//     )
//       .then((response) => response.json())
//       .then((data) => setAnimationData(data))
//       .catch((error) =>
//         console.error("Error loading Lottie animation:", error)
//       );
//   }, []);

//   useEffect(() => {
//     if (lottieRef.current) {
//       lottieRef.current.setSpeed(0.5);
//     }
//   }, [animationData]);


// const downloadImages = () => {
//   console.log("Downloading images...");
  
//   // Use the imported image paths directly
//   const imageFiles = [imageI, imageU, imageL,image1,image2,image3]; 

//   imageFiles.forEach((imagePath, index) => {
//     console.log('image path what',imagePath)
//     const link = document.createElement("a");
//     link.href = imagePath; // The imported images are resolved as static paths
//     link.download = `kitchen-image-${index + 1}.webp`; // Give each image a unique name
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   });
// };




//   return (
//     <div className="relative h-96 md:h-[500px] w-full overflow-hidden  ">
//       <div className="absolute inset-0 flex flex-col md:flex-row">
//         <div className="mt- p-4 flex flex-col justify-between md:py-20 md:ml-12 md:mr-6 md:w-1/2 space-y-16 text-white">
//           <div>
//             <h2 className="text-4xl md:text-6xl font-semibold mb-2 md:mb-4 leading-tight ">
//               10 Types of
//             </h2>
//             <h2 className="text-4xl md:text-6xl font-semibold leading-tight ">
//               Bangladeshi Kitchen
//             </h2>
//           </div>
//           <div className="">
//             <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-105 md:mt-12"
//             onClick={downloadImages}
//             >
//             Download All Images
//             </button>

//             {/* <div id="banner"> */}
//  {/* </div> */}



//           </div>
//         </div>
//         <div className="hidden md:flex-1 md:block relative ">
//           {animationData && (
//             <Lottie
//               lottieRef={lottieRef}
//               animationData={animationData}
//               className="absolute inset-0 w-full h-full"
//             />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;













import { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";

import imageL from "../../../assets/kitchenShape/kichent-shape-gpt/L-shape.webp";
import imageU from "../../../assets/kitchenShape/kichent-shape-gpt/U-shape.webp";
import imageI from "../../../assets/kitchenShape/kichent-shape-gpt/I-shape.webp";

const Banner = () => {
  const lottieRef = useRef<any>(null);
  const [animationData, setAnimationData] = useState<any>(null);

  // Fetch Lottie animation data
  useEffect(() => {
    fetch(
      "https://lottie.host/f571f7c5-2ba1-4361-90ea-319e4a68f1b7/IKZa3byzwu.json"
    )
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) =>
        console.error("Error loading Lottie animation:", error)
      );
  }, []);

  // Adjust Lottie animation speed
  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(0.5);
    }
  }, [animationData]);

  // Download images functionality
  const downloadImages = () => {
    console.log("Downloading images...");

    const imageFiles = [imageI, imageU, imageL];

    imageFiles.forEach((imagePath, index) => {
      const link = document.createElement("a");
      link.href = imagePath; // Use the imported image path
      link.download = `kitchen-image-${index + 1}.webp`; // Unique filenames
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };

  return (
    <div
      className="relative w-full overflow-hidden h-[30vh] md:h-[500px]"
    >
      <div className="absolute inset-0 flex flex-col md:flex-row">
        <div className="pl-4 flex flex-col justify-between md:py-20 md:ml-12 md:mr-6 md:w-1/2 space-y-16 text-white">
          <div>
            <h2 className="text-3xl md:text-6xl font-semibold mb-2 md:mb-4 leading-tight">
              10 Types of
            </h2>
            <h2 className="text-2xl md:text-6xl font-semibold leading-tight">
              Bangladeshi Kitchen
            </h2>
          </div>
          <div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-105 md:mt-12"
              onClick={downloadImages}
            >
              Download All Images
            </button>
          </div>
        </div>
        <div className="hidden md:flex-1 md:block relative">
          {animationData && (
            <Lottie
              lottieRef={lottieRef}
              animationData={animationData}
              className="absolute inset-0 w-full h-full"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;









