"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image";
import { mockAccounts } from "../mockData/MockData";

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userAccount = mockAccounts.find(
      (account) => account.holder.username === username
    );
    if (!userAccount) {
      setError("User not found");
      return;
    }
    if (userAccount.holder.password !== password) {
      setError("Invalid password");
      return;
    }
    // Store user data in localStorage
    localStorage.setItem("loggedInUser", JSON.stringify(userAccount));
    router.push("/dashboard");
  };

  return (
    <div className="">
      <div className="h-screen bg-[#117ACA]">
        <div className="pt-12">
          <div className="flex items-center justify-center mb-2">
            <Image
              src="https://i.imgur.com/ncqDTSy.png"
              width={100}
              height={100}
              className="w-[200px] h-[40px]"
              alt="logo"
            />
          </div>
          <div className="mt-24">
            {error && (
              <p className="text-[20px] my-4 text-center mx-auto max-w-[200px] rounded-md min-h-[50px] flex items-center justify-center bg-[#2d1a47] text-white">
                {error}
              </p>
            )}
          </div>
          
          <div className="bg-white mx-auto rounded-xl max-w-[400px] p-7">
            <form onSubmit={handleLogin}>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                  <label
                    htmlFor="Username"
                    className="text-[#5c5c5c] text-[16px]"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    value={username}
                    className="p-4 rounded-[10px] text-[#5c5c5c] bg-transparent pb-5 border border-gray-300 outline-none"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label
                    htmlFor="password"
                    className="text-[#5c5c5c] text-[16px]"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    className="p-4 rounded-[10px] text-[#5c5c5c] bg-transparent pb-5 border border-gray-300 outline-none"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 mt-6">
                <button
                  type="submit"
                  className="p-4 bg-[#117aca] text-white font-semibold w-full rounded-[10px]"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
