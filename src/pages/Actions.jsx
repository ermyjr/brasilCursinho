import Image from "next/image";
import React from "react";


export default function Actions() {
  return (
    <>
      <div className="w-full md:h-screen p-2 flex items-center py-16">
        <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 px-2 py-16">
          <div className="col-span-2">
            <h2 className="py-4">Ações</h2>
            <p className="py-2 text-gray-600">coloque seu texto aqui</p>
          </div>
          <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-1 hover:scale-105 ease-in duration-300">
            <Image className="rounded-xl" src={""} alt="Foto API" />
          </div>
        </div>
      </div>
    </>
  );
}
