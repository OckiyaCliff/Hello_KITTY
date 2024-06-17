import { useState } from "react";
import Button from "./Button";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-[#FFA1BF] flex flex-wrap w-full justify-between text-white px-5 sm:px-10 md:px-20 py-4 max-w-[1366px]">
      <div className="flex items-center justify-between w-full md:w-auto">
        <h2 className="font-[800] text-2xl">$KITTY</h2>
        <button
          className="md:hidden text-white"
          onClick={toggleMobileMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      <div className={`flex-col md:flex-row md:flex items-center w-full md:w-auto ${isMobileMenuOpen ? "flex" : "hidden"} md:flex`}>
        <div className="flex flex-col md:flex-row text-lg font-medium px-2 w-full md:w-auto">
          <a href="" className="px-2 py-1 md:py-0">Tokenmomics</a>
          <a href="" className="px-2 py-1 md:py-0">Timeline</a>
          <a href="" className="px-2 py-1 md:py-0">About</a>
        </div>
        <Button />
        <select name="lang" id="" className="bg-transparent p-2 w-full md:w-auto">
          <option value="EN">EN</option>
          <option value="FR">FR</option>
          <option value="NG">NG</option>
        </select>
      </div>
    </div>
  );
};

export default Navbar;
