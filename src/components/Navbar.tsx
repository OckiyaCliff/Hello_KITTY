import { FaWallet } from "react-icons/fa6";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="bg-[#FFA1BF] flex w-full justify-between text-white px-20 pt-8 py-1">
      <div>
        <h2 className="font-[800] text-2xl">$KITTY</h2>
      </div>
      <div className="flex items-center">
        <div className="inline-block text-lg font-medium px-2">
          <a href="" className="px-2">
            Tokenmomics
          </a>
          <a href="" className="px-2">
            Timeline
          </a>
          <a href="" className="px-2">
            About
          </a>
        </div>
        <Button />
        {/* <button className="border border-[#F9B2B3] flex items-center p-2">
          <span>Connect Wallet</span>
          <FaWallet />
        </button> */}
        <select name="lang" id="" className="bg-transparent p-2">
          <option value="EN">EN</option>
          <option value="FR">FR</option>
          <option value="NG">NG</option>
        </select>
      </div>
    </div>
  );
};

export default Navbar;
