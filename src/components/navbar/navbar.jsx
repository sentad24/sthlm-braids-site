"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import LogoDark from "@/../public/logos/sthlmbraidsDark.png";


const Navbar = () => {

  const [shrink, setShrink] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);


  useEffect(() => {

    const handleScroll = () => {
      setShrink(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);



  const links = [
    { name: "Hem", href: "/" },
    { name: "Tjänster", href: "/services" },
    { name: "Om Oss", href: "/about" },
    { name: "Kontakt", href: "/contact" },
  ];



  return (

    <header
      className={`
        fixed
        top-0
        left-0
        w-full
        z-50
        transition-all
        duration-500
        backdrop-blur-md

        ${
          shrink
          ? "bg-white/95 shadow-md py-2"
          : "bg-transparent py-3"
        }
      `}
    >

      <nav
        className="
          max-w-7xl
          mx-auto
          px-6
          h-16
          flex
          items-center
          justify-between
        "
      >


        {/* Logo */}

        <Link href="/">
          <Image
            src={LogoDark}
            alt="Sthlm Braids"
            width={135}
            priority
          />
        </Link>



        {/* Desktop Links */}

        <div
          className="
            hidden
            md:flex
            items-center
            gap-8
          "
        >

          {links.map((link) => (

            <Link
              key={link.href}
              href={link.href}
              className={`
                text-xl
                font-medium
                tracking-wide
                transition
                duration-300
                hover:text-gray-700

                ${
                  shrink
                  ? "text-black"
                  : "text-black"
                }
              `}
            >
              {link.name}
            </Link>

          ))}

        </div>



        {/* Booking Button */}

        <Link
          href="/booktime"
          className="
            hidden
            md:block
            bg-black
            text-white
            px-6
            py-2.5
            rounded-full
            text-base
            font-medium
            hover:bg-amber-700
            transition
            duration-300
          "
        >
          Boka Tid
        </Link>



        {/* Mobile Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`
            md:hidden
            text-3xl

            ${
              shrink
              ? "text-black"
              : "text-black"
            }
          `}
          aria-label="Toggle menu"
        >

          {menuOpen ? "✕" : "☰"}

        </button>


      </nav>




      {/* Mobile Menu */}

      <div
        className={`
          md:hidden
          transition-all
          duration-300
          overflow-hidden

          ${
            menuOpen
            ? "max-h-[500px]"
            : "max-h-0"
          }
        `}
      >

        <div
          className="
            bg-white
            shadow-lg
            px-6
            py-6
            flex
            flex-col
            gap-5
          "
        >

          {links.map((link) => (

            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="
                text-lg
                font-medium
                text-black
                hover:text-amber-700
                transition
              "
            >
              {link.name}
            </Link>

          ))}



          <Link
            href="/booktime"
            onClick={() => setMenuOpen(false)}
            className="
              bg-black
              text-white
              text-center
              py-3
              rounded-full
              font-medium
              hover:bg-amber-700
              transition
            "
          >
            Boka Tid
          </Link>


        </div>

      </div>


    </header>

  );
};


export default Navbar;