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
    link: "/B/page",
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

    document.body.style.overflow = isMobileMenuOpen ? "auto" : "hidden";
  };

  return (
    <div className="text-white py-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="container flex justify-between items-center mx-auto"
      >
        {/* Logo section */}
        <div>
          <img src={Logo} alt="" className="max-w-[200px] sm:max-w-[300px]" />
        </div>

        {/* Menu section */}
        <div className="flex items-center gap-4">
          <ul
            className={`${
              isMobileMenuOpen
                ? "fixed inset-0 bg-black/70 z-50 flex flex-col items-center justify-center"
                : "hidden"
            } sm:flex sm:flex-row sm:static sm:bg-none sm:p-0 gap-4 sm:gap-6 p-4`}
          >
            {NavbarMenu.map((item) => (
              <li key={item.id} className="text-center sm:text-left">
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
                    className="inline-block text-xl sm:text-base font-semibold py-2 px-3 uppercase text-white"
                    onClick={handleMenuToggle}
                  >
                    {item.title}
                  </Link>
                </UpdateFollower>
              </li>
            ))}
          </ul>
        </div>

        {/* Hamburger Icon */}
        <button className="sm:hidden text-3xl z-50" onClick={handleMenuToggle}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </motion.div>
    </div>
  );
};

export default Navbar;
