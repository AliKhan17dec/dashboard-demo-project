// components/Header.tsx
'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { BiBell } from "react-icons/bi";
import { IoMdMore } from "react-icons/io";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      // Changed to xl breakpoint (1280px)
      setIsMobileView(window.innerWidth < 1406);
    };

    // Initial check
    checkScreenSize();

    // Add event listener
    window.addEventListener('resize', checkScreenSize);

    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-black border-b border-gray-800 px-6 py-3 flex items-center justify-between relative">
      {/* Left side - Hamburger Menu */}
      <div className="flex items-center space-x-4">
        {/* Hamburger Menu Button - Show on screens less than xl */}
        {isMobileView && (
          <button
            onClick={toggleMobileMenu}
            className="p-2 bg-black rounded-full border-1 border-[#767676] mr-2"
          >
            {isMobileMenuOpen ? (
              <HiX className="h-5 w-5 text-white font-bold" />
            ) : (
              <HiMenu className="h-5 w-5 text-white font-bold" />
            )}
          </button>
        )}

        {/* Desktop Content - Hide on screens less than xl */}
        <div className={`${isMobileView ? 'hidden' : 'flex'} items-center space-x-4 2xl:space-x-12 text-xs 2xl:text-md`}>
          <div className="items-center space-x-2">
            <div className="text-[#FFFFFF] font-arima leading-none tracking-normal" style={{ background: 'linear-gradient(to bottom, #FFFFFF, #767676)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Balance</div>
            <div className="text-white font-bold">$10,500.00</div>
          </div>

          <div className="items-center space-x-2">
            <div className="text-[#FFFFFF] font-arima leading-none tracking-normal" style={{ background: 'linear-gradient(to bottom, #FFFFFF, #767676)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Equity</div>
            <div className="text-white font-bold">$10,660.00</div>
          </div>

          <div className="flex items-center space-x-2">
            {/* Ring / Circular Progress Indicator */}
            <div className="relative w-6 h-6">
              <svg className="w-full h-full" viewBox="0 0 24 24">
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="#333"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="#FF5722"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray="62.83"
                  strokeDashoffset={62.83 - (560 / 660) * 62.83}
                  transform="rotate(-90 12 12)"
                />
              </svg>
            </div>

            {/* Text Content */}
            <div>
              <div className="text-[#FFFFFF] font-arima leading-none tracking-normal" style={{ background: 'linear-gradient(to bottom, #FFFFFF, #767676)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Margin Used / Free
              </div>
              <div className="text-white font-bold">$560.00 / 660.00</div>
            </div>
          </div>

          <div className="items-center space-x-2">
            <div className="text-[#FFFFFF] font-arima leading-none tracking-normal" style={{ background: 'linear-gradient(to bottom, #FFFFFF, #767676)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Margin Level</div>
            <div className="text-white font-bold">205.30%</div>
          </div>

          <div className="items-center space-x-2">
            <div className="text-[#FFFFFF] font-arima leading-none tracking-normal" style={{ background: 'linear-gradient(to bottom, #FFFFFF, #767676)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Total Unrealized P/L</div>
            <div className="text-[#2FD77B] font-bold">$2,304.02</div>
          </div>

          <div className="items-center space-x-2">
            <div className="text-[#FFFFFF] font-arima leading-none tracking-normal" style={{ background: 'linear-gradient(to bottom, #FFFFFF, #767676)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Time Zone</div>
            <div className="text-white font-bold">13:31:08 (6+)</div>
          </div>
        

        {/* Search - Only show on desktop (xl and above) */}
        {!isMobileView && (
          <div
            className="relative rounded-full p-[1px] w-fit"
            style={{
              background:
                "linear-gradient(135deg, #767676 0%, #0B0B0B 26%, #767676 100%)",
            }}
          >
            {/* INNER INPUT WRAPPER with dark background */}
            <div className="rounded-full bg-[#111111] flex items-center pl-3 pr-10 py-2">
              <input
                type="text"
                placeholder="Search Instruments"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent text-white text-sm focus:outline-none placeholder:text-[#A5A5A5] w-40"
              />

              {/* Gradient Search Icon */}
              <div className="absolute right-2 top-1/2 -translate-y-1/2">
                <div className="p-[6px] rounded-full bg-gradient-to-b from-black to-[#E85102] shadow-[0_0_10px_#E85102]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      </div>

      {/* Mobile Menu Overlay - Show on screens less than xl */}
      {isMobileView && isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-black border-b border-gray-800 z-50 p-6">
          {/* Search Bar in Mobile Menu */}
          <div className="mb-6">
            <div
              className="relative rounded-full p-[1px] w-full"
              style={{
                background:
                  "linear-gradient(135deg, #767676 0%, #0B0B0B 26%, #767676 100%)",
              }}
            >
              {/* INNER INPUT WRAPPER with dark background */}
              <div className="rounded-full bg-[#111111] flex items-center pl-3 pr-10 py-2">
                <input
                  type="text"
                  placeholder="Search Instruments"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent text-white text-sm focus:outline-none placeholder:text-[#A5A5A5] w-full"
                />

                {/* Gradient Search Icon */}
                <div className="absolute right-2 top-1/2 -translate-y-1/2">
                  <div className="p-[6px] rounded-full bg-gradient-to-b from-black to-[#E85102] shadow-[0_0_10px_#E85102]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Account Selector and Bell Icon in Mobile Menu */}
          <div className="flex items-center space-x-4 mb-6">
            {/* Account Selector in Mobile Menu */}
            <div className="flex-1">
              <div
                className="relative rounded-full p-[1px] w-full"
                style={{
                  background:
                    "linear-gradient(135deg, #767676 0%, #0B0B0B 26%, #767676 100%)",
                }}
              >
                <div className="rounded-full bg-[#111111] relative">
                  <select
                    className="bg-transparent text-white px-4 py-2 pr-8 rounded-full text-sm appearance-none focus:outline-none w-full"
                  >
                    <option>Main USD Account</option>
                  </select>

                  {/* Dropdown Arrow Icon */}
                  <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Bell Icon in Mobile Menu */}
            <button className="p-2 bg-black rounded-full border-1 border-[#767676] flex-shrink-0">
              <BiBell className="h-5 w-5 text-white font-bold" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="items-center space-y-2">
              <div className="text-[#FFFFFF] font-arima leading-none tracking-normal" style={{ background: 'linear-gradient(to bottom, #FFFFFF, #767676)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Balance</div>
              <div className="text-white font-bold">$10,500.00</div>
            </div>

            <div className="items-center space-y-2">
              <div className="text-[#FFFFFF] font-arima leading-none tracking-normal" style={{ background: 'linear-gradient(to bottom, #FFFFFF, #767676)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Equity</div>
              <div className="text-white font-bold">$10,660.00</div>
            </div>

            <div className="flex items-center space-x-2 col-span-2">
              <div className="relative w-6 h-6">
                <svg className="w-full h-full" viewBox="0 0 24 24">
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="#333"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="#FF5722"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray="62.83"
                    strokeDashoffset={62.83 - (560 / 660) * 62.83}
                    transform="rotate(-90 12 12)"
                  />
                </svg>
              </div>
              <div>
                <div className="text-[#FFFFFF] font-arima leading-none tracking-normal" style={{ background: 'linear-gradient(to bottom, #FFFFFF, #767676)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Margin Used / Free
                </div>
                <div className="text-white font-bold">$560.00 / 660.00</div>
              </div>
            </div>

            <div className="items-center space-y-2">
              <div className="text-[#FFFFFF] font-arima leading-none tracking-normal" style={{ background: 'linear-gradient(to bottom, #FFFFFF, #767676)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Margin Level</div>
              <div className="text-white font-bold">205.30%</div>
            </div>

            <div className="items-center space-y-2">
              <div className="text-[#FFFFFF] font-arima leading-none tracking-normal" style={{ background: 'linear-gradient(to bottom, #FFFFFF, #767676)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Total Unrealized P/L</div>
              <div className="text-[#2FD77B] font-bold">$2,304.02</div>
            </div>

            <div className="items-center space-y-2">
              <div className="text-[#FFFFFF] font-arima leading-none tracking-normal" style={{ background: 'linear-gradient(to bottom, #FFFFFF, #767676)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Time Zone</div>
              <div className="text-white font-bold">13:31:08 (6+)</div>
            </div>
          </div>
        </div>
      )}

      {/* Right side - Profile Only - Always visible */}
      <div className="flex items-center space-x-4">
        {/* Select with gradient border - Hide on screens less than xl */}
        {!isMobileView && (
          <div
            className="relative rounded-full p-[1px] w-fit"
            style={{
              background:
                "linear-gradient(135deg, #767676 0%, #0B0B0B 26%, #767676 100%)",
            }}
          >
            <div className="rounded-full bg-[#111111] relative">
              <select
                className="bg-transparent text-white px-4 py-2 pr-8 rounded-full text-sm appearance-none focus:outline-none w-54"
              >
                <option>Main USD Account</option>
              </select>

              {/* Dropdown Arrow Icon */}
              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>
        )}

        {/* Bell Icon - Hide on screens less than xl */}
        {!isMobileView && (
          <button className="p-2 bg-black rounded-full border-1 border-[#767676]">
            <BiBell className="h-5 w-5 text-white font-bold" />
          </button>
        )}

        {/* Profile - Always visible */}
        <div
          className="rounded-full p-[1px] w-fit flex items-center"
          style={{
            background:
              "linear-gradient(135deg, #767676 0%, #0B0B0B 26%, #767676 100%)",
          }}
        >
          {/* Inner content */}
          <div className="flex items-center space-x-2 rounded-full bg-[#111111] px-1 pr-2">
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <Image
                src="/Group 3 1.png"
                alt="Alex Rade"
                width={32}
                height={32}
                className="object-cover"
              />
            </div>

            <div className="text-sm">
              <div className="text-white font-medium">Alex Rade</div>
              <div className="text-[#767676] text-xs">ID: 944 869 XD</div>
            </div>

            <IoMdMore className="h-8 w-8 text-[#FF5800] font-bold" />
          </div>
        </div>
      </div>
    </header>
  );
}