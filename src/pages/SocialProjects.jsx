import React from "react";
import mozNext from "../../public/assets/projects/mozNext.jpeg";
import ProjectItem from "@/components/ProjectItem";


export default function Projects() {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto px-2 py-16">
        <h2 className="py-4">Projetos</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            tittle="Educação sem distância"
            backgroundImg={mozNext}
            country='Moçambique'
            projectUrl="/projectNext"
          />
        </div>
      </div>
    </div>
  );
}
