
import React from 'react';

interface LoginProps {
  onLogin: () => void;
  onSignUp: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin, onSignUp }) => {
  return (
    <div className="min-h-screen flex flex-col px-6 pt-20">
      <div className="flex flex-col items-center mb-12">
        <div className="w-16 h-16 bg-liquid-gradient rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20 mb-6">
          <span className="material-symbols-outlined text-4xl text-white">water_drop</span>
        </div>
        <h2 className="text-3xl font-bold mb-2">Welcome Back</h2>
        <p className="text-text-secondary">Access your liquid assets and trade instantly.</p>
      </div>

      <div className="glass-panel rounded-2xl p-6 space-y-5">
        <div className="space-y-2">
          <label className="text-sm font-medium text-text-secondary ml-1">Email</label>
          <div className="relative">
            <input 
              type="email" 
              placeholder="name@example.com"
              className="w-full bg-background-dark border border-white/10 rounded-xl px-4 py-3 pl-11 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
            />
            <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-text-secondary">mail</span>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-text-secondary ml-1">Password</label>
          <div className="relative">
            <input 
              type="password" 
              placeholder="Enter your password"
              className="w-full bg-background-dark border border-white/10 rounded-xl px-4 py-3 pl-11 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
            />
            <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-text-secondary">lock</span>
            <span className="material-symbols-outlined absolute right-3.5 top-1/2 -translate-y-1/2 text-text-secondary cursor-pointer">visibility</span>
          </div>
        </div>

        <div className="flex justify-end">
          <button className="text-sm text-primary font-medium">Forgot Password?</button>
        </div>

        <button 
          onClick={onLogin}
          className="w-full bg-primary h-14 rounded-xl font-bold shadow-lg shadow-primary/25 active:scale-95 transition-all"
        >
          Log In
        </button>
      </div>

      <div className="mt-auto pb-10 flex flex-col items-center gap-6">
        <div className="flex items-center gap-3 w-full">
          <div className="h-px bg-white/5 flex-1" />
          <span className="text-xs text-text-secondary font-medium uppercase tracking-widest">Or continue with</span>
          <div className="h-px bg-white/5 flex-1" />
        </div>

        <div className="grid grid-cols-2 gap-4 w-full">
          <button className="flex items-center justify-center gap-2 bg-surface-dark border border-white/5 rounded-xl py-3 hover:bg-white/5 transition-colors">
            <span className="material-symbols-outlined">brand_awareness</span>
            <span className="text-sm font-medium">Google</span>
          </button>
          <button className="flex items-center justify-center gap-2 bg-surface-dark border border-white/5 rounded-xl py-3 hover:bg-white/5 transition-colors">
            <span className="material-symbols-outlined">apple</span>
            <span className="text-sm font-medium">Apple</span>
          </button>
        </div>

        <p className="text-text-secondary">
          Don't have an account? <span onClick={onSignUp} className="text-white font-bold cursor-pointer">Sign Up</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
