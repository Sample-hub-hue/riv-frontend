import Image from "next/image";
import Logo from '../../../public/assets/logo_main.png';


export default function Ring() {
  return (
    <div className="fixed w-screen h-screen overflow-hidden"> {/* Wrapper with overflow-hidden */}
      <div className="left-10 w-full h-[5vh] relative top-[2vh] flex items-center gap-[0.5vw]">
        <Image className="w-auto h-auto" src={Logo} alt="Logo" />
        <span className="text-black text-center text-[15.761px] font-syne font-bold leading-normal">
          RIVELY
        </span>
      </div>

      <div className="absolute right-[-7vw] top-0 w-[55vw] h-[55vw]"> {/* Adjusted position to allow part of the ring to go out of view */}
        <div className="absolute top-0 left-0 w-full h-full border-4 border-[#1C4F82] rounded-full flex justify-center items-center">
          <div className=" absolute w-[77%] h-[77%] border-4 border-[#888] rounded-full flex justify-center items-center">
          </div>
        </div>
      </div>
    </div>
  );
}
