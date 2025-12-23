
import React, { useState } from 'react';

const Wallet: React.FC = () => {
  const [showPin, setShowPin] = useState(false);
  const [pin, setPin] = useState<string>('');

  const handlePin = (digit: string) => {
    if (pin.length < 4) setPin(p => p + digit);
  };

  const clearPin = () => setPin(p => p.slice(0, -1));

  return (
    <div className="flex flex-col pt-8">
      <nav className="flex items-center justify-between px-6 pb-6">
        <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center"><span className="material-symbols-outlined">arrow_back</span></button>
        <h2 className="text-lg font-bold">Wallet</h2>
        <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center"><span className="material-symbols-outlined">more_horiz</span></button>
      </nav>

      <div className="px-5 space-y-8">
        <div className="glass-panel rounded-2xl p-6 text-center space-y-6">
          <div className="space-y-1">
            <span className="text-text-secondary text-sm font-medium">TOTAL BALANCE</span>
            <h1 className="text-4xl font-mono font-bold">$12,450.00</h1>
          </div>
          <div className="flex gap-4">
            <button className="flex-1 h-12 rounded-xl bg-white/5 border border-white/10 font-bold flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-primary">arrow_downward</span> Deposit
            </button>
            <button className="flex-1 h-12 rounded-xl bg-primary shadow-lg shadow-primary/30 font-bold flex items-center justify-center gap-2">
              <span className="material-symbols-outlined">arrow_upward</span> Withdraw
            </button>
          </div>
        </div>

        <section className="space-y-4">
          <h3 className="text-lg font-bold flex items-center gap-2">Withdrawal <span className="w-1.5 h-1.5 rounded-full bg-primary" /></h3>
          <div className="glass-panel rounded-2xl p-5 space-y-6">
            <div className="flex p-1 bg-black/20 rounded-xl">
              <button className="flex-1 py-2.5 rounded-lg text-sm font-medium text-text-secondary">Saved</button>
              <button className="flex-1 py-2.5 rounded-lg bg-surface-dark border border-white/5 text-sm font-bold shadow-sm">New Account</button>
            </div>

            <div className="space-y-5">
              <InputField label="ACCOUNT NUMBER" value="8293 1029 4822" verified />
              <InputField label="BANK NAME" value="Chase Bank" hasDropdown />
              <InputField label="AMOUNT" value="2,500.00" prefix="$" />
              
              <button 
                onClick={() => setShowPin(true)}
                className="w-full h-14 bg-primary/10 border border-primary/20 text-primary font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-all"
              >
                Proceed Securely <span className="material-symbols-outlined text-[18px]">lock</span>
              </button>
            </div>
          </div>
        </section>

        <section className="space-y-4 pb-10">
          <h3 className="text-lg font-bold">Recent Activity</h3>
          <div className="glass-panel rounded-2xl p-8 flex flex-col items-center justify-center text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center">
              <span className="material-symbols-outlined text-3xl text-text-secondary">receipt_long</span>
            </div>
            <p className="text-text-secondary text-sm">No transactions yet. Your recent trades and withdrawals will appear here.</p>
          </div>
        </section>
      </div>

      {showPin && (
        <div className="fixed inset-0 z-[100] flex flex-col justify-end bg-background-dark/60 backdrop-blur-sm">
          <div className="absolute inset-0" onClick={() => setShowPin(false)} />
          <div className="relative glass-panel rounded-t-3xl p-6 pb-12 animate-in slide-in-from-bottom duration-300">
            <div className="w-12 h-1.5 bg-white/20 rounded-full mx-auto mb-8" />
            <div className="text-center mb-10">
              <h3 className="text-xl font-bold mb-2">Enter PIN</h3>
              <p className="text-text-secondary text-sm">Please enter your 4-digit security PIN</p>
            </div>

            <div className="flex justify-center gap-6 mb-12">
              {[0, 1, 2, 3].map(i => (
                <div key={i} className={`w-4 h-4 rounded-full border border-white/20 ${pin.length > i ? 'bg-primary border-primary shadow-[0_0_10px_rgba(79,70,229,0.5)] scale-125' : 'bg-white/5'}`} />
              ))}
            </div>

            <div className="grid grid-cols-3 gap-6 max-w-xs mx-auto">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, '', 0, 'del'].map((key, i) => (
                <button 
                  key={i} 
                  disabled={key === ''}
                  onClick={() => key === 'del' ? clearPin() : handlePin(key.toString())}
                  className={`h-16 w-16 rounded-full flex items-center justify-center text-2xl font-mono font-medium active:bg-white/10 transition-colors ${key === '' ? 'pointer-events-none' : ''}`}
                >
                  {key === 'del' ? <span className="material-symbols-outlined">backspace</span> : key}
                </button>
              ))}
            </div>
            <button className="w-full text-center mt-10 text-primary font-bold">Forgot PIN?</button>
          </div>
        </div>
      )}
    </div>
  );
};

const InputField: React.FC<{ label: string; value: string; verified?: boolean; hasDropdown?: boolean; prefix?: string }> = ({ label, value, verified, hasDropdown, prefix }) => (
  <div className="space-y-2">
    <label className="text-[10px] font-bold text-text-secondary tracking-widest">{label}</label>
    <div className="relative">
      {prefix && <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary font-mono">{prefix}</span>}
      <input 
        readOnly 
        value={value}
        className={`w-full h-14 bg-white/5 border border-white/10 rounded-lg px-4 text-white font-mono ${prefix ? 'pl-8' : ''} ${hasDropdown ? 'pr-10' : ''} focus:outline-none`}
      />
      {verified && <span className="absolute right-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-success">check_circle</span>}
      {hasDropdown && <span className="absolute right-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-text-secondary">expand_more</span>}
    </div>
    {verified && <p className="text-[10px] text-success font-bold font-mono px-1">Verified: Johnathan Doe</p>}
  </div>
);

export default Wallet;
