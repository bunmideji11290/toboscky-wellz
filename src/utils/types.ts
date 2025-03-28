// src/utils/types.ts
export interface Account {
  account_id: string;
  holder: {
    firstName?: string;
    lastName?: string;
    jointNames: string;
    username: string;
    password: string;
  };
  bank_details: {
    account_number?: string;
    account_type: string;
    balance_usd: number;
    savings_balance_usd?: number;
    investment_balance_usd?: number;
  };
  transaction_mgs_code: {
    transaction_text_msg?: string;
    transaction_code?: string;
    wireDate: boolean;
  };
  transaction_history: Transaction[];
}

export interface Transaction {
  transaction_id: string;
  dateTime: string;
  // time: string;
  description: string;
  status: string;
  amount_usd: number;
  account_no: string;
}