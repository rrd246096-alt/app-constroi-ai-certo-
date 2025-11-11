
import React from 'react';
import { AppProvider, useAppContext } from './context/AppContext';
import { Page } from './types/index';

import Header from './components/common/Header';
import Footer from './components/common/Footer';
import HomePage from './pages/HomePage';
import ProfessionalsPage from './pages/ProfessionalsPage';
import ToolsPage from './pages/ToolsPage';
import ProfilePage from './pages/ProfilePage';

const CurrentPage = () => {
  const { page } = useAppContext();

  switch (page) {
    case Page.PROFESSIONALS:
      return <ProfessionalsPage />;
    case Page.TOOLS:
      return <ToolsPage />;
    case Page.PROFILE:
      return <ProfilePage />;
    case Page.HOME:
    default:
      return <HomePage />;
  }
};

const App: React.FC = () => {
  return (
    <AppProvider>
      <div className="flex flex-col min-h-screen bg-slate-900">
        <Header />
        <main className="flex-grow">
          <CurrentPage />
        </main>
        <Footer />
      </div>
    </AppProvider>
  );
};

export default App;
