"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Account, Transaction } from "@/utils/types";
import Link from "next/link";
import TransactionHistory from "./TransactionHistory";
import Header from "./header/Header";
import { formatCurrency } from "../formatCurrency";

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<Account | null>(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    } else {
      router.push("/");
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    router.push("/");
  };

  const showAlert = () => {
    alert("Contact your bank to open an account");
  };

  if (!user) {
    return <div>Loading, please wait...</div>;
  }

  const date = new Date();
  const hour = date.getHours();

  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="">
      <Header handleLogout={handleLogout} user={user} />
      <div className="w-[100%] p-[20px] bg-[#d71e28] relative">
        <div className="text-white text-[14px]">
          {hour >= 12
            ? hour >= 17
              ? "Good evening"
              : "Good afternoon"
            : "Good morning"}{" "}
          {user.holder.jointNames && (
            <>
              <br />{" "}
              <span className=" text-lg">
                Joint account of: <br />
              </span>
            </>
          )}
          {user.holder.jointNames ? (
            <span className="font-medium text-lg">
              {" "}
              {user.holder.jointNames}
            </span>
          ) : (
            <span className="font-medium text-lg">
              {" "}
              {user.holder.firstName}
            </span>
          )}
          <br />
          {currentDate}
          <div className="flex items-center gap-[10px] mt-[10px]">
            <div className="p-[5px_20px] rounded-full bg-white text-[#d71e28] text-[12px]">
              +
            </div>
            <Link
              className="p-[5px_20px] rounded-full bg-white text-[#d71e28] text-[12px]"
              href="/dashboard/transfer"
            >
              Send money
            </Link>
          </div>
        </div>
      </div>
      <div className="p-[20px]">
        <div className="flex justify-between items-center mb-[20px]">
          <span className="text-[18px] font-[500]">Accounts</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            ></path>
          </svg>
        </div>
        <div className="flex flex-col gap-3">
          <div className="w-full rounded-[5px] overflow-hidden border border-[#d71e28]">
            <div className="p-[10px_20px] bg-[#d71e28] text-white text-[14px]">
              Bank accounts(1)
            </div>
            <div className="p-[10px_20px]">
              <p className="text-[12px]">CHECKING ACCOUNT</p>
              <div className="flex justify-end">
                <div className="font-[400] text-[20px] flex flex-col items-end">
                  {formatCurrency(user.bank_details.balance_usd)}
                  <br />
                  <span className="text-[12px] text-right">
                    Available balance
                  </span>
                </div>
              </div>
            </div>
          </div>
          {user.bank_details.savings_balance_usd && (
            <div className="w-full rounded-[5px] overflow-hidden border border-[#d71e28]">
              <div className="p-[10px_20px] bg-[#d71e28] text-white text-[14px]">
                Bank accounts(2)
              </div>
              <div className="p-[10px_20px]">
                <p className="text-[12px]">SAVINGS ACCOUNT</p>
                <div className="flex justify-end">
                  <div className="font-[400] text-[20px] flex flex-col items-end">
                    {formatCurrency(user.bank_details.savings_balance_usd)}
                    <br />
                    <span className="text-[12px] text-right">
                      Available balance
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
          {user.bank_details.investment_balance_usd && (
            <div className="w-full rounded-[5px] overflow-hidden border border-[#d71e28]">
              <div className="p-[10px_20px] bg-[#d71e28] text-white text-[14px]">
                Bank accounts(3)
              </div>
              <div className="p-[10px_20px]">
                <p className="text-[12px]">INVESTMENTS ACCOUNT</p>
                <div className="flex justify-end">
                  <div className="font-[400] text-[20px] flex flex-col items-end">
                    {formatCurrency(user.bank_details.investment_balance_usd)}
                    <br />
                    <span className="text-[12px] text-right">
                      Available balance
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <button
        className="w-[90%] mx-auto border border-dashed border-zinc-400 p-[10px_20px] rounded flex items-center justify-center gap-[5px] mb-[20px]"
        onClick={showAlert}
      >
        <span>+</span>
        <span>Open an account</span>
      </button>
      <div className="w-[90%] mx-auto border border-zinc-400 rounded-md overflow-hidden">
        <div className="p-[20px] border-b border-zinc-400 flex justify-between items-center">
          <div className="flex items-center gap-[10px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"
              ></path>
            </svg>
            <p className="leading-[1]">
              <span className="text-[14px] text-zinc-700">
                Spending summary
              </span>
              <br />
              <span className="text-[12px] text-zinc-500">
                See your spending by category
              </span>
            </p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            ></path>
          </svg>
        </div>
        <div className="p-[20px] flex justify-between items-center">
          <div className="flex items-center gap-[10px]">
            <svg
              className="w-[24px] h-[24px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm320 96c0-26.9-16.5-49.9-40-59.3V88c0-13.3-10.7-24-24-24s-24 10.7-24 24V292.7c-23.5 9.5-40 32.5-40 59.3c0 35.3 28.7 64 64 64s64-28.7 64-64zM144 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-16 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM400 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path>
            </svg>
            <p className="leading-[1]">
              <span className="text-[14px] text-zinc-700">Credit journey</span>
              <br />
              <span className="text-[12px] text-zinc-500">
                Check your free credit score
              </span>
            </p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            ></path>
          </svg>
        </div>
      </div>
      <TransactionHistory user={user} />
    </div>
  );
}
