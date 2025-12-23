
import React from 'react';
import { Screen } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
  showNav?: boolean;
}

export const Layout: React.FC<LayoutProps> = ({ children, currentScreen, onNavigate, showNav = true }) => {
  return (
    <div className="relative min-h-screen max-w-md mx-auto bg-background-dark overflow-x-hidden flex flex-col border-x border-white/5 shadow-2xl">
      <main className="flex-1 pb-24">
        {children}
      </main>

      {showNav && (
        <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-surface-dark/80 backdrop-blur-lg border-t border-white/5 px-8 py-4 flex justify-between items-center z-50">
          <NavButton 
            active={currentScreen === Screen.Dashboard} 
            icon="home" 
            onClick={() => onNavigate(Screen.Dashboard)} 
          />
          <NavButton 
            active={currentScreen === Screen.SellCard} 
            icon="add_circle" 
            onClick={() => onNavigate(Screen.SellCard)} 
            large
          />
          <NavButton 
            active={currentScreen === Screen.History} 
            icon="history" 
            onClick={() => onNavigate(Screen.History)} 
          />
          <NavButton 
            active={currentScreen === Screen.Wallet} 
            icon="account_balance_wallet" 
            onClick={() => onNavigate(Screen.Wallet)} 
          />
          <NavButton 
            active={currentScreen === Screen.Settings} 
            icon="settings" 
            onClick={() => onNavigate(Screen.Settings)} 
          />
        </nav>
      )}
    </div>
  );
};

const NavButton: React.FC<{ 
  active: boolean; 
  icon: string; 
  onClick: () => void;
  large?: boolean;
}> = ({ active, icon, onClick, large }) => (
  <button 
    onClick={onClick}
    className={`flex items-center justify-center transition-all ${
      large ? 'w-14 h-14 -mt-10 rounded-full bg-primary text-white shadow-lg shadow-primary/30' : 
      'w-10 h-10 rounded-full text-text-secondary hover:text-white'
    } ${active && !large ? 'text-primary' : ''}`}
  >
    <span className="material-symbols-outlined" style={{ fontSize: large ? '32px' : '24px' }}>
      {icon}
    </span>
  </button>
);
