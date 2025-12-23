
import React, { useState } from 'react';
import { Screen } from '../types';
import { MOCK_RATES } from '../constants';

interface DashboardProps {
  onAction: (screen: Screen) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onAction }) => {
  const [amount, setAmount] = useState<string>('100');
  const [selectedAsset, setSelectedAsset] = useState(MOCK_RATES[0]);

  const receiveAmount = (Number(amount) * selectedAsset.rate).toLocaleString();

  return (
    <div className="flex flex-col gap-6 pt-8">
      {/* Header */}
      <header className="flex items-center justify-between px-6">
        <div>
          <h2 className="text-xl font-bold font-display">Hello, User.</h2>
          <p className="text-text-secondary text-sm">Welcome back</p>
        </div>
        <div className="relative">
          <button className="w-10 h-10 rounded-full bg-surface-dark border border-white/5 flex items-center justify-center hover:bg-white/10">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full ring-2 ring-background-dark" />
        </div>
      </header>

      {/* Balance Card */}
      <section className="px-5">
        <div className="relative w-full rounded-2xl bg-liquid-gradient p-6 overflow-hidden shadow-2xl shadow-primary/30">
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
          <div className="relative z-10 flex flex-col gap-6">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-1">
                <p className="text-indigo-100/70 text-sm font-medium">Total Balance</p>
                <div className="flex items-center gap-3">
                  <h1 className="text-3xl font-mono font-bold">$12,450.00</h1>
                  <button className="text-white/60"><span className="material-symbols-outlined">visibility</span></button>
                </div>
              </div>
              <div className="w-12 h-8 rounded bg-white/10 border border-white/10 flex items-center justify-center">
                <div className="w-8 h-5 border border-white/30 rounded-sm" />
              </div>
            </div>
            <div className="flex gap-3">
              <button 
                onClick={() => onAction(Screen.Wallet)}
                className="flex-1 h-11 rounded-full bg-white text-primary font-bold text-sm flex items-center justify-center gap-2 active:scale-95 transition-transform"
              >
                <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
                Withdraw
              </button>
              <button 
                onClick={() => onAction(Screen.History)}
                className="flex-1 h-11 rounded-full bg-black/20 border border-white/10 text-white font-medium text-sm flex items-center justify-center gap-2 hover:bg-black/30 active:scale-95 transition-all"
              >
                <span className="material-symbols-outlined text-[18px]">history</span>
                History
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="flex overflow-x-auto no-scrollbar gap-6 px-6 py-2">
        <QuickActionButton icon="sell" label="Sell Card" onClick={() => onAction(Screen.SellCard)} />
        <QuickActionButton icon="payments" label="Pay Bills" onClick={() => {}} />
        <QuickActionButton icon="call" label="Airtime" onClick={() => {}} />
        <QuickActionButton icon="support_agent" label="Support" onClick={() => {}} />
      </section>

      {/* Calculator */}
      <section className="px-5">
        <h3 className="text-lg font-bold mb-3 px-1">Rate Calculator</h3>
        <div className="glass-panel rounded-xl p-5 space-y-4">
          <div className="flex gap-3">
            <div className="flex-1 space-y-2">
              <label className="text-xs font-medium text-text-secondary ml-1">Asset</label>
              <div className="relative">
                <select 
                  className="w-full h-12 bg-background-dark/50 border border-white/10 rounded-lg text-sm px-3 appearance-none focus:ring-1 focus:ring-primary outline-none"
                  onChange={(e) => setSelectedAsset(MOCK_RATES.find(r => r.asset === e.target.value) || MOCK_RATES[0])}
                >
                  {MOCK_RATES.map(r => <option key={r.asset} value={r.asset}>{r.asset}</option>)}
                </select>
                <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-text-secondary pointer-events-none">expand_more</span>
              </div>
            </div>
            <div className="flex-[1.2] space-y-2">
              <label className="text-xs font-medium text-text-secondary ml-1">Amount ($)</label>
              <input 
                type="number" 
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full h-12 bg-background-dark/50 border border-white/10 rounded-lg px-4 text-white font-mono font-bold focus:ring-1 focus:ring-primary outline-none"
              />
            </div>
          </div>
          <div className="pt-4 border-t border-white/5 flex items-center justify-between">
            <span className="text-text-secondary text-sm font-medium">You Receive</span>
            <span className="text-success text-2xl font-bold font-mono tracking-tight">₦{receiveAmount}</span>
          </div>
        </div>
      </section>

      {/* Recent Activity Skeletons */}
      <section className="px-5 mb-8">
        <div className="flex items-center justify-between mb-4 px-1">
          <h3 className="text-lg font-bold">Recent Activity</h3>
          <button onClick={() => onAction(Screen.History)} className="text-primary text-sm font-semibold">View All</button>
        </div>
        <div className="space-y-3">
          {[1, 2, 3].map(i => (
            <div key={i} className="w-full h-18 rounded-xl bg-surface-dark border border-white/5 p-3 flex items-center gap-4 animate-pulse">
              <div className="w-12 h-12 rounded-full bg-white/5" />
              <div className="flex-1 space-y-2">
                <div className="h-4 w-32 bg-white/5 rounded" />
                <div className="h-3 w-20 bg-white/5 rounded" />
              </div>
              <div className="h-5 w-16 bg-white/5 rounded" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const QuickActionButton: React.FC<{ icon: string; label: string; onClick: () => void }> = ({ icon, label, onClick }) => (
  <button onClick={onClick} className="flex flex-col items-center gap-2 min-w-[72px] group">
    <div className="w-14 h-14 rounded-full bg-surface-dark border border-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-lg">
      <span className="material-symbols-outlined">{icon}</span>
    </div>
    <span className="text-text-secondary text-xs font-medium whitespace-nowrap group-hover:text-white transition-colors">{label}</span>
  </button>
);

export default Dashboard;
