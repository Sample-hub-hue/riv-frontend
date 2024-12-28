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

      <div className="absolute right-[-10%] top-9 w-[55%] h-[110%] overflow-hidden"> {/* Adjusted position to allow part of the ring to go out of view */}
        <div className="top-0 left-0 w-[100%] h-[100%] border-4 border-[#1C4F82] rounded-full flex justify-center items-center">
          <div className="absolute w-[77%] h-[77%] border-4 border-[#888] rounded-full flex flex-col justify-center items-center">
            {/* Change flex from row to column */}
          </div>
        </div>
      </div>
      <div className="absolute flex-row right-0 w-[55%] pl-20 min-h-screen">
        <div className="w-fit pr-10 pb-1 rounded-s pt-1 text-2xl border-2 shadow-black shadow-2xl border-gray-100 mb-2">
          This is an insight from Times Now and HBO Max
        </div>
        <div className="w-fit flex pr-10 pb-1 bg-blue-800 text-white rounded-s pt-1 text-xl shadow-black shadow-2xl rounded-lg border-gray-100">
          This is a very important insight from Times Now and HBO Max, it says that the new counsel of avengers are going to disband their initiative of world peace
        </div>
      </div>
    </div>
  );
}
