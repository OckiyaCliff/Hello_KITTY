import { HERO1, HERO2, HERO3 } from "../constants/home";

const Hero = () => {
  return (
    <div className="bg-[#FFA1BF] h-full justify-end overflow-x-hidden z-20" >
      <div className="custom-background relative">
        <div className="absolute flex -bottom-[180px]">
          <img src={HERO1} alt="" className="transform -translate-x-[150px]" />
          <img src={HERO2} alt="" className="transform translate-y-[190px] object-contain rounded-3xl" />
          <img src={HERO3} alt="" className="transform translate-x-[150px]" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
