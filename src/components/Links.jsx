import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

function Links() {
  return (
    <div className="flex items-center justify-center gap-[50px]  py-4">
      <div
        className="rounded-[100%] shadow-lg shadow-gray-400 p-6 cursor-pointer 
hover:scale-110 ease-in duration-300"
      >
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn className="max-h-[16px]" />
        </a>
      </div>

      <div className="rounded-[100%] shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
        <a href="mailto:ermyjr94@gmail.com">
          <AiOutlineMail className="max-h-[16px]" />
        </a>
      </div>

      <div
        className="rounded-[100%] shadow-lg shadow-gray-400 p-6 cursor-pointer 
  hover:scale-110 ease-in duration-300"
      >
        <a href="https://contate.me/ermyjr" target="_blank" rel="noreferrer">
          <FaWhatsapp className="max-h-[16px]" />
        </a>
      </div>
    </div>
  );
}

export default Links;
