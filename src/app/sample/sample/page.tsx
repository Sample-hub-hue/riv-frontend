"use client"
import React, { useState } from 'react';
import Ring from "../../components/backgorundRing";
import Image from "next/image";
import Link from "next/link";
import Google from '../../../../public/assets/google.svg';
import Linkedin from '../../../../public/assets/LinkedIn .png'; // Removed extra space in filename
import UserDetails from '../../components/userdetail';  // Import the UserDetails component
import CompanyDetails from '@/app/components/companydetails';

export default function Signup() {

  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isCompanyModalOpen, setIsCompanyModalOpen] = useState(false);

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCompanyModalOpen(true); // Show the ProfileModal when the signup form is submitted
  };

  const handleProfileComplete = () => {
    setIsProfileModalOpen(false); // Close ProfileModal
    // Further logic for after profile is complete...
  };

  const handleCompanyComplete = () => {
    setIsCompanyModalOpen(true);
    setIsProfileModalOpen(false);
  }

  return (
    <div>
      <Ring />
      <div className="absolute mt-20">
        <div className="w-[35vw] ml-[4vw] mt-[6vh] flex flex-col gap-[1vh] text-black text-center font-montserrat text-[2.5vw] font-semibold leading-[-3%]">
          Create your account
          <span className="text-black font-dm-sans text-[18.333px] font-light leading-normal">Let's get you started real quick</span>
        </div>

        <div className="mt-[3vh] w-[30vw] ml-[6vw] flex justify-around items-center">
          <form
            className="pt-[4vh] pb-[4vh] w-[30vw] flex flex-col gap-[1.5vh] items-center rounded-[28.333px] bg-white shadow-[0px_4.167px_13.333px_rgba(8,15,52,0.12)]"
            onSubmit={handleSignup}
          >
            <div className="flex flex-col gap-[1vh]">
              <label htmlFor="email" className="text-black font-dm-sans text-[1vw] font-medium leading-[16.667px]">Email Address</label>
              <input type="email" id="email" className="w-[22vw] h-[6vh] flex-shrink-0 rounded-[2vw] text-[1vw] bg-white border border-[#EFF0F6] shadow-[0px_1.667px_5px_rgba(19,18,66,0.07)] pl-[2vw]" placeholder="✉️ Enter your email" required />
            </div>
            <div className="flex flex-col gap-[1vh]">
              <label htmlFor="password" className="text-black font-dm-sans text-[1vw] font-medium leading-[16.667px]">Password</label>
              <input type="password" id="password" className="w-[22vw] h-[6vh] flex-shrink-0 rounded-[2vw] text-[1vw] bg-white border border-[#EFF0F6] shadow-[0px_1.667px_5px_rgba(19,18,66,0.07)] pl-[2vw]" placeholder="🔒 Enter your password" required />
            </div>
            <div className="flex flex-col gap-[1vh]">
              <label htmlFor="confirmPassword" className="text-black font-dm-sans text-[1vw] font-medium leading-[16.667px]">Confirm Password</label>
              <input type="password" id="confirmPassword" className="w-[22vw] h-[6vh] flex-shrink-0 rounded-[2vw] text-[1vw] bg-white border border-[#EFF0F6] shadow-[0px_1.667px_5px_rgba(19,18,66,0.07)] pl-[2vw]" placeholder="🔒 Re-Enter your password" required />
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="termscheck" name="check" required className="mr-2" />
              <label htmlFor="termscheck" className="text-black font-dm-sans">
                By creating an account, I agree with Your <a href="#" className="text-blue-600">Terms and conditions</a>
              </label>
            </div>
            <div className="flex">
              <button type="submit" className="flex text-white text-xl text-bold w-[22vw] h-[7vh] justify-center items-center gap-[6.667px] flex-shrink-0 rounded-[71.667px] bg-[#040924] shadow-[0px_6.667px_18.333px_rgba(74,58,255,0.26)]">Signup</button>
            </div>
            <div className="flex items-center justify-between gap-[2vw]">
              <hr className="border-none bg-[#EFF0F6] my-[20px] w-[150px] h-[0.833px]" />
              <p className="text-[#6F6C90] text-center font-dm-sans text-[13.333px] font-normal leading-[15px]">Or</p>
              <hr className="border-none bg-[#EFF0F6] my-[20px] w-[150px] h-[0.833px]" />
            </div>
            <div className="flex w-[7vw] justify-between">
              <Image src={Google} className="w-full h-full max-w-[3vw] p-[0.2vw] border-2 rounded-full border-[rgba(196,196,196,0.49)]" alt="Google" />
              <Image src={Linkedin} className="w-full h-full max-w-[3vw] p-[0.2vw] border-2 rounded-full border-[rgba(196,196,196,0.49)]" alt="LinkedIn" />
            </div>
            <div className="text-black font-dm-sans text-[11.743px] font-normal leading-normal flex w-[10vw] justify-between">
              <p>New to Platform?</p>
              <Link href="/auth/login"><p className="underline text-blue-800">Log in</p></Link>
            </div>
          </form>
        </div>
      </div>

      {/* Conditional rendering for the UserDetails modal */}
      {isProfileModalOpen && (
        <>
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-40" /> {/* Background opacity */}
          <CompanyDetails />
        </>
      )}

      {isCompanyModalOpen && (
        <>
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-40" /> {/* Background opacity */}
          <CompanyDetails />
        </>
      )}

    </div>
  );
}

