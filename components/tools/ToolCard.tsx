
import React from 'react';
import { Tool } from '../../types';

interface ToolCardProps {
  tool: Tool;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  return (
    <div className="bg-slate-800 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
      <img className="w-full h-48 object-cover" src={tool.imageUrl} alt={tool.name} />
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-white mb-2">{tool.name}</h3>
        <div className="flex justify-between items-center mb-4">
          <p className="text-lg font-bold text-amber-400">R$ {tool.pricePerDay.toFixed(2)}<span className="text-sm font-normal text-slate-400">/dia</span></p>
          <span className={`px-3 py-1 text-sm font-semibold rounded-full ${
              tool.available ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
            }`}
          >
            {tool.available ? 'Disponível' : 'Indisponível'}
          </span>
        </div>
        <div className="mt-auto">
            <button
                disabled={!tool.available}
                className={`w-full font-bold py-2 px-4 rounded-md transition-colors duration-300 ${
                tool.available 
                    ? 'bg-amber-500 text-slate-900 hover:bg-amber-400' 
                    : 'bg-slate-700 text-slate-500 cursor-not-allowed'
                }`}
            >
                {tool.available ? 'Alugar' : 'Indisponível'}
            </button>
        </div>
      </div>
    </div>
  );
};

export default ToolCard;
