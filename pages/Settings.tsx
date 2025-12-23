
import React from 'react';

interface SettingsProps {
  onLogout: () => void;
}

const Settings: React.FC<SettingsProps> = ({ onLogout }) => {
  return (
    <div className="flex flex-col pt-12 pb-10">
      <h1 className="text-3xl font-bold px-6 mb-8">Settings</h1>

      <main className="px-4 space-y-8">
        <section className="relative glass-panel rounded-2xl p-4 overflow-hidden">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 blur-3xl rounded-full" />
          <div className="flex items-center gap-4 relative z-10">
            <div className="relative">
              <img 
                src="https://picsum.photos/100/100" 
                className="w-16 h-16 rounded-full border-2 border-white/10" 
                alt="profile"
              />
              <div className="absolute bottom-0 right-0 w-4 h-4 bg-success rounded-full border-2 border-surface-dark" />
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-bold">John Doe</h2>
              <p className="text-primary text-sm font-bold">Gold Member</p>
            </div>
            <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center"><span className="material-symbols-outlined text-[20px]">edit</span></button>
          </div>
        </section>

        <SettingsGroup title="ACCOUNT">
          <SettingsItem icon="person" label="Personal Information" color="bg-primary/20 text-primary" />
          <SettingsItem icon="credit_card" label="Payment Methods" color="bg-primary/20 text-primary" />
        </SettingsGroup>

        <SettingsGroup title="SECURITY">
          <SettingsItem icon="lock" label="Change Password" color="bg-success/20 text-success" />
          <SettingsItem icon="shield" label="2-Step Verification" subLabel="Enabled" color="bg-success/20 text-success" />
          <SettingsItem icon="fingerprint" label="FaceID Login" hasSwitch color="bg-success/20 text-success" />
        </SettingsGroup>

        <SettingsGroup title="PREFERENCES">
          <SettingsItem icon="notifications" label="Push Notifications" hasSwitch checked color="bg-warning/20 text-warning" />
          <SettingsItem icon="currency_exchange" label="Display Currency" subLabel="USD" color="bg-warning/20 text-warning" />
        </SettingsGroup>

        <section className="pt-4 space-y-4">
          <button 
            onClick={onLogout}
            className="w-full h-14 rounded-xl bg-white/5 border border-red-500/20 text-red-500 font-bold hover:bg-red-500/10 transition-all"
          >
            Log Out
          </button>
          <p className="text-center text-xs text-text-secondary opacity-50">Version 2.4.0 (Build 309)</p>
        </section>
      </main>
    </div>
  );
};

const SettingsGroup: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="space-y-3">
    <h3 className="text-[10px] font-bold text-text-secondary tracking-widest px-2 uppercase">{title}</h3>
    <div className="glass-panel rounded-2xl overflow-hidden divide-y divide-white/5">
      {children}
    </div>
  </div>
);

const SettingsItem: React.FC<{ 
  icon: string; 
  label: string; 
  subLabel?: string; 
  hasSwitch?: boolean; 
  checked?: boolean;
  color: string;
}> = ({ icon, label, subLabel, hasSwitch, checked, color }) => (
  <button className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-all text-left group">
    <div className="flex items-center gap-4">
      <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${color}`}>
        <span className="material-symbols-outlined text-[20px]">{icon}</span>
      </div>
      <div>
        <p className="font-bold text-sm">{label}</p>
        {subLabel && <p className="text-[10px] text-text-secondary font-medium">{subLabel}</p>}
      </div>
    </div>
    {hasSwitch ? (
      <div className={`w-10 h-6 rounded-full relative transition-colors ${checked ? 'bg-primary' : 'bg-white/10'}`}>
        <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${checked ? 'right-1' : 'left-1'}`} />
      </div>
    ) : (
      <span className="material-symbols-outlined text-text-secondary text-[20px] group-hover:translate-x-1 transition-transform">chevron_right</span>
    )}
  </button>
);

export default Settings;
