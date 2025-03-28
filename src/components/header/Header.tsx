"use client";

import Image from "next/image";

export default function Header() {
  return (
    <div className="w-full min-h-[30px] relative flex items-center justify-center bg-[#d71e28] border-b-4 border-[#ffcd41] p-[20px] py-[15px]">
      <Image src="https://i.imgur.com/HCpm00D.png" width={200} height={200} className="w-[150px] h-[15px]" alt="logo" />
    </div>
  );
}
