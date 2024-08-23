import React from "react";
import Slider from "react-slick";
import Hero1 from "../assets/死柄木弔.png";
import Hero2 from "../assets/荼毘.png";
import Hero3 from "../assets/渡我被身子.png";
import Hero4 from "../assets/雙倍.png";
import Hero5 from "../assets/壓縮先生.png";
import Hero6 from "../assets/編織者.png";
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
    title: "志村轉弧",
    subtitle: "個性 : 崩壞",
    modal: "死柄木弔",
    bgColor: "#877879",
  },
  {
    id: 2,
    image: Hero2,
    title: "轟燈矢",
    subtitle: "個性 : 蒼炎",
    modal: "荼毘",
    bgColor: "#877879",
  },
  {
    id: 3,
    image: Hero3,
    title: "渡我被身子",
    subtitle: "個性 : 變身",
    modal: "渡我被身子",
    bgColor: "#A83843",
  },
  {
    id: 4,
    image: Hero4,
    title: "分倍河原仁",
    subtitle: "個性 : 兩倍",
    modal: "雙倍",
    bgColor: "#787878",
  },
  {
    id: 5,
    image: Hero5,
    title: "迫壓紘",
    subtitle: "個性 : 壓縮",
    modal: "壓縮先生",
    bgColor: "#842B00",
  },
  {
    id: 6,
    image: Hero6,
    title: "伊口秀一",
    subtitle: "個性 : 壁虎",
    modal: "編織者",
    bgColor: "#7E3D76",
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
