import React, { useEffect, useState } from "react";
import { fetchUserData } from "../components/Api";

const Actions = () => {

  const [programs, setPrograms] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      setPrograms(await fetchUserData());
    };
    loadData();
  }, []);

  return (
    <>
      <div className="w-full md:h-screen p-2 flex items-center py-16">
        <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 px-2 py-16">
          <div className="col-span-2">
            <h2 className="py-4">Ações</h2>
            <p className="py-2 text-gray-600">{programs.objectives}</p>
          </div>
          <div className=" h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-1 hover:scale-105 ease-in duration-300">
            <img  src={programs.image} alt="Foto API" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Actions;