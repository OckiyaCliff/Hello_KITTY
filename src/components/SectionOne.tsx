import { SECTION_1 } from "../constants/home";

const SectionOne = () => {
  return (
    <div className="grid grid-cols-2 gap-5">
      <img src={SECTION_1} alt="" />
      <p>
        Welcome to Hello Kitty World, the ultimate meme project on Solana! Enter
        a playful universe where our adorable leader, Hello Kitty, reigns
        supreme.
      </p>
    </div>
  );
};

export default SectionOne;
