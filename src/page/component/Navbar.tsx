import React from "react";
// import SolutionProviderLogo from "../../assets/solution_provider.png";
import solutionProviderFlatLogo from "../../assets/spLogo/sp-logo-main.png";

const Navbar = () => {
  return (
    <div className="py-6 md:px-12 flex justify-between">
      <div className="rounded-lg">
          <img src={solutionProviderFlatLogo} className="h-12" alt={'solution provider'} />
      </div>
      <div className="flex pr-2 space-x-6 font-bold items-center text-white">
        <div>Image</div>
        <div>Provider</div>
      </div>
    </div>
  );
};

export default Navbar;
