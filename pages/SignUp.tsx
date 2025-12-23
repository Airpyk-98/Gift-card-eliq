
import React from 'react';

interface SignUpProps {
  onSignUp: () => void;
  onLogin: () => void;
}

const SignUp: React.FC<SignUpProps> = ({ onSignUp, onLogin }) => {
  return (
    <div className="min-h-screen flex flex-col px-6 pt-14">
      <div className="flex items-center justify-between mb-8">
        <button onClick={onLogin} className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/5 transition-colors">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <span className="text-lg font-bold">Liquid Wealth</span>
        <div className="w-10" />
      </div>

      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Create Account</h1>
        <p className="text-text-secondary">Unlock the liquidity of your assets.</p>
      </div>

      <div className="glass-panel rounded-2xl p-6 space-y-5">
        <div className="space-y-1">
          <label className="text-sm font-medium text-text-secondary ml-1">Email Address</label>
          <div className="relative">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="w-full h-14 bg-background-dark/60 border border-white/10 rounded-xl px-4 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium text-text-secondary ml-1">Password</label>
          <div className="relative">
            <input 
              type="password" 
              placeholder="Create password"
              className="w-full h-14 bg-background-dark/60 border border-white/10 rounded-xl px-4 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium text-text-secondary ml-1">Confirm Password</label>
          <div className="relative">
            <input 
              type="password" 
              placeholder="Confirm password"
              className="w-full h-14 bg-background-dark/60 border border-white/10 rounded-xl px-4 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all"
            />
          </div>
        </div>

        <button 
          onClick={onSignUp}
          className="w-full bg-primary h-14 rounded-xl font-bold shadow-lg shadow-primary/25 mt-4 active:scale-95 transition-all"
        >
          Sign Up
        </button>

        <div className="relative flex items-center py-4">
          <div className="flex-grow border-t border-white/5"></div>
          <span className="flex-shrink-0 mx-4 text-xs text-text-secondary uppercase tracking-widest">Or continue with</span>
          <div className="flex-grow border-t border-white/5"></div>
        </div>

        <div className="flex gap-4">
          <button className="flex-1 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
            <span className="material-symbols-outlined">brand_awareness</span>
          </button>
          <button className="flex-1 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
            <span className="material-symbols-outlined">apple</span>
          </button>
        </div>
      </div>

      <div className="mt-auto pb-8 text-center">
        <p className="text-text-secondary">
          Already have an account? <span onClick={onLogin} className="text-primary font-bold cursor-pointer">Log In</span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
