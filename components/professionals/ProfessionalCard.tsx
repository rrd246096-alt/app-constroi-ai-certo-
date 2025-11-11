
import React from 'react';
import { Professional } from '../../types';
import StarRating from '../common/StarRating';
import { HeartIcon } from '../common/Icons';

interface ProfessionalCardProps {
  professional: Professional;
  onViewProfile: (id: number) => void;
  onToggleFavorite: (id: number) => void;
}

const ProfessionalCard: React.FC<ProfessionalCardProps> = ({ professional, onViewProfile, onToggleFavorite }) => {
  return (
    <div className="bg-slate-800 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
      <div className="relative">
        <img className="w-full h-48 object-cover" src={professional.imageUrl} alt={professional.name} />
        <button
          onClick={() => onToggleFavorite(professional.id)}
          className="absolute top-3 right-3 p-2 rounded-full bg-slate-900/50 hover:bg-slate-900/80 transition-colors"
        >
          <HeartIcon
            className={`w-6 h-6 ${
              professional.isFavorite ? 'text-red-500' : 'text-slate-300'
            }`}
          />
        </button>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-white mb-1">{professional.name}</h3>
        <p className="text-amber-400 font-semibold mb-3">{professional.specialty}</p>
        <div className="flex items-center mb-4">
          <StarRating rating={professional.rating} />
          <span className="ml-2 text-slate-400 text-sm">({professional.rating.toFixed(1)})</span>
        </div>
        <p className="text-slate-400 text-sm mb-4">{professional.location}</p>
        <div className="mt-auto">
            <button
            onClick={() => onViewProfile(professional.id)}
            className="w-full bg-amber-500 text-slate-900 font-bold py-2 px-4 rounded-md hover:bg-amber-400 transition-colors duration-300"
            >
            Ver Perfil
            </button>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalCard;
