import React, { useEffect, useState } from "react";
import { fetchUserData } from "../components/Api";
import ProjectItem from "./ProjectItem";
const Main = () => {
  const [programs, setPrograms] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      setPrograms(await fetchUserData());
    };
    loadData();
  }, []);
console.log(programs)
  return (
    <div className="mb-0 w-full h-screen text-center ">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div className="mt-10">
         {programs.map(program => <div><ProjectItem tittle={program.name} /> </div> )}
     {/*     <h1 className="py-4 text-gray-700 "> */}
            {/* <span className="text-[#5651e5]">{programs.name}</span>
          </h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            {programs.description}
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Main;
