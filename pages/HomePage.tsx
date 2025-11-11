
import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { Page } from '../types';
import { HammerIcon, WrenchIcon } from '../components/common/Icons';

const HomePage: React.FC = () => {
  const { setPage, setLocation: setGlobalLocation } = useAppContext();
  const [localLocation, setLocalLocation] = useState('');

  const handleConfirmLocation = () => {
    setGlobalLocation(localLocation);
    setPage(Page.PROFESSIONALS);
  };

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="relative pt-24 pb-32 flex content-center items-center justify-center min-h-[75vh]">
        <div 
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{ backgroundImage: "url('https://picsum.photos/seed/construcao/1920/1080')" }}
        >
          <span className="w-full h-full absolute opacity-70 bg-slate-900"></span>
        </div>
        <div className="container relative mx-auto text-center">
          <h1 className="text-white font-extrabold text-4xl md:text-6xl tracking-tight mb-4">
            Constrói<span className="text-amber-400">Aí</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8">Conectando sua obra.</p>
          <div className="w-full max-w-2xl mx-auto flex flex-col sm:flex-row gap-4 px-4">
            <input
              type="text"
              value={localLocation}
              onChange={(e) => setLocalLocation(e.target.value)}
              placeholder="Digite sua cidade e estado"
              className="flex-grow p-4 rounded-md bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all"
            />
            <button
              onClick={handleConfirmLocation}
              className="bg-amber-500 text-slate-900 font-bold py-4 px-8 rounded-md hover:bg-amber-400 transition-colors duration-300 shadow-lg hover:shadow-amber-500/30"
            >
              Confirmar Localização
            </button>
          </div>
        </div>
      </div>

      {/* Feature Sections */}
      <section className="bg-slate-800 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center">
            <div className="p-8 bg-slate-900 rounded-lg shadow-xl hover:scale-105 transform transition-transform duration-300">
              <div className="inline-block p-4 bg-amber-500 rounded-full mb-4">
                <HammerIcon className="h-10 w-10 text-slate-900" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Contrate profissionais em sua região.</h3>
              <p className="text-slate-400">
                Encontre pedreiros, eletricistas, encanadores e mais. Veja avaliações e perfis completos para fazer a escolha certa para sua obra ou reforma.
              </p>
            </div>
            <div className="p-8 bg-slate-900 rounded-lg shadow-xl hover:scale-105 transform transition-transform duration-300">
              <div className="inline-block p-4 bg-amber-500 rounded-full mb-4">
                <WrenchIcon className="h-10 w-10 text-slate-900" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Alugue a ferramenta que precisa.</h3>
              <p className="text-slate-400">
                Precisa de uma ferramenta específica por um curto período? Encontre usuários alugando o que você precisa por um preço justo.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
