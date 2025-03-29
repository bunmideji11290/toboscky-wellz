"use client"

import React, { useState } from "react";

export default function CodeForm({ user, showIssueMsg, loading, setLoading }:any) {
  const [otp, setOtp] = useState<string>("");
  const [initialOtp] = useState<string>(user?.transaction_mgs_code.transaction_code); // Initial OTP stored in state
  const [error, setError] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOtp(e.target.value);
    setError(""); // Reset the error message when the user starts typing
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!otp) {
      setError("Please enter the code sent to you");
    } else {
      if (otp !== initialOtp) {
        setError("Wrong code");
        return;
      }

      setLoading(true);
      // Simulate a network request or any asynchronous operation
      setTimeout(() => {
        setLoading(false);
        showIssueMsg();
      }, 1000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="">
        <div className="hidden">
            <input type="number" value={initialOtp} placeholder="Enter 6 digit number" className="p-2 border rounded-sm w-full outline-none"  />
        </div>
        <div className="mb-3">
          <input type="number" name="otp" value={otp} onChange={handleChange} placeholder="Enter 6 digit number" className="p-3 border rounded-sm w-full outline-none"/>
        </div>
        {error && <div className="my-3 text-red-500">{error}</div>}
      <button
        className="w-full bg-[#d71e28] text-white p-[10px]"
        disabled={loading}
      >
        {loading ? "Loading..." : "Transfer"}
      </button>
    </form>
  );
}
