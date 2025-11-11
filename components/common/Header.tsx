
import React from 'react';
import { useAppContext } from '../../context/AppContext';
import { Page } from '../../types';
import { HammerIcon, BellIcon } from './Icons';

const Header: React.FC = () => {
  const { setPage } = useAppContext();

  const NavLink: React.FC<{ children: React.ReactNode; page: Page }> = ({ children, page }) => (
    <button
      onClick={() => setPage(page)}
      className="text-slate-300 hover:text-amber-400 transition-colors duration-300"
    >
      {children}
    </button>
  );

  return (
    <header className="bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50 shadow-lg shadow-slate-950/20">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setPage(Page.HOME)}>
          <HammerIcon className="w-8 h-8 text-amber-400" />
          <h1 className="text-2xl font-bold text-white tracking-tight">
            Constrói<span className="text-amber-400">Aí</span>
          </h1>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <NavLink page={Page.HOME}>Início</NavLink>
          <NavLink page={Page.PROFESSIONALS}>Profissionais</NavLink>
          <NavLink page={Page.TOOLS}>Alugar Ferramentas</NavLink>
        </div>
        <div className="flex items-center space-x-4">
            <button className="relative text-slate-300 hover:text-white transition-colors">
                <BellIcon className="w-6 h-6"/>
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
                </span>
            </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
