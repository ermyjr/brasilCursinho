import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Links from './Links';

import { useRouter } from "next/router";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, ] = useState("#ecf0f3");
  const [linkColor, ] = useState("#1f2937");
  const router = useRouter();

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        
        <div className="mr-5">
          <ul
            style={{ color: `${linkColor}` }}
            className="hidden md:flex gap-2"
          >
            <Link href="/">
              <li className="ml-4 mr-4 text-sm uppercase hover:border-b">
                Home
              </li>
            </Link>
            
            <Link href="/SocialProjects">
              <li className="ml-4 mr-4 text-sm uppercase hover:border-b">
              Programa social
              </li>
            </Link>
            <Link href="/Actions">
              <li className="ml-4 mr-4 text-sm uppercase hover:border-b">
              Ações 
              </li>
            </Link>

            <Link href="/Contact">
              <li className="ml-4 mr-4 text-sm uppercase hover:border-b">
              Sobre nós
              </li>
            </Link>
            
          </ul>

          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={20} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-400%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
                            <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/Actions">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                Ações
                </li>
              </Link>
              <Link href="/SocialProjects">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                Programa Social
                </li>
              </Link>
              <Link href="/Contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contato
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#0901f8]">
                Entre em contato
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <Links/>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
