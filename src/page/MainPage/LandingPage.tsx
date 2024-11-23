import React, { useState } from "react";
import Navbar from "../component/Navbar";
import Banner from "../component/Banner/Banner";
import KitchenLayout from "../layout/KitchenLayout";
import LShape from "../component/kitchen/LShape";
import UShape from "../component/kitchen/UShape";
import IShape from "../component/kitchen/IShape";
import KitchenType from "../component/kitchen/KitchenType";
import Contact from "./Contact";
import Footer from "./Footer";

// const LandingPage = () => {
//   return (
//     <div>
//       <div className="bg-gradient-to-r from-sky-800 to-sky-600">
//         <Navbar />
//         <Banner />
//       </div>
//       <KitchenType />
//       <KitchenLayout />
//         <div id="lshape">
//           <LShape />
//         </div>
//         <div id="ushape">
//           <UShape />
//         </div>
//         <div id="ishape">
//           <IShape />
//         </div>
//        <Contact />
//       <Footer />
//     </div>
//   );
// };

// export default LandingPage;









const LandingPage = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-sky-800 to-sky-600">
        <Navbar />
        <Banner />
      </div>

      {/* <KitchenType /> */}
      <KitchenLayout />

      {/* Sections with matching IDs */}
      <div id="lshape">
        <LShape />
      </div>
      <div id="ushape">
        <UShape />
      </div>
      <div id="ishape">
        <IShape />
      </div>

      <Contact />
      <Footer />
    </div>
  );
};

export default LandingPage;
