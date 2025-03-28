"use client";
import { Account, Transaction } from "@/utils/types";
import React, { useState } from "react";
import { formatCurrency } from "../formatCurrency";

interface TransactionHistoryProps {
  user: Account;
}
const TransactionHistory: React.FC<TransactionHistoryProps> = ({ user }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const transactionsToShow = showMore
    ? user.transaction_history
    : user.transaction_history.slice(0, 3);

  return (
    <div className="">
      <div className="w-[90%] mx-auto my-[20px] block">
        <p className="text-[16px] font-[500]">Transaction summary</p>
        <div className="mt-[10px]">
          {transactionsToShow.map((transaction: Transaction) => (
            <div
              key={transaction.transaction_id}
              className="p-[10px] shadow mb-[5px] last:mb-[0] bg-[#f5f5f5]"
            >
              <div className="flex justify-between items-center text-[10px] uppercase font-[300] text-gray-800">
                <span className={`${transaction.status === "Pending" ? "text-red-600" : "text-green-600"}`}>{transaction.status}</span>
                <span>{transaction.dateTime}</span>
              </div>
              <div className="flex justify-between items-center text-[14px] uppercase font-[500] text-gray-800">
                <span>{transaction.description}</span>
                <span className={`${transaction.amount_usd < 0 ? "text-red-600" : ""}`}>{formatCurrency(transaction.amount_usd)}</span>
              </div>
              <div className="flex justify-between items-center text-[10px] uppercase font-[300] text-gray-800">
                <span>{transaction.account_no}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {user.transaction_history.length > 3 && (
        <div className="w-[90%] mx-auto block">
          <span className="text-[14px] font-[300]" onClick={toggleShowMore}>
            {showMore ? "Show Less" : "Show More"}
          </span>
        </div>
      )}
    </div>
  );
};

export default TransactionHistory;
