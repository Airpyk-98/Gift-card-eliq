
import React, { useState } from 'react';
import { MOCK_RATES } from '../constants';

interface SellCardProps {
  onBack: () => void;
  onTrade: () => void;
}

const SellCard: React.FC<SellCardProps> = ({ onBack, onTrade }) => {
  const [selectedAsset, setSelectedAsset] = useState(MOCK_RATES[1]);
  const [amount, setAmount] = useState('100');

  const receiveAmount = (Number(amount) * selectedAsset.rate).toLocaleString();

  return (
    <div className="min-h-screen flex flex-col pt-16">
      <header className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-md p-4 bg-background-dark/80 backdrop-blur-md z-50 flex items-center justify-between">
        <button onClick={onBack} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 className="text-lg font-bold">Sell Gift Card</h1>
        <div className="w-10" />
      </header>

      <main className="p-4 space-y-6">
        <section className="space-y-2">
          <label className="text-sm font-medium text-text-secondary">Category</label>
          <button className="w-full flex items-center justify-between bg-surface-dark border border-white/10 rounded-xl p-4 hover:border-primary transition-all">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">{selectedAsset.icon}</span>
              </div>
              <div className="text-left">
                <p className="font-bold">{selectedAsset.asset} Wallet</p>
                <p className="text-xs text-text-secondary">Global • E-code</p>
              </div>
            </div>
            <span className="material-symbols-outlined text-text-secondary">expand_more</span>
          </button>
        </section>

        <section className="glass-panel rounded-xl p-5 space-y-5">
          <div className="flex justify-between items-center">
            <h3 className="font-bold">Details</h3>
            <span className="bg-success/10 border border-success/20 text-success text-[10px] font-bold px-2 py-1 rounded">RATE: ₦{selectedAsset.rate}/$</span>
          </div>

          <div className="grid grid-cols-12 gap-3">
            <div className="col-span-4 space-y-1">
              <label className="text-xs font-medium text-text-secondary ml-1">Currency</label>
              <div className="relative">
                <select className="w-full h-12 bg-background-dark border border-white/10 rounded-lg text-sm px-3 appearance-none outline-none">
                  <option>USD</option>
                  <option>GBP</option>
                  <option>EUR</option>
                </select>
                <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-text-secondary pointer-events-none">arrow_drop_down</span>
              </div>
            </div>
            <div className="col-span-8 space-y-1">
              <label className="text-xs font-medium text-text-secondary ml-1">Card Amount</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary font-mono">$</span>
                <input 
                  type="number" 
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full h-12 bg-background-dark border border-white/10 rounded-lg pl-7 pr-3 font-mono font-bold outline-none focus:border-primary"
                />
              </div>
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-medium text-text-secondary ml-1">E-code (Optional)</label>
            <input 
              type="text" 
              placeholder="Paste code here"
              className="w-full h-12 bg-background-dark border border-white/10 rounded-lg px-4 text-sm font-mono outline-none focus:border-primary"
            />
          </div>
        </section>

        <section className="space-y-2">
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium text-text-secondary">Card Image</label>
            <span className="text-[10px] bg-primary/10 border border-primary/20 text-primary px-2 py-0.5 rounded">Front</span>
          </div>
          <div className="relative w-full h-40 rounded-xl overflow-hidden border border-white/10 group cursor-pointer">
            <img src="https://picsum.photos/400/200?grayscale" alt="upload preview" className="w-full h-full object-cover opacity-60" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
               <span className="material-symbols-outlined text-4xl text-white/50">add_a_photo</span>
               <p className="text-xs text-text-secondary">Tap to replace</p>
            </div>
            <button className="absolute top-2 right-2 w-8 h-8 rounded-full bg-black/50 flex items-center justify-center">
              <span className="material-symbols-outlined text-[16px]">delete</span>
            </button>
          </div>
        </section>

        <div className="p-3 bg-warning/5 border border-warning/10 rounded-xl flex gap-3">
          <span className="material-symbols-outlined text-warning text-[20px]">info</span>
          <p className="text-xs text-text-secondary leading-relaxed">Make sure the card code is clearly visible. Blurry images may delay your transaction.</p>
        </div>
      </main>

      <footer className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md p-4 bg-background-dark/90 backdrop-blur-xl border-t border-white/5 space-y-4 z-50">
        <div className="flex justify-between items-center px-1">
          <span className="text-sm text-text-secondary">You receive</span>
          <span className="text-lg font-mono font-bold">₦ {receiveAmount}.00</span>
        </div>
        <button 
          onClick={onTrade}
          className="w-full h-14 bg-primary rounded-xl font-bold text-lg shadow-lg shadow-primary/30 flex items-center justify-center gap-2 active:scale-95 transition-all"
        >
          Trade for ₦{receiveAmount}
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </footer>
    </div>
  );
};

export default SellCard;
