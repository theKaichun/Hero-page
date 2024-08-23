import React from "react";
import Logo from "../assets/Logo.png";
import { MdMenu } from "react-icons/md";
import { motion } from "framer-motion";
import { UpdateFollower } from "react-mouse-follower";
import { Link } from "react-router-dom";

const NavbarMenu = [
  {
    id: 1,
    title: "雄英高校1年A班",
    link: "http://localhost:5173/",
  },
  {
    id: 2,
    title: "雄英高校1年B班",
    link: "/b/page",
  },
  {
    id: 3,
    title: "雄英高校教師",
    link: "/T/page",
  },

  {
    id: 4,
    title: "敵聯合",
    link: "/V/page",
  },
];

const Navbar = () => {
  return (
    <div className=" text-white py-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="container flex justify-between items-center"
      >
        {/* logo section */}
        <div>
          <img src={Logo} alt="" className="max-w-[300px]" />
        </div>
        {/* Menu section */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-4 relative z-40">
            {NavbarMenu.map((item) => (
              <li key={item.id}>
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 9999,
                    followSpeed: 1.5,
                    scale: 5,
                    mixBlendMode: "difference",
                  }}
                >
                  <Link
                    to={item.link}
                    className="inline-block text-base font-semibold py-2 px-3 uppercase"
                  >
                    {item.title}
                  </Link>
                </UpdateFollower>
              </li>
            ))}

            <UpdateFollower
              mouseOptions={{
                backgroundColor: "white",
                zIndex: 9999,
                followSpeed: 1.5,
                scale: 5,
                mixBlendMode: "difference",
              }}
            ></UpdateFollower>
          </ul>
        </div>
        {/* Hamburger Icon */}
        <div className="md:hidden">
          <MdMenu className="text-4xl" />
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
