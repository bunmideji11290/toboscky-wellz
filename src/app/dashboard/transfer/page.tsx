import Transfer from "@/components/dashboard/Transfer";
import Link from "next/link";
import React from "react";

export default function TransferPage() {
  return (
    <div>
      <div className="bg-[#d71e28] p-[10px] flex items-center justify-center relative">
        <span className="text-white text-[14px] font-[300]">Transfer</span>
        <Link
          className="text-white absolute right-[10px] text-[14px] font-[300]"
          href="/dashboard"
        >
          Cancel
        </Link>
      </div>
      <Transfer />
    </div>
  );
}
