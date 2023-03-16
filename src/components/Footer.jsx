import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-[#5651e5] text-white">
      <div>
        <div className="flex items-center justify-center m-auto gap-[50px] py-4">
          <a
            href="https://www.linkedin.com/in/isaque-batista-de-oliveira-a3b619236/"
            target="_blank"
            rel="noreferrer"
          >
            <div
              className="rounded-[100%] shadow-lg shadow-gray-400 max-h-[16px] p-6 cursor-pointer 
              hover:scale-110 ease-in duration-300"
            >
              <FaLinkedinIn className="max-h-[16px]" />
            </div>
          </a>
          <a
            href="https://github.com/IsaqueBatista"
            target="_blank"
            rel="noreferrer"
          >
            <div
              className="rounded-[100%] shadow-lg shadow-gray-400 max-h-[16px] p-6 cursor-pointer 
              hover:scale-110 ease-in duration-300"
            >
              <FaGithub className="max-h-[16px]" />
            </div>
          </a>
          <Link href="/Contact">
            <div
              className="rounded-[100%] shadow-lg shadow-gray-400 max-h-[16px] p-6 cursor-pointer 
              hover:scale-110 ease-in duration-300"
            >
              <AiOutlineMail className="max-h-[16px]" />
            </div>
          </Link>
          <div
            className="rounded-[100%] shadow-lg shadow-gray-400 max-h-[16px] p-6 cursor-pointer 
            hover:scale-110 ease-in duration-300"
          >
            <Link href="/curriculo">
              <FaWhatsapp className="max-h-[16px]" />
            </Link>
          </div>
        </div>
      </div>
      <div>
        <p className="flex justify-center">
          Copyright © 2023
          <a href="https://www.example.com/">Example Company</a>. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
