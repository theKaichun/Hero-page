import React, { useState } from "react";
import Logo from "../assets/Logo.png";

import { motion } from "framer-motion";
import { UpdateFollower } from "react-mouse-follower";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
const NavbarMenu = [
  {
    id: 1,
    title: "雄英高校1年A班",
    link: "/#",
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
  const [isMobileMenuOpen, setIsMobileOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMobileOpen(!isMobileMenuOpen);
  };
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
        <div className="flex items-center gap-4">
          <ul
            className={`${
              isMobileMenuOpen ? "block" : "hidden"
            } sm:flex flex-col sm:flex-row items-center gap-4 absolute sm:static top-16 left-0 w-full sm:w-auto bg-gradient-to-r from-secondary to-secondary/90 sm:bg-none p-4 sm:p-0 z-50`}
          >
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
                    onClick={handleMenuToggle}
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
        <button className="sm:hidden text-2xl" onClick={handleMenuToggle}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </motion.div>
    </div>
  );
};

export default Navbar;
