
import React, { useState, useCallback } from 'react';
import { Screen } from './types';
import { Layout } from './components/Layout';
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import SellCard from './pages/SellCard';
import History from './pages/History';
import Wallet from './pages/Wallet';
import Settings from './pages/Settings';
import TradeProgress from './pages/TradeProgress';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.Welcome);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useCallback((screen: Screen) => {
    setCurrentScreen(screen);
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate(Screen.Dashboard);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case Screen.Welcome:
        return <Welcome onNext={() => navigate(Screen.Login)} />;
      case Screen.Login:
        return <Login onLogin={handleLogin} onSignUp={() => navigate(Screen.SignUp)} />;
      case Screen.SignUp:
        return <SignUp onSignUp={handleLogin} onLogin={() => navigate(Screen.Login)} />;
      case Screen.Dashboard:
        return <Dashboard onAction={(screen) => navigate(screen)} />;
      case Screen.SellCard:
        return <SellCard onBack={() => navigate(Screen.Dashboard)} onTrade={() => navigate(Screen.TradeProgress)} />;
      case Screen.TradeProgress:
        return <TradeProgress onFinish={() => navigate(Screen.Dashboard)} />;
      case Screen.History:
        return <History />;
      case Screen.Wallet:
        return <Wallet />;
      case Screen.Settings:
        return <Settings onLogout={() => { setIsLoggedIn(false); navigate(Screen.Welcome); }} />;
      default:
        return <Dashboard onAction={(screen) => navigate(screen)} />;
    }
  };

  const showNav = [
    Screen.Dashboard, 
    Screen.History, 
    Screen.Wallet, 
    Screen.Settings,
    Screen.SellCard
  ].includes(currentScreen);

  return (
    <Layout currentScreen={currentScreen} onNavigate={navigate} showNav={showNav}>
      {renderScreen()}
    </Layout>
  );
};

export default App;
