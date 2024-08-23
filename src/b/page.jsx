import React from "react";
import Slider from "react-slick";
import Hero1 from "../assets/物間.png";
import Hero2 from "../assets/拳藤.png";
import Hero3 from "../assets/鉄哲.png";
import Hero4 from "../assets/塩崎.png";
import Hero5 from "../assets/骨抜.png";
import Hero6 from "../assets/庄田.png";
import Hero7 from "../assets/泡瀨.png";
import Hero8 from "../assets/円場.png";
import Hero9 from "../assets/回原.png";
import Hero10 from "../assets/凡戸.png";
import Hero11 from "../assets/柳.png";
import Hero12 from "../assets/宍田.png";
import Hero13 from "../assets/黒色.png";
import Hero14 from "../assets/小大.png";
import Hero15 from "../assets/鱗飛.png";
import Hero16 from "../assets/小森.png";
import Hero17 from "../assets/鎌切.png";
import Hero18 from "../assets/角取.png";
import Hero19 from "../assets/取蔭.png";
import Hero20 from "../assets/吹出.png";
import Navbar from "../components/Navbar";
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
    title: "物間寧人",
    subtitle: "個性 : 拷貝",
    modal: "幻影盜賊",
    bgColor: "#878787",
  },
  {
    id: 2,
    image: Hero2,
    title: "拳藤一佳",
    subtitle: "個性 : 大拳",
    modal: "戰鬥之拳",
    bgColor: "#9E3E33",
  },
  {
    id: 3,
    image: Hero3,
    title: "鐵哲徹鐵",
    subtitle: "個性 : 鋼鐵",
    modal: "真實鋼鐵",
    bgColor: "#877F90",
  },
  {
    id: 4,
    image: Hero4,
    title: "鹽崎茨",
    subtitle: "個性 : 藤蔓",
    modal: "藤蔓",
    bgColor: "#60AC5D",
  },
  {
    id: 5,
    image: Hero5,
    title: "骨拔柔造",
    subtitle: "個性 : 軟化",
    modal: "泥巴俠",
    bgColor: "#CDC57E",
  },
  {
    id: 6,
    image: Hero6,
    title: "庄田二連擊",
    subtitle: "個性 : 雙重震撼",
    modal: "地雷",
    bgColor: "#75B8A6",
  },
  {
    id: 7,
    image: Hero7,
    title: "泡瀨洋雪",
    subtitle: "個性 : 焊接",
    modal: "焊接者",
    bgColor: "#5C8FFF",
  },
  {
    id: 8,
    image: Hero8,
    title: "圓場硬成",
    subtitle: "個性 : 空氣凝固",
    modal: "圓場",
    bgColor: "#B32D00",
  },
  {
    id: 9,
    image: Hero9,
    title: "回原旋",
    subtitle: "個性 : 迴旋",
    modal: "迴旋俠",
    bgColor: "#008F77",
  },
  {
    id: 10,
    image: Hero10,
    title: "凡戶固次郎",
    subtitle: "個性 : 接著劑",
    modal: "塑膠模型",
    bgColor: "#CCBB00",
  },
  {
    id: 11,
    image: Hero11,
    title: "柳靈子",
    subtitle: "個性 : 騷靈",
    modal: "艾蜜莉",
    bgColor: "#E0E0E0",
  },
  {
    id: 12,
    image: Hero12,
    title: "宍田獸郎太",
    subtitle: "個性 : 熱沃當",
    modal: "野獸",
    bgColor: "#B86B00",
  },
  {
    id: 13,
    image: Hero13,
    title: "黑色支配",
    subtitle: "個性 : 黑",
    modal: "奈米碳管黑體",
    bgColor: "#616161",
  },
  {
    id: 14,
    image: Hero14,
    title: "小大唯",
    subtitle: "個性 : 尺寸",
    modal: "尺",
    bgColor: "#54A1BB",
  },
  {
    id: 15,
    image: Hero15,
    title: "鱗飛龍",
    subtitle: "個性 : 鱗片",
    modal: "龍帷子",
    bgColor: "#238A0F",
  },
  {
    id: 16,
    image: Hero16,
    title: "小森希乃子",
    subtitle: "個性 : 菇類",
    modal: "施蘑姬",
    bgColor: "#CC6900",
  },
  {
    id: 17,
    image: Hero17,
    title: "鎌切尖",
    subtitle: "個性 : 刃銳",
    modal: "傑克螳螂",
    bgColor: "#C7FFAD",
  },
  {
    id: 18,
    image: Hero18,
    title: "角取波妮",
    subtitle: "個性 : 角砲",
    modal: "Rocketti",
    bgColor: "#A742FF",
  },
  {
    id: 19,
    image: Hero19,
    title: "取蔭切奈",
    subtitle: "個性 : 蜥蜴斷尾",
    modal: "蜥蜴淑女",
    bgColor: "#476836",
  },
  {
    id: 20,
    image: Hero20,
    title: "吹出漫我",
    subtitle: "個性 : 漫畫",
    modal: "漫畫俠",
    bgColor: "#74AAA8",
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
