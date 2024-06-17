import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";
import Timeline from "../components/TimeLine";
import {
  FOOTER,
  GLASS,
  HERO1,
  HERO2,
  HERO3,
  HEROs,
  SECTION_1,
  SECTION_2,
  TIMELINEFIVE,
  TIMELINEFOUR,
  TIMELINEONE,
  TIMELINESIX,
  TIMELINETHREE,
  TIMELINETWO,
} from "../constants/home";
import { FaSearch } from "react-icons/fa";

const Home = () => {
  return (
    <div className="bg-[#FFA1BF] min-h-screen overflow-x-hidden z-20 md:max-w-[1366px]">
      <div className="relative p-2">
        <img src={HEROs} alt="" className="w-full h-[500px] lg:h-screen object-contain lg:object-cover" />
        <div className="absolute inset-x-0 -bottom-[30%] md:-bottom-[32%] md:flex justify-between hidden">
          <img src={HERO1} alt="" className="transform -translate-x-24 h-[400px] lg:flex hidden" />
          <img
            src={HERO2}
            alt=""
            className="transform translate-y-24 object-contain rounded-3xl h-[150px] md:h-[350px]"
          />
          <img src={HERO3} alt="" className="transform translate-x-24 h-[350px] lg:flex hidden" />
        </div>
      </div>
      <div className="py-10 bg-[#FF3DB4] px-6 lg:px-20 pt-[100px] md:pt-[350px]">
        <div className="grid lg:grid-cols-2 gap-5 justify-items-center items-center">
          <img src={SECTION_1} alt="" className="md:h-[450px] h-[350px] object-contain lg:object-cover" />
          <p className="text-3xl px-5 lg:px-0 lg:text-4xl text-center text-white leading-snug">
            Welcome to Hello Kitty World, the ultimate meme project on Solana!
            Enter a playful universe where our adorable leader, Hello Kitty,
            reigns supreme.
          </p>
        </div>
      </div>
      <div className="py-10 bg-[#FF3DB4] px-6 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-5 justify-items-center items-center">
          <p className="text-3xl lg:text-4xl text-center text-white leading-snug md:col-start-2 md:col-end-3 order-2">
            Join a community-driven revolution that blends cuteness with crypto
            chaos. Get ready for laughter, fun, and moon-worthy gains. Embrace
            the new world order, where Hello Kitty rules!
          </p>
          <img src={SECTION_2} alt="" className="h-[450px] object-contain md:col-start-1 md:col-end-2 order-1" />
        </div>
      </div>
      <div className="bg-[#FF3DB4] py-10 flex flex-col items-center pt-[100px] md:pt-[200px]">
        <h2 className="text-4xl md:text-5xl font-[700] lg:text-5xl text-white pb-[150px] px-6 text-center">
          Build a New World Order with Kitty
        </h2>
        <div className="relative w-full px-6 lg:px-20">
          <Timeline />
          <img
            src={TIMELINEONE}
            alt="timeline"
            className="md:absolute -top-20 right-[15%] h-[450px] md:flex hidden"
          />
          <img
            src={TIMELINETWO}
            alt="timeline"
            className="md:absolute left-[13%] top-[14%] h-[450px] md:flex hidden"
          />
          <img
            src={TIMELINETHREE}
            alt="timeline"
            className="md:absolute top-[33%] right-[14%] h-[450px] md:flex hidden"
          />
          <img
            src={TIMELINEFOUR}
            alt="timeline"
            className="md:absolute top-[54%] left-[13%] h-[450px] md:flex hidden"
          />
          <img
            src={TIMELINEFIVE}
            alt="timeline"
            className="md:absolute top-[77%] right-[14%] h-[450px] md:flex hidden"
          />
        </div>
        <div className="pt-10 grid lg:grid-cols-2 gap-5 justify-items-center items-center px-6">
          <img src={TIMELINESIX} alt="timeline" className="object-contain h-[350px]" />
          <p className="text-2xl lg:text-4xl text-center text-white leading-snug">
            Join us in creating a new world order with Kitty leading the way!
            🚀🔥😺
          </p>
        </div>
      </div>
      <div className="bg-[#FF3DB4] pt-10 flex flex-col items-center px-6 lg:px-20 pb-10 text-white">
        <div className="relative w-full">
          <img src={GLASS} alt="background-footer" className="w-full h-[500px] md:h-64" />
          <div className="absolute inset-0 flex flex-col">
            <div className="grid w-full h-full grid-cols-1 lg:grid-cols-3 gap-5 py-8 px-6 lg:px-10">
              <div className="flex flex-col items-center">
                <h2 className="text-3xl font-bold">$KITTY</h2>
                <div className="flex py-2 space-x-2">
                  <FaTwitter />
                  <FaInstagram />
                  <FaLinkedin />
                </div>
              </div>
              <div className="flex flex-col items-start">
                <span className="mb-2 font-bold">Subscribe</span>
                <div className="flex items-center space-x-2 pr-2  bg-blur-md border border-gray-30/50 rounded-lg  bg-opacity-25 bg-white focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50">
                  <input
                    type="text"
                    className="py-2 px-4 rounded bg-transparent outline-none"
                  />
                  <FaSearch />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex flex-col">
                  <h2>Tokenomics</h2>
                  <h2>Team Section</h2>
                  <h2>About US</h2>
                </div>
                <div className="flex flex-col">
                  <h2>Github</h2>
                  <h2>Documentation</h2>
                  <h2>White Paper</h2>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-between items-end pt-4 pb-3 px-3">
              <h2>copyright $KITTY Team</h2>
              <div className="flex space-x-5 md:space-x-10 pt-4 lg:pt-0">
                <h2>Terms of Service</h2>
                <h2>Privacy Policy</h2>
                <h2>Cookie</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:relative w-full h-[200px]">
          <img src={FOOTER} alt="" className="object-contain h-[150px] w-[150px] absolute right-0 bottom-[65px]" />
        </div>
      </div>
    </div>
  );
};

export default Home;