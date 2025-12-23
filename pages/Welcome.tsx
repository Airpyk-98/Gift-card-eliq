
import React from 'react';

interface WelcomeProps {
  onNext: () => void;
}

const Welcome: React.FC<WelcomeProps> = ({ onNext }) => {
  return (
    <div className="relative h-screen flex flex-col px-6">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[50%] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="flex-1 flex flex-col items-center justify-center pt-10">
        <div className="relative w-64 h-40 glass-panel rounded-2xl transform rotate-3 floating mb-12 flex items-center justify-center">
          <div className="absolute top-6 left-6 w-10 h-8 rounded border border-white/20 bg-white/5" />
          <div className="absolute bottom-6 left-6 w-24 h-2 rounded-full bg-white/20" />
          <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/20 rounded-full blur-xl" />
          <span className="material-symbols-outlined text-primary text-5xl">water_drop</span>
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight text-center mb-4 font-display">
          Your Gift Cards, <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">Liquidated.</span>
        </h1>
        <p className="text-text-secondary text-lg text-center max-w-xs">
          The fastest way to trade unwanted gift cards for instant cash. Secure, simple, and sleek.
        </p>
      </div>

      <div className="pb-12 space-y-6">
        <button 
          onClick={onNext}
          className="w-full h-14 bg-primary rounded-xl flex items-center justify-center gap-2 font-bold text-lg shadow-lg shadow-primary/30 transition-transform active:scale-95"
        >
          Get Started
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
        <p className="text-center text-text-secondary">
          Already have an account? <span className="text-white font-bold cursor-pointer underline decoration-white/20">Log in</span>
        </p>
      </div>
    </div>
  );
};

export default Welcome;
