import React from "react";
import Slider from "react-slick";
import Hero1 from "../assets/綠谷.jpg";
import Hero2 from "../assets/爆豪.jpg";
import Hero3 from "../assets/麗日.jpg";
import Hero4 from "../assets/飯田.jpg";
import Hero5 from "../assets/轟.jpg";
import Hero6 from "../assets/蛙吹.jpg";
import Hero7 from "../assets/峰田.jpg";
import Hero8 from "../assets/切島.jpg";
import Hero9 from "../assets/八百萬.jpg";
import Hero10 from "../assets/常闇.jpg";
import Hero11 from "../assets/上鳴.jpg";
import Hero12 from "../assets/青山.jpg";
import Hero13 from "../assets/耳郎.jpg";
import Hero14 from "../assets/蘆戶.jpg";
import Hero15 from "../assets/障子.jpg";
import Hero16 from "../assets/尾白.jpg";
import Hero17 from "../assets/瀬呂.jpg";
import Hero18 from "../assets/葉隱.jpg";
import Hero19 from "../assets/砂藤.jpg";
import Hero20 from "../assets/口田.jpg";

import Navbar from "./Navbar";
import { motion, easeInOut, AnimatePresence } from "framer-motion";
import { UpdateFollower } from "react-mouse-follower";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slideVariants = (delay) => ({
  hidden: {
    opacity: 0,
    x: 100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: delay,
      ease: easeInOut,
    },
  },
  exit: {
    opacity: 0,
    x: -50,
    transition: {
      duration: 0.2,
      ease: easeInOut,
    },
  },
});

const HeroData = [
  {
    id: 1,
    image: Hero1,
    title: "綠谷出久",
    subtitle: "個性 : ONE FOR ALL",
    modal: "Deku",
    bgColor: "#01817A",
  },
  {
    id: 2,
    image: Hero2,
    title: "爆豪勝己",
    subtitle: "個性 : 爆破",
    modal: "大爆殺神Dynamite",
    bgColor: "#FF8000",
  },
  {
    id: 3,
    image: Hero3,
    title: "麗日御茶子",
    subtitle: "個性 : 無重力",
    modal: "輕靈",
    bgColor: "#F00078",
  },
  {
    id: 4,
    image: Hero4,
    title: "飯田天哉",
    subtitle: "個性 : 引擎",
    modal: "天賦引擎",
    bgColor: "#4A6DBF",
  },
  {
    id: 5,
    image: Hero5,
    title: "轟焦凍",
    subtitle: "個性 : 半冷半燃",
    modal: "焦凍",
    bgColor: "#ADFFED",
  },
  {
    id: 6,
    image: Hero6,
    title: "蛙吹梅雨",
    subtitle: "個性 : 青蛙",
    modal: "綠動精靈",
    bgColor: "#55DD40",
  },
  {
    id: 7,
    image: Hero7,
    title: "峰田實",
    subtitle: "個性 : 超強黏性葡萄",
    modal: "葡萄汁",
    bgColor: "#8229FF",
  },
  {
    id: 8,
    image: Hero8,
    title: "切島銳兒郎",
    subtitle: "個性 : 硬化",
    modal: "烈怒賴雄斗",
    bgColor: "#FF2929",
  },
  {
    id: 9,
    image: Hero9,
    title: "八百萬百",
    subtitle: "個性 : 創造",
    modal: "創造子",
    bgColor: "#891515",
  },
  {
    id: 10,
    image: Hero10,
    title: "常闇踏陰",
    subtitle: "個性 : 黑影",
    modal: "月詠",
    bgColor: "#554D5B",
  },
  {
    id: 11,
    image: Hero11,
    title: "上鳴電氣",
    subtitle: "個性 : 帶電",
    modal: "充電閃電",
    bgColor: "#F5FC79",
  },
  {
    id: 12,
    image: Hero12,
    title: "青山優雅",
    subtitle: "個性 : 肚臍雷射光",
    modal: "無法停止閃耀",
    bgColor: "#91740D",
  },
  {
    id: 13,
    image: Hero13,
    title: "耳郎響香",
    subtitle: "個性 : 耳機",
    modal: "插孔",
    bgColor: "#5C5C5C",
  },
  {
    id: 14,
    image: Hero14,
    title: "蘆戸三奈",
    subtitle: "個性 : 酸",
    modal: "粉紅女俠",
    bgColor: "#F899FF",
  },
  {
    id: 15,
    image: Hero15,
    title: "障子目藏",
    subtitle: "個性 : 複製腕",
    modal: "八爪",
    bgColor: "#99CAFF",
  },
  {
    id: 16,
    image: Hero16,
    title: "尾白猿夫",
    subtitle: "個性 : 尾巴",
    modal: "卷尾俠",
    bgColor: "#EDEDED",
  },
  {
    id: 17,
    image: Hero17,
    title: "瀨呂範太",
    subtitle: "個性 : 膠帶",
    modal: "膠帶狂人",
    bgColor: "#FA9A00",
  },
  {
    id: 18,
    image: Hero18,
    title: "葉隱透",
    subtitle: "個性 : 透明化",
    modal: "無形女俠",
    bgColor: "#D7ECEF",
  },
  {
    id: 19,
    image: Hero19,
    title: "砂藤力道",
    subtitle: "個性 : 砂糖興奮劑",
    modal: "砂糖俠",
    bgColor: "#E08F15",
  },
  {
    id: 20,
    image: Hero20,
    title: "口田甲司",
    subtitle: "個性 : 生物之聲",
    modal: "靈通者",
    bgColor: "#F6D29D",
  },
];

const Hero = () => {
  const [activeData, setActiveData] = React.useState(HeroData[0]);

  const handleActiveData = (data) => {
    setActiveData(data);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} slick-arrow`}
        style={{
          ...style,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "50px",
          height: "50px",
          cursor: "pointer",
          zIndex: 1,
        }}
        onClick={onClick}
      ></div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} slick-arrow`}
        style={{
          ...style,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "50px",
          height: "50px",
          cursor: "pointer",
          zIndex: 1,
        }}
        onClick={onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </div>
    );
  }

  return (
    <motion.section
      initial={{ backgroundColor: activeData.bgColor }}
      animate={{ backgroundColor: activeData.bgColor }}
      transition={{ duration: 0.8 }}
      className="bg-brandDark text-yellow-300"
    >
      <Navbar />
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[605px]">
        <div className="flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px] order-2 md:order-1">
          <div className="space-y-5 text-center md:text-left">
            <AnimatePresence mode="wait">
              <UpdateFollower
                mouseOptions={{
                  backgroundColor: "white",
                  zIndex: 9999,
                  followSpeed: 0.5,
                  rotate: -720,
                  mixBlendMode: "difference",
                  scale: 10,
                }}
              >
                <motion.h1
                  key={activeData.id}
                  variants={slideVariants(0.2)}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className=" text-3xl lg:text-6xl xl:text-7xl font-bold font-handwriting text-shadow"
                >
                  {activeData.title}
                </motion.h1>
              </UpdateFollower>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <UpdateFollower
                mouseOptions={{
                  backgroundColor: activeData.bgColor,
                  zIndex: 9999,
                  followSpeed: 0.5,
                  rotate: -720,
                  scale: 6,
                  backgroundElement: (
                    <div>
                      <img
                        src={activeData.image}
                        width={100}
                        height={100}
                        alt={activeData.title}
                      />
                    </div>
                  ),
                }}
              >
                <motion.button
                  key={activeData.id}
                  variants={slideVariants(0.6)}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  style={{ color: "black" }}
                  className="px-4 py-2 inline-block font-handwriting text-3xl text-shadow"
                >
                  {activeData.subtitle}
                </motion.button>
              </UpdateFollower>
            </AnimatePresence>
            <Slider {...settings} className="hero-slider">
              {HeroData.map((item) => (
                <div key={item.id} className="px-4">
                  <div
                    onClick={() => handleActiveData(item)}
                    className="cursor-pointer space-y-3 hover:scale-105 transition-all"
                  >
                    <div className="flex justify-center">
                      <img
                        src={item.image}
                        alt=""
                        className={`h-[200px] w-auto img-shadow ${
                          activeData.image === item.image
                            ? "opacity-100 scale-110"
                            : "opacity-50"
                        }`}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className="flex flex-col justify-end items-center relative order-1 md:order-2">
          <AnimatePresence mode="wait">
            <img
              key={activeData.id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, ease: easeInOut }}
              exit={{
                opacity: 0,
                x: -100,
                transition: { duration: 0.4 },
              }}
              src={activeData.image}
              alt=""
              className="h-[400px] w-auto img-shadow relative z-10"
            />
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeData.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, ease: easeInOut }}
              exit={{
                opacity: 0,
                transition: { duration: 0.4 },
              }}
              className="text-white/30 text-[100px] text-shadow  font-poppins font-extrabold absolute top-0 left-10 -z-1"
            >
              {activeData.modal}
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="fixed bottom-10 right-0 m-4">
          <a href="#"></a>
          <img
            src="https://qph.cf2.quoracdn.net/main-qimg-92623ed88df80134ee09b00b15c189da"
            alt="GIF Example"
            unoptimized
            className="w-[100px] h-[100px] rounded-3xl"
            width={0}
            height={0}
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
