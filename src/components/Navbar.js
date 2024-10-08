"use client";

import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const layoutRoutes = [
    {
      name: "About",
      link: "/about",
    },
    // {
    //   name: "Sample Deals",
    //   link: "/deals",
    // },
    {
      name: "Services",
      link: "/#services",
    },
    {
      name: "Contact",
      link: "/contact",
    },
    {
      name: "Book a Call",
      link: "/call"
    }
  ];

  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  return (
    <>
      <nav className="bg-white sticky top-0 z-10 dark:bg-gray-500 shadow-lg dark:shadow-2xl text-gray-800 dark:text-white">
        <div className="flex justify-between max-w-6xl mx-auto py-6 px-4 sm:px-6 items-center">
          <div className="flex justify-start items-center">
            <Link href="/" className="cursor-pointer flex items-center gap-3">
              <Image
                src={"/malabute-logo.png"}
                alt="Site Logo"
                width={60}
                height={60}
              />
              <h1 className="inline text-2xl font-semibold">Jason Malabute</h1>
            </Link>
          </div>
          {/*Mobile Menu*/}
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="hidden md:flex items-center gap-8">
              {layoutRoutes.map((layoutRoute, index) => (
                <Link
                  href={layoutRoute.link}
                  key={index}
                  className={`font-semibold text-center text-md hover:text-blue-600 ${
                    layoutRoute.name === "Book a Call"
                      ? "bg-blue-500 text-white py-2 px-3 hover:b-blue-400 hover:text-gray-200 rounded-lg"
                      : ""
                  }`}
                >
                  {layoutRoute.name}
                </Link>
              ))}
            </div>

            <span
              className="md:hidden text-3xl"
              onClick={() => setOpenMobileMenu(!openMobileMenu)}
            >
              {openMobileMenu ? <FaTimes /> : <GiHamburgerMenu />}
            </span>
            <div onClick={() => setOpenMobileMenu(!openMobileMenu)}>
              {openMobileMenu && (
                <div className="absolute flex flex-col top-24 left-0 w-full bg-white text-gray-800 text-center p-4 space-y-4">
                  {layoutRoutes.map((layoutRoute, index) => (
                    <Link
                      href={layoutRoute.link}
                      key={index}
                      className={`font-semibold w-full py-3 text-center text-xl hover:text-blue-600 hover:opacity-90 ${
                        layoutRoute.name === "Book a Call"
                          ? "bg-blue-500 text-white hover:b-blue-400 hover:text-gray-200 rounded-lg"
                          : ""
                      }`}
                    >
                      {layoutRoute.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
