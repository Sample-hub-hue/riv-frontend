// components/UserDetails.tsx
import React from 'react';

export default function UserDetails() {
  return (

    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-white backdrop-blur-sm bg-opacity-10 shadow-lg z-50">
      <div className="p-6 bg-white rounded-lg shadow-lg max-w-[400px] w-full text-center">
        <div className="absolute w-[550px] h-fit left-[calc(50%-275px+1px)] top-[calc(50%-416.065px+44.57px)] bg-white shadow-[5.03598px_5.03598px_16.259px_rgba(0,0,0,0.25)] rounded-[20.4264px]">
          <div className="flex flex-col justify-center items-center h-full p-4">
            <div className="text-center text-2xl mb-6">
              Help us understand you better
            </div>
            <form>
              <div className="pb-6 flex flex-col gap-[1vh] w-full">
                <label
                  htmlFor="name"
                  className="text-black font-medium text-[1vw] leading-[16.667px] font-sans"
                >
                  Name
                </label>
                <input
                  type="name"
                  id="name"
                  className="w-[22vw] h-[6vh] bg-white text-black border border-[#EFF0F6] shadow-[0px_1.667px_5px_rgba(19,18,66,0.07)] rounded-[2vw] text-[1vw] pl-[2vw] pr-[2vw]"
                  placeholder="Enter your Name"
                />
              </div>

              <div className="pb-6 flex flex-col gap-[1vh] w-full">
                <label
                  htmlFor="position"
                  className="text-black font-medium text-[1vw] leading-[16.667px] font-sans"
                >
                  Role
                </label>
                <input
                  type="role"
                  id="role"
                  className="w-[22vw] h-[6vh] bg-white text-black border border-[#EFF0F6] shadow-[0px_1.667px_5px_rgba(19,18,66,0.07)] rounded-[2vw] text-[1vw] pl-[2vw] pr-[2vw]"
                  placeholder="Enter your Role"
                />
              </div>

              <div className="pb-6 flex flex-col gap-[1vh] w-full">
                <label
                  htmlFor="company-name"
                  className="text-black font-medium text-[1vw] leading-[16.667px] font-sans"
                >
                  Company's Name
                </label>
                <input
                  type="Company's Name"
                  id="cname"
                  className="w-[22vw] h-[6vh] bg-white text-black border border-[#EFF0F6] shadow-[0px_1.667px_5px_rgba(19,18,66,0.07)] rounded-[2vw] text-[1vw] pl-[2vw] pr-[2vw]"
                  placeholder="Enter your Comapny Name"
                />
              </div>

              <div className="pb-6 flex flex-col gap-[1vh] w-full">
                <label
                  htmlFor="company-site"
                  className="text-black font-medium text-[1vw] leading-[16.667px] font-sans"
                >
                  Company's Website
                </label>
                <input
                  type="https://"
                  id="url"
                  className="w-[22vw] h-[6vh] bg-white text-black border border-[#EFF0F6] shadow-[0px_1.667px_5px_rgba(19,18,66,0.07)] rounded-[2vw] text-[1vw] pl-[2vw] pr-[2vw]"
                  placeholder="Enter your URL"
                />
              </div>

              <div className="pb-6 flex flex-col gap-[1vh] w-full">
                <label
                  htmlFor="desc"
                  className="text-black font-medium text-[1vw] leading-[16.667px] font-sans"
                >
                  Company's Description
                </label>
                <input
                  type="Type something"
                  id="desc"
                  className="w-[22vw] h-[6vh] bg-white text-black border border-[#EFF0F6] shadow-[0px_1.667px_5px_rgba(19,18,66,0.07)] rounded-[2vw] text-[1vw] pl-[2vw] pr-[2vw]"
                  placeholder="Enter your Company Description"
                />
              </div>

              <button type="submit" className="justify-center text-white text-xl text-bold w-[14vw] h-[7vh] justify-center items-center gap-[6.667px] flex-shrink-0 rounded-[10px] bg-black ">Next -></button>
            </form>
          </div>
        </div>
      </div>
    </div>
    );
}
