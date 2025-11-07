// components/Sidebar.tsx
'use client';


import Image from 'next/image';
import { useState } from 'react';
import { MdWindow } from "react-icons/md";
import { BiPlus } from "react-icons/bi";
import { PiSwapLight } from "react-icons/pi";
import { PiChartBar } from "react-icons/pi";
import { IoWalletSharp } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { PiHeadsetThin } from "react-icons/pi";

export default function Sidebar() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <aside className="fixed left-0 top-0 h-screen w-16 bg-black border-r border-gray-800 flex flex-col items-center pt-2 space-y-20 2xl:space-y-60">
      <div className=''>
        <div className="w-14 h-14  rounded-lg flex items-center justify-center relative">
          <Image
            src="/Frame 2147239689.png" // Replace with actual path (e.g., public/logo.png)
            alt="Logo"
            width={94}
            height={94}
            className="object-contain text-white"
          />
        </div>
        <div className="w-14 h-14 rounded-lg flex items-center justify-center relative">
  {/* Left vertical bar — aligned to left edge */}
  <div className="absolute left-0 top-1/2 -translate-y-1/2 h-7 w-1 bg-[#E85102] rounded-r-md"></div>
  
  {/* Centered icon */}
  <MdWindow className="h-8 w-8 text-white font-bold bg-gradient-to-b from-black to-[#E85102] p-[5px] rounded-full" />
</div>

        <div className="w-14 h-14  rounded-lg flex items-center justify-center relative">
          <BiPlus className="h-8 w-8 text-white font-bold " />

        </div>

        <div className="w-14 h-14  rounded-lg flex items-center justify-center relative">
          <PiSwapLight className="h-7 w-7 text-white font-bold " />

        </div>

        <div className="w-14 h-14  rounded-lg flex items-center justify-center relative">
          <PiChartBar className="h-7 w-7 text-white font-bold " />

        </div>

        <div className="relative w-10 h-10 rounded-lg flex items-center justify-center mx-auto mt-5">
          {/* Gradient border */}
          <div
            className="absolute inset-0 rounded-lg p-[1px]"
            style={{
              background: "linear-gradient(145deg, #929292, #0B0B0B 26%, #E54F00)",
            }}
          >
            {/* Inner content with gradient background */}
            <div
              className="w-full h-full rounded-lg flex items-center justify-center"
              style={{
                background: "linear-gradient(145deg, #333333, #111111, #6E2600)",
                boxShadow: "0px 0px 15px rgba(229, 79, 0, 0.15)",
              }}
            >
              <IoWalletSharp className="h-6 w-6 text-[#D9D9D9] font-bold" />
            </div>
          </div>
        </div>
      </div>





      {/* Quick gradient border */}
      <div
  className="p-[1px] rounded-full mx-auto w-fit"
  style={{
    background:
      "linear-gradient(135deg, #767676 0%, #0B0B0B 26%, #767676 100%)",
  }}
>
  <div className="flex flex-col items-center space-y-1 rounded-full bg-[#111111] px-1 py-2">
    
    {/* Settings */}
    <div className="w-10 h-10 rounded-lg flex items-center justify-center">
      <IoSettingsOutline className="h-5 w-5 text-white" />
    </div>

    {/* Headset */}
    <div className="w-10 h-10 rounded-lg flex items-center justify-center">
      <PiHeadsetThin className="h-5 w-5 text-white" />
    </div>

  </div>
</div>


    </aside>
  );
}