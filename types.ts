
export enum Screen {
  Welcome = 'WELCOME',
  Login = 'LOGIN',
  SignUp = 'SIGNUP',
  Dashboard = 'DASHBOARD',
  SellCard = 'SELL_CARD',
  TradeProgress = 'TRADE_PROGRESS',
  Wallet = 'WALLET',
  History = 'HISTORY',
  Settings = 'SETTINGS'
}

export interface Transaction {
  id: string;
  asset: string;
  amount: number;
  currency: string;
  status: 'COMPLETED' | 'PENDING' | 'FAILED';
  time: string;
  icon: string;
  color?: string;
}

export interface GiftCardRate {
  asset: string;
  rate: number;
  icon: string;
}
