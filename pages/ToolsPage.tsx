
import React from 'react';
import { useAppContext } from '../context/AppContext';
import ToolCard from '../components/tools/ToolCard';

const ToolsPage: React.FC = () => {
  const { tools } = useAppContext();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-white tracking-tight">Aluguel de Ferramentas</h2>
        <p className="mt-4 text-lg text-slate-300">Encontre a ferramenta certa para o seu trabalho.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {tools.map(tool => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </div>
  );
};

export default ToolsPage;
