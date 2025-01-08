import Image from "next/image";
import Logo from '../../../public/assets/logo_main.png';

export default function Ring() {
  return (
    <div className="fixed w-screen h-screen"> {/* Wrapper with overflow-hidden */}
      <div className="left-10 w-full h-[5vh] relative top-[2vh] flex items-center gap-[0.5vw]">
        <Image className="w-auto h-auto" src={Logo} alt="Logo" />
        <span className="text-black text-center text-[15.761px] font-syne font-bold leading-normal">
          RIVELY
        </span>
      </div>

      <div className="absolute right-[-10%] top-9 w-[1056px] h-[1056px] overflow-hidden">
        <div className="top-0 left-0 w-[1056px] h-[1056px] border-4 border-[#1C4F82] rounded-full flex justify-center items-center">
          <div className="absolute w-[813.12px] h-[813.12px] border-4 border-[#888] rounded-full flex flex-col justify-center items-center">
          </div>
        </div>
      </div>

      <div className="hidden md:block">
        <div className="absolute bottom-[74%] right-20 bg-white p-6 rounded-xl shadow-lg max-w-sm transform hover:-translate-y-1 transition-transform duration-200">
          <p className="text-lg font-medium">
            Airtable and Notion are two highly rated project
          </p>
          <p className="text-sm text-gray-500 mt-2">-India Today</p>
        </div>
        <div className="absolute bottom-[44%] right-40 bg-[#040924] text-white p-6 rounded-xl shadow-lg max-w-sm transform hover:-translate-y-1 transition-transform duration-200">
          <p className="text-lg font-medium">
            Moon Pay now offers Tether (ERC -20) swaps with no processing fee and has earned an ISO 27001 Certification.
          </p>
          <p className="text-sm text-yellow-400 mt-2">- The Hindu</p>
        </div>
        <div className="absolute bottom-[16%] right-36 bg-white p-6 rounded-xl shadow-lg max-w-sm transform hover:-translate-y-1 transition-transform duration-200">
          <p className="text-lg font-medium">
            Airtable and Notion are two highly rated project management software solutions.
          </p>
          <p className="text-sm text-gray-500 mt-2">-India Today</p>
        </div>
      </div>
    </div>
  );
}
