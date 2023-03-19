import Image from "next/image";
import React, { useEffect, useState } from "react";
import { fetchUserData } from "../components/Api";
import mozNext from "../../public/assets/projects/mozNext.jpeg";
import Requirements from "../components/requirements";
import { BsArrowLeft } from "react-icons/bs";
import Link from "next/link";

export default function projectNext() {
  const [programs, setPrograms] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      setPrograms(await fetchUserData());
    };
    loadData();
  }, []);
  
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={mozNext}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Voluntarie-se</h2>
          
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <h2 className="pb-5">Sobre o projeto</h2>
          <p> {programs.objectives}</p>
          <br/>
          <a
            href="https://github.com/ermyjr/brasilCursinhos"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Repositório</button>
          </a>
          <a
            href="https://brasilcursinhos.org/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Inscreva-se</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <Requirements/>

        </div>
        <div className="w-[15px]">
        <Link href="/SocialProjects">
          <button className="px-7 py-2 mt-4 mr-8 flex items-center">
            <BsArrowLeft className="pr-1" /> 
          </button>
        </Link>
        </div>

      </div>
    </div>
  );
}
