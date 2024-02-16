"use client";

import { ChevronDownIcon, CircleUserRound, Compass, Dot, Facebook, Menu, Search } from "lucide-react";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";

const Navbar: FC = () => {
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [isAuthHovered, setIsAuthHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const controls = useAnimation();
  const arrowControls = useAnimation();

  const handleServicesHover = (isHovered: boolean) => {
    setIsServicesHovered(isHovered);

    if (isHovered) {
      controls.start({ opacity: 1, y: 0 });
      arrowControls.start({ rotate: 180 });
    } else {
      controls.start({ opacity: 0, y: -10 });
      arrowControls.start({ rotate: 0 });
    }
  };

  const handleAuthHover = (isHovered: boolean) => {
    setIsAuthHovered(isHovered);

    if (isHovered) {
      controls.start({ opacity: 1, y: 0 });
      arrowControls.start({ rotate: 180 });
    } else {
      controls.start({ opacity: 0, y: -10 });
      arrowControls.start({ rotate: 0 });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-[#93B874] px-20 flex">
      <div className="flex gap-7">
        <div className="flex gap-5">
          <h1 className="text-3xl font-polysans-median my-auto">Articlesbase</h1>
          <div className="flex">
            <div className="flex flex-col w-[70%] mt-3">
              <input
                className="bg-transparent text-white placeholder:text-white/80 text-2xl font-outfit outline-none"
                placeholder="to do anything..."
              />
              <Image
                src="/icons/line.svg"
                alt=""
                className="-ml-2"
                width={500}
                height={10}
              />
            </div>
            <div className="bg-white/30 px-7 py-2 my-auto rounded">
              <Search className="my-auto text-white" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-3">
        <div
          className={`relative group py-2`}
          onMouseEnter={() => handleServicesHover(true)}
          onMouseLeave={() => handleServicesHover(false)}
        >
          <button className="flex gap-2 items-center px-4 py-[0.6vw] border transition duration-300 bg-white rounded-full mt-1">
            <span className="text-sm font-medium bg-yellow-300 font-outfit text-white px-2 rounded uppercase">Pro</span>
            <div className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" className={`h-6 w-6 my-auto transition duration-500 ease-in-out text-neutral-800`}><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            </div>
          </button>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={controls}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={`absolute grid mt-2 w-[15vw] py-5 bg-white text-[#81a466] rounded-2xl shadow-md phone:text-base lg:text-lg ${
              isServicesHovered ? "block" : "hidden"
            }`}
          >
            <Link
              href="/"
              className="phone:text-sm lg:text-base font-outfit hover:bg-[#81a466] hover:text-white px-5 py-1"
            >
              Courses
            </Link>
            <div className="flex hover:bg-[#81a466] hover:text-white">
              <Link
                href="/"
                className="phone:text-sm lg:text-base font-outfit px-5 py-1"
              >
                Guides
              </Link>
              <h1 className="bg-red-500 px-[0.35rem] py-[0.15rem] rounded-full text-xs text-white my-auto font-medium -ml-3">New</h1>
            </div>
            <Link
              href="/digitalmarketing"
              className="phone:text-sm lg:text-base font-outfit hover:bg-[#81a466] hover:text-white px-5 py-1"
            >
              Tech Help Pro
            </Link>
            <Link
              href="/graphic"
              className="phone:text-sm lg:text-base font-outfit hover:bg-[#81a466] hover:text-white px-5 py-1"
            >
              Expert Videos
            </Link>
            <Link
              href="/dataentry"
              className="phone:text-sm lg:text-base font-outfit hover:bg-[#81a466] hover:text-white px-5 py-1"
            >
              About Articlesbase Pro
            </Link>
            <Link
              href="/dataentry"
              className="phone:text-sm lg:text-base font-outfit hover:bg-[#81a466] hover:text-white px-5 py-1"
            >
              Upgrade
            </Link>
            <Link
              href="/dataentry"
              className="phone:text-sm lg:text-base font-outfit hover:bg-[#81a466] hover:text-white px-5 py-1"
            >
              Sign In
            </Link>
          </motion.div>
        </div>
        <Link href="/" className="flex flex-col gap-2 hover:bg-[#78995d] px-2 py-2 transition-transform duration-300 ease-in-out">
            <img src="/icons/quiz.svg" alt="quiz" className="w-7 h-7 hover:scale-[1.15] transition-transform duration-300 ease-in-out m-auto"/>
            <h1 className="font-semibold font-outfit text-neutral-700 uppercase text-[0.65rem]">Quizzes</h1>
        </Link>
        <Link href="/" className="flex flex-col gap-2 hover:bg-[#78995d] px-2 py-2 transition-transform duration-300 ease-in-out">
            <Compass className="w-7 h-7 hover:scale-[1.15] transition-transform duration-300 ease-in-out m-auto text-[#465347]"/>
            <h1 className="font-semibold font-outfit text-neutral-700 uppercase text-[0.65rem]">Explore</h1>
        </Link>
        <div
          className={`relative group`}
          onMouseEnter={() => handleAuthHover(true)}
          onMouseLeave={() => handleAuthHover(false)}
        >
          <Link href="/" className="flex flex-col gap-2 hover:bg-[#78995d] px-2 py-2 transition-transform duration-300 ease-in-out">
              <CircleUserRound className="w-7 h-7 hover:scale-[1.15] transition-transform duration-300 ease-in-out m-auto text-[#465347]"/>
              <h1 className="font-semibold font-outfit text-neutral-700 uppercase text-[0.65rem]">Log In</h1>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={controls}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={`absolute grid py-5 px-5 w-[20vw] bg-white text-[#81a466] rounded-sm shadow-md phone:text-base lg:text-lg ${
              isAuthHovered ? "block" : "hidden"
            }`}
          >
            <h1 className="font-polysans-median text-lg font-medium text-neutral-800 mb-3">Log In</h1>
            <div className="flex flex-col gap-2">
              <div className="flex bg-[#365494] p-1 rounded-sm">
                <img src="/icons/facebook.svg" alt="" className="w-8 h-8 my-auto rounded"/>
                <h1 className="text-center text-white font-outfit m-auto">Facebook</h1>
              </div>
              <div className="flex bg-[#3F82F7] p-1 rounded-sm">
                <img src="/icons/google.svg" alt="" className="w-8 h-8 my-auto rounded"/>
                <h1 className="text-center text-white font-outfit m-auto">Google</h1>
              </div>
              <div className="flex bg-[#93B874] p-1 rounded-sm">
                <img src="/icons/person.svg" alt="" className="w-8 h-8 my-auto rounded"/>
                <h1 className="text-center text-white font-outfit m-auto">Articlesbase Account</h1>
              </div>
              <div className="text-xs text-center font-outfit">
                No account yet? <span className="text-lime-900 underline">Create an account</span>
              </div>
            </div>
          </motion.div>
        </div>
        <Link href="/" className="flex flex-col gap-2 hover:bg-[#78995d] px-2 py-2 transition-transform duration-300 ease-in-out">
            <img src="/icons/dice.svg" alt="quiz" className="w-7 h-7 hover:scale-[1.15] transition-transform duration-300 ease-in-out m-auto text-[#465347]"/>
            <h1 className="font-semibold font-outfit text-neutral-700 uppercase text-[0.65rem]">Random</h1>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
