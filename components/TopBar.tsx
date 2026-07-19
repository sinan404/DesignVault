'use client';

import { Search, Bell, ChevronRight, Plus } from 'lucide-react';

export default function TopBar() {
  return (
    <header className="h-[68px] bg-white border-b-[0.5px] border-[#cdcdcd] flex items-center justify-between px-8">
      {/* Search */}
      <div className="flex items-center gap-3 h-[35px] w-[558px] px-[10px] border border-[#d7d5d5] rounded-[4px]">
        <Search size={18} className="text-[#414141]" />
        <input
          type="text"
          placeholder="Search anything..."
          className="flex-1 text-[13px] font-[family-name:var(--font-poppins)] text-[#414141] placeholder:text-[#414141] outline-none bg-transparent"
        />
      </div>

      {/* Right side */}
      <div className="flex items-center gap-[17px]">
        <button className="flex items-center gap-[11px] h-[37px] px-[25px] bg-[#5735e5] rounded-[3px] text-white">
          <Plus size={20} />
          <span className="text-[13px] font-[family-name:var(--font-poppins)] font-medium capitalize whitespace-nowrap">
            New Project
          </span>
        </button>

        <button className="relative">
          <Bell size={24} className="text-[#414141]" />
          <span className="absolute -top-0.5 -right-0.5 w-[11px] h-[11px] bg-red-500 rounded-full border-2 border-white" />
        </button>

        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#2b7fff] flex items-center justify-center">
            <span className="text-white text-[11px] font-bold font-[family-name:var(--font-inter)]">AC</span>
          </div>
          <div className="flex flex-col">
            <p className="text-[12px] font-[family-name:var(--font-poppins)] font-semibold text-[#07121e]">
              Alex Chen
            </p>
            <p className="text-[10px] font-[family-name:var(--font-poppins)] text-[#69737d]">
              alex@studio.co
            </p>
          </div>
          <ChevronRight size={18} className="text-[#6a7282] ml-1" />
        </div>
      </div>
    </header>
  );
}