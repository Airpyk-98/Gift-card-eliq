
import React, { useEffect, useState } from 'react';

interface TradeProgressProps {
  onFinish: () => void;
}

const TradeProgress: React.FC<TradeProgressProps> = ({ onFinish }) => {
  const [step, setStep] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep(s => (s < 3 ? s + 1 : s));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col p-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/5 blur-[100px] pointer-events-none" />
      
      <header className="flex items-center justify-between mb-12">
        <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
          <span className="material-symbols-outlined">expand_more</span>
        </button>
        <h1 className="font-bold">Trade in Progress</h1>
        <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
          <span className="material-symbols-outlined">help</span>
        </button>
      </header>

      <div className="flex flex-col items-center justify-center py-10">
        <div className="relative flex items-center justify-center w-48 h-48 mb-8">
          <div className="absolute inset-0 rounded-full border border-primary/20 animate-ping" />
          <div className="relative z-10 w-32 h-32 rounded-full bg-surface-dark border border-white/10 flex items-center justify-center shadow-[0_0_40px_rgba(79,70,229,0.3)]">
             <span className="material-symbols-outlined text-primary text-[64px] animate-pulse">verified_user</span>
          </div>
        </div>
        
        <h2 className="text-2xl font-bold mb-2">Verifying your card...</h2>
        <p className="text-text-secondary text-center max-w-[280px]">Hold tight. Our admins are checking the details.</p>
        
        <div className="mt-6 inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-full">
           <span className="material-symbols-outlined text-primary text-sm animate-spin">sync</span>
           <span className="text-xs font-mono font-bold text-primary">AVG TIME: 5 MINS</span>
        </div>
      </div>

      <div className="mt-auto glass-panel rounded-xl p-6 space-y-8">
        <TimelineStep 
          status="completed" 
          title="Request Submitted" 
          desc="Details securely received" 
          time="10:42 AM" 
          active={step >= 1}
        />
        <TimelineStep 
          status={step === 2 ? 'active' : step > 2 ? 'completed' : 'pending'} 
          title="Verifying Card..." 
          desc="Checking validity & balance" 
          active={step >= 2}
        />
        <TimelineStep 
          status={step === 3 ? 'active' : 'pending'} 
          title="Wallet Credited" 
          desc="Funds added to your account" 
          time="~10:47 AM"
          active={step >= 3}
          isLast
        />
      </div>

      {step === 3 && (
        <button 
          onClick={onFinish}
          className="mt-6 w-full h-14 bg-primary rounded-xl font-bold animate-bounce"
        >
          View Dashboard
        </button>
      )}

      <div className="mt-6 text-center">
        <button className="text-sm text-text-secondary">Having trouble? <span className="text-primary font-bold">Chat with support</span></button>
      </div>
    </div>
  );
};

const TimelineStep: React.FC<{ 
  status: 'completed' | 'active' | 'pending'; 
  title: string; 
  desc: string; 
  time?: string; 
  isLast?: boolean;
  active?: boolean;
}> = ({ status, title, desc, time, isLast, active }) => {
  const icon = status === 'completed' ? 'check' : status === 'active' ? 'sync' : 'account_balance_wallet';
  const colorClass = status === 'completed' ? 'bg-success' : status === 'active' ? 'bg-warning animate-pulse' : 'bg-white/10';
  
  return (
    <div className={`relative flex gap-4 ${isLast ? '' : 'pb-8'} ${!active ? 'opacity-40' : ''}`}>
      {!isLast && <div className={`absolute left-4 top-8 bottom-0 w-[2px] ${status === 'completed' ? 'bg-success/30' : 'bg-white/10 border-dashed border-l'}`} />}
      <div className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center ${colorClass} text-black`}>
        <span className={`material-symbols-outlined text-[18px] ${status === 'active' ? 'animate-spin' : ''}`}>{icon}</span>
      </div>
      <div className="flex-1 flex flex-col">
        <div className="flex justify-between items-center">
          <h3 className={`font-bold ${status === 'active' ? 'text-warning' : 'text-white'}`}>{title}</h3>
          {time && <span className="text-[10px] font-mono text-text-secondary">{time}</span>}
        </div>
        <p className="text-xs text-text-secondary">{desc}</p>
      </div>
    </div>
  );
};

export default TradeProgress;
