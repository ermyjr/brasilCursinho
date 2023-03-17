import { RiRadioButtonFill } from "react-icons/ri";


function Requirements() {
  return (
    <div className="p-2">
      <p className="text-center font-bold pb-2">Requisitos </p>

      <div className="grid grid-cols-2 md:grid-cols-1">
        <p className="text-gray-600 py-2 flex items-center">
          <RiRadioButtonFill className="pr-1" /> Profissional da Educação
        </p>

        <p className="text-gray-600 py-2 flex items-center">
          <RiRadioButtonFill className="pr-1" /> Voluntário
        </p>

        <p className="text-gray-600 py-2 flex items-center">
          <RiRadioButtonFill className="pr-1" /> Iniciativa
        </p>

        <p className="text-gray-600 py-2 flex items-center">
          <RiRadioButtonFill className="pr-1" /> Comprometimento
        </p>

      </div>
    </div>
  );
}

export default Requirements;
