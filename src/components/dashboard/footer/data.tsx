import { FaWallet, FaMoneyBillTransfer } from "react-icons/fa6";
import { BsPencilSquare } from "react-icons/bs";
import { AiOutlineRise } from "react-icons/ai";

export const fMenuLink = [
    {
      label: "Accounts",
      icon: <FaWallet />,
      slug: "/dashboard",
    },
    {
      label: "Pay & Transfer",
      icon: <FaMoneyBillTransfer />,
      slug: "/dashboard/transfer",
    },
    {
      label: "Plan & Track",
      icon: <BsPencilSquare />,
      slug: "",
    },
    {
      label: "Investment",
      icon: <AiOutlineRise />,
      slug: "",
    },
  ];