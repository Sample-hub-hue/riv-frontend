"use client"
import Image from "next/image";
import Link from "next/link";
import Google from '../../../../public/assets/google.svg';
import Linkedin from '../../../../public/assets/LinkedIn .png';
import Ring from "../../components/backgorundRing";


export default function Home() {
  return (
    <div className="">
      <Ring />
      <div className="">
        <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="flex flex-col items-center text-black text-center mt-[8vh] ml-[4vw] w-[35vw] gap-[2vh] font-semibold text-[4vw] leading-[calc(-3%)]">
            Welcome Back
            <span/>
            <span className="text-black font-light text-[18.333px] font-sans leading-normal">
              Log in to see what your competitors are up to
            </span>
          </div>

          <div className="justify-items-center mt-[3vh] w-[30vw] ml-[6vw] flex justify-center items-center">
            <form className="flex flex-col items-center gap-[3vh] pt-[4vh] pb-[4vh] w-[30vw] bg-white rounded-[28.333px] shadow-[0px_4.167px_13.333px_0px_rgba(8,15,52,0.12)]">
              <div className="pl-10 flex flex-col gap-[1vh] w-full">
                <label htmlFor="email" className="text-black font-medium text-[1vw] leading-[16.667px] font-sans">
                  Email Address
                </label>
                <input type="email" id="email" className="w-[22vw] h-[6vh] bg-white text-black border border-[#EFF0F6] shadow-[0px_1.667px_5px_rgba(19,18,66,0.07)] rounded-[2vw] text-[1vw] pl-[2vw] pr-[2vw]" placeholder="✉️ Enter your email" />
              </div>

              <div className="pl-10 flex flex-col gap-[1vh] w-full">
                <span className="flex justify-between items-center">
                  <label htmlFor="password" className="text-black font-medium text-[1vw] leading-[16.667px] font-sans">
                    Password
                  </label>
                  <a href="#" className="pr-10 text-[#8A8A8A] text-[0.8vw] font-medium leading-[16.667px] font-sans">Forgot Password?</a>
                </span>
                <input type="password" id="password" className="w-[22vw] h-[6vh] bg-white text-black border border-[#EFF0F6] shadow-[0px_1.667px_5px_rgba(19,18,66,0.07)] rounded-[2vw] text-[1vw] pl-[2vw] pr-[2vw]" placeholder="🔒 Enter your password" />
              </div>

              <div className="w-full flex justify-center">
                <button type="submit" className="w-[22vw] h-[7vh] bg-[#040924] text-white rounded-[71.667px] shadow-[0px_6.667px_18.333px_0px_rgba(74,58,255,0.26)] flex justify-center items-center gap-[6.667px]">
                  Login
                </button>
              </div>

              <div className="flex items-center justify-between gap-[2vw] mt-[20px]">
                <hr className="w-[150px] h-[0.833px] bg-[#EFF0F6] border-0" />
                <p className="text-[#6F6C90] text-[13.333px] font-sans leading-[15px]">Or</p>
                <hr className="w-[150px] h-[0.833px] bg-[#EFF0F6] border-0" />
              </div>

              <div className="flex justify-between w-[7vw] mt-[20px]">
                <Image src={Google} className="w-[3vw] h-auto p-[0.2vw] border-2 border-[#C4C4C4] rounded-full" alt="google" />
                <Image src={Linkedin} className="w-[3vw] h-auto p-[0.2vw] border-2 border-[#C4C4C4] rounded-full" alt="linkedin" />
              </div>

              <div className="text-black flex justify-between items-center w-[10vw] mt-[20px]">
                <p className="font-sans text-[11.743px] font-normal">New to Platform?</p>
                <Link href="/auth/signup">
                  <p className="text-[#002094] underline">Sign Up</p>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
