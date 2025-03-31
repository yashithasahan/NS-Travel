"use client";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "Packages", href: "/packages" },
  { id: 3, name: "Services", href: "/services" },
  { id: 4, name: "Contact Us", href: "/contact" },
  { id: 5, name: "Explore", href: "/explore" },
];

export const Header = () => {
  const [isOpen, setIsOpne] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll event listener to window

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  return (
    <header
      className={`fixed top-0 z-40 w-full ${
        isScrolled ? "bg-white text-black " : "bg-transparent text-white "
      } transition-all duration-200 ease-in-out `}
    >
      <div
        className={` w-full max-w-[1440px] mx-auto  flex flex-row justify-between items-center px-4 py-2 `}
      >
        <Image
          className="z-40"
          src="/images/jpgs/logo.png"
          alt="logo"
          width={71}
          height={41}
        ></Image>
        <div className="hidden lg:block">
          <ul className="flex flex-row gap-4 hover:cursor-pointer font-thin">
            {links.map((link) => (
              <div key={link.id} className="flex flex-col items-center group">
                <li className=" ">{link.name}</li>
                <div
                  className={`h-1  w-0 group-hover:w-full transition-all duration-200 ease-in-out ${
                    isScrolled ? "bg-black" : "bg-white"
                  }`}
                ></div>
              </div>
            ))}
          </ul>
        </div>
        <div
          onClick={() => setIsOpne(!isOpen)}
          className={`lg:hidden z-40 ${
            isScrolled ? "text-black" : "text-white"
          }`}
        >
          {!isOpen ? (
            <Menu className="" size={24} />
          ) : (
            <X className=" " size={24} />
          )}
        </div>
      </div>

      <div
        className={`lg:hidden fixed top-0  w-3/5 h-screen flex flex-col items-start justify-start gap-2 px-4 py-20 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } trasition-all duration-300 ease-in-out ${
          isScrolled ? "bg-white text-black" : "bg-black text-white"
        }`}
      >
        <ul className="flex flex-col gap-4 hover:cursor-pointer font-thin">
          {links.map((link) => (
            <li key={link.id} className="">
              {link.name}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};
