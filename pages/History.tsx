
import React, { useState } from 'react';
import { MOCK_TRANSACTIONS } from '../constants';

const History: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const filtered = MOCK_TRANSACTIONS.filter(t => filter === 'All' || t.status === filter.toUpperCase());

  return (
    <div className="flex flex-col">
      <header className="sticky top-0 z-50 glass-panel border-b-0">
        <div className="flex items-center p-4 justify-between">
          <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center"><span className="material-symbols-outlined">arrow_back</span></button>
          <h2 className="text-lg font-bold">History</h2>
          <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center"><span className="material-symbols-outlined">tune</span></button>
        </div>
        <div className="flex gap-3 px-4 pb-4 overflow-x-auto no-scrollbar">
          {['All', 'Completed', 'Pending', 'Failed'].map(f => (
            <button 
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${filter === f ? 'bg-primary text-white' : 'bg-white/5 text-text-secondary'}`}
            >
              {f}
            </button>
          ))}
        </div>
      </header>

      <main className="p-4 space-y-6">
        <section className="space-y-4">
          <p className="text-[10px] font-bold text-text-secondary uppercase tracking-widest ml-1">Today</p>
          <div className="space-y-3">
            {filtered.slice(0, 2).map(tx => <TransactionItem key={tx.id} {...tx} />)}
          </div>
        </section>

        <section className="space-y-4">
          <p className="text-[10px] font-bold text-text-secondary uppercase tracking-widest ml-1">Yesterday</p>
          <div className="space-y-3">
            {filtered.slice(2).map(tx => <TransactionItem key={tx.id} {...tx} />)}
          </div>
        </section>

        <div className="py-10 flex flex-col items-center justify-center text-center glass-panel rounded-3xl border-dashed border-2 border-white/5 p-8 bg-transparent">
          <div className="relative mb-6">
            <div className="absolute -inset-4 bg-primary/20 rounded-full blur-2xl opacity-50" />
            <div className="relative w-24 h-24 rounded-3xl bg-liquid-gradient flex items-center justify-center shadow-2xl">
              <span className="material-symbols-outlined text-5xl">account_balance_wallet</span>
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-surface-dark border border-white/10 flex items-center justify-center text-success">
              <span className="material-symbols-outlined text-[14px]">add</span>
            </div>
          </div>
          <h3 className="text-xl font-bold mb-2">Start your journey</h3>
          <p className="text-text-secondary text-sm mb-8 max-w-[260px]">Your wealth journey begins with a single trade. Start building your portfolio today.</p>
          <button className="bg-primary px-8 py-3 rounded-xl font-bold text-sm shadow-lg shadow-primary/20">Start your first trade</button>
        </div>
      </main>
    </div>
  );
};

const TransactionItem: React.FC<any> = ({ asset, amount, status, time, icon }) => {
  const statusColors = {
    COMPLETED: 'bg-success/10 text-success border-success/20',
    PENDING: 'bg-warning/10 text-warning border-warning/20',
    FAILED: 'bg-red-500/10 text-red-500 border-red-500/20'
  };

  return (
    <div className="glass-panel rounded-2xl p-4 flex items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
          <span className="material-symbols-outlined text-primary">{icon}</span>
        </div>
        <div>
          <p className="font-bold">{asset}</p>
          <div className="flex items-center gap-2 mt-1">
            <span className={`text-[8px] font-bold uppercase px-1 py-0.5 rounded border ${statusColors[status as keyof typeof statusColors]}`}>{status}</span>
            <span className="text-[10px] text-text-secondary">{time}</span>
          </div>
        </div>
      </div>
      <div className="text-right">
        <p className={`font-mono font-bold ${amount > 0 ? 'text-success' : 'text-white'}`}>{amount > 0 ? '+' : ''}${Math.abs(amount).toFixed(2)}</p>
        <p className="text-[10px] text-text-secondary font-medium uppercase">USD</p>
      </div>
    </div>
  );
};

export default History;
